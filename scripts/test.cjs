const hre = require("hardhat");
const { ethers } = require('hardhat');

async function main() {
  try {
    const [deployer] = await hre.ethers.getSigners();

    // Deploy the Timelock contract
    const Timelock = await hre.ethers.getContractFactory("AionicTimelock");
    const timelock = await Timelock.deploy(1, [deployer.address], [deployer.address], deployer.address);
    await timelock.waitForDeployment();
    console.log(`Timelock deployed to: ${await timelock.getAddress()}`);

    // Check the timelock delay
    const minDelay = await timelock.getMinDelay();
    console.log(`Timelock delay is set to: ${minDelay} seconds`);

    // Deploy the Token contract
    const Token = await hre.ethers.getContractFactory("Aion");
    const token = await Token.deploy();
    await token.waitForDeployment();
    console.log(`Token deployed to: ${await token.getAddress()}`);

    // Delegate votes to deployer
    const delegateTx = await token.connect(deployer).delegate(deployer.address);
    await delegateTx.wait();
    console.log(`Delegated votes to deployer.`);

    // Transfer tokens to the deployer to meet governance proposal requirements
    const proposerTokens = ethers.parseEther("100"); // Adjust according to your proposal threshold
    const transferTx = await token.transfer(deployer.address, proposerTokens);
    await transferTx.wait();
    console.log(`Transferred ${ethers.formatEther(proposerTokens)} Aion tokens to deployer (${deployer.address}).`);

    // Check the balance of the proposer to ensure sufficient tokens
    const proposerBalance = await token.balanceOf(deployer.address);
    console.log(`Proposer balance: ${ethers.formatEther(proposerBalance)} Aion tokens.`);

    // Deploy the Governor contract
    const Governor = await hre.ethers.getContractFactory("AionicDAO");
    const governor = await Governor.deploy(token.getAddress(), timelock.getAddress());
    await governor.waitForDeployment();
    console.log(`Governor deployed to: ${await governor.getAddress()}`);

    // Grant the Governor contract the Proposer role in the Timelock
    const proposerRole = await timelock.PROPOSER_ROLE();
    const executorRole = await timelock.EXECUTOR_ROLE();

    // Check if the governor already has the proposer role
    const hasProposerRole = await timelock.hasRole(proposerRole, governor.getAddress());
    console.log(`Governor has proposer role: ${hasProposerRole}`);

    if (!hasProposerRole) {
      const grantProposerTx = await timelock.grantRole(proposerRole, governor.getAddress());
      await grantProposerTx.wait();
      console.log(`Proposer role granted to Governor: ${await timelock.hasRole(proposerRole, governor.getAddress())}`);
    }

    // Check if the deployer has the executor role
    let hasExecutorRole = await timelock.hasRole(executorRole, deployer.address);
    console.log(`Deployer has executor role: ${hasExecutorRole}`);

    if (!hasExecutorRole) {
      const grantExecutorTx = await timelock.grantRole(executorRole, deployer.address);
      await grantExecutorTx.wait();
      console.log(`Executor role granted to deployer: ${await timelock.hasRole(executorRole, deployer.address)}`);
    }

     // Check if the governor has the executor role
     hasExecutorRole = await timelock.hasRole(executorRole, governor.getAddress());
     console.log(`Governor has executor role: ${hasExecutorRole}`);
 
     if (!hasExecutorRole) {
       const grantExecutorTx = await timelock.grantRole(executorRole, governor.getAddress());
       await grantExecutorTx.wait();
       console.log(`Executor role granted to governor: ${await timelock.hasRole(executorRole, governor.getAddress())}`);
     }

    // Proposal to update Governor's parameters
    const newVotingDelay = 2; // 2 blocks
    const newVotingPeriod = 5760; // ~1 day (5760 blocks)
    const newQuorum = 10; // 10% quorum

    const targets = [governor.getAddress(), governor.getAddress(), governor.getAddress()];
    const values = [0, 0, 0];
    const calldatas = [
      governor.interface.encodeFunctionData("setVotingDelay", [newVotingDelay]),
      governor.interface.encodeFunctionData("setVotingPeriod", [newVotingPeriod]),
      governor.interface.encodeFunctionData("updateQuorumNumerator", [newQuorum])
    ];

    const description = "Proposal to update Governor parameters";

    try {
      console.log(`Creating proposal...`);
      const proposeTx = await governor.propose(targets, values, calldatas, description);
      const receipt = await proposeTx.wait();

      let proposalCreatedEvents = receipt.logs.filter((event) => event.fragment.name == "ProposalCreated");
      const proposalId = proposalCreatedEvents[0].args[0];
      console.log('Proposal ID: ', proposalId);

      // Fast forward past the voting delay
      const votingDelay = await governor.votingDelay();
      for (let i = 0; i < votingDelay; i++) {
        await hre.network.provider.send("evm_mine");
      }

      // Check proposal state
      let state = await governor.state(proposalId);
      console.log('Proposal state after voting delay:', state); // Should be '1' (Active)

      console.log(`Casting vote...`);
      const voteTx = await governor.connect(deployer).castVote(proposalId, 1); // Vote for the proposal
      await voteTx.wait();

      // Fast forward past the voting period
      const votingPeriod = await governor.votingPeriod();
      for (let i = 0; i < votingPeriod; i++) {
        await hre.network.provider.send("evm_mine");
      }

      // Check proposal state
      state = await governor.state(proposalId);
      console.log('Proposal state after voting period:', state); // Should be '4' (Succeeded)

      console.log(`Queuing proposal...`);
      const descriptionHash = ethers.keccak256(ethers.toUtf8Bytes(description));
      const queueTx = await governor.queue(targets, values, calldatas, descriptionHash);
      await queueTx.wait();

      // Fast forward past the timelock delay
      const timelockDelay = await timelock.getMinDelay();
      await hre.network.provider.send("evm_increaseTime", [Number(timelockDelay)]);
      await hre.network.provider.send("evm_mine");

      // Check proposal state
      state = await governor.state(proposalId);
      console.log('Proposal state after timelock delay:', state); // Should be '5' (Queued)

      console.log(`Executing proposal...`);
      const executeTx = await governor.execute(targets, values, calldatas, descriptionHash);
      let result = await executeTx.wait();
      
      let delayEvents = result.logs.filter((event) => event.fragment && event.fragment.name === "VotingPeriodSet");
      console.log(delayEvents);
      

      console.log("Test proposal executed successfully");

      // Verify the updated parameters
      const updatedVotingDelay = await governor.votingDelay();
      const updatedVotingPeriod = await governor.votingPeriod();
      const updatedQuorum = await governor.quorumNumerator();

      console.log('Updated Voting Delay:', updatedVotingDelay.toString());
      console.log('Updated Voting Period:', updatedVotingPeriod.toString());
      console.log('Updated Quorum Numerator:', updatedQuorum.toString());

    } catch (error) {
      console.error("Error creating or executing test proposal:", error);
      return;
    }

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();