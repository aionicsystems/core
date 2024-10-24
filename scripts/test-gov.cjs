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

    const delegateTx = await token.connect(deployer).delegate(deployer.address);
    await delegateTx.wait();
    console.log(`Delegated votes to deployer.`);

    // Transfer tokens to the timelock to meet governance proposal requirements
    const timelockTokens = ethers.parseEther("100"); // Set according to your proposal threshold
    const transferTx = await token.transfer(timelock.getAddress(), timelockTokens);
    await transferTx.wait();
    console.log(`Transferred ${ethers.formatEther(timelockTokens)} Aion tokens to timelock (${timelock.getAddress()}).`);

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
      await grantProposerTx.wait(); // Wait for the role to be granted
      console.log(`Proposer role granted to Governor: ${await timelock.hasRole(proposerRole, governor.getAddress())}`);
    }

    // Check if the deployer has the executor role
    const hasExecutorRole = await timelock.hasRole(executorRole, deployer.address);
    console.log(`Deployer has executor role: ${hasExecutorRole}`);

    if (!hasExecutorRole) {
      const grantExecutorTx = await timelock.grantRole(executorRole, deployer.address);
      await grantExecutorTx.wait(); // Wait for the role to be granted
      console.log(`Executor role granted to deployer: ${await timelock.hasRole(executorRole, deployer.address)}`);
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
      

      await hre.network.provider.send("evm_increaseTime", [3600]); // Fast forward time to allow voting
      await hre.network.provider.send("evm_mine");

      console.log(`Casting vote...`);
      await governor.connect(deployer).castVote(proposalId, 1); // Vote for the proposal
      await hre.network.provider.send("evm_increaseTime", [3600]); // Fast forward time to allow proposal to be queued
      await hre.network.provider.send("evm_mine");

      console.log(`Queuing proposal...`);
      await governor.queue([token.getAddress()], [0], [transferCalldata], ethers.utils.keccak256(ethers.utils.toUtf8Bytes("Transfer Aion to deployer")));
      await hre.network.provider.send("evm_increaseTime", [3600]); // Fast forward time to allow proposal to be executed
      await hre.network.provider.send("evm_mine");

      console.log(`Executing proposal...`);
      await governor.execute([token.getAddress()], [0], [transferCalldata], ethers.utils.keccak256(ethers.utils.toUtf8Bytes("Transfer Aion to deployer")));
      console.log("Test proposal executed successfully");
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