import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

import {
  createReadContract,
  createWriteContract,
  createSimulateContract,
  createWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AccessControl
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const accessControlAbi = [
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Address
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const addressAbi = [
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AddressInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AggregatorV3Interface
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const aggregatorV3InterfaceAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'description',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_roundId', internalType: 'uint80', type: 'uint80' }],
    name: 'getRoundData',
    outputs: [
      { name: 'roundId', internalType: 'uint80', type: 'uint80' },
      { name: 'answer', internalType: 'int256', type: 'int256' },
      { name: 'startedAt', internalType: 'uint256', type: 'uint256' },
      { name: 'updatedAt', internalType: 'uint256', type: 'uint256' },
      { name: 'answeredInRound', internalType: 'uint80', type: 'uint80' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'latestRoundData',
    outputs: [
      { name: 'roundId', internalType: 'uint80', type: 'uint80' },
      { name: 'answer', internalType: 'int256', type: 'int256' },
      { name: 'startedAt', internalType: 'uint256', type: 'uint256' },
      { name: 'updatedAt', internalType: 'uint256', type: 'uint256' },
      { name: 'answeredInRound', internalType: 'uint80', type: 'uint80' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AionToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const aionTokenAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  { type: 'error', inputs: [], name: 'CheckpointUnorderedInsertion' },
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  {
    type: 'error',
    inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }],
    name: 'ECDSAInvalidSignatureS',
  },
  {
    type: 'error',
    inputs: [
      { name: 'increasedSupply', internalType: 'uint256', type: 'uint256' },
      { name: 'cap', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20ExceededSafeSupply',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'error',
    inputs: [{ name: 'deadline', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC2612ExpiredSignature',
  },
  {
    type: 'error',
    inputs: [
      { name: 'signer', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC2612InvalidSigner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
      { name: 'clock', internalType: 'uint48', type: 'uint48' },
    ],
    name: 'ERC5805FutureLookup',
  },
  { type: 'error', inputs: [], name: 'ERC6372InconsistentClock' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'currentNonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidAccountNonce',
  },
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
  {
    type: 'error',
    inputs: [{ name: 'expiry', internalType: 'uint256', type: 'uint256' }],
    name: 'VotesExpiredSignature',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'fromDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'toDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'DelegateChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'previousVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'DelegateVotesChanged',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CLOCK_MODE',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'pos', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'checkpoints',
    outputs: [
      {
        name: '',
        internalType: 'struct Checkpoints.Checkpoint208',
        type: 'tuple',
        components: [
          { name: '_key', internalType: 'uint48', type: 'uint48' },
          { name: '_value', internalType: 'uint208', type: 'uint208' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'clock',
    outputs: [{ name: '', internalType: 'uint48', type: 'uint48' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'delegatee', internalType: 'address', type: 'address' }],
    name: 'delegate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'delegatee', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'delegateBySig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'delegates',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'timepoint', internalType: 'uint256', type: 'uint256' }],
    name: 'getPastTotalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getPastVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'numCheckpoints',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AionicGovernor
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const aionicGovernorAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_token', internalType: 'contract IVotes', type: 'address' },
      {
        name: '_timelock',
        internalType: 'contract TimelockController',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'CheckpointUnorderedInsertion' },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  {
    type: 'error',
    inputs: [{ name: 'voter', internalType: 'address', type: 'address' }],
    name: 'GovernorAlreadyCastVote',
  },
  {
    type: 'error',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'GovernorAlreadyQueuedProposal',
  },
  { type: 'error', inputs: [], name: 'GovernorDisabledDeposit' },
  {
    type: 'error',
    inputs: [
      { name: 'proposer', internalType: 'address', type: 'address' },
      { name: 'votes', internalType: 'uint256', type: 'uint256' },
      { name: 'threshold', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'GovernorInsufficientProposerVotes',
  },
  {
    type: 'error',
    inputs: [
      { name: 'targets', internalType: 'uint256', type: 'uint256' },
      { name: 'calldatas', internalType: 'uint256', type: 'uint256' },
      { name: 'values', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'GovernorInvalidProposalLength',
  },
  {
    type: 'error',
    inputs: [
      { name: 'quorumNumerator', internalType: 'uint256', type: 'uint256' },
      { name: 'quorumDenominator', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'GovernorInvalidQuorumFraction',
  },
  {
    type: 'error',
    inputs: [{ name: 'voter', internalType: 'address', type: 'address' }],
    name: 'GovernorInvalidSignature',
  },
  { type: 'error', inputs: [], name: 'GovernorInvalidVoteType' },
  {
    type: 'error',
    inputs: [
      { name: 'votingPeriod', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'GovernorInvalidVotingPeriod',
  },
  {
    type: 'error',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'GovernorNonexistentProposal',
  },
  {
    type: 'error',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'GovernorNotQueuedProposal',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'GovernorOnlyExecutor',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'GovernorOnlyProposer',
  },
  { type: 'error', inputs: [], name: 'GovernorQueueNotImplemented' },
  {
    type: 'error',
    inputs: [{ name: 'proposer', internalType: 'address', type: 'address' }],
    name: 'GovernorRestrictedProposer',
  },
  {
    type: 'error',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'current',
        internalType: 'enum IGovernor.ProposalState',
        type: 'uint8',
      },
      { name: 'expectedStates', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'GovernorUnexpectedProposalState',
  },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'currentNonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidAccountNonce',
  },
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  { type: 'error', inputs: [], name: 'QueueEmpty' },
  { type: 'error', inputs: [], name: 'QueueFull' },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ProposalCanceled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'proposer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'targets',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
      {
        name: 'values',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'signatures',
        internalType: 'string[]',
        type: 'string[]',
        indexed: false,
      },
      {
        name: 'calldatas',
        internalType: 'bytes[]',
        type: 'bytes[]',
        indexed: false,
      },
      {
        name: 'voteStart',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'voteEnd',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'description',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'ProposalCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ProposalExecuted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'etaSeconds',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ProposalQueued',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldQuorumNumerator',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newQuorumNumerator',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'QuorumNumeratorUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldTimelock',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newTimelock',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'TimelockChange',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'voter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'support', internalType: 'uint8', type: 'uint8', indexed: false },
      {
        name: 'weight',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'reason',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'VoteCast',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'voter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'support', internalType: 'uint8', type: 'uint8', indexed: false },
      {
        name: 'weight',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'reason',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      { name: 'params', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'VoteCastWithParams',
  },
  {
    type: 'function',
    inputs: [],
    name: 'BALLOT_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CLOCK_MODE',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'COUNTING_MODE',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'EXTENDED_BALLOT_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'calldatas', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'descriptionHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'cancel',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'castVote',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
      { name: 'voter', internalType: 'address', type: 'address' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'castVoteBySig',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
      { name: 'reason', internalType: 'string', type: 'string' },
    ],
    name: 'castVoteWithReason',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
      { name: 'reason', internalType: 'string', type: 'string' },
      { name: 'params', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'castVoteWithReasonAndParams',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
      { name: 'voter', internalType: 'address', type: 'address' },
      { name: 'reason', internalType: 'string', type: 'string' },
      { name: 'params', internalType: 'bytes', type: 'bytes' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'castVoteWithReasonAndParamsBySig',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'clock',
    outputs: [{ name: '', internalType: 'uint48', type: 'uint48' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'calldatas', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'descriptionHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'execute',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
      { name: 'params', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'getVotesWithParams',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasVoted',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'calldatas', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'descriptionHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'hashProposal',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC1155BatchReceived',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC1155Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'proposalDeadline',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'proposalEta',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'proposalNeedsQueuing',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'proposalProposer',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'proposalSnapshot',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proposalThreshold',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'proposalVotes',
    outputs: [
      { name: 'againstVotes', internalType: 'uint256', type: 'uint256' },
      { name: 'forVotes', internalType: 'uint256', type: 'uint256' },
      { name: 'abstainVotes', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'calldatas', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'description', internalType: 'string', type: 'string' },
    ],
    name: 'propose',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'calldatas', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'descriptionHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'queue',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'timepoint', internalType: 'uint256', type: 'uint256' }],
    name: 'quorum',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'quorumDenominator',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'timepoint', internalType: 'uint256', type: 'uint256' }],
    name: 'quorumNumerator',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'quorumNumerator',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'relay',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'state',
    outputs: [
      { name: '', internalType: 'enum IGovernor.ProposalState', type: 'uint8' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'timelock',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'token',
    outputs: [{ name: '', internalType: 'contract IERC5805', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newQuorumNumerator', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'updateQuorumNumerator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'newTimelock',
        internalType: 'contract TimelockController',
        type: 'address',
      },
    ],
    name: 'updateTimelock',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'votingDelay',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'votingPeriod',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AionicTimelock
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const aionicTimelockAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_mindelay', internalType: 'uint256', type: 'uint256' },
      { name: '_proposers', internalType: 'address[]', type: 'address[]' },
      { name: '_executors', internalType: 'address[]', type: 'address[]' },
      { name: '_admin', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  {
    type: 'error',
    inputs: [
      { name: 'delay', internalType: 'uint256', type: 'uint256' },
      { name: 'minDelay', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'TimelockInsufficientDelay',
  },
  {
    type: 'error',
    inputs: [
      { name: 'targets', internalType: 'uint256', type: 'uint256' },
      { name: 'payloads', internalType: 'uint256', type: 'uint256' },
      { name: 'values', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'TimelockInvalidOperationLength',
  },
  {
    type: 'error',
    inputs: [{ name: 'caller', internalType: 'address', type: 'address' }],
    name: 'TimelockUnauthorizedCaller',
  },
  {
    type: 'error',
    inputs: [
      { name: 'predecessorId', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'TimelockUnexecutedPredecessor',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operationId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'expectedStates', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'TimelockUnexpectedOperationState',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'index',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'target',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'CallExecuted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'salt',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
    ],
    name: 'CallSalt',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'index',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'target',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
      {
        name: 'predecessor',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'delay',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'CallScheduled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: true },
    ],
    name: 'Cancelled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldDuration',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newDuration',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'MinDelayChange',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CANCELLER_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'EXECUTOR_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'PROPOSER_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'bytes32', type: 'bytes32' }],
    name: 'cancel',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'payload', internalType: 'bytes', type: 'bytes' },
      { name: 'predecessor', internalType: 'bytes32', type: 'bytes32' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'execute',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'payloads', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'predecessor', internalType: 'bytes32', type: 'bytes32' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'executeBatch',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getMinDelay',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getOperationState',
    outputs: [
      {
        name: '',
        internalType: 'enum TimelockController.OperationState',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getTimestamp',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'predecessor', internalType: 'bytes32', type: 'bytes32' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'hashOperation',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'payloads', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'predecessor', internalType: 'bytes32', type: 'bytes32' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'hashOperationBatch',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'bytes32', type: 'bytes32' }],
    name: 'isOperation',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'bytes32', type: 'bytes32' }],
    name: 'isOperationDone',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'bytes32', type: 'bytes32' }],
    name: 'isOperationPending',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'bytes32', type: 'bytes32' }],
    name: 'isOperationReady',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC1155BatchReceived',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC1155Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'predecessor', internalType: 'bytes32', type: 'bytes32' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'delay', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'schedule',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'payloads', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'predecessor', internalType: 'bytes32', type: 'bytes32' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'delay', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'scheduleBatch',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newDelay', internalType: 'uint256', type: 'uint256' }],
    name: 'updateDelay',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Asset
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const assetAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'symbol', internalType: 'string', type: 'string' },
      { name: '_interestRate', internalType: 'uint32', type: 'uint32' },
      { name: '_liquidationRatio', internalType: 'uint32', type: 'uint32' },
      { name: 'owner', internalType: 'address', type: 'address' },
      {
        name: '_assetDataFeedAddress',
        internalType: 'address',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'assetDataFeedAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'burnFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'interestRate',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'liquidationRatio',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_assetDataFeedAddress',
        internalType: 'address',
        type: 'address',
      },
    ],
    name: 'setDataFeedAddress',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_liquidationRatio', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'setLiquidationRatio',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_interestRate', internalType: 'uint32', type: 'uint32' }],
    name: 'setRate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Checkpoints
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const checkpointsAbi = [
  { type: 'error', inputs: [], name: 'CheckpointUnorderedInsertion' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DoubleEndedQueue
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const doubleEndedQueueAbi = [
  { type: 'error', inputs: [], name: 'QueueEmpty' },
  { type: 'error', inputs: [], name: 'QueueFull' },
  { type: 'error', inputs: [], name: 'QueueOutOfBounds' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ECDSA
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ecdsaAbi = [
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  {
    type: 'error',
    inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }],
    name: 'ECDSAInvalidSignatureS',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EIP712
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const eip712Abi = [
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC1155Holder
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc1155HolderAbi = [
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC1155BatchReceived',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC1155Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc165Abi = [
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20Abi = [
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20Burnable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20BurnableAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'burnFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20Permit
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20PermitAbi = [
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  {
    type: 'error',
    inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }],
    name: 'ECDSAInvalidSignatureS',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'error',
    inputs: [{ name: 'deadline', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC2612ExpiredSignature',
  },
  {
    type: 'error',
    inputs: [
      { name: 'signer', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC2612InvalidSigner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'currentNonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidAccountNonce',
  },
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20Votes
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20VotesAbi = [
  { type: 'error', inputs: [], name: 'CheckpointUnorderedInsertion' },
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  {
    type: 'error',
    inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }],
    name: 'ECDSAInvalidSignatureS',
  },
  {
    type: 'error',
    inputs: [
      { name: 'increasedSupply', internalType: 'uint256', type: 'uint256' },
      { name: 'cap', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20ExceededSafeSupply',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'error',
    inputs: [
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
      { name: 'clock', internalType: 'uint48', type: 'uint48' },
    ],
    name: 'ERC5805FutureLookup',
  },
  { type: 'error', inputs: [], name: 'ERC6372InconsistentClock' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'currentNonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidAccountNonce',
  },
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
  {
    type: 'error',
    inputs: [{ name: 'expiry', internalType: 'uint256', type: 'uint256' }],
    name: 'VotesExpiredSignature',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'fromDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'toDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'DelegateChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'previousVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'DelegateVotesChanged',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CLOCK_MODE',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'pos', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'checkpoints',
    outputs: [
      {
        name: '',
        internalType: 'struct Checkpoints.Checkpoint208',
        type: 'tuple',
        components: [
          { name: '_key', internalType: 'uint48', type: 'uint48' },
          { name: '_value', internalType: 'uint208', type: 'uint208' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'clock',
    outputs: [{ name: '', internalType: 'uint48', type: 'uint48' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'delegatee', internalType: 'address', type: 'address' }],
    name: 'delegate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'delegatee', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'delegateBySig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'delegates',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'timepoint', internalType: 'uint256', type: 'uint256' }],
    name: 'getPastTotalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getPastVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'numCheckpoints',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721Holder
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721HolderAbi = [
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Governor
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const governorAbi = [
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  {
    type: 'error',
    inputs: [{ name: 'voter', internalType: 'address', type: 'address' }],
    name: 'GovernorAlreadyCastVote',
  },
  {
    type: 'error',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'GovernorAlreadyQueuedProposal',
  },
  { type: 'error', inputs: [], name: 'GovernorDisabledDeposit' },
  {
    type: 'error',
    inputs: [
      { name: 'proposer', internalType: 'address', type: 'address' },
      { name: 'votes', internalType: 'uint256', type: 'uint256' },
      { name: 'threshold', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'GovernorInsufficientProposerVotes',
  },
  {
    type: 'error',
    inputs: [
      { name: 'targets', internalType: 'uint256', type: 'uint256' },
      { name: 'calldatas', internalType: 'uint256', type: 'uint256' },
      { name: 'values', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'GovernorInvalidProposalLength',
  },
  {
    type: 'error',
    inputs: [{ name: 'voter', internalType: 'address', type: 'address' }],
    name: 'GovernorInvalidSignature',
  },
  { type: 'error', inputs: [], name: 'GovernorInvalidVoteType' },
  {
    type: 'error',
    inputs: [
      { name: 'votingPeriod', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'GovernorInvalidVotingPeriod',
  },
  {
    type: 'error',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'GovernorNonexistentProposal',
  },
  {
    type: 'error',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'GovernorNotQueuedProposal',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'GovernorOnlyExecutor',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'GovernorOnlyProposer',
  },
  { type: 'error', inputs: [], name: 'GovernorQueueNotImplemented' },
  {
    type: 'error',
    inputs: [{ name: 'proposer', internalType: 'address', type: 'address' }],
    name: 'GovernorRestrictedProposer',
  },
  {
    type: 'error',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'current',
        internalType: 'enum IGovernor.ProposalState',
        type: 'uint8',
      },
      { name: 'expectedStates', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'GovernorUnexpectedProposalState',
  },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'currentNonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidAccountNonce',
  },
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  { type: 'error', inputs: [], name: 'QueueEmpty' },
  { type: 'error', inputs: [], name: 'QueueFull' },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ProposalCanceled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'proposer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'targets',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
      {
        name: 'values',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'signatures',
        internalType: 'string[]',
        type: 'string[]',
        indexed: false,
      },
      {
        name: 'calldatas',
        internalType: 'bytes[]',
        type: 'bytes[]',
        indexed: false,
      },
      {
        name: 'voteStart',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'voteEnd',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'description',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'ProposalCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ProposalExecuted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'etaSeconds',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ProposalQueued',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'voter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'support', internalType: 'uint8', type: 'uint8', indexed: false },
      {
        name: 'weight',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'reason',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'VoteCast',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'voter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'support', internalType: 'uint8', type: 'uint8', indexed: false },
      {
        name: 'weight',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'reason',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      { name: 'params', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'VoteCastWithParams',
  },
  {
    type: 'function',
    inputs: [],
    name: 'BALLOT_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CLOCK_MODE',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'COUNTING_MODE',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'EXTENDED_BALLOT_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'calldatas', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'descriptionHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'cancel',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'castVote',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
      { name: 'voter', internalType: 'address', type: 'address' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'castVoteBySig',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
      { name: 'reason', internalType: 'string', type: 'string' },
    ],
    name: 'castVoteWithReason',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
      { name: 'reason', internalType: 'string', type: 'string' },
      { name: 'params', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'castVoteWithReasonAndParams',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
      { name: 'voter', internalType: 'address', type: 'address' },
      { name: 'reason', internalType: 'string', type: 'string' },
      { name: 'params', internalType: 'bytes', type: 'bytes' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'castVoteWithReasonAndParamsBySig',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'clock',
    outputs: [{ name: '', internalType: 'uint48', type: 'uint48' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'calldatas', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'descriptionHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'execute',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
      { name: 'params', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'getVotesWithParams',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasVoted',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'calldatas', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'descriptionHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'hashProposal',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC1155BatchReceived',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC1155Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'proposalDeadline',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'proposalEta',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'proposalNeedsQueuing',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'proposalProposer',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'proposalSnapshot',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proposalThreshold',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'calldatas', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'description', internalType: 'string', type: 'string' },
    ],
    name: 'propose',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'calldatas', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'descriptionHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'queue',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'timepoint', internalType: 'uint256', type: 'uint256' }],
    name: 'quorum',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'relay',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'state',
    outputs: [
      { name: '', internalType: 'enum IGovernor.ProposalState', type: 'uint8' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'votingDelay',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'votingPeriod',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GovernorCountingSimple
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const governorCountingSimpleAbi = [
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  {
    type: 'error',
    inputs: [{ name: 'voter', internalType: 'address', type: 'address' }],
    name: 'GovernorAlreadyCastVote',
  },
  {
    type: 'error',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'GovernorAlreadyQueuedProposal',
  },
  { type: 'error', inputs: [], name: 'GovernorDisabledDeposit' },
  {
    type: 'error',
    inputs: [
      { name: 'proposer', internalType: 'address', type: 'address' },
      { name: 'votes', internalType: 'uint256', type: 'uint256' },
      { name: 'threshold', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'GovernorInsufficientProposerVotes',
  },
  {
    type: 'error',
    inputs: [
      { name: 'targets', internalType: 'uint256', type: 'uint256' },
      { name: 'calldatas', internalType: 'uint256', type: 'uint256' },
      { name: 'values', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'GovernorInvalidProposalLength',
  },
  {
    type: 'error',
    inputs: [{ name: 'voter', internalType: 'address', type: 'address' }],
    name: 'GovernorInvalidSignature',
  },
  { type: 'error', inputs: [], name: 'GovernorInvalidVoteType' },
  {
    type: 'error',
    inputs: [
      { name: 'votingPeriod', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'GovernorInvalidVotingPeriod',
  },
  {
    type: 'error',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'GovernorNonexistentProposal',
  },
  {
    type: 'error',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'GovernorNotQueuedProposal',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'GovernorOnlyExecutor',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'GovernorOnlyProposer',
  },
  { type: 'error', inputs: [], name: 'GovernorQueueNotImplemented' },
  {
    type: 'error',
    inputs: [{ name: 'proposer', internalType: 'address', type: 'address' }],
    name: 'GovernorRestrictedProposer',
  },
  {
    type: 'error',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'current',
        internalType: 'enum IGovernor.ProposalState',
        type: 'uint8',
      },
      { name: 'expectedStates', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'GovernorUnexpectedProposalState',
  },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'currentNonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidAccountNonce',
  },
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  { type: 'error', inputs: [], name: 'QueueEmpty' },
  { type: 'error', inputs: [], name: 'QueueFull' },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ProposalCanceled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'proposer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'targets',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
      {
        name: 'values',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'signatures',
        internalType: 'string[]',
        type: 'string[]',
        indexed: false,
      },
      {
        name: 'calldatas',
        internalType: 'bytes[]',
        type: 'bytes[]',
        indexed: false,
      },
      {
        name: 'voteStart',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'voteEnd',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'description',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'ProposalCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ProposalExecuted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'etaSeconds',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ProposalQueued',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'voter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'support', internalType: 'uint8', type: 'uint8', indexed: false },
      {
        name: 'weight',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'reason',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'VoteCast',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'voter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'support', internalType: 'uint8', type: 'uint8', indexed: false },
      {
        name: 'weight',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'reason',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      { name: 'params', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'VoteCastWithParams',
  },
  {
    type: 'function',
    inputs: [],
    name: 'BALLOT_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CLOCK_MODE',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'COUNTING_MODE',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'EXTENDED_BALLOT_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'calldatas', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'descriptionHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'cancel',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'castVote',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
      { name: 'voter', internalType: 'address', type: 'address' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'castVoteBySig',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
      { name: 'reason', internalType: 'string', type: 'string' },
    ],
    name: 'castVoteWithReason',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
      { name: 'reason', internalType: 'string', type: 'string' },
      { name: 'params', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'castVoteWithReasonAndParams',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
      { name: 'voter', internalType: 'address', type: 'address' },
      { name: 'reason', internalType: 'string', type: 'string' },
      { name: 'params', internalType: 'bytes', type: 'bytes' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'castVoteWithReasonAndParamsBySig',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'clock',
    outputs: [{ name: '', internalType: 'uint48', type: 'uint48' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'calldatas', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'descriptionHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'execute',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
      { name: 'params', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'getVotesWithParams',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasVoted',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'calldatas', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'descriptionHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'hashProposal',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC1155BatchReceived',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC1155Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'proposalDeadline',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'proposalEta',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'proposalNeedsQueuing',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'proposalProposer',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'proposalSnapshot',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proposalThreshold',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'proposalVotes',
    outputs: [
      { name: 'againstVotes', internalType: 'uint256', type: 'uint256' },
      { name: 'forVotes', internalType: 'uint256', type: 'uint256' },
      { name: 'abstainVotes', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'calldatas', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'description', internalType: 'string', type: 'string' },
    ],
    name: 'propose',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'calldatas', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'descriptionHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'queue',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'timepoint', internalType: 'uint256', type: 'uint256' }],
    name: 'quorum',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'relay',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'state',
    outputs: [
      { name: '', internalType: 'enum IGovernor.ProposalState', type: 'uint8' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'votingDelay',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'votingPeriod',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GovernorTimelockControl
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const governorTimelockControlAbi = [
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  {
    type: 'error',
    inputs: [{ name: 'voter', internalType: 'address', type: 'address' }],
    name: 'GovernorAlreadyCastVote',
  },
  {
    type: 'error',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'GovernorAlreadyQueuedProposal',
  },
  { type: 'error', inputs: [], name: 'GovernorDisabledDeposit' },
  {
    type: 'error',
    inputs: [
      { name: 'proposer', internalType: 'address', type: 'address' },
      { name: 'votes', internalType: 'uint256', type: 'uint256' },
      { name: 'threshold', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'GovernorInsufficientProposerVotes',
  },
  {
    type: 'error',
    inputs: [
      { name: 'targets', internalType: 'uint256', type: 'uint256' },
      { name: 'calldatas', internalType: 'uint256', type: 'uint256' },
      { name: 'values', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'GovernorInvalidProposalLength',
  },
  {
    type: 'error',
    inputs: [{ name: 'voter', internalType: 'address', type: 'address' }],
    name: 'GovernorInvalidSignature',
  },
  { type: 'error', inputs: [], name: 'GovernorInvalidVoteType' },
  {
    type: 'error',
    inputs: [
      { name: 'votingPeriod', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'GovernorInvalidVotingPeriod',
  },
  {
    type: 'error',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'GovernorNonexistentProposal',
  },
  {
    type: 'error',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'GovernorNotQueuedProposal',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'GovernorOnlyExecutor',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'GovernorOnlyProposer',
  },
  { type: 'error', inputs: [], name: 'GovernorQueueNotImplemented' },
  {
    type: 'error',
    inputs: [{ name: 'proposer', internalType: 'address', type: 'address' }],
    name: 'GovernorRestrictedProposer',
  },
  {
    type: 'error',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'current',
        internalType: 'enum IGovernor.ProposalState',
        type: 'uint8',
      },
      { name: 'expectedStates', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'GovernorUnexpectedProposalState',
  },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'currentNonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidAccountNonce',
  },
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  { type: 'error', inputs: [], name: 'QueueEmpty' },
  { type: 'error', inputs: [], name: 'QueueFull' },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ProposalCanceled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'proposer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'targets',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
      {
        name: 'values',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'signatures',
        internalType: 'string[]',
        type: 'string[]',
        indexed: false,
      },
      {
        name: 'calldatas',
        internalType: 'bytes[]',
        type: 'bytes[]',
        indexed: false,
      },
      {
        name: 'voteStart',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'voteEnd',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'description',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'ProposalCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ProposalExecuted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'etaSeconds',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ProposalQueued',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldTimelock',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newTimelock',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'TimelockChange',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'voter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'support', internalType: 'uint8', type: 'uint8', indexed: false },
      {
        name: 'weight',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'reason',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'VoteCast',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'voter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'support', internalType: 'uint8', type: 'uint8', indexed: false },
      {
        name: 'weight',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'reason',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      { name: 'params', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'VoteCastWithParams',
  },
  {
    type: 'function',
    inputs: [],
    name: 'BALLOT_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CLOCK_MODE',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'COUNTING_MODE',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'EXTENDED_BALLOT_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'calldatas', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'descriptionHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'cancel',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'castVote',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
      { name: 'voter', internalType: 'address', type: 'address' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'castVoteBySig',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
      { name: 'reason', internalType: 'string', type: 'string' },
    ],
    name: 'castVoteWithReason',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
      { name: 'reason', internalType: 'string', type: 'string' },
      { name: 'params', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'castVoteWithReasonAndParams',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
      { name: 'voter', internalType: 'address', type: 'address' },
      { name: 'reason', internalType: 'string', type: 'string' },
      { name: 'params', internalType: 'bytes', type: 'bytes' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'castVoteWithReasonAndParamsBySig',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'clock',
    outputs: [{ name: '', internalType: 'uint48', type: 'uint48' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'calldatas', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'descriptionHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'execute',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
      { name: 'params', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'getVotesWithParams',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasVoted',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'calldatas', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'descriptionHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'hashProposal',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC1155BatchReceived',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC1155Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'proposalDeadline',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'proposalEta',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'proposalNeedsQueuing',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'proposalProposer',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'proposalSnapshot',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proposalThreshold',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'calldatas', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'description', internalType: 'string', type: 'string' },
    ],
    name: 'propose',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'calldatas', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'descriptionHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'queue',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'timepoint', internalType: 'uint256', type: 'uint256' }],
    name: 'quorum',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'relay',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'state',
    outputs: [
      { name: '', internalType: 'enum IGovernor.ProposalState', type: 'uint8' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'timelock',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'newTimelock',
        internalType: 'contract TimelockController',
        type: 'address',
      },
    ],
    name: 'updateTimelock',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'votingDelay',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'votingPeriod',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GovernorVotes
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const governorVotesAbi = [
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  {
    type: 'error',
    inputs: [{ name: 'voter', internalType: 'address', type: 'address' }],
    name: 'GovernorAlreadyCastVote',
  },
  {
    type: 'error',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'GovernorAlreadyQueuedProposal',
  },
  { type: 'error', inputs: [], name: 'GovernorDisabledDeposit' },
  {
    type: 'error',
    inputs: [
      { name: 'proposer', internalType: 'address', type: 'address' },
      { name: 'votes', internalType: 'uint256', type: 'uint256' },
      { name: 'threshold', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'GovernorInsufficientProposerVotes',
  },
  {
    type: 'error',
    inputs: [
      { name: 'targets', internalType: 'uint256', type: 'uint256' },
      { name: 'calldatas', internalType: 'uint256', type: 'uint256' },
      { name: 'values', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'GovernorInvalidProposalLength',
  },
  {
    type: 'error',
    inputs: [{ name: 'voter', internalType: 'address', type: 'address' }],
    name: 'GovernorInvalidSignature',
  },
  { type: 'error', inputs: [], name: 'GovernorInvalidVoteType' },
  {
    type: 'error',
    inputs: [
      { name: 'votingPeriod', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'GovernorInvalidVotingPeriod',
  },
  {
    type: 'error',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'GovernorNonexistentProposal',
  },
  {
    type: 'error',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'GovernorNotQueuedProposal',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'GovernorOnlyExecutor',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'GovernorOnlyProposer',
  },
  { type: 'error', inputs: [], name: 'GovernorQueueNotImplemented' },
  {
    type: 'error',
    inputs: [{ name: 'proposer', internalType: 'address', type: 'address' }],
    name: 'GovernorRestrictedProposer',
  },
  {
    type: 'error',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'current',
        internalType: 'enum IGovernor.ProposalState',
        type: 'uint8',
      },
      { name: 'expectedStates', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'GovernorUnexpectedProposalState',
  },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'currentNonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidAccountNonce',
  },
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  { type: 'error', inputs: [], name: 'QueueEmpty' },
  { type: 'error', inputs: [], name: 'QueueFull' },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ProposalCanceled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'proposer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'targets',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
      {
        name: 'values',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'signatures',
        internalType: 'string[]',
        type: 'string[]',
        indexed: false,
      },
      {
        name: 'calldatas',
        internalType: 'bytes[]',
        type: 'bytes[]',
        indexed: false,
      },
      {
        name: 'voteStart',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'voteEnd',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'description',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'ProposalCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ProposalExecuted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'etaSeconds',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ProposalQueued',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'voter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'support', internalType: 'uint8', type: 'uint8', indexed: false },
      {
        name: 'weight',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'reason',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'VoteCast',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'voter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'support', internalType: 'uint8', type: 'uint8', indexed: false },
      {
        name: 'weight',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'reason',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      { name: 'params', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'VoteCastWithParams',
  },
  {
    type: 'function',
    inputs: [],
    name: 'BALLOT_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CLOCK_MODE',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'COUNTING_MODE',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'EXTENDED_BALLOT_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'calldatas', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'descriptionHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'cancel',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'castVote',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
      { name: 'voter', internalType: 'address', type: 'address' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'castVoteBySig',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
      { name: 'reason', internalType: 'string', type: 'string' },
    ],
    name: 'castVoteWithReason',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
      { name: 'reason', internalType: 'string', type: 'string' },
      { name: 'params', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'castVoteWithReasonAndParams',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
      { name: 'voter', internalType: 'address', type: 'address' },
      { name: 'reason', internalType: 'string', type: 'string' },
      { name: 'params', internalType: 'bytes', type: 'bytes' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'castVoteWithReasonAndParamsBySig',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'clock',
    outputs: [{ name: '', internalType: 'uint48', type: 'uint48' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'calldatas', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'descriptionHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'execute',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
      { name: 'params', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'getVotesWithParams',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasVoted',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'calldatas', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'descriptionHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'hashProposal',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC1155BatchReceived',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC1155Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'proposalDeadline',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'proposalEta',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'proposalNeedsQueuing',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'proposalProposer',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'proposalSnapshot',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proposalThreshold',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'calldatas', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'description', internalType: 'string', type: 'string' },
    ],
    name: 'propose',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'calldatas', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'descriptionHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'queue',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'timepoint', internalType: 'uint256', type: 'uint256' }],
    name: 'quorum',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'relay',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'state',
    outputs: [
      { name: '', internalType: 'enum IGovernor.ProposalState', type: 'uint8' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'token',
    outputs: [{ name: '', internalType: 'contract IERC5805', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'votingDelay',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'votingPeriod',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GovernorVotesQuorumFraction
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const governorVotesQuorumFractionAbi = [
  { type: 'error', inputs: [], name: 'CheckpointUnorderedInsertion' },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  {
    type: 'error',
    inputs: [{ name: 'voter', internalType: 'address', type: 'address' }],
    name: 'GovernorAlreadyCastVote',
  },
  {
    type: 'error',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'GovernorAlreadyQueuedProposal',
  },
  { type: 'error', inputs: [], name: 'GovernorDisabledDeposit' },
  {
    type: 'error',
    inputs: [
      { name: 'proposer', internalType: 'address', type: 'address' },
      { name: 'votes', internalType: 'uint256', type: 'uint256' },
      { name: 'threshold', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'GovernorInsufficientProposerVotes',
  },
  {
    type: 'error',
    inputs: [
      { name: 'targets', internalType: 'uint256', type: 'uint256' },
      { name: 'calldatas', internalType: 'uint256', type: 'uint256' },
      { name: 'values', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'GovernorInvalidProposalLength',
  },
  {
    type: 'error',
    inputs: [
      { name: 'quorumNumerator', internalType: 'uint256', type: 'uint256' },
      { name: 'quorumDenominator', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'GovernorInvalidQuorumFraction',
  },
  {
    type: 'error',
    inputs: [{ name: 'voter', internalType: 'address', type: 'address' }],
    name: 'GovernorInvalidSignature',
  },
  { type: 'error', inputs: [], name: 'GovernorInvalidVoteType' },
  {
    type: 'error',
    inputs: [
      { name: 'votingPeriod', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'GovernorInvalidVotingPeriod',
  },
  {
    type: 'error',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'GovernorNonexistentProposal',
  },
  {
    type: 'error',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'GovernorNotQueuedProposal',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'GovernorOnlyExecutor',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'GovernorOnlyProposer',
  },
  { type: 'error', inputs: [], name: 'GovernorQueueNotImplemented' },
  {
    type: 'error',
    inputs: [{ name: 'proposer', internalType: 'address', type: 'address' }],
    name: 'GovernorRestrictedProposer',
  },
  {
    type: 'error',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'current',
        internalType: 'enum IGovernor.ProposalState',
        type: 'uint8',
      },
      { name: 'expectedStates', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'GovernorUnexpectedProposalState',
  },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'currentNonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidAccountNonce',
  },
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  { type: 'error', inputs: [], name: 'QueueEmpty' },
  { type: 'error', inputs: [], name: 'QueueFull' },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ProposalCanceled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'proposer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'targets',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
      {
        name: 'values',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'signatures',
        internalType: 'string[]',
        type: 'string[]',
        indexed: false,
      },
      {
        name: 'calldatas',
        internalType: 'bytes[]',
        type: 'bytes[]',
        indexed: false,
      },
      {
        name: 'voteStart',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'voteEnd',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'description',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'ProposalCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ProposalExecuted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'etaSeconds',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ProposalQueued',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldQuorumNumerator',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newQuorumNumerator',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'QuorumNumeratorUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'voter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'support', internalType: 'uint8', type: 'uint8', indexed: false },
      {
        name: 'weight',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'reason',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'VoteCast',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'voter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'support', internalType: 'uint8', type: 'uint8', indexed: false },
      {
        name: 'weight',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'reason',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      { name: 'params', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'VoteCastWithParams',
  },
  {
    type: 'function',
    inputs: [],
    name: 'BALLOT_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CLOCK_MODE',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'COUNTING_MODE',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'EXTENDED_BALLOT_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'calldatas', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'descriptionHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'cancel',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'castVote',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
      { name: 'voter', internalType: 'address', type: 'address' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'castVoteBySig',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
      { name: 'reason', internalType: 'string', type: 'string' },
    ],
    name: 'castVoteWithReason',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
      { name: 'reason', internalType: 'string', type: 'string' },
      { name: 'params', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'castVoteWithReasonAndParams',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
      { name: 'voter', internalType: 'address', type: 'address' },
      { name: 'reason', internalType: 'string', type: 'string' },
      { name: 'params', internalType: 'bytes', type: 'bytes' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'castVoteWithReasonAndParamsBySig',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'clock',
    outputs: [{ name: '', internalType: 'uint48', type: 'uint48' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'calldatas', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'descriptionHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'execute',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
      { name: 'params', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'getVotesWithParams',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasVoted',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'calldatas', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'descriptionHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'hashProposal',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC1155BatchReceived',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC1155Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'proposalDeadline',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'proposalEta',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'proposalNeedsQueuing',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'proposalProposer',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'proposalSnapshot',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proposalThreshold',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'calldatas', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'description', internalType: 'string', type: 'string' },
    ],
    name: 'propose',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'calldatas', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'descriptionHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'queue',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'timepoint', internalType: 'uint256', type: 'uint256' }],
    name: 'quorum',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'quorumDenominator',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'timepoint', internalType: 'uint256', type: 'uint256' }],
    name: 'quorumNumerator',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'quorumNumerator',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'relay',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'state',
    outputs: [
      { name: '', internalType: 'enum IGovernor.ProposalState', type: 'uint8' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'token',
    outputs: [{ name: '', internalType: 'contract IERC5805', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newQuorumNumerator', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'updateQuorumNumerator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'votingDelay',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'votingPeriod',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IAccessControl
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iAccessControlAbi = [
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1155Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1155ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidApprover',
  },
  {
    type: 'error',
    inputs: [
      { name: 'idsLength', internalType: 'uint256', type: 'uint256' },
      { name: 'valuesLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InvalidArrayLength',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidSender',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1155MissingApprovalForAll',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1155Receiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1155ReceiverAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC1155BatchReceived',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC1155Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1271
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1271Abi = [
  {
    type: 'function',
    inputs: [
      { name: 'hash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'isValidSignature',
    outputs: [{ name: 'magicValue', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc165Abi = [
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20Abi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Burnable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20BurnableAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'burnFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20MetadataAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Permit
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20PermitAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC5267
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc5267Abi = [
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC5805
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc5805Abi = [
  {
    type: 'error',
    inputs: [{ name: 'expiry', internalType: 'uint256', type: 'uint256' }],
    name: 'VotesExpiredSignature',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'fromDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'toDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'DelegateChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'previousVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'DelegateVotesChanged',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CLOCK_MODE',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'clock',
    outputs: [{ name: '', internalType: 'uint48', type: 'uint48' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'delegatee', internalType: 'address', type: 'address' }],
    name: 'delegate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'delegatee', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'delegateBySig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'delegates',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'timepoint', internalType: 'uint256', type: 'uint256' }],
    name: 'getPastTotalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getPastVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC6372
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc6372Abi = [
  {
    type: 'function',
    inputs: [],
    name: 'CLOCK_MODE',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'clock',
    outputs: [{ name: '', internalType: 'uint48', type: 'uint48' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Receiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ReceiverAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IGovernor
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iGovernorAbi = [
  {
    type: 'error',
    inputs: [{ name: 'voter', internalType: 'address', type: 'address' }],
    name: 'GovernorAlreadyCastVote',
  },
  {
    type: 'error',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'GovernorAlreadyQueuedProposal',
  },
  { type: 'error', inputs: [], name: 'GovernorDisabledDeposit' },
  {
    type: 'error',
    inputs: [
      { name: 'proposer', internalType: 'address', type: 'address' },
      { name: 'votes', internalType: 'uint256', type: 'uint256' },
      { name: 'threshold', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'GovernorInsufficientProposerVotes',
  },
  {
    type: 'error',
    inputs: [
      { name: 'targets', internalType: 'uint256', type: 'uint256' },
      { name: 'calldatas', internalType: 'uint256', type: 'uint256' },
      { name: 'values', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'GovernorInvalidProposalLength',
  },
  {
    type: 'error',
    inputs: [{ name: 'voter', internalType: 'address', type: 'address' }],
    name: 'GovernorInvalidSignature',
  },
  { type: 'error', inputs: [], name: 'GovernorInvalidVoteType' },
  {
    type: 'error',
    inputs: [
      { name: 'votingPeriod', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'GovernorInvalidVotingPeriod',
  },
  {
    type: 'error',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'GovernorNonexistentProposal',
  },
  {
    type: 'error',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'GovernorNotQueuedProposal',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'GovernorOnlyExecutor',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'GovernorOnlyProposer',
  },
  { type: 'error', inputs: [], name: 'GovernorQueueNotImplemented' },
  {
    type: 'error',
    inputs: [{ name: 'proposer', internalType: 'address', type: 'address' }],
    name: 'GovernorRestrictedProposer',
  },
  {
    type: 'error',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'current',
        internalType: 'enum IGovernor.ProposalState',
        type: 'uint8',
      },
      { name: 'expectedStates', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'GovernorUnexpectedProposalState',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ProposalCanceled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'proposer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'targets',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
      {
        name: 'values',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'signatures',
        internalType: 'string[]',
        type: 'string[]',
        indexed: false,
      },
      {
        name: 'calldatas',
        internalType: 'bytes[]',
        type: 'bytes[]',
        indexed: false,
      },
      {
        name: 'voteStart',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'voteEnd',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'description',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'ProposalCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ProposalExecuted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'etaSeconds',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ProposalQueued',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'voter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'support', internalType: 'uint8', type: 'uint8', indexed: false },
      {
        name: 'weight',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'reason',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'VoteCast',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'voter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'support', internalType: 'uint8', type: 'uint8', indexed: false },
      {
        name: 'weight',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'reason',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      { name: 'params', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'VoteCastWithParams',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CLOCK_MODE',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'COUNTING_MODE',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'calldatas', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'descriptionHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'cancel',
    outputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'castVote',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
      { name: 'voter', internalType: 'address', type: 'address' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'castVoteBySig',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
      { name: 'reason', internalType: 'string', type: 'string' },
    ],
    name: 'castVoteWithReason',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
      { name: 'reason', internalType: 'string', type: 'string' },
      { name: 'params', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'castVoteWithReasonAndParams',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
      { name: 'voter', internalType: 'address', type: 'address' },
      { name: 'reason', internalType: 'string', type: 'string' },
      { name: 'params', internalType: 'bytes', type: 'bytes' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'castVoteWithReasonAndParamsBySig',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'clock',
    outputs: [{ name: '', internalType: 'uint48', type: 'uint48' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'calldatas', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'descriptionHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'execute',
    outputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
      { name: 'params', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'getVotesWithParams',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasVoted',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'calldatas', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'descriptionHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'hashProposal',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'proposalDeadline',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'proposalEta',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'proposalNeedsQueuing',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'proposalProposer',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'proposalSnapshot',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proposalThreshold',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'calldatas', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'description', internalType: 'string', type: 'string' },
    ],
    name: 'propose',
    outputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'calldatas', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'descriptionHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'queue',
    outputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'timepoint', internalType: 'uint256', type: 'uint256' }],
    name: 'quorum',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'state',
    outputs: [
      { name: '', internalType: 'enum IGovernor.ProposalState', type: 'uint8' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'votingDelay',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'votingPeriod',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IVotes
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iVotesAbi = [
  {
    type: 'error',
    inputs: [{ name: 'expiry', internalType: 'uint256', type: 'uint256' }],
    name: 'VotesExpiredSignature',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'fromDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'toDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'DelegateChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'previousVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'DelegateVotesChanged',
  },
  {
    type: 'function',
    inputs: [{ name: 'delegatee', internalType: 'address', type: 'address' }],
    name: 'delegate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'delegatee', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'delegateBySig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'delegates',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'timepoint', internalType: 'uint256', type: 'uint256' }],
    name: 'getPastTotalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getPastVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Loan
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const loanAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: '_window', internalType: 'address', type: 'address' },
      { name: '_asset', internalType: 'address', type: 'address' },
      { name: '_liabilityAmount', internalType: 'uint256', type: 'uint256' },
      { name: '_borrowingRatio', internalType: 'uint32', type: 'uint32' },
      { name: '_liquidationRatio', internalType: 'uint32', type: 'uint32' },
      { name: '_interestRate', internalType: 'uint32', type: 'uint32' },
      {
        name: '_assetDataFeedAddress',
        internalType: 'address',
        type: 'address',
      },
      {
        name: '_etherDataFeedAddress',
        internalType: 'address',
        type: 'address',
      },
      { name: '_time', internalType: 'uint256', type: 'uint256' },
      { name: '_precision', internalType: 'uint8', type: 'uint8' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'address', type: 'address', indexed: false },
      { name: '', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Received',
  },
  {
    type: 'function',
    inputs: [],
    name: 'asset',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'assetDataFeedAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'dataFeedAddress', internalType: 'address', type: 'address' },
    ],
    name: 'assetToUsd',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'borrowingRatio',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'collateralizationRatio',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'collect',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'dataFeedAddress', internalType: 'address', type: 'address' },
    ],
    name: 'dataFeedPrice',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'etherDataFeedAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'interestRate',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lastCollection',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'liabilityAmount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'payment', internalType: 'uint256', type: 'uint256' }],
    name: 'liquidate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'liquidationRatio',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'payment', internalType: 'uint256', type: 'uint256' }],
    name: 'payback',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'dataFeedAddress', internalType: 'address', type: 'address' },
    ],
    name: 'usdToAsset',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'withdrawalAmount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Math
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mathAbi = [
  { type: 'error', inputs: [], name: 'MathOverflowedMulDiv' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MockAggregatorV3Interface
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mockAggregatorV3InterfaceAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_decimals', internalType: 'uint8', type: 'uint8' },
      { name: '_initialAnswer', internalType: 'int256', type: 'int256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'description',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'getAnswer',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_roundId', internalType: 'uint80', type: 'uint80' }],
    name: 'getRoundData',
    outputs: [
      { name: 'roundId', internalType: 'uint80', type: 'uint80' },
      { name: 'answer', internalType: 'int256', type: 'int256' },
      { name: 'startedAt', internalType: 'uint256', type: 'uint256' },
      { name: 'updatedAt', internalType: 'uint256', type: 'uint256' },
      { name: 'answeredInRound', internalType: 'uint80', type: 'uint80' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'getTimestamp',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'latestAnswer',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'latestRound',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'latestRoundData',
    outputs: [
      { name: 'roundId', internalType: 'uint80', type: 'uint80' },
      { name: 'answer', internalType: 'int256', type: 'int256' },
      { name: 'startedAt', internalType: 'uint256', type: 'uint256' },
      { name: 'updatedAt', internalType: 'uint256', type: 'uint256' },
      { name: 'answeredInRound', internalType: 'uint80', type: 'uint80' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'latestTimestamp',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_answer', internalType: 'int256', type: 'int256' }],
    name: 'updateAnswer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_roundId', internalType: 'uint80', type: 'uint80' },
      { name: '_answer', internalType: 'int256', type: 'int256' },
      { name: '_timestamp', internalType: 'uint256', type: 'uint256' },
      { name: '_startedAt', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'updateRoundData',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Nonces
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const noncesAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'currentNonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidAccountNonce',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ownable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ownableAbi = [
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SafeCast
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const safeCastAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'int256', type: 'int256' },
    ],
    name: 'SafeCastOverflowedIntDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
    name: 'SafeCastOverflowedIntToUint',
  },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    name: 'SafeCastOverflowedUintToInt',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ShortStrings
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const shortStringsAbi = [
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Strings
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stringsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'length', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'StringsInsufficientHexLength',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TimelockController
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const timelockControllerAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'minDelay', internalType: 'uint256', type: 'uint256' },
      { name: 'proposers', internalType: 'address[]', type: 'address[]' },
      { name: 'executors', internalType: 'address[]', type: 'address[]' },
      { name: 'admin', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  {
    type: 'error',
    inputs: [
      { name: 'delay', internalType: 'uint256', type: 'uint256' },
      { name: 'minDelay', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'TimelockInsufficientDelay',
  },
  {
    type: 'error',
    inputs: [
      { name: 'targets', internalType: 'uint256', type: 'uint256' },
      { name: 'payloads', internalType: 'uint256', type: 'uint256' },
      { name: 'values', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'TimelockInvalidOperationLength',
  },
  {
    type: 'error',
    inputs: [{ name: 'caller', internalType: 'address', type: 'address' }],
    name: 'TimelockUnauthorizedCaller',
  },
  {
    type: 'error',
    inputs: [
      { name: 'predecessorId', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'TimelockUnexecutedPredecessor',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operationId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'expectedStates', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'TimelockUnexpectedOperationState',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'index',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'target',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'CallExecuted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'salt',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
    ],
    name: 'CallSalt',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'index',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'target',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
      {
        name: 'predecessor',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'delay',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'CallScheduled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: true },
    ],
    name: 'Cancelled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldDuration',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newDuration',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'MinDelayChange',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CANCELLER_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'EXECUTOR_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'PROPOSER_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'bytes32', type: 'bytes32' }],
    name: 'cancel',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'payload', internalType: 'bytes', type: 'bytes' },
      { name: 'predecessor', internalType: 'bytes32', type: 'bytes32' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'execute',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'payloads', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'predecessor', internalType: 'bytes32', type: 'bytes32' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'executeBatch',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getMinDelay',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getOperationState',
    outputs: [
      {
        name: '',
        internalType: 'enum TimelockController.OperationState',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getTimestamp',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'predecessor', internalType: 'bytes32', type: 'bytes32' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'hashOperation',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'payloads', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'predecessor', internalType: 'bytes32', type: 'bytes32' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'hashOperationBatch',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'bytes32', type: 'bytes32' }],
    name: 'isOperation',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'bytes32', type: 'bytes32' }],
    name: 'isOperationDone',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'bytes32', type: 'bytes32' }],
    name: 'isOperationPending',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'bytes32', type: 'bytes32' }],
    name: 'isOperationReady',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC1155BatchReceived',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC1155Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'predecessor', internalType: 'bytes32', type: 'bytes32' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'delay', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'schedule',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'payloads', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'predecessor', internalType: 'bytes32', type: 'bytes32' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'delay', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'scheduleBatch',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newDelay', internalType: 'uint256', type: 'uint256' }],
    name: 'updateDelay',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Votes
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const votesAbi = [
  { type: 'error', inputs: [], name: 'CheckpointUnorderedInsertion' },
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  {
    type: 'error',
    inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }],
    name: 'ECDSAInvalidSignatureS',
  },
  {
    type: 'error',
    inputs: [
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
      { name: 'clock', internalType: 'uint48', type: 'uint48' },
    ],
    name: 'ERC5805FutureLookup',
  },
  { type: 'error', inputs: [], name: 'ERC6372InconsistentClock' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'currentNonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidAccountNonce',
  },
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
  {
    type: 'error',
    inputs: [{ name: 'expiry', internalType: 'uint256', type: 'uint256' }],
    name: 'VotesExpiredSignature',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'fromDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'toDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'DelegateChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'previousVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'DelegateVotesChanged',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'function',
    inputs: [],
    name: 'CLOCK_MODE',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'clock',
    outputs: [{ name: '', internalType: 'uint48', type: 'uint48' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'delegatee', internalType: 'address', type: 'address' }],
    name: 'delegate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'delegatee', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'delegateBySig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'delegates',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'timepoint', internalType: 'uint256', type: 'uint256' }],
    name: 'getPastTotalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getPastVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Window
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const windowAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: '_precision', internalType: 'uint8', type: 'uint8' },
      { name: 'borrowingRatio', internalType: 'uint32', type: 'uint32' },
      { name: 'daoFee', internalType: 'uint32', type: 'uint32' },
      { name: 'liquidatorFee', internalType: 'uint32', type: 'uint32' },
      { name: 'collectorFee', internalType: 'uint32', type: 'uint32' },
      {
        name: '_etherDataFeedAddress',
        internalType: 'address',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'name', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'symbol',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'dataFeedAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'rate', internalType: 'uint32', type: 'uint32', indexed: false },
      {
        name: 'liquidationRatio',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
    ],
    name: 'AssetEntity',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'loanAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'collateralAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'assetAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'liabilityAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'dataFeedAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'borrowingRatio',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'liquidationRatio',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'interestRate',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'lastCollection',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'LoanEntity',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'assetDataFeedAddress',
        internalType: 'address',
        type: 'address',
      },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'symbol', internalType: 'string', type: 'string' },
      { name: 'rate', internalType: 'uint32', type: 'uint32' },
      { name: 'liquidationRatio', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'approveAsset',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      {
        name: 'dataFeed',
        internalType: 'contract AggregatorV3Interface',
        type: 'address',
      },
    ],
    name: 'assetToUsd',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'assets',
    outputs: [{ name: '', internalType: 'contract Asset', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'dataFeed',
        internalType: 'contract AggregatorV3Interface',
        type: 'address',
      },
    ],
    name: 'dataFeedPrice',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'etherDataFeedAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'dataFeed',
        internalType: 'contract AggregatorV3Interface',
        type: 'address',
      },
    ],
    name: 'getChainlinkDataFeedLatestAnswer',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'param', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getParam',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'assetAddress', internalType: 'address', type: 'address' },
    ],
    name: 'issue',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'loanAddress', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'collateralAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'assetAddress', internalType: 'address', type: 'address' },
      { name: 'liabilityAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'dataFeedAddress', internalType: 'address', type: 'address' },
      { name: 'borrowingRatio', internalType: 'uint32', type: 'uint32' },
      { name: 'liquidationRatio', internalType: 'uint32', type: 'uint32' },
      { name: 'interestRate', internalType: 'uint32', type: 'uint32' },
      { name: 'lastCollection', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'loanEntityEvent',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'loans',
    outputs: [{ name: '', internalType: 'contract Loan', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    name: 'params',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_etherDataFeedAddress',
        internalType: 'address',
        type: 'address',
      },
    ],
    name: 'setEtherDataFeed',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'param', internalType: 'bytes32', type: 'bytes32' },
      { name: 'value', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'setParam',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      {
        name: 'dataFeed',
        internalType: 'contract AggregatorV3Interface',
        type: 'address',
      },
    ],
    name: 'usdToAsset',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// WindowInterface
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const windowInterfaceAbi = [
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getParam',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'loanAddress', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'collateralAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'assetAddress', internalType: 'address', type: 'address' },
      { name: 'liabilityAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'dataFeedAddress', internalType: 'address', type: 'address' },
      { name: 'borrowingRatio', internalType: 'uint32', type: 'uint32' },
      { name: 'liquidationRatio', internalType: 'uint32', type: 'uint32' },
      { name: 'interestRate', internalType: 'uint32', type: 'uint32' },
      { name: 'lastCollection', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'loanEntityEvent',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlAbi}__
 */
export const useReadAccessControl = /*#__PURE__*/ createUseReadContract({
  abi: accessControlAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadAccessControlDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: accessControlAbi,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadAccessControlGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: accessControlAbi,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadAccessControlHasRole = /*#__PURE__*/ createUseReadContract({
  abi: accessControlAbi,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadAccessControlSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: accessControlAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link accessControlAbi}__
 */
export const useWriteAccessControl = /*#__PURE__*/ createUseWriteContract({
  abi: accessControlAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteAccessControlGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: accessControlAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteAccessControlRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: accessControlAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteAccessControlRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: accessControlAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link accessControlAbi}__
 */
export const useSimulateAccessControl = /*#__PURE__*/ createUseSimulateContract(
  { abi: accessControlAbi },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateAccessControlGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: accessControlAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateAccessControlRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: accessControlAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateAccessControlRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: accessControlAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link accessControlAbi}__
 */
export const useWatchAccessControlEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: accessControlAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link accessControlAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchAccessControlRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: accessControlAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link accessControlAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchAccessControlRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: accessControlAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link accessControlAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchAccessControlRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: accessControlAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aggregatorV3InterfaceAbi}__
 */
export const useReadAggregatorV3Interface = /*#__PURE__*/ createUseReadContract(
  { abi: aggregatorV3InterfaceAbi },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aggregatorV3InterfaceAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadAggregatorV3InterfaceDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: aggregatorV3InterfaceAbi,
    functionName: 'decimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aggregatorV3InterfaceAbi}__ and `functionName` set to `"description"`
 */
export const useReadAggregatorV3InterfaceDescription =
  /*#__PURE__*/ createUseReadContract({
    abi: aggregatorV3InterfaceAbi,
    functionName: 'description',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aggregatorV3InterfaceAbi}__ and `functionName` set to `"getRoundData"`
 */
export const useReadAggregatorV3InterfaceGetRoundData =
  /*#__PURE__*/ createUseReadContract({
    abi: aggregatorV3InterfaceAbi,
    functionName: 'getRoundData',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aggregatorV3InterfaceAbi}__ and `functionName` set to `"latestRoundData"`
 */
export const useReadAggregatorV3InterfaceLatestRoundData =
  /*#__PURE__*/ createUseReadContract({
    abi: aggregatorV3InterfaceAbi,
    functionName: 'latestRoundData',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aggregatorV3InterfaceAbi}__ and `functionName` set to `"version"`
 */
export const useReadAggregatorV3InterfaceVersion =
  /*#__PURE__*/ createUseReadContract({
    abi: aggregatorV3InterfaceAbi,
    functionName: 'version',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionTokenAbi}__
 */
export const useReadAionToken = /*#__PURE__*/ createUseReadContract({
  abi: aionTokenAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"CLOCK_MODE"`
 */
export const useReadAionTokenClockMode = /*#__PURE__*/ createUseReadContract({
  abi: aionTokenAbi,
  functionName: 'CLOCK_MODE',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 */
export const useReadAionTokenDomainSeparator =
  /*#__PURE__*/ createUseReadContract({
    abi: aionTokenAbi,
    functionName: 'DOMAIN_SEPARATOR',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadAionTokenAllowance = /*#__PURE__*/ createUseReadContract({
  abi: aionTokenAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadAionTokenBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: aionTokenAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"checkpoints"`
 */
export const useReadAionTokenCheckpoints = /*#__PURE__*/ createUseReadContract({
  abi: aionTokenAbi,
  functionName: 'checkpoints',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"clock"`
 */
export const useReadAionTokenClock = /*#__PURE__*/ createUseReadContract({
  abi: aionTokenAbi,
  functionName: 'clock',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadAionTokenDecimals = /*#__PURE__*/ createUseReadContract({
  abi: aionTokenAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"delegates"`
 */
export const useReadAionTokenDelegates = /*#__PURE__*/ createUseReadContract({
  abi: aionTokenAbi,
  functionName: 'delegates',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"eip712Domain"`
 */
export const useReadAionTokenEip712Domain = /*#__PURE__*/ createUseReadContract(
  { abi: aionTokenAbi, functionName: 'eip712Domain' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"getPastTotalSupply"`
 */
export const useReadAionTokenGetPastTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: aionTokenAbi,
    functionName: 'getPastTotalSupply',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"getPastVotes"`
 */
export const useReadAionTokenGetPastVotes = /*#__PURE__*/ createUseReadContract(
  { abi: aionTokenAbi, functionName: 'getPastVotes' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"getVotes"`
 */
export const useReadAionTokenGetVotes = /*#__PURE__*/ createUseReadContract({
  abi: aionTokenAbi,
  functionName: 'getVotes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"name"`
 */
export const useReadAionTokenName = /*#__PURE__*/ createUseReadContract({
  abi: aionTokenAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"nonces"`
 */
export const useReadAionTokenNonces = /*#__PURE__*/ createUseReadContract({
  abi: aionTokenAbi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"numCheckpoints"`
 */
export const useReadAionTokenNumCheckpoints =
  /*#__PURE__*/ createUseReadContract({
    abi: aionTokenAbi,
    functionName: 'numCheckpoints',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadAionTokenSymbol = /*#__PURE__*/ createUseReadContract({
  abi: aionTokenAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadAionTokenTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: aionTokenAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aionTokenAbi}__
 */
export const useWriteAionToken = /*#__PURE__*/ createUseWriteContract({
  abi: aionTokenAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteAionTokenApprove = /*#__PURE__*/ createUseWriteContract({
  abi: aionTokenAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"delegate"`
 */
export const useWriteAionTokenDelegate = /*#__PURE__*/ createUseWriteContract({
  abi: aionTokenAbi,
  functionName: 'delegate',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"delegateBySig"`
 */
export const useWriteAionTokenDelegateBySig =
  /*#__PURE__*/ createUseWriteContract({
    abi: aionTokenAbi,
    functionName: 'delegateBySig',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"permit"`
 */
export const useWriteAionTokenPermit = /*#__PURE__*/ createUseWriteContract({
  abi: aionTokenAbi,
  functionName: 'permit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteAionTokenTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: aionTokenAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteAionTokenTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: aionTokenAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aionTokenAbi}__
 */
export const useSimulateAionToken = /*#__PURE__*/ createUseSimulateContract({
  abi: aionTokenAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateAionTokenApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: aionTokenAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"delegate"`
 */
export const useSimulateAionTokenDelegate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: aionTokenAbi,
    functionName: 'delegate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"delegateBySig"`
 */
export const useSimulateAionTokenDelegateBySig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: aionTokenAbi,
    functionName: 'delegateBySig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"permit"`
 */
export const useSimulateAionTokenPermit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: aionTokenAbi,
    functionName: 'permit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateAionTokenTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: aionTokenAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateAionTokenTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: aionTokenAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link aionTokenAbi}__
 */
export const useWatchAionTokenEvent = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: aionTokenAbi },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link aionTokenAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchAionTokenApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: aionTokenAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link aionTokenAbi}__ and `eventName` set to `"DelegateChanged"`
 */
export const useWatchAionTokenDelegateChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: aionTokenAbi,
    eventName: 'DelegateChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link aionTokenAbi}__ and `eventName` set to `"DelegateVotesChanged"`
 */
export const useWatchAionTokenDelegateVotesChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: aionTokenAbi,
    eventName: 'DelegateVotesChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link aionTokenAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const useWatchAionTokenEip712DomainChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: aionTokenAbi,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link aionTokenAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchAionTokenTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: aionTokenAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicGovernorAbi}__
 */
export const useReadAionicGovernor = /*#__PURE__*/ createUseReadContract({
  abi: aionicGovernorAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"BALLOT_TYPEHASH"`
 */
export const useReadAionicGovernorBallotTypehash =
  /*#__PURE__*/ createUseReadContract({
    abi: aionicGovernorAbi,
    functionName: 'BALLOT_TYPEHASH',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"CLOCK_MODE"`
 */
export const useReadAionicGovernorClockMode =
  /*#__PURE__*/ createUseReadContract({
    abi: aionicGovernorAbi,
    functionName: 'CLOCK_MODE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"COUNTING_MODE"`
 */
export const useReadAionicGovernorCountingMode =
  /*#__PURE__*/ createUseReadContract({
    abi: aionicGovernorAbi,
    functionName: 'COUNTING_MODE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"EXTENDED_BALLOT_TYPEHASH"`
 */
export const useReadAionicGovernorExtendedBallotTypehash =
  /*#__PURE__*/ createUseReadContract({
    abi: aionicGovernorAbi,
    functionName: 'EXTENDED_BALLOT_TYPEHASH',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"clock"`
 */
export const useReadAionicGovernorClock = /*#__PURE__*/ createUseReadContract({
  abi: aionicGovernorAbi,
  functionName: 'clock',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"eip712Domain"`
 */
export const useReadAionicGovernorEip712Domain =
  /*#__PURE__*/ createUseReadContract({
    abi: aionicGovernorAbi,
    functionName: 'eip712Domain',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"getVotes"`
 */
export const useReadAionicGovernorGetVotes =
  /*#__PURE__*/ createUseReadContract({
    abi: aionicGovernorAbi,
    functionName: 'getVotes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"getVotesWithParams"`
 */
export const useReadAionicGovernorGetVotesWithParams =
  /*#__PURE__*/ createUseReadContract({
    abi: aionicGovernorAbi,
    functionName: 'getVotesWithParams',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"hasVoted"`
 */
export const useReadAionicGovernorHasVoted =
  /*#__PURE__*/ createUseReadContract({
    abi: aionicGovernorAbi,
    functionName: 'hasVoted',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"hashProposal"`
 */
export const useReadAionicGovernorHashProposal =
  /*#__PURE__*/ createUseReadContract({
    abi: aionicGovernorAbi,
    functionName: 'hashProposal',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"name"`
 */
export const useReadAionicGovernorName = /*#__PURE__*/ createUseReadContract({
  abi: aionicGovernorAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"nonces"`
 */
export const useReadAionicGovernorNonces = /*#__PURE__*/ createUseReadContract({
  abi: aionicGovernorAbi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"proposalDeadline"`
 */
export const useReadAionicGovernorProposalDeadline =
  /*#__PURE__*/ createUseReadContract({
    abi: aionicGovernorAbi,
    functionName: 'proposalDeadline',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"proposalEta"`
 */
export const useReadAionicGovernorProposalEta =
  /*#__PURE__*/ createUseReadContract({
    abi: aionicGovernorAbi,
    functionName: 'proposalEta',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"proposalNeedsQueuing"`
 */
export const useReadAionicGovernorProposalNeedsQueuing =
  /*#__PURE__*/ createUseReadContract({
    abi: aionicGovernorAbi,
    functionName: 'proposalNeedsQueuing',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"proposalProposer"`
 */
export const useReadAionicGovernorProposalProposer =
  /*#__PURE__*/ createUseReadContract({
    abi: aionicGovernorAbi,
    functionName: 'proposalProposer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"proposalSnapshot"`
 */
export const useReadAionicGovernorProposalSnapshot =
  /*#__PURE__*/ createUseReadContract({
    abi: aionicGovernorAbi,
    functionName: 'proposalSnapshot',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"proposalThreshold"`
 */
export const useReadAionicGovernorProposalThreshold =
  /*#__PURE__*/ createUseReadContract({
    abi: aionicGovernorAbi,
    functionName: 'proposalThreshold',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"proposalVotes"`
 */
export const useReadAionicGovernorProposalVotes =
  /*#__PURE__*/ createUseReadContract({
    abi: aionicGovernorAbi,
    functionName: 'proposalVotes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"quorum"`
 */
export const useReadAionicGovernorQuorum = /*#__PURE__*/ createUseReadContract({
  abi: aionicGovernorAbi,
  functionName: 'quorum',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"quorumDenominator"`
 */
export const useReadAionicGovernorQuorumDenominator =
  /*#__PURE__*/ createUseReadContract({
    abi: aionicGovernorAbi,
    functionName: 'quorumDenominator',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"quorumNumerator"`
 */
export const useReadAionicGovernorQuorumNumerator =
  /*#__PURE__*/ createUseReadContract({
    abi: aionicGovernorAbi,
    functionName: 'quorumNumerator',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"state"`
 */
export const useReadAionicGovernorState = /*#__PURE__*/ createUseReadContract({
  abi: aionicGovernorAbi,
  functionName: 'state',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadAionicGovernorSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: aionicGovernorAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"timelock"`
 */
export const useReadAionicGovernorTimelock =
  /*#__PURE__*/ createUseReadContract({
    abi: aionicGovernorAbi,
    functionName: 'timelock',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"token"`
 */
export const useReadAionicGovernorToken = /*#__PURE__*/ createUseReadContract({
  abi: aionicGovernorAbi,
  functionName: 'token',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"version"`
 */
export const useReadAionicGovernorVersion = /*#__PURE__*/ createUseReadContract(
  { abi: aionicGovernorAbi, functionName: 'version' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"votingDelay"`
 */
export const useReadAionicGovernorVotingDelay =
  /*#__PURE__*/ createUseReadContract({
    abi: aionicGovernorAbi,
    functionName: 'votingDelay',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"votingPeriod"`
 */
export const useReadAionicGovernorVotingPeriod =
  /*#__PURE__*/ createUseReadContract({
    abi: aionicGovernorAbi,
    functionName: 'votingPeriod',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aionicGovernorAbi}__
 */
export const useWriteAionicGovernor = /*#__PURE__*/ createUseWriteContract({
  abi: aionicGovernorAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"cancel"`
 */
export const useWriteAionicGovernorCancel =
  /*#__PURE__*/ createUseWriteContract({
    abi: aionicGovernorAbi,
    functionName: 'cancel',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"castVote"`
 */
export const useWriteAionicGovernorCastVote =
  /*#__PURE__*/ createUseWriteContract({
    abi: aionicGovernorAbi,
    functionName: 'castVote',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"castVoteBySig"`
 */
export const useWriteAionicGovernorCastVoteBySig =
  /*#__PURE__*/ createUseWriteContract({
    abi: aionicGovernorAbi,
    functionName: 'castVoteBySig',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"castVoteWithReason"`
 */
export const useWriteAionicGovernorCastVoteWithReason =
  /*#__PURE__*/ createUseWriteContract({
    abi: aionicGovernorAbi,
    functionName: 'castVoteWithReason',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"castVoteWithReasonAndParams"`
 */
export const useWriteAionicGovernorCastVoteWithReasonAndParams =
  /*#__PURE__*/ createUseWriteContract({
    abi: aionicGovernorAbi,
    functionName: 'castVoteWithReasonAndParams',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"castVoteWithReasonAndParamsBySig"`
 */
export const useWriteAionicGovernorCastVoteWithReasonAndParamsBySig =
  /*#__PURE__*/ createUseWriteContract({
    abi: aionicGovernorAbi,
    functionName: 'castVoteWithReasonAndParamsBySig',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"execute"`
 */
export const useWriteAionicGovernorExecute =
  /*#__PURE__*/ createUseWriteContract({
    abi: aionicGovernorAbi,
    functionName: 'execute',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const useWriteAionicGovernorOnErc1155BatchReceived =
  /*#__PURE__*/ createUseWriteContract({
    abi: aionicGovernorAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const useWriteAionicGovernorOnErc1155Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: aionicGovernorAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useWriteAionicGovernorOnErc721Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: aionicGovernorAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"propose"`
 */
export const useWriteAionicGovernorPropose =
  /*#__PURE__*/ createUseWriteContract({
    abi: aionicGovernorAbi,
    functionName: 'propose',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"queue"`
 */
export const useWriteAionicGovernorQueue = /*#__PURE__*/ createUseWriteContract(
  { abi: aionicGovernorAbi, functionName: 'queue' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"relay"`
 */
export const useWriteAionicGovernorRelay = /*#__PURE__*/ createUseWriteContract(
  { abi: aionicGovernorAbi, functionName: 'relay' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"updateQuorumNumerator"`
 */
export const useWriteAionicGovernorUpdateQuorumNumerator =
  /*#__PURE__*/ createUseWriteContract({
    abi: aionicGovernorAbi,
    functionName: 'updateQuorumNumerator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"updateTimelock"`
 */
export const useWriteAionicGovernorUpdateTimelock =
  /*#__PURE__*/ createUseWriteContract({
    abi: aionicGovernorAbi,
    functionName: 'updateTimelock',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aionicGovernorAbi}__
 */
export const useSimulateAionicGovernor =
  /*#__PURE__*/ createUseSimulateContract({ abi: aionicGovernorAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"cancel"`
 */
export const useSimulateAionicGovernorCancel =
  /*#__PURE__*/ createUseSimulateContract({
    abi: aionicGovernorAbi,
    functionName: 'cancel',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"castVote"`
 */
export const useSimulateAionicGovernorCastVote =
  /*#__PURE__*/ createUseSimulateContract({
    abi: aionicGovernorAbi,
    functionName: 'castVote',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"castVoteBySig"`
 */
export const useSimulateAionicGovernorCastVoteBySig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: aionicGovernorAbi,
    functionName: 'castVoteBySig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"castVoteWithReason"`
 */
export const useSimulateAionicGovernorCastVoteWithReason =
  /*#__PURE__*/ createUseSimulateContract({
    abi: aionicGovernorAbi,
    functionName: 'castVoteWithReason',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"castVoteWithReasonAndParams"`
 */
export const useSimulateAionicGovernorCastVoteWithReasonAndParams =
  /*#__PURE__*/ createUseSimulateContract({
    abi: aionicGovernorAbi,
    functionName: 'castVoteWithReasonAndParams',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"castVoteWithReasonAndParamsBySig"`
 */
export const useSimulateAionicGovernorCastVoteWithReasonAndParamsBySig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: aionicGovernorAbi,
    functionName: 'castVoteWithReasonAndParamsBySig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"execute"`
 */
export const useSimulateAionicGovernorExecute =
  /*#__PURE__*/ createUseSimulateContract({
    abi: aionicGovernorAbi,
    functionName: 'execute',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const useSimulateAionicGovernorOnErc1155BatchReceived =
  /*#__PURE__*/ createUseSimulateContract({
    abi: aionicGovernorAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const useSimulateAionicGovernorOnErc1155Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: aionicGovernorAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useSimulateAionicGovernorOnErc721Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: aionicGovernorAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"propose"`
 */
export const useSimulateAionicGovernorPropose =
  /*#__PURE__*/ createUseSimulateContract({
    abi: aionicGovernorAbi,
    functionName: 'propose',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"queue"`
 */
export const useSimulateAionicGovernorQueue =
  /*#__PURE__*/ createUseSimulateContract({
    abi: aionicGovernorAbi,
    functionName: 'queue',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"relay"`
 */
export const useSimulateAionicGovernorRelay =
  /*#__PURE__*/ createUseSimulateContract({
    abi: aionicGovernorAbi,
    functionName: 'relay',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"updateQuorumNumerator"`
 */
export const useSimulateAionicGovernorUpdateQuorumNumerator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: aionicGovernorAbi,
    functionName: 'updateQuorumNumerator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"updateTimelock"`
 */
export const useSimulateAionicGovernorUpdateTimelock =
  /*#__PURE__*/ createUseSimulateContract({
    abi: aionicGovernorAbi,
    functionName: 'updateTimelock',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link aionicGovernorAbi}__
 */
export const useWatchAionicGovernorEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: aionicGovernorAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link aionicGovernorAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const useWatchAionicGovernorEip712DomainChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: aionicGovernorAbi,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link aionicGovernorAbi}__ and `eventName` set to `"ProposalCanceled"`
 */
export const useWatchAionicGovernorProposalCanceledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: aionicGovernorAbi,
    eventName: 'ProposalCanceled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link aionicGovernorAbi}__ and `eventName` set to `"ProposalCreated"`
 */
export const useWatchAionicGovernorProposalCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: aionicGovernorAbi,
    eventName: 'ProposalCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link aionicGovernorAbi}__ and `eventName` set to `"ProposalExecuted"`
 */
export const useWatchAionicGovernorProposalExecutedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: aionicGovernorAbi,
    eventName: 'ProposalExecuted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link aionicGovernorAbi}__ and `eventName` set to `"ProposalQueued"`
 */
export const useWatchAionicGovernorProposalQueuedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: aionicGovernorAbi,
    eventName: 'ProposalQueued',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link aionicGovernorAbi}__ and `eventName` set to `"QuorumNumeratorUpdated"`
 */
export const useWatchAionicGovernorQuorumNumeratorUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: aionicGovernorAbi,
    eventName: 'QuorumNumeratorUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link aionicGovernorAbi}__ and `eventName` set to `"TimelockChange"`
 */
export const useWatchAionicGovernorTimelockChangeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: aionicGovernorAbi,
    eventName: 'TimelockChange',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link aionicGovernorAbi}__ and `eventName` set to `"VoteCast"`
 */
export const useWatchAionicGovernorVoteCastEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: aionicGovernorAbi,
    eventName: 'VoteCast',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link aionicGovernorAbi}__ and `eventName` set to `"VoteCastWithParams"`
 */
export const useWatchAionicGovernorVoteCastWithParamsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: aionicGovernorAbi,
    eventName: 'VoteCastWithParams',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicTimelockAbi}__
 */
export const useReadAionicTimelock = /*#__PURE__*/ createUseReadContract({
  abi: aionicTimelockAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"CANCELLER_ROLE"`
 */
export const useReadAionicTimelockCancellerRole =
  /*#__PURE__*/ createUseReadContract({
    abi: aionicTimelockAbi,
    functionName: 'CANCELLER_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadAionicTimelockDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: aionicTimelockAbi,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"EXECUTOR_ROLE"`
 */
export const useReadAionicTimelockExecutorRole =
  /*#__PURE__*/ createUseReadContract({
    abi: aionicTimelockAbi,
    functionName: 'EXECUTOR_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"PROPOSER_ROLE"`
 */
export const useReadAionicTimelockProposerRole =
  /*#__PURE__*/ createUseReadContract({
    abi: aionicTimelockAbi,
    functionName: 'PROPOSER_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"getMinDelay"`
 */
export const useReadAionicTimelockGetMinDelay =
  /*#__PURE__*/ createUseReadContract({
    abi: aionicTimelockAbi,
    functionName: 'getMinDelay',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"getOperationState"`
 */
export const useReadAionicTimelockGetOperationState =
  /*#__PURE__*/ createUseReadContract({
    abi: aionicTimelockAbi,
    functionName: 'getOperationState',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadAionicTimelockGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: aionicTimelockAbi,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"getTimestamp"`
 */
export const useReadAionicTimelockGetTimestamp =
  /*#__PURE__*/ createUseReadContract({
    abi: aionicTimelockAbi,
    functionName: 'getTimestamp',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadAionicTimelockHasRole = /*#__PURE__*/ createUseReadContract(
  { abi: aionicTimelockAbi, functionName: 'hasRole' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"hashOperation"`
 */
export const useReadAionicTimelockHashOperation =
  /*#__PURE__*/ createUseReadContract({
    abi: aionicTimelockAbi,
    functionName: 'hashOperation',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"hashOperationBatch"`
 */
export const useReadAionicTimelockHashOperationBatch =
  /*#__PURE__*/ createUseReadContract({
    abi: aionicTimelockAbi,
    functionName: 'hashOperationBatch',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"isOperation"`
 */
export const useReadAionicTimelockIsOperation =
  /*#__PURE__*/ createUseReadContract({
    abi: aionicTimelockAbi,
    functionName: 'isOperation',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"isOperationDone"`
 */
export const useReadAionicTimelockIsOperationDone =
  /*#__PURE__*/ createUseReadContract({
    abi: aionicTimelockAbi,
    functionName: 'isOperationDone',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"isOperationPending"`
 */
export const useReadAionicTimelockIsOperationPending =
  /*#__PURE__*/ createUseReadContract({
    abi: aionicTimelockAbi,
    functionName: 'isOperationPending',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"isOperationReady"`
 */
export const useReadAionicTimelockIsOperationReady =
  /*#__PURE__*/ createUseReadContract({
    abi: aionicTimelockAbi,
    functionName: 'isOperationReady',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadAionicTimelockSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: aionicTimelockAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aionicTimelockAbi}__
 */
export const useWriteAionicTimelock = /*#__PURE__*/ createUseWriteContract({
  abi: aionicTimelockAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"cancel"`
 */
export const useWriteAionicTimelockCancel =
  /*#__PURE__*/ createUseWriteContract({
    abi: aionicTimelockAbi,
    functionName: 'cancel',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"execute"`
 */
export const useWriteAionicTimelockExecute =
  /*#__PURE__*/ createUseWriteContract({
    abi: aionicTimelockAbi,
    functionName: 'execute',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"executeBatch"`
 */
export const useWriteAionicTimelockExecuteBatch =
  /*#__PURE__*/ createUseWriteContract({
    abi: aionicTimelockAbi,
    functionName: 'executeBatch',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteAionicTimelockGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: aionicTimelockAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const useWriteAionicTimelockOnErc1155BatchReceived =
  /*#__PURE__*/ createUseWriteContract({
    abi: aionicTimelockAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const useWriteAionicTimelockOnErc1155Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: aionicTimelockAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useWriteAionicTimelockOnErc721Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: aionicTimelockAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteAionicTimelockRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: aionicTimelockAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteAionicTimelockRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: aionicTimelockAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"schedule"`
 */
export const useWriteAionicTimelockSchedule =
  /*#__PURE__*/ createUseWriteContract({
    abi: aionicTimelockAbi,
    functionName: 'schedule',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"scheduleBatch"`
 */
export const useWriteAionicTimelockScheduleBatch =
  /*#__PURE__*/ createUseWriteContract({
    abi: aionicTimelockAbi,
    functionName: 'scheduleBatch',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"updateDelay"`
 */
export const useWriteAionicTimelockUpdateDelay =
  /*#__PURE__*/ createUseWriteContract({
    abi: aionicTimelockAbi,
    functionName: 'updateDelay',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aionicTimelockAbi}__
 */
export const useSimulateAionicTimelock =
  /*#__PURE__*/ createUseSimulateContract({ abi: aionicTimelockAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"cancel"`
 */
export const useSimulateAionicTimelockCancel =
  /*#__PURE__*/ createUseSimulateContract({
    abi: aionicTimelockAbi,
    functionName: 'cancel',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"execute"`
 */
export const useSimulateAionicTimelockExecute =
  /*#__PURE__*/ createUseSimulateContract({
    abi: aionicTimelockAbi,
    functionName: 'execute',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"executeBatch"`
 */
export const useSimulateAionicTimelockExecuteBatch =
  /*#__PURE__*/ createUseSimulateContract({
    abi: aionicTimelockAbi,
    functionName: 'executeBatch',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateAionicTimelockGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: aionicTimelockAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const useSimulateAionicTimelockOnErc1155BatchReceived =
  /*#__PURE__*/ createUseSimulateContract({
    abi: aionicTimelockAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const useSimulateAionicTimelockOnErc1155Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: aionicTimelockAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useSimulateAionicTimelockOnErc721Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: aionicTimelockAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateAionicTimelockRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: aionicTimelockAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateAionicTimelockRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: aionicTimelockAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"schedule"`
 */
export const useSimulateAionicTimelockSchedule =
  /*#__PURE__*/ createUseSimulateContract({
    abi: aionicTimelockAbi,
    functionName: 'schedule',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"scheduleBatch"`
 */
export const useSimulateAionicTimelockScheduleBatch =
  /*#__PURE__*/ createUseSimulateContract({
    abi: aionicTimelockAbi,
    functionName: 'scheduleBatch',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"updateDelay"`
 */
export const useSimulateAionicTimelockUpdateDelay =
  /*#__PURE__*/ createUseSimulateContract({
    abi: aionicTimelockAbi,
    functionName: 'updateDelay',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link aionicTimelockAbi}__
 */
export const useWatchAionicTimelockEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: aionicTimelockAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link aionicTimelockAbi}__ and `eventName` set to `"CallExecuted"`
 */
export const useWatchAionicTimelockCallExecutedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: aionicTimelockAbi,
    eventName: 'CallExecuted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link aionicTimelockAbi}__ and `eventName` set to `"CallSalt"`
 */
export const useWatchAionicTimelockCallSaltEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: aionicTimelockAbi,
    eventName: 'CallSalt',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link aionicTimelockAbi}__ and `eventName` set to `"CallScheduled"`
 */
export const useWatchAionicTimelockCallScheduledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: aionicTimelockAbi,
    eventName: 'CallScheduled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link aionicTimelockAbi}__ and `eventName` set to `"Cancelled"`
 */
export const useWatchAionicTimelockCancelledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: aionicTimelockAbi,
    eventName: 'Cancelled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link aionicTimelockAbi}__ and `eventName` set to `"MinDelayChange"`
 */
export const useWatchAionicTimelockMinDelayChangeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: aionicTimelockAbi,
    eventName: 'MinDelayChange',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link aionicTimelockAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchAionicTimelockRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: aionicTimelockAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link aionicTimelockAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchAionicTimelockRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: aionicTimelockAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link aionicTimelockAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchAionicTimelockRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: aionicTimelockAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link assetAbi}__
 */
export const useReadAsset = /*#__PURE__*/ createUseReadContract({
  abi: assetAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadAssetAllowance = /*#__PURE__*/ createUseReadContract({
  abi: assetAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"assetDataFeedAddress"`
 */
export const useReadAssetAssetDataFeedAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: assetAbi,
    functionName: 'assetDataFeedAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadAssetBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: assetAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadAssetDecimals = /*#__PURE__*/ createUseReadContract({
  abi: assetAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"interestRate"`
 */
export const useReadAssetInterestRate = /*#__PURE__*/ createUseReadContract({
  abi: assetAbi,
  functionName: 'interestRate',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"liquidationRatio"`
 */
export const useReadAssetLiquidationRatio = /*#__PURE__*/ createUseReadContract(
  { abi: assetAbi, functionName: 'liquidationRatio' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"name"`
 */
export const useReadAssetName = /*#__PURE__*/ createUseReadContract({
  abi: assetAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"owner"`
 */
export const useReadAssetOwner = /*#__PURE__*/ createUseReadContract({
  abi: assetAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadAssetSymbol = /*#__PURE__*/ createUseReadContract({
  abi: assetAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadAssetTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: assetAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link assetAbi}__
 */
export const useWriteAsset = /*#__PURE__*/ createUseWriteContract({
  abi: assetAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteAssetApprove = /*#__PURE__*/ createUseWriteContract({
  abi: assetAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"burn"`
 */
export const useWriteAssetBurn = /*#__PURE__*/ createUseWriteContract({
  abi: assetAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"burnFrom"`
 */
export const useWriteAssetBurnFrom = /*#__PURE__*/ createUseWriteContract({
  abi: assetAbi,
  functionName: 'burnFrom',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteAssetMint = /*#__PURE__*/ createUseWriteContract({
  abi: assetAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteAssetRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: assetAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"setDataFeedAddress"`
 */
export const useWriteAssetSetDataFeedAddress =
  /*#__PURE__*/ createUseWriteContract({
    abi: assetAbi,
    functionName: 'setDataFeedAddress',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"setLiquidationRatio"`
 */
export const useWriteAssetSetLiquidationRatio =
  /*#__PURE__*/ createUseWriteContract({
    abi: assetAbi,
    functionName: 'setLiquidationRatio',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"setRate"`
 */
export const useWriteAssetSetRate = /*#__PURE__*/ createUseWriteContract({
  abi: assetAbi,
  functionName: 'setRate',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteAssetTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: assetAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteAssetTransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: assetAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteAssetTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: assetAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link assetAbi}__
 */
export const useSimulateAsset = /*#__PURE__*/ createUseSimulateContract({
  abi: assetAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateAssetApprove = /*#__PURE__*/ createUseSimulateContract({
  abi: assetAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"burn"`
 */
export const useSimulateAssetBurn = /*#__PURE__*/ createUseSimulateContract({
  abi: assetAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"burnFrom"`
 */
export const useSimulateAssetBurnFrom = /*#__PURE__*/ createUseSimulateContract(
  { abi: assetAbi, functionName: 'burnFrom' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateAssetMint = /*#__PURE__*/ createUseSimulateContract({
  abi: assetAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateAssetRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: assetAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"setDataFeedAddress"`
 */
export const useSimulateAssetSetDataFeedAddress =
  /*#__PURE__*/ createUseSimulateContract({
    abi: assetAbi,
    functionName: 'setDataFeedAddress',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"setLiquidationRatio"`
 */
export const useSimulateAssetSetLiquidationRatio =
  /*#__PURE__*/ createUseSimulateContract({
    abi: assetAbi,
    functionName: 'setLiquidationRatio',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"setRate"`
 */
export const useSimulateAssetSetRate = /*#__PURE__*/ createUseSimulateContract({
  abi: assetAbi,
  functionName: 'setRate',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateAssetTransfer = /*#__PURE__*/ createUseSimulateContract(
  { abi: assetAbi, functionName: 'transfer' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateAssetTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: assetAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateAssetTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: assetAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link assetAbi}__
 */
export const useWatchAssetEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: assetAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link assetAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchAssetApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: assetAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link assetAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchAssetOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: assetAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link assetAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchAssetTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: assetAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link eip712Abi}__
 */
export const useReadEip712 = /*#__PURE__*/ createUseReadContract({
  abi: eip712Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link eip712Abi}__ and `functionName` set to `"eip712Domain"`
 */
export const useReadEip712Eip712Domain = /*#__PURE__*/ createUseReadContract({
  abi: eip712Abi,
  functionName: 'eip712Domain',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link eip712Abi}__
 */
export const useWatchEip712Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: eip712Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link eip712Abi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const useWatchEip712Eip712DomainChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: eip712Abi,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155HolderAbi}__
 */
export const useReadErc1155Holder = /*#__PURE__*/ createUseReadContract({
  abi: erc1155HolderAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155HolderAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadErc1155HolderSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: erc1155HolderAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc1155HolderAbi}__
 */
export const useWriteErc1155Holder = /*#__PURE__*/ createUseWriteContract({
  abi: erc1155HolderAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc1155HolderAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const useWriteErc1155HolderOnErc1155BatchReceived =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc1155HolderAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc1155HolderAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const useWriteErc1155HolderOnErc1155Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc1155HolderAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc1155HolderAbi}__
 */
export const useSimulateErc1155Holder = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc1155HolderAbi },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc1155HolderAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const useSimulateErc1155HolderOnErc1155BatchReceived =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc1155HolderAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc1155HolderAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const useSimulateErc1155HolderOnErc1155Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc1155HolderAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc165Abi}__
 */
export const useReadErc165 = /*#__PURE__*/ createUseReadContract({
  abi: erc165Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc165Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadErc165SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: erc165Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useReadErc20 = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const useReadErc20Decimals = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc20Name = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc20Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc20TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWriteErc20 = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc20TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useSimulateErc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc20Approve = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc20Transfer = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc20Abi, functionName: 'transfer' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWatchErc20Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20BurnableAbi}__
 */
export const useReadErc20Burnable = /*#__PURE__*/ createUseReadContract({
  abi: erc20BurnableAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc20BurnableAllowance =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20BurnableAbi,
    functionName: 'allowance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc20BurnableBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20BurnableAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadErc20BurnableDecimals = /*#__PURE__*/ createUseReadContract(
  { abi: erc20BurnableAbi, functionName: 'decimals' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"name"`
 */
export const useReadErc20BurnableName = /*#__PURE__*/ createUseReadContract({
  abi: erc20BurnableAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc20BurnableSymbol = /*#__PURE__*/ createUseReadContract({
  abi: erc20BurnableAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc20BurnableTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20BurnableAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20BurnableAbi}__
 */
export const useWriteErc20Burnable = /*#__PURE__*/ createUseWriteContract({
  abi: erc20BurnableAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc20BurnableApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20BurnableAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"burn"`
 */
export const useWriteErc20BurnableBurn = /*#__PURE__*/ createUseWriteContract({
  abi: erc20BurnableAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"burnFrom"`
 */
export const useWriteErc20BurnableBurnFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20BurnableAbi,
    functionName: 'burnFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc20BurnableTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20BurnableAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc20BurnableTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20BurnableAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20BurnableAbi}__
 */
export const useSimulateErc20Burnable = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc20BurnableAbi },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc20BurnableApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20BurnableAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"burn"`
 */
export const useSimulateErc20BurnableBurn =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20BurnableAbi,
    functionName: 'burn',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"burnFrom"`
 */
export const useSimulateErc20BurnableBurnFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20BurnableAbi,
    functionName: 'burnFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc20BurnableTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20BurnableAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc20BurnableTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20BurnableAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20BurnableAbi}__
 */
export const useWatchErc20BurnableEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: erc20BurnableAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20BurnableAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc20BurnableApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20BurnableAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20BurnableAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc20BurnableTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20BurnableAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PermitAbi}__
 */
export const useReadErc20Permit = /*#__PURE__*/ createUseReadContract({
  abi: erc20PermitAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 */
export const useReadErc20PermitDomainSeparator =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20PermitAbi,
    functionName: 'DOMAIN_SEPARATOR',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc20PermitAllowance = /*#__PURE__*/ createUseReadContract({
  abi: erc20PermitAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc20PermitBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc20PermitAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadErc20PermitDecimals = /*#__PURE__*/ createUseReadContract({
  abi: erc20PermitAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"eip712Domain"`
 */
export const useReadErc20PermitEip712Domain =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20PermitAbi,
    functionName: 'eip712Domain',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"name"`
 */
export const useReadErc20PermitName = /*#__PURE__*/ createUseReadContract({
  abi: erc20PermitAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"nonces"`
 */
export const useReadErc20PermitNonces = /*#__PURE__*/ createUseReadContract({
  abi: erc20PermitAbi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc20PermitSymbol = /*#__PURE__*/ createUseReadContract({
  abi: erc20PermitAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc20PermitTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20PermitAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PermitAbi}__
 */
export const useWriteErc20Permit = /*#__PURE__*/ createUseWriteContract({
  abi: erc20PermitAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc20PermitApprove = /*#__PURE__*/ createUseWriteContract({
  abi: erc20PermitAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"permit"`
 */
export const useWriteErc20PermitPermit = /*#__PURE__*/ createUseWriteContract({
  abi: erc20PermitAbi,
  functionName: 'permit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc20PermitTransfer = /*#__PURE__*/ createUseWriteContract(
  { abi: erc20PermitAbi, functionName: 'transfer' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc20PermitTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20PermitAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PermitAbi}__
 */
export const useSimulateErc20Permit = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20PermitAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc20PermitApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PermitAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"permit"`
 */
export const useSimulateErc20PermitPermit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PermitAbi,
    functionName: 'permit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc20PermitTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PermitAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc20PermitTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PermitAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PermitAbi}__
 */
export const useWatchErc20PermitEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: erc20PermitAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PermitAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc20PermitApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PermitAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PermitAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const useWatchErc20PermitEip712DomainChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PermitAbi,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PermitAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc20PermitTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PermitAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20VotesAbi}__
 */
export const useReadErc20Votes = /*#__PURE__*/ createUseReadContract({
  abi: erc20VotesAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"CLOCK_MODE"`
 */
export const useReadErc20VotesClockMode = /*#__PURE__*/ createUseReadContract({
  abi: erc20VotesAbi,
  functionName: 'CLOCK_MODE',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc20VotesAllowance = /*#__PURE__*/ createUseReadContract({
  abi: erc20VotesAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc20VotesBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc20VotesAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"checkpoints"`
 */
export const useReadErc20VotesCheckpoints = /*#__PURE__*/ createUseReadContract(
  { abi: erc20VotesAbi, functionName: 'checkpoints' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"clock"`
 */
export const useReadErc20VotesClock = /*#__PURE__*/ createUseReadContract({
  abi: erc20VotesAbi,
  functionName: 'clock',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadErc20VotesDecimals = /*#__PURE__*/ createUseReadContract({
  abi: erc20VotesAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"delegates"`
 */
export const useReadErc20VotesDelegates = /*#__PURE__*/ createUseReadContract({
  abi: erc20VotesAbi,
  functionName: 'delegates',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"eip712Domain"`
 */
export const useReadErc20VotesEip712Domain =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20VotesAbi,
    functionName: 'eip712Domain',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"getPastTotalSupply"`
 */
export const useReadErc20VotesGetPastTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20VotesAbi,
    functionName: 'getPastTotalSupply',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"getPastVotes"`
 */
export const useReadErc20VotesGetPastVotes =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20VotesAbi,
    functionName: 'getPastVotes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"getVotes"`
 */
export const useReadErc20VotesGetVotes = /*#__PURE__*/ createUseReadContract({
  abi: erc20VotesAbi,
  functionName: 'getVotes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"name"`
 */
export const useReadErc20VotesName = /*#__PURE__*/ createUseReadContract({
  abi: erc20VotesAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"nonces"`
 */
export const useReadErc20VotesNonces = /*#__PURE__*/ createUseReadContract({
  abi: erc20VotesAbi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"numCheckpoints"`
 */
export const useReadErc20VotesNumCheckpoints =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20VotesAbi,
    functionName: 'numCheckpoints',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc20VotesSymbol = /*#__PURE__*/ createUseReadContract({
  abi: erc20VotesAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc20VotesTotalSupply = /*#__PURE__*/ createUseReadContract(
  { abi: erc20VotesAbi, functionName: 'totalSupply' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20VotesAbi}__
 */
export const useWriteErc20Votes = /*#__PURE__*/ createUseWriteContract({
  abi: erc20VotesAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc20VotesApprove = /*#__PURE__*/ createUseWriteContract({
  abi: erc20VotesAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"delegate"`
 */
export const useWriteErc20VotesDelegate = /*#__PURE__*/ createUseWriteContract({
  abi: erc20VotesAbi,
  functionName: 'delegate',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"delegateBySig"`
 */
export const useWriteErc20VotesDelegateBySig =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20VotesAbi,
    functionName: 'delegateBySig',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc20VotesTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: erc20VotesAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc20VotesTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20VotesAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20VotesAbi}__
 */
export const useSimulateErc20Votes = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20VotesAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc20VotesApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20VotesAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"delegate"`
 */
export const useSimulateErc20VotesDelegate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20VotesAbi,
    functionName: 'delegate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"delegateBySig"`
 */
export const useSimulateErc20VotesDelegateBySig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20VotesAbi,
    functionName: 'delegateBySig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc20VotesTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20VotesAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc20VotesTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20VotesAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20VotesAbi}__
 */
export const useWatchErc20VotesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: erc20VotesAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20VotesAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc20VotesApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20VotesAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20VotesAbi}__ and `eventName` set to `"DelegateChanged"`
 */
export const useWatchErc20VotesDelegateChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20VotesAbi,
    eventName: 'DelegateChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20VotesAbi}__ and `eventName` set to `"DelegateVotesChanged"`
 */
export const useWatchErc20VotesDelegateVotesChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20VotesAbi,
    eventName: 'DelegateVotesChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20VotesAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const useWatchErc20VotesEip712DomainChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20VotesAbi,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20VotesAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc20VotesTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20VotesAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721HolderAbi}__
 */
export const useWriteErc721Holder = /*#__PURE__*/ createUseWriteContract({
  abi: erc721HolderAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721HolderAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useWriteErc721HolderOnErc721Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721HolderAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721HolderAbi}__
 */
export const useSimulateErc721Holder = /*#__PURE__*/ createUseSimulateContract({
  abi: erc721HolderAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721HolderAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useSimulateErc721HolderOnErc721Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721HolderAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorAbi}__
 */
export const useReadGovernor = /*#__PURE__*/ createUseReadContract({
  abi: governorAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"BALLOT_TYPEHASH"`
 */
export const useReadGovernorBallotTypehash =
  /*#__PURE__*/ createUseReadContract({
    abi: governorAbi,
    functionName: 'BALLOT_TYPEHASH',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"CLOCK_MODE"`
 */
export const useReadGovernorClockMode = /*#__PURE__*/ createUseReadContract({
  abi: governorAbi,
  functionName: 'CLOCK_MODE',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"COUNTING_MODE"`
 */
export const useReadGovernorCountingMode = /*#__PURE__*/ createUseReadContract({
  abi: governorAbi,
  functionName: 'COUNTING_MODE',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"EXTENDED_BALLOT_TYPEHASH"`
 */
export const useReadGovernorExtendedBallotTypehash =
  /*#__PURE__*/ createUseReadContract({
    abi: governorAbi,
    functionName: 'EXTENDED_BALLOT_TYPEHASH',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"clock"`
 */
export const useReadGovernorClock = /*#__PURE__*/ createUseReadContract({
  abi: governorAbi,
  functionName: 'clock',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"eip712Domain"`
 */
export const useReadGovernorEip712Domain = /*#__PURE__*/ createUseReadContract({
  abi: governorAbi,
  functionName: 'eip712Domain',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"getVotes"`
 */
export const useReadGovernorGetVotes = /*#__PURE__*/ createUseReadContract({
  abi: governorAbi,
  functionName: 'getVotes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"getVotesWithParams"`
 */
export const useReadGovernorGetVotesWithParams =
  /*#__PURE__*/ createUseReadContract({
    abi: governorAbi,
    functionName: 'getVotesWithParams',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"hasVoted"`
 */
export const useReadGovernorHasVoted = /*#__PURE__*/ createUseReadContract({
  abi: governorAbi,
  functionName: 'hasVoted',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"hashProposal"`
 */
export const useReadGovernorHashProposal = /*#__PURE__*/ createUseReadContract({
  abi: governorAbi,
  functionName: 'hashProposal',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"name"`
 */
export const useReadGovernorName = /*#__PURE__*/ createUseReadContract({
  abi: governorAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"nonces"`
 */
export const useReadGovernorNonces = /*#__PURE__*/ createUseReadContract({
  abi: governorAbi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"proposalDeadline"`
 */
export const useReadGovernorProposalDeadline =
  /*#__PURE__*/ createUseReadContract({
    abi: governorAbi,
    functionName: 'proposalDeadline',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"proposalEta"`
 */
export const useReadGovernorProposalEta = /*#__PURE__*/ createUseReadContract({
  abi: governorAbi,
  functionName: 'proposalEta',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"proposalNeedsQueuing"`
 */
export const useReadGovernorProposalNeedsQueuing =
  /*#__PURE__*/ createUseReadContract({
    abi: governorAbi,
    functionName: 'proposalNeedsQueuing',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"proposalProposer"`
 */
export const useReadGovernorProposalProposer =
  /*#__PURE__*/ createUseReadContract({
    abi: governorAbi,
    functionName: 'proposalProposer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"proposalSnapshot"`
 */
export const useReadGovernorProposalSnapshot =
  /*#__PURE__*/ createUseReadContract({
    abi: governorAbi,
    functionName: 'proposalSnapshot',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"proposalThreshold"`
 */
export const useReadGovernorProposalThreshold =
  /*#__PURE__*/ createUseReadContract({
    abi: governorAbi,
    functionName: 'proposalThreshold',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"quorum"`
 */
export const useReadGovernorQuorum = /*#__PURE__*/ createUseReadContract({
  abi: governorAbi,
  functionName: 'quorum',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"state"`
 */
export const useReadGovernorState = /*#__PURE__*/ createUseReadContract({
  abi: governorAbi,
  functionName: 'state',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadGovernorSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: governorAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"version"`
 */
export const useReadGovernorVersion = /*#__PURE__*/ createUseReadContract({
  abi: governorAbi,
  functionName: 'version',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"votingDelay"`
 */
export const useReadGovernorVotingDelay = /*#__PURE__*/ createUseReadContract({
  abi: governorAbi,
  functionName: 'votingDelay',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"votingPeriod"`
 */
export const useReadGovernorVotingPeriod = /*#__PURE__*/ createUseReadContract({
  abi: governorAbi,
  functionName: 'votingPeriod',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorAbi}__
 */
export const useWriteGovernor = /*#__PURE__*/ createUseWriteContract({
  abi: governorAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"cancel"`
 */
export const useWriteGovernorCancel = /*#__PURE__*/ createUseWriteContract({
  abi: governorAbi,
  functionName: 'cancel',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"castVote"`
 */
export const useWriteGovernorCastVote = /*#__PURE__*/ createUseWriteContract({
  abi: governorAbi,
  functionName: 'castVote',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"castVoteBySig"`
 */
export const useWriteGovernorCastVoteBySig =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorAbi,
    functionName: 'castVoteBySig',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"castVoteWithReason"`
 */
export const useWriteGovernorCastVoteWithReason =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorAbi,
    functionName: 'castVoteWithReason',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"castVoteWithReasonAndParams"`
 */
export const useWriteGovernorCastVoteWithReasonAndParams =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorAbi,
    functionName: 'castVoteWithReasonAndParams',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"castVoteWithReasonAndParamsBySig"`
 */
export const useWriteGovernorCastVoteWithReasonAndParamsBySig =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorAbi,
    functionName: 'castVoteWithReasonAndParamsBySig',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"execute"`
 */
export const useWriteGovernorExecute = /*#__PURE__*/ createUseWriteContract({
  abi: governorAbi,
  functionName: 'execute',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const useWriteGovernorOnErc1155BatchReceived =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const useWriteGovernorOnErc1155Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useWriteGovernorOnErc721Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"propose"`
 */
export const useWriteGovernorPropose = /*#__PURE__*/ createUseWriteContract({
  abi: governorAbi,
  functionName: 'propose',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"queue"`
 */
export const useWriteGovernorQueue = /*#__PURE__*/ createUseWriteContract({
  abi: governorAbi,
  functionName: 'queue',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"relay"`
 */
export const useWriteGovernorRelay = /*#__PURE__*/ createUseWriteContract({
  abi: governorAbi,
  functionName: 'relay',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorAbi}__
 */
export const useSimulateGovernor = /*#__PURE__*/ createUseSimulateContract({
  abi: governorAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"cancel"`
 */
export const useSimulateGovernorCancel =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorAbi,
    functionName: 'cancel',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"castVote"`
 */
export const useSimulateGovernorCastVote =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorAbi,
    functionName: 'castVote',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"castVoteBySig"`
 */
export const useSimulateGovernorCastVoteBySig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorAbi,
    functionName: 'castVoteBySig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"castVoteWithReason"`
 */
export const useSimulateGovernorCastVoteWithReason =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorAbi,
    functionName: 'castVoteWithReason',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"castVoteWithReasonAndParams"`
 */
export const useSimulateGovernorCastVoteWithReasonAndParams =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorAbi,
    functionName: 'castVoteWithReasonAndParams',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"castVoteWithReasonAndParamsBySig"`
 */
export const useSimulateGovernorCastVoteWithReasonAndParamsBySig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorAbi,
    functionName: 'castVoteWithReasonAndParamsBySig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"execute"`
 */
export const useSimulateGovernorExecute =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorAbi,
    functionName: 'execute',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const useSimulateGovernorOnErc1155BatchReceived =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const useSimulateGovernorOnErc1155Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useSimulateGovernorOnErc721Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"propose"`
 */
export const useSimulateGovernorPropose =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorAbi,
    functionName: 'propose',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"queue"`
 */
export const useSimulateGovernorQueue = /*#__PURE__*/ createUseSimulateContract(
  { abi: governorAbi, functionName: 'queue' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"relay"`
 */
export const useSimulateGovernorRelay = /*#__PURE__*/ createUseSimulateContract(
  { abi: governorAbi, functionName: 'relay' },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorAbi}__
 */
export const useWatchGovernorEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: governorAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const useWatchGovernorEip712DomainChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governorAbi,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorAbi}__ and `eventName` set to `"ProposalCanceled"`
 */
export const useWatchGovernorProposalCanceledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governorAbi,
    eventName: 'ProposalCanceled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorAbi}__ and `eventName` set to `"ProposalCreated"`
 */
export const useWatchGovernorProposalCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governorAbi,
    eventName: 'ProposalCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorAbi}__ and `eventName` set to `"ProposalExecuted"`
 */
export const useWatchGovernorProposalExecutedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governorAbi,
    eventName: 'ProposalExecuted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorAbi}__ and `eventName` set to `"ProposalQueued"`
 */
export const useWatchGovernorProposalQueuedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governorAbi,
    eventName: 'ProposalQueued',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorAbi}__ and `eventName` set to `"VoteCast"`
 */
export const useWatchGovernorVoteCastEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governorAbi,
    eventName: 'VoteCast',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorAbi}__ and `eventName` set to `"VoteCastWithParams"`
 */
export const useWatchGovernorVoteCastWithParamsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governorAbi,
    eventName: 'VoteCastWithParams',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__
 */
export const useReadGovernorCountingSimple =
  /*#__PURE__*/ createUseReadContract({ abi: governorCountingSimpleAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"BALLOT_TYPEHASH"`
 */
export const useReadGovernorCountingSimpleBallotTypehash =
  /*#__PURE__*/ createUseReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'BALLOT_TYPEHASH',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"CLOCK_MODE"`
 */
export const useReadGovernorCountingSimpleClockMode =
  /*#__PURE__*/ createUseReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'CLOCK_MODE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"COUNTING_MODE"`
 */
export const useReadGovernorCountingSimpleCountingMode =
  /*#__PURE__*/ createUseReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'COUNTING_MODE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"EXTENDED_BALLOT_TYPEHASH"`
 */
export const useReadGovernorCountingSimpleExtendedBallotTypehash =
  /*#__PURE__*/ createUseReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'EXTENDED_BALLOT_TYPEHASH',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"clock"`
 */
export const useReadGovernorCountingSimpleClock =
  /*#__PURE__*/ createUseReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'clock',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"eip712Domain"`
 */
export const useReadGovernorCountingSimpleEip712Domain =
  /*#__PURE__*/ createUseReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'eip712Domain',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"getVotes"`
 */
export const useReadGovernorCountingSimpleGetVotes =
  /*#__PURE__*/ createUseReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'getVotes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"getVotesWithParams"`
 */
export const useReadGovernorCountingSimpleGetVotesWithParams =
  /*#__PURE__*/ createUseReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'getVotesWithParams',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"hasVoted"`
 */
export const useReadGovernorCountingSimpleHasVoted =
  /*#__PURE__*/ createUseReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'hasVoted',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"hashProposal"`
 */
export const useReadGovernorCountingSimpleHashProposal =
  /*#__PURE__*/ createUseReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'hashProposal',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"name"`
 */
export const useReadGovernorCountingSimpleName =
  /*#__PURE__*/ createUseReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'name',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"nonces"`
 */
export const useReadGovernorCountingSimpleNonces =
  /*#__PURE__*/ createUseReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'nonces',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"proposalDeadline"`
 */
export const useReadGovernorCountingSimpleProposalDeadline =
  /*#__PURE__*/ createUseReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'proposalDeadline',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"proposalEta"`
 */
export const useReadGovernorCountingSimpleProposalEta =
  /*#__PURE__*/ createUseReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'proposalEta',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"proposalNeedsQueuing"`
 */
export const useReadGovernorCountingSimpleProposalNeedsQueuing =
  /*#__PURE__*/ createUseReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'proposalNeedsQueuing',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"proposalProposer"`
 */
export const useReadGovernorCountingSimpleProposalProposer =
  /*#__PURE__*/ createUseReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'proposalProposer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"proposalSnapshot"`
 */
export const useReadGovernorCountingSimpleProposalSnapshot =
  /*#__PURE__*/ createUseReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'proposalSnapshot',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"proposalThreshold"`
 */
export const useReadGovernorCountingSimpleProposalThreshold =
  /*#__PURE__*/ createUseReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'proposalThreshold',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"proposalVotes"`
 */
export const useReadGovernorCountingSimpleProposalVotes =
  /*#__PURE__*/ createUseReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'proposalVotes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"quorum"`
 */
export const useReadGovernorCountingSimpleQuorum =
  /*#__PURE__*/ createUseReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'quorum',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"state"`
 */
export const useReadGovernorCountingSimpleState =
  /*#__PURE__*/ createUseReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'state',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadGovernorCountingSimpleSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"version"`
 */
export const useReadGovernorCountingSimpleVersion =
  /*#__PURE__*/ createUseReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'version',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"votingDelay"`
 */
export const useReadGovernorCountingSimpleVotingDelay =
  /*#__PURE__*/ createUseReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'votingDelay',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"votingPeriod"`
 */
export const useReadGovernorCountingSimpleVotingPeriod =
  /*#__PURE__*/ createUseReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'votingPeriod',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__
 */
export const useWriteGovernorCountingSimple =
  /*#__PURE__*/ createUseWriteContract({ abi: governorCountingSimpleAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"cancel"`
 */
export const useWriteGovernorCountingSimpleCancel =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorCountingSimpleAbi,
    functionName: 'cancel',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"castVote"`
 */
export const useWriteGovernorCountingSimpleCastVote =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorCountingSimpleAbi,
    functionName: 'castVote',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"castVoteBySig"`
 */
export const useWriteGovernorCountingSimpleCastVoteBySig =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorCountingSimpleAbi,
    functionName: 'castVoteBySig',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"castVoteWithReason"`
 */
export const useWriteGovernorCountingSimpleCastVoteWithReason =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorCountingSimpleAbi,
    functionName: 'castVoteWithReason',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"castVoteWithReasonAndParams"`
 */
export const useWriteGovernorCountingSimpleCastVoteWithReasonAndParams =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorCountingSimpleAbi,
    functionName: 'castVoteWithReasonAndParams',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"castVoteWithReasonAndParamsBySig"`
 */
export const useWriteGovernorCountingSimpleCastVoteWithReasonAndParamsBySig =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorCountingSimpleAbi,
    functionName: 'castVoteWithReasonAndParamsBySig',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"execute"`
 */
export const useWriteGovernorCountingSimpleExecute =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorCountingSimpleAbi,
    functionName: 'execute',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const useWriteGovernorCountingSimpleOnErc1155BatchReceived =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorCountingSimpleAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const useWriteGovernorCountingSimpleOnErc1155Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorCountingSimpleAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useWriteGovernorCountingSimpleOnErc721Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorCountingSimpleAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"propose"`
 */
export const useWriteGovernorCountingSimplePropose =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorCountingSimpleAbi,
    functionName: 'propose',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"queue"`
 */
export const useWriteGovernorCountingSimpleQueue =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorCountingSimpleAbi,
    functionName: 'queue',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"relay"`
 */
export const useWriteGovernorCountingSimpleRelay =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorCountingSimpleAbi,
    functionName: 'relay',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__
 */
export const useSimulateGovernorCountingSimple =
  /*#__PURE__*/ createUseSimulateContract({ abi: governorCountingSimpleAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"cancel"`
 */
export const useSimulateGovernorCountingSimpleCancel =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorCountingSimpleAbi,
    functionName: 'cancel',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"castVote"`
 */
export const useSimulateGovernorCountingSimpleCastVote =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorCountingSimpleAbi,
    functionName: 'castVote',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"castVoteBySig"`
 */
export const useSimulateGovernorCountingSimpleCastVoteBySig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorCountingSimpleAbi,
    functionName: 'castVoteBySig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"castVoteWithReason"`
 */
export const useSimulateGovernorCountingSimpleCastVoteWithReason =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorCountingSimpleAbi,
    functionName: 'castVoteWithReason',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"castVoteWithReasonAndParams"`
 */
export const useSimulateGovernorCountingSimpleCastVoteWithReasonAndParams =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorCountingSimpleAbi,
    functionName: 'castVoteWithReasonAndParams',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"castVoteWithReasonAndParamsBySig"`
 */
export const useSimulateGovernorCountingSimpleCastVoteWithReasonAndParamsBySig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorCountingSimpleAbi,
    functionName: 'castVoteWithReasonAndParamsBySig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"execute"`
 */
export const useSimulateGovernorCountingSimpleExecute =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorCountingSimpleAbi,
    functionName: 'execute',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const useSimulateGovernorCountingSimpleOnErc1155BatchReceived =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorCountingSimpleAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const useSimulateGovernorCountingSimpleOnErc1155Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorCountingSimpleAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useSimulateGovernorCountingSimpleOnErc721Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorCountingSimpleAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"propose"`
 */
export const useSimulateGovernorCountingSimplePropose =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorCountingSimpleAbi,
    functionName: 'propose',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"queue"`
 */
export const useSimulateGovernorCountingSimpleQueue =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorCountingSimpleAbi,
    functionName: 'queue',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"relay"`
 */
export const useSimulateGovernorCountingSimpleRelay =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorCountingSimpleAbi,
    functionName: 'relay',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorCountingSimpleAbi}__
 */
export const useWatchGovernorCountingSimpleEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: governorCountingSimpleAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const useWatchGovernorCountingSimpleEip712DomainChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governorCountingSimpleAbi,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `eventName` set to `"ProposalCanceled"`
 */
export const useWatchGovernorCountingSimpleProposalCanceledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governorCountingSimpleAbi,
    eventName: 'ProposalCanceled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `eventName` set to `"ProposalCreated"`
 */
export const useWatchGovernorCountingSimpleProposalCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governorCountingSimpleAbi,
    eventName: 'ProposalCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `eventName` set to `"ProposalExecuted"`
 */
export const useWatchGovernorCountingSimpleProposalExecutedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governorCountingSimpleAbi,
    eventName: 'ProposalExecuted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `eventName` set to `"ProposalQueued"`
 */
export const useWatchGovernorCountingSimpleProposalQueuedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governorCountingSimpleAbi,
    eventName: 'ProposalQueued',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `eventName` set to `"VoteCast"`
 */
export const useWatchGovernorCountingSimpleVoteCastEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governorCountingSimpleAbi,
    eventName: 'VoteCast',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `eventName` set to `"VoteCastWithParams"`
 */
export const useWatchGovernorCountingSimpleVoteCastWithParamsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governorCountingSimpleAbi,
    eventName: 'VoteCastWithParams',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorTimelockControlAbi}__
 */
export const useReadGovernorTimelockControl =
  /*#__PURE__*/ createUseReadContract({ abi: governorTimelockControlAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"BALLOT_TYPEHASH"`
 */
export const useReadGovernorTimelockControlBallotTypehash =
  /*#__PURE__*/ createUseReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'BALLOT_TYPEHASH',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"CLOCK_MODE"`
 */
export const useReadGovernorTimelockControlClockMode =
  /*#__PURE__*/ createUseReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'CLOCK_MODE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"COUNTING_MODE"`
 */
export const useReadGovernorTimelockControlCountingMode =
  /*#__PURE__*/ createUseReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'COUNTING_MODE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"EXTENDED_BALLOT_TYPEHASH"`
 */
export const useReadGovernorTimelockControlExtendedBallotTypehash =
  /*#__PURE__*/ createUseReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'EXTENDED_BALLOT_TYPEHASH',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"clock"`
 */
export const useReadGovernorTimelockControlClock =
  /*#__PURE__*/ createUseReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'clock',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"eip712Domain"`
 */
export const useReadGovernorTimelockControlEip712Domain =
  /*#__PURE__*/ createUseReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'eip712Domain',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"getVotes"`
 */
export const useReadGovernorTimelockControlGetVotes =
  /*#__PURE__*/ createUseReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'getVotes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"getVotesWithParams"`
 */
export const useReadGovernorTimelockControlGetVotesWithParams =
  /*#__PURE__*/ createUseReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'getVotesWithParams',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"hasVoted"`
 */
export const useReadGovernorTimelockControlHasVoted =
  /*#__PURE__*/ createUseReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'hasVoted',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"hashProposal"`
 */
export const useReadGovernorTimelockControlHashProposal =
  /*#__PURE__*/ createUseReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'hashProposal',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"name"`
 */
export const useReadGovernorTimelockControlName =
  /*#__PURE__*/ createUseReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'name',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"nonces"`
 */
export const useReadGovernorTimelockControlNonces =
  /*#__PURE__*/ createUseReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'nonces',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"proposalDeadline"`
 */
export const useReadGovernorTimelockControlProposalDeadline =
  /*#__PURE__*/ createUseReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'proposalDeadline',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"proposalEta"`
 */
export const useReadGovernorTimelockControlProposalEta =
  /*#__PURE__*/ createUseReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'proposalEta',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"proposalNeedsQueuing"`
 */
export const useReadGovernorTimelockControlProposalNeedsQueuing =
  /*#__PURE__*/ createUseReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'proposalNeedsQueuing',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"proposalProposer"`
 */
export const useReadGovernorTimelockControlProposalProposer =
  /*#__PURE__*/ createUseReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'proposalProposer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"proposalSnapshot"`
 */
export const useReadGovernorTimelockControlProposalSnapshot =
  /*#__PURE__*/ createUseReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'proposalSnapshot',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"proposalThreshold"`
 */
export const useReadGovernorTimelockControlProposalThreshold =
  /*#__PURE__*/ createUseReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'proposalThreshold',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"quorum"`
 */
export const useReadGovernorTimelockControlQuorum =
  /*#__PURE__*/ createUseReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'quorum',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"state"`
 */
export const useReadGovernorTimelockControlState =
  /*#__PURE__*/ createUseReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'state',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadGovernorTimelockControlSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"timelock"`
 */
export const useReadGovernorTimelockControlTimelock =
  /*#__PURE__*/ createUseReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'timelock',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"version"`
 */
export const useReadGovernorTimelockControlVersion =
  /*#__PURE__*/ createUseReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'version',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"votingDelay"`
 */
export const useReadGovernorTimelockControlVotingDelay =
  /*#__PURE__*/ createUseReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'votingDelay',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"votingPeriod"`
 */
export const useReadGovernorTimelockControlVotingPeriod =
  /*#__PURE__*/ createUseReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'votingPeriod',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorTimelockControlAbi}__
 */
export const useWriteGovernorTimelockControl =
  /*#__PURE__*/ createUseWriteContract({ abi: governorTimelockControlAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"cancel"`
 */
export const useWriteGovernorTimelockControlCancel =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorTimelockControlAbi,
    functionName: 'cancel',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"castVote"`
 */
export const useWriteGovernorTimelockControlCastVote =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorTimelockControlAbi,
    functionName: 'castVote',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"castVoteBySig"`
 */
export const useWriteGovernorTimelockControlCastVoteBySig =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorTimelockControlAbi,
    functionName: 'castVoteBySig',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"castVoteWithReason"`
 */
export const useWriteGovernorTimelockControlCastVoteWithReason =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorTimelockControlAbi,
    functionName: 'castVoteWithReason',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"castVoteWithReasonAndParams"`
 */
export const useWriteGovernorTimelockControlCastVoteWithReasonAndParams =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorTimelockControlAbi,
    functionName: 'castVoteWithReasonAndParams',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"castVoteWithReasonAndParamsBySig"`
 */
export const useWriteGovernorTimelockControlCastVoteWithReasonAndParamsBySig =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorTimelockControlAbi,
    functionName: 'castVoteWithReasonAndParamsBySig',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"execute"`
 */
export const useWriteGovernorTimelockControlExecute =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorTimelockControlAbi,
    functionName: 'execute',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const useWriteGovernorTimelockControlOnErc1155BatchReceived =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorTimelockControlAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const useWriteGovernorTimelockControlOnErc1155Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorTimelockControlAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useWriteGovernorTimelockControlOnErc721Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorTimelockControlAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"propose"`
 */
export const useWriteGovernorTimelockControlPropose =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorTimelockControlAbi,
    functionName: 'propose',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"queue"`
 */
export const useWriteGovernorTimelockControlQueue =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorTimelockControlAbi,
    functionName: 'queue',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"relay"`
 */
export const useWriteGovernorTimelockControlRelay =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorTimelockControlAbi,
    functionName: 'relay',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"updateTimelock"`
 */
export const useWriteGovernorTimelockControlUpdateTimelock =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorTimelockControlAbi,
    functionName: 'updateTimelock',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorTimelockControlAbi}__
 */
export const useSimulateGovernorTimelockControl =
  /*#__PURE__*/ createUseSimulateContract({ abi: governorTimelockControlAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"cancel"`
 */
export const useSimulateGovernorTimelockControlCancel =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorTimelockControlAbi,
    functionName: 'cancel',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"castVote"`
 */
export const useSimulateGovernorTimelockControlCastVote =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorTimelockControlAbi,
    functionName: 'castVote',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"castVoteBySig"`
 */
export const useSimulateGovernorTimelockControlCastVoteBySig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorTimelockControlAbi,
    functionName: 'castVoteBySig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"castVoteWithReason"`
 */
export const useSimulateGovernorTimelockControlCastVoteWithReason =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorTimelockControlAbi,
    functionName: 'castVoteWithReason',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"castVoteWithReasonAndParams"`
 */
export const useSimulateGovernorTimelockControlCastVoteWithReasonAndParams =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorTimelockControlAbi,
    functionName: 'castVoteWithReasonAndParams',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"castVoteWithReasonAndParamsBySig"`
 */
export const useSimulateGovernorTimelockControlCastVoteWithReasonAndParamsBySig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorTimelockControlAbi,
    functionName: 'castVoteWithReasonAndParamsBySig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"execute"`
 */
export const useSimulateGovernorTimelockControlExecute =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorTimelockControlAbi,
    functionName: 'execute',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const useSimulateGovernorTimelockControlOnErc1155BatchReceived =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorTimelockControlAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const useSimulateGovernorTimelockControlOnErc1155Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorTimelockControlAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useSimulateGovernorTimelockControlOnErc721Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorTimelockControlAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"propose"`
 */
export const useSimulateGovernorTimelockControlPropose =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorTimelockControlAbi,
    functionName: 'propose',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"queue"`
 */
export const useSimulateGovernorTimelockControlQueue =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorTimelockControlAbi,
    functionName: 'queue',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"relay"`
 */
export const useSimulateGovernorTimelockControlRelay =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorTimelockControlAbi,
    functionName: 'relay',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"updateTimelock"`
 */
export const useSimulateGovernorTimelockControlUpdateTimelock =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorTimelockControlAbi,
    functionName: 'updateTimelock',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorTimelockControlAbi}__
 */
export const useWatchGovernorTimelockControlEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: governorTimelockControlAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const useWatchGovernorTimelockControlEip712DomainChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governorTimelockControlAbi,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `eventName` set to `"ProposalCanceled"`
 */
export const useWatchGovernorTimelockControlProposalCanceledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governorTimelockControlAbi,
    eventName: 'ProposalCanceled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `eventName` set to `"ProposalCreated"`
 */
export const useWatchGovernorTimelockControlProposalCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governorTimelockControlAbi,
    eventName: 'ProposalCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `eventName` set to `"ProposalExecuted"`
 */
export const useWatchGovernorTimelockControlProposalExecutedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governorTimelockControlAbi,
    eventName: 'ProposalExecuted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `eventName` set to `"ProposalQueued"`
 */
export const useWatchGovernorTimelockControlProposalQueuedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governorTimelockControlAbi,
    eventName: 'ProposalQueued',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `eventName` set to `"TimelockChange"`
 */
export const useWatchGovernorTimelockControlTimelockChangeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governorTimelockControlAbi,
    eventName: 'TimelockChange',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `eventName` set to `"VoteCast"`
 */
export const useWatchGovernorTimelockControlVoteCastEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governorTimelockControlAbi,
    eventName: 'VoteCast',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `eventName` set to `"VoteCastWithParams"`
 */
export const useWatchGovernorTimelockControlVoteCastWithParamsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governorTimelockControlAbi,
    eventName: 'VoteCastWithParams',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesAbi}__
 */
export const useReadGovernorVotes = /*#__PURE__*/ createUseReadContract({
  abi: governorVotesAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"BALLOT_TYPEHASH"`
 */
export const useReadGovernorVotesBallotTypehash =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesAbi,
    functionName: 'BALLOT_TYPEHASH',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"CLOCK_MODE"`
 */
export const useReadGovernorVotesClockMode =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesAbi,
    functionName: 'CLOCK_MODE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"COUNTING_MODE"`
 */
export const useReadGovernorVotesCountingMode =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesAbi,
    functionName: 'COUNTING_MODE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"EXTENDED_BALLOT_TYPEHASH"`
 */
export const useReadGovernorVotesExtendedBallotTypehash =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesAbi,
    functionName: 'EXTENDED_BALLOT_TYPEHASH',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"clock"`
 */
export const useReadGovernorVotesClock = /*#__PURE__*/ createUseReadContract({
  abi: governorVotesAbi,
  functionName: 'clock',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"eip712Domain"`
 */
export const useReadGovernorVotesEip712Domain =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesAbi,
    functionName: 'eip712Domain',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"getVotes"`
 */
export const useReadGovernorVotesGetVotes = /*#__PURE__*/ createUseReadContract(
  { abi: governorVotesAbi, functionName: 'getVotes' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"getVotesWithParams"`
 */
export const useReadGovernorVotesGetVotesWithParams =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesAbi,
    functionName: 'getVotesWithParams',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"hasVoted"`
 */
export const useReadGovernorVotesHasVoted = /*#__PURE__*/ createUseReadContract(
  { abi: governorVotesAbi, functionName: 'hasVoted' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"hashProposal"`
 */
export const useReadGovernorVotesHashProposal =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesAbi,
    functionName: 'hashProposal',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"name"`
 */
export const useReadGovernorVotesName = /*#__PURE__*/ createUseReadContract({
  abi: governorVotesAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"nonces"`
 */
export const useReadGovernorVotesNonces = /*#__PURE__*/ createUseReadContract({
  abi: governorVotesAbi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"proposalDeadline"`
 */
export const useReadGovernorVotesProposalDeadline =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesAbi,
    functionName: 'proposalDeadline',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"proposalEta"`
 */
export const useReadGovernorVotesProposalEta =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesAbi,
    functionName: 'proposalEta',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"proposalNeedsQueuing"`
 */
export const useReadGovernorVotesProposalNeedsQueuing =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesAbi,
    functionName: 'proposalNeedsQueuing',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"proposalProposer"`
 */
export const useReadGovernorVotesProposalProposer =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesAbi,
    functionName: 'proposalProposer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"proposalSnapshot"`
 */
export const useReadGovernorVotesProposalSnapshot =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesAbi,
    functionName: 'proposalSnapshot',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"proposalThreshold"`
 */
export const useReadGovernorVotesProposalThreshold =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesAbi,
    functionName: 'proposalThreshold',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"quorum"`
 */
export const useReadGovernorVotesQuorum = /*#__PURE__*/ createUseReadContract({
  abi: governorVotesAbi,
  functionName: 'quorum',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"state"`
 */
export const useReadGovernorVotesState = /*#__PURE__*/ createUseReadContract({
  abi: governorVotesAbi,
  functionName: 'state',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadGovernorVotesSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"token"`
 */
export const useReadGovernorVotesToken = /*#__PURE__*/ createUseReadContract({
  abi: governorVotesAbi,
  functionName: 'token',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"version"`
 */
export const useReadGovernorVotesVersion = /*#__PURE__*/ createUseReadContract({
  abi: governorVotesAbi,
  functionName: 'version',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"votingDelay"`
 */
export const useReadGovernorVotesVotingDelay =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesAbi,
    functionName: 'votingDelay',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"votingPeriod"`
 */
export const useReadGovernorVotesVotingPeriod =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesAbi,
    functionName: 'votingPeriod',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorVotesAbi}__
 */
export const useWriteGovernorVotes = /*#__PURE__*/ createUseWriteContract({
  abi: governorVotesAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"cancel"`
 */
export const useWriteGovernorVotesCancel = /*#__PURE__*/ createUseWriteContract(
  { abi: governorVotesAbi, functionName: 'cancel' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"castVote"`
 */
export const useWriteGovernorVotesCastVote =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorVotesAbi,
    functionName: 'castVote',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"castVoteBySig"`
 */
export const useWriteGovernorVotesCastVoteBySig =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorVotesAbi,
    functionName: 'castVoteBySig',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"castVoteWithReason"`
 */
export const useWriteGovernorVotesCastVoteWithReason =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorVotesAbi,
    functionName: 'castVoteWithReason',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"castVoteWithReasonAndParams"`
 */
export const useWriteGovernorVotesCastVoteWithReasonAndParams =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorVotesAbi,
    functionName: 'castVoteWithReasonAndParams',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"castVoteWithReasonAndParamsBySig"`
 */
export const useWriteGovernorVotesCastVoteWithReasonAndParamsBySig =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorVotesAbi,
    functionName: 'castVoteWithReasonAndParamsBySig',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"execute"`
 */
export const useWriteGovernorVotesExecute =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorVotesAbi,
    functionName: 'execute',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const useWriteGovernorVotesOnErc1155BatchReceived =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorVotesAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const useWriteGovernorVotesOnErc1155Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorVotesAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useWriteGovernorVotesOnErc721Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorVotesAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"propose"`
 */
export const useWriteGovernorVotesPropose =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorVotesAbi,
    functionName: 'propose',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"queue"`
 */
export const useWriteGovernorVotesQueue = /*#__PURE__*/ createUseWriteContract({
  abi: governorVotesAbi,
  functionName: 'queue',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"relay"`
 */
export const useWriteGovernorVotesRelay = /*#__PURE__*/ createUseWriteContract({
  abi: governorVotesAbi,
  functionName: 'relay',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorVotesAbi}__
 */
export const useSimulateGovernorVotes = /*#__PURE__*/ createUseSimulateContract(
  { abi: governorVotesAbi },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"cancel"`
 */
export const useSimulateGovernorVotesCancel =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorVotesAbi,
    functionName: 'cancel',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"castVote"`
 */
export const useSimulateGovernorVotesCastVote =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorVotesAbi,
    functionName: 'castVote',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"castVoteBySig"`
 */
export const useSimulateGovernorVotesCastVoteBySig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorVotesAbi,
    functionName: 'castVoteBySig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"castVoteWithReason"`
 */
export const useSimulateGovernorVotesCastVoteWithReason =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorVotesAbi,
    functionName: 'castVoteWithReason',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"castVoteWithReasonAndParams"`
 */
export const useSimulateGovernorVotesCastVoteWithReasonAndParams =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorVotesAbi,
    functionName: 'castVoteWithReasonAndParams',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"castVoteWithReasonAndParamsBySig"`
 */
export const useSimulateGovernorVotesCastVoteWithReasonAndParamsBySig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorVotesAbi,
    functionName: 'castVoteWithReasonAndParamsBySig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"execute"`
 */
export const useSimulateGovernorVotesExecute =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorVotesAbi,
    functionName: 'execute',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const useSimulateGovernorVotesOnErc1155BatchReceived =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorVotesAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const useSimulateGovernorVotesOnErc1155Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorVotesAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useSimulateGovernorVotesOnErc721Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorVotesAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"propose"`
 */
export const useSimulateGovernorVotesPropose =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorVotesAbi,
    functionName: 'propose',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"queue"`
 */
export const useSimulateGovernorVotesQueue =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorVotesAbi,
    functionName: 'queue',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"relay"`
 */
export const useSimulateGovernorVotesRelay =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorVotesAbi,
    functionName: 'relay',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorVotesAbi}__
 */
export const useWatchGovernorVotesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: governorVotesAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorVotesAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const useWatchGovernorVotesEip712DomainChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governorVotesAbi,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorVotesAbi}__ and `eventName` set to `"ProposalCanceled"`
 */
export const useWatchGovernorVotesProposalCanceledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governorVotesAbi,
    eventName: 'ProposalCanceled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorVotesAbi}__ and `eventName` set to `"ProposalCreated"`
 */
export const useWatchGovernorVotesProposalCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governorVotesAbi,
    eventName: 'ProposalCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorVotesAbi}__ and `eventName` set to `"ProposalExecuted"`
 */
export const useWatchGovernorVotesProposalExecutedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governorVotesAbi,
    eventName: 'ProposalExecuted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorVotesAbi}__ and `eventName` set to `"ProposalQueued"`
 */
export const useWatchGovernorVotesProposalQueuedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governorVotesAbi,
    eventName: 'ProposalQueued',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorVotesAbi}__ and `eventName` set to `"VoteCast"`
 */
export const useWatchGovernorVotesVoteCastEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governorVotesAbi,
    eventName: 'VoteCast',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorVotesAbi}__ and `eventName` set to `"VoteCastWithParams"`
 */
export const useWatchGovernorVotesVoteCastWithParamsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governorVotesAbi,
    eventName: 'VoteCastWithParams',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__
 */
export const useReadGovernorVotesQuorumFraction =
  /*#__PURE__*/ createUseReadContract({ abi: governorVotesQuorumFractionAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"BALLOT_TYPEHASH"`
 */
export const useReadGovernorVotesQuorumFractionBallotTypehash =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'BALLOT_TYPEHASH',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"CLOCK_MODE"`
 */
export const useReadGovernorVotesQuorumFractionClockMode =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'CLOCK_MODE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"COUNTING_MODE"`
 */
export const useReadGovernorVotesQuorumFractionCountingMode =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'COUNTING_MODE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"EXTENDED_BALLOT_TYPEHASH"`
 */
export const useReadGovernorVotesQuorumFractionExtendedBallotTypehash =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'EXTENDED_BALLOT_TYPEHASH',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"clock"`
 */
export const useReadGovernorVotesQuorumFractionClock =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'clock',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"eip712Domain"`
 */
export const useReadGovernorVotesQuorumFractionEip712Domain =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'eip712Domain',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"getVotes"`
 */
export const useReadGovernorVotesQuorumFractionGetVotes =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'getVotes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"getVotesWithParams"`
 */
export const useReadGovernorVotesQuorumFractionGetVotesWithParams =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'getVotesWithParams',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"hasVoted"`
 */
export const useReadGovernorVotesQuorumFractionHasVoted =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'hasVoted',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"hashProposal"`
 */
export const useReadGovernorVotesQuorumFractionHashProposal =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'hashProposal',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"name"`
 */
export const useReadGovernorVotesQuorumFractionName =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'name',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"nonces"`
 */
export const useReadGovernorVotesQuorumFractionNonces =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'nonces',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"proposalDeadline"`
 */
export const useReadGovernorVotesQuorumFractionProposalDeadline =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'proposalDeadline',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"proposalEta"`
 */
export const useReadGovernorVotesQuorumFractionProposalEta =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'proposalEta',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"proposalNeedsQueuing"`
 */
export const useReadGovernorVotesQuorumFractionProposalNeedsQueuing =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'proposalNeedsQueuing',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"proposalProposer"`
 */
export const useReadGovernorVotesQuorumFractionProposalProposer =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'proposalProposer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"proposalSnapshot"`
 */
export const useReadGovernorVotesQuorumFractionProposalSnapshot =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'proposalSnapshot',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"proposalThreshold"`
 */
export const useReadGovernorVotesQuorumFractionProposalThreshold =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'proposalThreshold',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"quorum"`
 */
export const useReadGovernorVotesQuorumFractionQuorum =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'quorum',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"quorumDenominator"`
 */
export const useReadGovernorVotesQuorumFractionQuorumDenominator =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'quorumDenominator',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"quorumNumerator"`
 */
export const useReadGovernorVotesQuorumFractionQuorumNumerator =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'quorumNumerator',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"state"`
 */
export const useReadGovernorVotesQuorumFractionState =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'state',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadGovernorVotesQuorumFractionSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"token"`
 */
export const useReadGovernorVotesQuorumFractionToken =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'token',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"version"`
 */
export const useReadGovernorVotesQuorumFractionVersion =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'version',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"votingDelay"`
 */
export const useReadGovernorVotesQuorumFractionVotingDelay =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'votingDelay',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"votingPeriod"`
 */
export const useReadGovernorVotesQuorumFractionVotingPeriod =
  /*#__PURE__*/ createUseReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'votingPeriod',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__
 */
export const useWriteGovernorVotesQuorumFraction =
  /*#__PURE__*/ createUseWriteContract({ abi: governorVotesQuorumFractionAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"cancel"`
 */
export const useWriteGovernorVotesQuorumFractionCancel =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'cancel',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"castVote"`
 */
export const useWriteGovernorVotesQuorumFractionCastVote =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'castVote',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"castVoteBySig"`
 */
export const useWriteGovernorVotesQuorumFractionCastVoteBySig =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'castVoteBySig',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"castVoteWithReason"`
 */
export const useWriteGovernorVotesQuorumFractionCastVoteWithReason =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'castVoteWithReason',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"castVoteWithReasonAndParams"`
 */
export const useWriteGovernorVotesQuorumFractionCastVoteWithReasonAndParams =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'castVoteWithReasonAndParams',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"castVoteWithReasonAndParamsBySig"`
 */
export const useWriteGovernorVotesQuorumFractionCastVoteWithReasonAndParamsBySig =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'castVoteWithReasonAndParamsBySig',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"execute"`
 */
export const useWriteGovernorVotesQuorumFractionExecute =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'execute',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const useWriteGovernorVotesQuorumFractionOnErc1155BatchReceived =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const useWriteGovernorVotesQuorumFractionOnErc1155Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useWriteGovernorVotesQuorumFractionOnErc721Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"propose"`
 */
export const useWriteGovernorVotesQuorumFractionPropose =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'propose',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"queue"`
 */
export const useWriteGovernorVotesQuorumFractionQueue =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'queue',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"relay"`
 */
export const useWriteGovernorVotesQuorumFractionRelay =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'relay',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"updateQuorumNumerator"`
 */
export const useWriteGovernorVotesQuorumFractionUpdateQuorumNumerator =
  /*#__PURE__*/ createUseWriteContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'updateQuorumNumerator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__
 */
export const useSimulateGovernorVotesQuorumFraction =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorVotesQuorumFractionAbi,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"cancel"`
 */
export const useSimulateGovernorVotesQuorumFractionCancel =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'cancel',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"castVote"`
 */
export const useSimulateGovernorVotesQuorumFractionCastVote =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'castVote',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"castVoteBySig"`
 */
export const useSimulateGovernorVotesQuorumFractionCastVoteBySig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'castVoteBySig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"castVoteWithReason"`
 */
export const useSimulateGovernorVotesQuorumFractionCastVoteWithReason =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'castVoteWithReason',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"castVoteWithReasonAndParams"`
 */
export const useSimulateGovernorVotesQuorumFractionCastVoteWithReasonAndParams =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'castVoteWithReasonAndParams',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"castVoteWithReasonAndParamsBySig"`
 */
export const useSimulateGovernorVotesQuorumFractionCastVoteWithReasonAndParamsBySig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'castVoteWithReasonAndParamsBySig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"execute"`
 */
export const useSimulateGovernorVotesQuorumFractionExecute =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'execute',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const useSimulateGovernorVotesQuorumFractionOnErc1155BatchReceived =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const useSimulateGovernorVotesQuorumFractionOnErc1155Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useSimulateGovernorVotesQuorumFractionOnErc721Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"propose"`
 */
export const useSimulateGovernorVotesQuorumFractionPropose =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'propose',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"queue"`
 */
export const useSimulateGovernorVotesQuorumFractionQueue =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'queue',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"relay"`
 */
export const useSimulateGovernorVotesQuorumFractionRelay =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'relay',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"updateQuorumNumerator"`
 */
export const useSimulateGovernorVotesQuorumFractionUpdateQuorumNumerator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'updateQuorumNumerator',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__
 */
export const useWatchGovernorVotesQuorumFractionEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governorVotesQuorumFractionAbi,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const useWatchGovernorVotesQuorumFractionEip712DomainChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governorVotesQuorumFractionAbi,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `eventName` set to `"ProposalCanceled"`
 */
export const useWatchGovernorVotesQuorumFractionProposalCanceledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governorVotesQuorumFractionAbi,
    eventName: 'ProposalCanceled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `eventName` set to `"ProposalCreated"`
 */
export const useWatchGovernorVotesQuorumFractionProposalCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governorVotesQuorumFractionAbi,
    eventName: 'ProposalCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `eventName` set to `"ProposalExecuted"`
 */
export const useWatchGovernorVotesQuorumFractionProposalExecutedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governorVotesQuorumFractionAbi,
    eventName: 'ProposalExecuted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `eventName` set to `"ProposalQueued"`
 */
export const useWatchGovernorVotesQuorumFractionProposalQueuedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governorVotesQuorumFractionAbi,
    eventName: 'ProposalQueued',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `eventName` set to `"QuorumNumeratorUpdated"`
 */
export const useWatchGovernorVotesQuorumFractionQuorumNumeratorUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governorVotesQuorumFractionAbi,
    eventName: 'QuorumNumeratorUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `eventName` set to `"VoteCast"`
 */
export const useWatchGovernorVotesQuorumFractionVoteCastEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governorVotesQuorumFractionAbi,
    eventName: 'VoteCast',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `eventName` set to `"VoteCastWithParams"`
 */
export const useWatchGovernorVotesQuorumFractionVoteCastWithParamsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governorVotesQuorumFractionAbi,
    eventName: 'VoteCastWithParams',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iAccessControlAbi}__
 */
export const useReadIAccessControl = /*#__PURE__*/ createUseReadContract({
  abi: iAccessControlAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadIAccessControlGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: iAccessControlAbi,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadIAccessControlHasRole = /*#__PURE__*/ createUseReadContract(
  { abi: iAccessControlAbi, functionName: 'hasRole' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iAccessControlAbi}__
 */
export const useWriteIAccessControl = /*#__PURE__*/ createUseWriteContract({
  abi: iAccessControlAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteIAccessControlGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: iAccessControlAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteIAccessControlRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: iAccessControlAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteIAccessControlRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: iAccessControlAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iAccessControlAbi}__
 */
export const useSimulateIAccessControl =
  /*#__PURE__*/ createUseSimulateContract({ abi: iAccessControlAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateIAccessControlGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iAccessControlAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateIAccessControlRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iAccessControlAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateIAccessControlRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iAccessControlAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iAccessControlAbi}__
 */
export const useWatchIAccessControlEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: iAccessControlAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iAccessControlAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchIAccessControlRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iAccessControlAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iAccessControlAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchIAccessControlRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iAccessControlAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iAccessControlAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchIAccessControlRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iAccessControlAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__
 */
export const useReadIerc1155Receiver = /*#__PURE__*/ createUseReadContract({
  abi: ierc1155ReceiverAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc1155ReceiverSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc1155ReceiverAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__
 */
export const useWriteIerc1155Receiver = /*#__PURE__*/ createUseWriteContract({
  abi: ierc1155ReceiverAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const useWriteIerc1155ReceiverOnErc1155BatchReceived =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc1155ReceiverAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const useWriteIerc1155ReceiverOnErc1155Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc1155ReceiverAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__
 */
export const useSimulateIerc1155Receiver =
  /*#__PURE__*/ createUseSimulateContract({ abi: ierc1155ReceiverAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const useSimulateIerc1155ReceiverOnErc1155BatchReceived =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc1155ReceiverAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const useSimulateIerc1155ReceiverOnErc1155Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc1155ReceiverAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1271Abi}__
 */
export const useReadIerc1271 = /*#__PURE__*/ createUseReadContract({
  abi: ierc1271Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1271Abi}__ and `functionName` set to `"isValidSignature"`
 */
export const useReadIerc1271IsValidSignature =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc1271Abi,
    functionName: 'isValidSignature',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc165Abi}__
 */
export const useReadIerc165 = /*#__PURE__*/ createUseReadContract({
  abi: ierc165Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc165Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc165SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc165Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const useReadIerc20 = /*#__PURE__*/ createUseReadContract({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadIerc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: ierc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: ierc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadIerc20TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: ierc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const useWriteIerc20 = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteIerc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc20TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const useSimulateIerc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc20Approve = /*#__PURE__*/ createUseSimulateContract(
  { abi: ierc20Abi, functionName: 'approve' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateIerc20Transfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20Abi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20Abi}__
 */
export const useWatchIerc20Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20BurnableAbi}__
 */
export const useReadIerc20Burnable = /*#__PURE__*/ createUseReadContract({
  abi: ierc20BurnableAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20BurnableAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadIerc20BurnableAllowance =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20BurnableAbi,
    functionName: 'allowance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20BurnableAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc20BurnableBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20BurnableAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20BurnableAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadIerc20BurnableTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20BurnableAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20BurnableAbi}__
 */
export const useWriteIerc20Burnable = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20BurnableAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20BurnableAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc20BurnableApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc20BurnableAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20BurnableAbi}__ and `functionName` set to `"burnFrom"`
 */
export const useWriteIerc20BurnableBurnFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc20BurnableAbi,
    functionName: 'burnFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20BurnableAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteIerc20BurnableTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc20BurnableAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20BurnableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc20BurnableTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc20BurnableAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20BurnableAbi}__
 */
export const useSimulateIerc20Burnable =
  /*#__PURE__*/ createUseSimulateContract({ abi: ierc20BurnableAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20BurnableAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc20BurnableApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20BurnableAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20BurnableAbi}__ and `functionName` set to `"burnFrom"`
 */
export const useSimulateIerc20BurnableBurnFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20BurnableAbi,
    functionName: 'burnFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20BurnableAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateIerc20BurnableTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20BurnableAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20BurnableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc20BurnableTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20BurnableAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20BurnableAbi}__
 */
export const useWatchIerc20BurnableEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ierc20BurnableAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20BurnableAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc20BurnableApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20BurnableAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20BurnableAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc20BurnableTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20BurnableAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useReadIerc20Metadata = /*#__PURE__*/ createUseReadContract({
  abi: ierc20MetadataAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadIerc20MetadataAllowance =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: 'allowance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc20MetadataBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadIerc20MetadataDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: 'decimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"name"`
 */
export const useReadIerc20MetadataName = /*#__PURE__*/ createUseReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadIerc20MetadataSymbol = /*#__PURE__*/ createUseReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadIerc20MetadataTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useWriteIerc20Metadata = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20MetadataAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc20MetadataApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc20MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteIerc20MetadataTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc20MetadataAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc20MetadataTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc20MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useSimulateIerc20Metadata =
  /*#__PURE__*/ createUseSimulateContract({ abi: ierc20MetadataAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc20MetadataApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateIerc20MetadataTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc20MetadataTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useWatchIerc20MetadataEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ierc20MetadataAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc20MetadataApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20MetadataAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc20MetadataTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20MetadataAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20PermitAbi}__
 */
export const useReadIerc20Permit = /*#__PURE__*/ createUseReadContract({
  abi: ierc20PermitAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20PermitAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 */
export const useReadIerc20PermitDomainSeparator =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20PermitAbi,
    functionName: 'DOMAIN_SEPARATOR',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20PermitAbi}__ and `functionName` set to `"nonces"`
 */
export const useReadIerc20PermitNonces = /*#__PURE__*/ createUseReadContract({
  abi: ierc20PermitAbi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20PermitAbi}__
 */
export const useWriteIerc20Permit = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20PermitAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20PermitAbi}__ and `functionName` set to `"permit"`
 */
export const useWriteIerc20PermitPermit = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20PermitAbi,
  functionName: 'permit',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20PermitAbi}__
 */
export const useSimulateIerc20Permit = /*#__PURE__*/ createUseSimulateContract({
  abi: ierc20PermitAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20PermitAbi}__ and `functionName` set to `"permit"`
 */
export const useSimulateIerc20PermitPermit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20PermitAbi,
    functionName: 'permit',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc5267Abi}__
 */
export const useReadIerc5267 = /*#__PURE__*/ createUseReadContract({
  abi: ierc5267Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc5267Abi}__ and `functionName` set to `"eip712Domain"`
 */
export const useReadIerc5267Eip712Domain = /*#__PURE__*/ createUseReadContract({
  abi: ierc5267Abi,
  functionName: 'eip712Domain',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc5267Abi}__
 */
export const useWatchIerc5267Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ierc5267Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc5267Abi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const useWatchIerc5267Eip712DomainChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc5267Abi,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc5805Abi}__
 */
export const useReadIerc5805 = /*#__PURE__*/ createUseReadContract({
  abi: ierc5805Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc5805Abi}__ and `functionName` set to `"CLOCK_MODE"`
 */
export const useReadIerc5805ClockMode = /*#__PURE__*/ createUseReadContract({
  abi: ierc5805Abi,
  functionName: 'CLOCK_MODE',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc5805Abi}__ and `functionName` set to `"clock"`
 */
export const useReadIerc5805Clock = /*#__PURE__*/ createUseReadContract({
  abi: ierc5805Abi,
  functionName: 'clock',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc5805Abi}__ and `functionName` set to `"delegates"`
 */
export const useReadIerc5805Delegates = /*#__PURE__*/ createUseReadContract({
  abi: ierc5805Abi,
  functionName: 'delegates',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc5805Abi}__ and `functionName` set to `"getPastTotalSupply"`
 */
export const useReadIerc5805GetPastTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc5805Abi,
    functionName: 'getPastTotalSupply',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc5805Abi}__ and `functionName` set to `"getPastVotes"`
 */
export const useReadIerc5805GetPastVotes = /*#__PURE__*/ createUseReadContract({
  abi: ierc5805Abi,
  functionName: 'getPastVotes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc5805Abi}__ and `functionName` set to `"getVotes"`
 */
export const useReadIerc5805GetVotes = /*#__PURE__*/ createUseReadContract({
  abi: ierc5805Abi,
  functionName: 'getVotes',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc5805Abi}__
 */
export const useWriteIerc5805 = /*#__PURE__*/ createUseWriteContract({
  abi: ierc5805Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc5805Abi}__ and `functionName` set to `"delegate"`
 */
export const useWriteIerc5805Delegate = /*#__PURE__*/ createUseWriteContract({
  abi: ierc5805Abi,
  functionName: 'delegate',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc5805Abi}__ and `functionName` set to `"delegateBySig"`
 */
export const useWriteIerc5805DelegateBySig =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc5805Abi,
    functionName: 'delegateBySig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc5805Abi}__
 */
export const useSimulateIerc5805 = /*#__PURE__*/ createUseSimulateContract({
  abi: ierc5805Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc5805Abi}__ and `functionName` set to `"delegate"`
 */
export const useSimulateIerc5805Delegate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc5805Abi,
    functionName: 'delegate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc5805Abi}__ and `functionName` set to `"delegateBySig"`
 */
export const useSimulateIerc5805DelegateBySig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc5805Abi,
    functionName: 'delegateBySig',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc5805Abi}__
 */
export const useWatchIerc5805Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ierc5805Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc5805Abi}__ and `eventName` set to `"DelegateChanged"`
 */
export const useWatchIerc5805DelegateChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc5805Abi,
    eventName: 'DelegateChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc5805Abi}__ and `eventName` set to `"DelegateVotesChanged"`
 */
export const useWatchIerc5805DelegateVotesChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc5805Abi,
    eventName: 'DelegateVotesChanged',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc6372Abi}__
 */
export const useReadIerc6372 = /*#__PURE__*/ createUseReadContract({
  abi: ierc6372Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc6372Abi}__ and `functionName` set to `"CLOCK_MODE"`
 */
export const useReadIerc6372ClockMode = /*#__PURE__*/ createUseReadContract({
  abi: ierc6372Abi,
  functionName: 'CLOCK_MODE',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc6372Abi}__ and `functionName` set to `"clock"`
 */
export const useReadIerc6372Clock = /*#__PURE__*/ createUseReadContract({
  abi: ierc6372Abi,
  functionName: 'clock',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__
 */
export const useWriteIerc721Receiver = /*#__PURE__*/ createUseWriteContract({
  abi: ierc721ReceiverAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useWriteIerc721ReceiverOnErc721Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721ReceiverAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__
 */
export const useSimulateIerc721Receiver =
  /*#__PURE__*/ createUseSimulateContract({ abi: ierc721ReceiverAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useSimulateIerc721ReceiverOnErc721Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721ReceiverAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iGovernorAbi}__
 */
export const useReadIGovernor = /*#__PURE__*/ createUseReadContract({
  abi: iGovernorAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"CLOCK_MODE"`
 */
export const useReadIGovernorClockMode = /*#__PURE__*/ createUseReadContract({
  abi: iGovernorAbi,
  functionName: 'CLOCK_MODE',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"COUNTING_MODE"`
 */
export const useReadIGovernorCountingMode = /*#__PURE__*/ createUseReadContract(
  { abi: iGovernorAbi, functionName: 'COUNTING_MODE' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"clock"`
 */
export const useReadIGovernorClock = /*#__PURE__*/ createUseReadContract({
  abi: iGovernorAbi,
  functionName: 'clock',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"getVotes"`
 */
export const useReadIGovernorGetVotes = /*#__PURE__*/ createUseReadContract({
  abi: iGovernorAbi,
  functionName: 'getVotes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"getVotesWithParams"`
 */
export const useReadIGovernorGetVotesWithParams =
  /*#__PURE__*/ createUseReadContract({
    abi: iGovernorAbi,
    functionName: 'getVotesWithParams',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"hasVoted"`
 */
export const useReadIGovernorHasVoted = /*#__PURE__*/ createUseReadContract({
  abi: iGovernorAbi,
  functionName: 'hasVoted',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"hashProposal"`
 */
export const useReadIGovernorHashProposal = /*#__PURE__*/ createUseReadContract(
  { abi: iGovernorAbi, functionName: 'hashProposal' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"name"`
 */
export const useReadIGovernorName = /*#__PURE__*/ createUseReadContract({
  abi: iGovernorAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"proposalDeadline"`
 */
export const useReadIGovernorProposalDeadline =
  /*#__PURE__*/ createUseReadContract({
    abi: iGovernorAbi,
    functionName: 'proposalDeadline',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"proposalEta"`
 */
export const useReadIGovernorProposalEta = /*#__PURE__*/ createUseReadContract({
  abi: iGovernorAbi,
  functionName: 'proposalEta',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"proposalNeedsQueuing"`
 */
export const useReadIGovernorProposalNeedsQueuing =
  /*#__PURE__*/ createUseReadContract({
    abi: iGovernorAbi,
    functionName: 'proposalNeedsQueuing',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"proposalProposer"`
 */
export const useReadIGovernorProposalProposer =
  /*#__PURE__*/ createUseReadContract({
    abi: iGovernorAbi,
    functionName: 'proposalProposer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"proposalSnapshot"`
 */
export const useReadIGovernorProposalSnapshot =
  /*#__PURE__*/ createUseReadContract({
    abi: iGovernorAbi,
    functionName: 'proposalSnapshot',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"proposalThreshold"`
 */
export const useReadIGovernorProposalThreshold =
  /*#__PURE__*/ createUseReadContract({
    abi: iGovernorAbi,
    functionName: 'proposalThreshold',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"quorum"`
 */
export const useReadIGovernorQuorum = /*#__PURE__*/ createUseReadContract({
  abi: iGovernorAbi,
  functionName: 'quorum',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"state"`
 */
export const useReadIGovernorState = /*#__PURE__*/ createUseReadContract({
  abi: iGovernorAbi,
  functionName: 'state',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIGovernorSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: iGovernorAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"version"`
 */
export const useReadIGovernorVersion = /*#__PURE__*/ createUseReadContract({
  abi: iGovernorAbi,
  functionName: 'version',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"votingDelay"`
 */
export const useReadIGovernorVotingDelay = /*#__PURE__*/ createUseReadContract({
  abi: iGovernorAbi,
  functionName: 'votingDelay',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"votingPeriod"`
 */
export const useReadIGovernorVotingPeriod = /*#__PURE__*/ createUseReadContract(
  { abi: iGovernorAbi, functionName: 'votingPeriod' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iGovernorAbi}__
 */
export const useWriteIGovernor = /*#__PURE__*/ createUseWriteContract({
  abi: iGovernorAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"cancel"`
 */
export const useWriteIGovernorCancel = /*#__PURE__*/ createUseWriteContract({
  abi: iGovernorAbi,
  functionName: 'cancel',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"castVote"`
 */
export const useWriteIGovernorCastVote = /*#__PURE__*/ createUseWriteContract({
  abi: iGovernorAbi,
  functionName: 'castVote',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"castVoteBySig"`
 */
export const useWriteIGovernorCastVoteBySig =
  /*#__PURE__*/ createUseWriteContract({
    abi: iGovernorAbi,
    functionName: 'castVoteBySig',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"castVoteWithReason"`
 */
export const useWriteIGovernorCastVoteWithReason =
  /*#__PURE__*/ createUseWriteContract({
    abi: iGovernorAbi,
    functionName: 'castVoteWithReason',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"castVoteWithReasonAndParams"`
 */
export const useWriteIGovernorCastVoteWithReasonAndParams =
  /*#__PURE__*/ createUseWriteContract({
    abi: iGovernorAbi,
    functionName: 'castVoteWithReasonAndParams',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"castVoteWithReasonAndParamsBySig"`
 */
export const useWriteIGovernorCastVoteWithReasonAndParamsBySig =
  /*#__PURE__*/ createUseWriteContract({
    abi: iGovernorAbi,
    functionName: 'castVoteWithReasonAndParamsBySig',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"execute"`
 */
export const useWriteIGovernorExecute = /*#__PURE__*/ createUseWriteContract({
  abi: iGovernorAbi,
  functionName: 'execute',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"propose"`
 */
export const useWriteIGovernorPropose = /*#__PURE__*/ createUseWriteContract({
  abi: iGovernorAbi,
  functionName: 'propose',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"queue"`
 */
export const useWriteIGovernorQueue = /*#__PURE__*/ createUseWriteContract({
  abi: iGovernorAbi,
  functionName: 'queue',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iGovernorAbi}__
 */
export const useSimulateIGovernor = /*#__PURE__*/ createUseSimulateContract({
  abi: iGovernorAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"cancel"`
 */
export const useSimulateIGovernorCancel =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iGovernorAbi,
    functionName: 'cancel',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"castVote"`
 */
export const useSimulateIGovernorCastVote =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iGovernorAbi,
    functionName: 'castVote',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"castVoteBySig"`
 */
export const useSimulateIGovernorCastVoteBySig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iGovernorAbi,
    functionName: 'castVoteBySig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"castVoteWithReason"`
 */
export const useSimulateIGovernorCastVoteWithReason =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iGovernorAbi,
    functionName: 'castVoteWithReason',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"castVoteWithReasonAndParams"`
 */
export const useSimulateIGovernorCastVoteWithReasonAndParams =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iGovernorAbi,
    functionName: 'castVoteWithReasonAndParams',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"castVoteWithReasonAndParamsBySig"`
 */
export const useSimulateIGovernorCastVoteWithReasonAndParamsBySig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iGovernorAbi,
    functionName: 'castVoteWithReasonAndParamsBySig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"execute"`
 */
export const useSimulateIGovernorExecute =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iGovernorAbi,
    functionName: 'execute',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"propose"`
 */
export const useSimulateIGovernorPropose =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iGovernorAbi,
    functionName: 'propose',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"queue"`
 */
export const useSimulateIGovernorQueue =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iGovernorAbi,
    functionName: 'queue',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iGovernorAbi}__
 */
export const useWatchIGovernorEvent = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: iGovernorAbi },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iGovernorAbi}__ and `eventName` set to `"ProposalCanceled"`
 */
export const useWatchIGovernorProposalCanceledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iGovernorAbi,
    eventName: 'ProposalCanceled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iGovernorAbi}__ and `eventName` set to `"ProposalCreated"`
 */
export const useWatchIGovernorProposalCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iGovernorAbi,
    eventName: 'ProposalCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iGovernorAbi}__ and `eventName` set to `"ProposalExecuted"`
 */
export const useWatchIGovernorProposalExecutedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iGovernorAbi,
    eventName: 'ProposalExecuted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iGovernorAbi}__ and `eventName` set to `"ProposalQueued"`
 */
export const useWatchIGovernorProposalQueuedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iGovernorAbi,
    eventName: 'ProposalQueued',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iGovernorAbi}__ and `eventName` set to `"VoteCast"`
 */
export const useWatchIGovernorVoteCastEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iGovernorAbi,
    eventName: 'VoteCast',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iGovernorAbi}__ and `eventName` set to `"VoteCastWithParams"`
 */
export const useWatchIGovernorVoteCastWithParamsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iGovernorAbi,
    eventName: 'VoteCastWithParams',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotesAbi}__
 */
export const useReadIVotes = /*#__PURE__*/ createUseReadContract({
  abi: iVotesAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotesAbi}__ and `functionName` set to `"delegates"`
 */
export const useReadIVotesDelegates = /*#__PURE__*/ createUseReadContract({
  abi: iVotesAbi,
  functionName: 'delegates',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotesAbi}__ and `functionName` set to `"getPastTotalSupply"`
 */
export const useReadIVotesGetPastTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: iVotesAbi,
    functionName: 'getPastTotalSupply',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotesAbi}__ and `functionName` set to `"getPastVotes"`
 */
export const useReadIVotesGetPastVotes = /*#__PURE__*/ createUseReadContract({
  abi: iVotesAbi,
  functionName: 'getPastVotes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotesAbi}__ and `functionName` set to `"getVotes"`
 */
export const useReadIVotesGetVotes = /*#__PURE__*/ createUseReadContract({
  abi: iVotesAbi,
  functionName: 'getVotes',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iVotesAbi}__
 */
export const useWriteIVotes = /*#__PURE__*/ createUseWriteContract({
  abi: iVotesAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iVotesAbi}__ and `functionName` set to `"delegate"`
 */
export const useWriteIVotesDelegate = /*#__PURE__*/ createUseWriteContract({
  abi: iVotesAbi,
  functionName: 'delegate',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iVotesAbi}__ and `functionName` set to `"delegateBySig"`
 */
export const useWriteIVotesDelegateBySig = /*#__PURE__*/ createUseWriteContract(
  { abi: iVotesAbi, functionName: 'delegateBySig' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iVotesAbi}__
 */
export const useSimulateIVotes = /*#__PURE__*/ createUseSimulateContract({
  abi: iVotesAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iVotesAbi}__ and `functionName` set to `"delegate"`
 */
export const useSimulateIVotesDelegate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iVotesAbi,
    functionName: 'delegate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iVotesAbi}__ and `functionName` set to `"delegateBySig"`
 */
export const useSimulateIVotesDelegateBySig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iVotesAbi,
    functionName: 'delegateBySig',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iVotesAbi}__
 */
export const useWatchIVotesEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: iVotesAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iVotesAbi}__ and `eventName` set to `"DelegateChanged"`
 */
export const useWatchIVotesDelegateChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iVotesAbi,
    eventName: 'DelegateChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iVotesAbi}__ and `eventName` set to `"DelegateVotesChanged"`
 */
export const useWatchIVotesDelegateVotesChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iVotesAbi,
    eventName: 'DelegateVotesChanged',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link loanAbi}__
 */
export const useReadLoan = /*#__PURE__*/ createUseReadContract({ abi: loanAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"asset"`
 */
export const useReadLoanAsset = /*#__PURE__*/ createUseReadContract({
  abi: loanAbi,
  functionName: 'asset',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"assetDataFeedAddress"`
 */
export const useReadLoanAssetDataFeedAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: loanAbi,
    functionName: 'assetDataFeedAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"assetToUsd"`
 */
export const useReadLoanAssetToUsd = /*#__PURE__*/ createUseReadContract({
  abi: loanAbi,
  functionName: 'assetToUsd',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"borrowingRatio"`
 */
export const useReadLoanBorrowingRatio = /*#__PURE__*/ createUseReadContract({
  abi: loanAbi,
  functionName: 'borrowingRatio',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"collateralizationRatio"`
 */
export const useReadLoanCollateralizationRatio =
  /*#__PURE__*/ createUseReadContract({
    abi: loanAbi,
    functionName: 'collateralizationRatio',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"dataFeedPrice"`
 */
export const useReadLoanDataFeedPrice = /*#__PURE__*/ createUseReadContract({
  abi: loanAbi,
  functionName: 'dataFeedPrice',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"etherDataFeedAddress"`
 */
export const useReadLoanEtherDataFeedAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: loanAbi,
    functionName: 'etherDataFeedAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"interestRate"`
 */
export const useReadLoanInterestRate = /*#__PURE__*/ createUseReadContract({
  abi: loanAbi,
  functionName: 'interestRate',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"lastCollection"`
 */
export const useReadLoanLastCollection = /*#__PURE__*/ createUseReadContract({
  abi: loanAbi,
  functionName: 'lastCollection',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"liabilityAmount"`
 */
export const useReadLoanLiabilityAmount = /*#__PURE__*/ createUseReadContract({
  abi: loanAbi,
  functionName: 'liabilityAmount',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"liquidationRatio"`
 */
export const useReadLoanLiquidationRatio = /*#__PURE__*/ createUseReadContract({
  abi: loanAbi,
  functionName: 'liquidationRatio',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"owner"`
 */
export const useReadLoanOwner = /*#__PURE__*/ createUseReadContract({
  abi: loanAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"usdToAsset"`
 */
export const useReadLoanUsdToAsset = /*#__PURE__*/ createUseReadContract({
  abi: loanAbi,
  functionName: 'usdToAsset',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"withdrawalAmount"`
 */
export const useReadLoanWithdrawalAmount = /*#__PURE__*/ createUseReadContract({
  abi: loanAbi,
  functionName: 'withdrawalAmount',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link loanAbi}__
 */
export const useWriteLoan = /*#__PURE__*/ createUseWriteContract({
  abi: loanAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"collect"`
 */
export const useWriteLoanCollect = /*#__PURE__*/ createUseWriteContract({
  abi: loanAbi,
  functionName: 'collect',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"liquidate"`
 */
export const useWriteLoanLiquidate = /*#__PURE__*/ createUseWriteContract({
  abi: loanAbi,
  functionName: 'liquidate',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"payback"`
 */
export const useWriteLoanPayback = /*#__PURE__*/ createUseWriteContract({
  abi: loanAbi,
  functionName: 'payback',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteLoanRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: loanAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteLoanTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: loanAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link loanAbi}__
 */
export const useSimulateLoan = /*#__PURE__*/ createUseSimulateContract({
  abi: loanAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"collect"`
 */
export const useSimulateLoanCollect = /*#__PURE__*/ createUseSimulateContract({
  abi: loanAbi,
  functionName: 'collect',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"liquidate"`
 */
export const useSimulateLoanLiquidate = /*#__PURE__*/ createUseSimulateContract(
  { abi: loanAbi, functionName: 'liquidate' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"payback"`
 */
export const useSimulateLoanPayback = /*#__PURE__*/ createUseSimulateContract({
  abi: loanAbi,
  functionName: 'payback',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateLoanRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: loanAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateLoanTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: loanAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link loanAbi}__
 */
export const useWatchLoanEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: loanAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link loanAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchLoanOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: loanAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link loanAbi}__ and `eventName` set to `"Received"`
 */
export const useWatchLoanReceivedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: loanAbi,
    eventName: 'Received',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockAggregatorV3InterfaceAbi}__
 */
export const useReadMockAggregatorV3Interface =
  /*#__PURE__*/ createUseReadContract({ abi: mockAggregatorV3InterfaceAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockAggregatorV3InterfaceAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadMockAggregatorV3InterfaceDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: mockAggregatorV3InterfaceAbi,
    functionName: 'decimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockAggregatorV3InterfaceAbi}__ and `functionName` set to `"description"`
 */
export const useReadMockAggregatorV3InterfaceDescription =
  /*#__PURE__*/ createUseReadContract({
    abi: mockAggregatorV3InterfaceAbi,
    functionName: 'description',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockAggregatorV3InterfaceAbi}__ and `functionName` set to `"getAnswer"`
 */
export const useReadMockAggregatorV3InterfaceGetAnswer =
  /*#__PURE__*/ createUseReadContract({
    abi: mockAggregatorV3InterfaceAbi,
    functionName: 'getAnswer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockAggregatorV3InterfaceAbi}__ and `functionName` set to `"getRoundData"`
 */
export const useReadMockAggregatorV3InterfaceGetRoundData =
  /*#__PURE__*/ createUseReadContract({
    abi: mockAggregatorV3InterfaceAbi,
    functionName: 'getRoundData',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockAggregatorV3InterfaceAbi}__ and `functionName` set to `"getTimestamp"`
 */
export const useReadMockAggregatorV3InterfaceGetTimestamp =
  /*#__PURE__*/ createUseReadContract({
    abi: mockAggregatorV3InterfaceAbi,
    functionName: 'getTimestamp',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockAggregatorV3InterfaceAbi}__ and `functionName` set to `"latestAnswer"`
 */
export const useReadMockAggregatorV3InterfaceLatestAnswer =
  /*#__PURE__*/ createUseReadContract({
    abi: mockAggregatorV3InterfaceAbi,
    functionName: 'latestAnswer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockAggregatorV3InterfaceAbi}__ and `functionName` set to `"latestRound"`
 */
export const useReadMockAggregatorV3InterfaceLatestRound =
  /*#__PURE__*/ createUseReadContract({
    abi: mockAggregatorV3InterfaceAbi,
    functionName: 'latestRound',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockAggregatorV3InterfaceAbi}__ and `functionName` set to `"latestRoundData"`
 */
export const useReadMockAggregatorV3InterfaceLatestRoundData =
  /*#__PURE__*/ createUseReadContract({
    abi: mockAggregatorV3InterfaceAbi,
    functionName: 'latestRoundData',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockAggregatorV3InterfaceAbi}__ and `functionName` set to `"latestTimestamp"`
 */
export const useReadMockAggregatorV3InterfaceLatestTimestamp =
  /*#__PURE__*/ createUseReadContract({
    abi: mockAggregatorV3InterfaceAbi,
    functionName: 'latestTimestamp',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockAggregatorV3InterfaceAbi}__ and `functionName` set to `"version"`
 */
export const useReadMockAggregatorV3InterfaceVersion =
  /*#__PURE__*/ createUseReadContract({
    abi: mockAggregatorV3InterfaceAbi,
    functionName: 'version',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockAggregatorV3InterfaceAbi}__
 */
export const useWriteMockAggregatorV3Interface =
  /*#__PURE__*/ createUseWriteContract({ abi: mockAggregatorV3InterfaceAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockAggregatorV3InterfaceAbi}__ and `functionName` set to `"updateAnswer"`
 */
export const useWriteMockAggregatorV3InterfaceUpdateAnswer =
  /*#__PURE__*/ createUseWriteContract({
    abi: mockAggregatorV3InterfaceAbi,
    functionName: 'updateAnswer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockAggregatorV3InterfaceAbi}__ and `functionName` set to `"updateRoundData"`
 */
export const useWriteMockAggregatorV3InterfaceUpdateRoundData =
  /*#__PURE__*/ createUseWriteContract({
    abi: mockAggregatorV3InterfaceAbi,
    functionName: 'updateRoundData',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockAggregatorV3InterfaceAbi}__
 */
export const useSimulateMockAggregatorV3Interface =
  /*#__PURE__*/ createUseSimulateContract({ abi: mockAggregatorV3InterfaceAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockAggregatorV3InterfaceAbi}__ and `functionName` set to `"updateAnswer"`
 */
export const useSimulateMockAggregatorV3InterfaceUpdateAnswer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mockAggregatorV3InterfaceAbi,
    functionName: 'updateAnswer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockAggregatorV3InterfaceAbi}__ and `functionName` set to `"updateRoundData"`
 */
export const useSimulateMockAggregatorV3InterfaceUpdateRoundData =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mockAggregatorV3InterfaceAbi,
    functionName: 'updateRoundData',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link noncesAbi}__
 */
export const useReadNonces = /*#__PURE__*/ createUseReadContract({
  abi: noncesAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link noncesAbi}__ and `functionName` set to `"nonces"`
 */
export const useReadNoncesNonces = /*#__PURE__*/ createUseReadContract({
  abi: noncesAbi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const useReadOwnable = /*#__PURE__*/ createUseReadContract({
  abi: ownableAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"owner"`
 */
export const useReadOwnableOwner = /*#__PURE__*/ createUseReadContract({
  abi: ownableAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const useWriteOwnable = /*#__PURE__*/ createUseWriteContract({
  abi: ownableAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteOwnableRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: ownableAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteOwnableTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: ownableAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const useSimulateOwnable = /*#__PURE__*/ createUseSimulateContract({
  abi: ownableAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateOwnableRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ownableAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateOwnableTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ownableAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ownableAbi}__
 */
export const useWatchOwnableEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ownableAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ownableAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchOwnableOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ownableAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockControllerAbi}__
 */
export const useReadTimelockController = /*#__PURE__*/ createUseReadContract({
  abi: timelockControllerAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"CANCELLER_ROLE"`
 */
export const useReadTimelockControllerCancellerRole =
  /*#__PURE__*/ createUseReadContract({
    abi: timelockControllerAbi,
    functionName: 'CANCELLER_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadTimelockControllerDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: timelockControllerAbi,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"EXECUTOR_ROLE"`
 */
export const useReadTimelockControllerExecutorRole =
  /*#__PURE__*/ createUseReadContract({
    abi: timelockControllerAbi,
    functionName: 'EXECUTOR_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"PROPOSER_ROLE"`
 */
export const useReadTimelockControllerProposerRole =
  /*#__PURE__*/ createUseReadContract({
    abi: timelockControllerAbi,
    functionName: 'PROPOSER_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"getMinDelay"`
 */
export const useReadTimelockControllerGetMinDelay =
  /*#__PURE__*/ createUseReadContract({
    abi: timelockControllerAbi,
    functionName: 'getMinDelay',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"getOperationState"`
 */
export const useReadTimelockControllerGetOperationState =
  /*#__PURE__*/ createUseReadContract({
    abi: timelockControllerAbi,
    functionName: 'getOperationState',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadTimelockControllerGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: timelockControllerAbi,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"getTimestamp"`
 */
export const useReadTimelockControllerGetTimestamp =
  /*#__PURE__*/ createUseReadContract({
    abi: timelockControllerAbi,
    functionName: 'getTimestamp',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadTimelockControllerHasRole =
  /*#__PURE__*/ createUseReadContract({
    abi: timelockControllerAbi,
    functionName: 'hasRole',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"hashOperation"`
 */
export const useReadTimelockControllerHashOperation =
  /*#__PURE__*/ createUseReadContract({
    abi: timelockControllerAbi,
    functionName: 'hashOperation',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"hashOperationBatch"`
 */
export const useReadTimelockControllerHashOperationBatch =
  /*#__PURE__*/ createUseReadContract({
    abi: timelockControllerAbi,
    functionName: 'hashOperationBatch',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"isOperation"`
 */
export const useReadTimelockControllerIsOperation =
  /*#__PURE__*/ createUseReadContract({
    abi: timelockControllerAbi,
    functionName: 'isOperation',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"isOperationDone"`
 */
export const useReadTimelockControllerIsOperationDone =
  /*#__PURE__*/ createUseReadContract({
    abi: timelockControllerAbi,
    functionName: 'isOperationDone',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"isOperationPending"`
 */
export const useReadTimelockControllerIsOperationPending =
  /*#__PURE__*/ createUseReadContract({
    abi: timelockControllerAbi,
    functionName: 'isOperationPending',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"isOperationReady"`
 */
export const useReadTimelockControllerIsOperationReady =
  /*#__PURE__*/ createUseReadContract({
    abi: timelockControllerAbi,
    functionName: 'isOperationReady',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadTimelockControllerSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: timelockControllerAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link timelockControllerAbi}__
 */
export const useWriteTimelockController = /*#__PURE__*/ createUseWriteContract({
  abi: timelockControllerAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"cancel"`
 */
export const useWriteTimelockControllerCancel =
  /*#__PURE__*/ createUseWriteContract({
    abi: timelockControllerAbi,
    functionName: 'cancel',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"execute"`
 */
export const useWriteTimelockControllerExecute =
  /*#__PURE__*/ createUseWriteContract({
    abi: timelockControllerAbi,
    functionName: 'execute',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"executeBatch"`
 */
export const useWriteTimelockControllerExecuteBatch =
  /*#__PURE__*/ createUseWriteContract({
    abi: timelockControllerAbi,
    functionName: 'executeBatch',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteTimelockControllerGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: timelockControllerAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const useWriteTimelockControllerOnErc1155BatchReceived =
  /*#__PURE__*/ createUseWriteContract({
    abi: timelockControllerAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const useWriteTimelockControllerOnErc1155Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: timelockControllerAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useWriteTimelockControllerOnErc721Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: timelockControllerAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteTimelockControllerRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: timelockControllerAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteTimelockControllerRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: timelockControllerAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"schedule"`
 */
export const useWriteTimelockControllerSchedule =
  /*#__PURE__*/ createUseWriteContract({
    abi: timelockControllerAbi,
    functionName: 'schedule',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"scheduleBatch"`
 */
export const useWriteTimelockControllerScheduleBatch =
  /*#__PURE__*/ createUseWriteContract({
    abi: timelockControllerAbi,
    functionName: 'scheduleBatch',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"updateDelay"`
 */
export const useWriteTimelockControllerUpdateDelay =
  /*#__PURE__*/ createUseWriteContract({
    abi: timelockControllerAbi,
    functionName: 'updateDelay',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link timelockControllerAbi}__
 */
export const useSimulateTimelockController =
  /*#__PURE__*/ createUseSimulateContract({ abi: timelockControllerAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"cancel"`
 */
export const useSimulateTimelockControllerCancel =
  /*#__PURE__*/ createUseSimulateContract({
    abi: timelockControllerAbi,
    functionName: 'cancel',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"execute"`
 */
export const useSimulateTimelockControllerExecute =
  /*#__PURE__*/ createUseSimulateContract({
    abi: timelockControllerAbi,
    functionName: 'execute',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"executeBatch"`
 */
export const useSimulateTimelockControllerExecuteBatch =
  /*#__PURE__*/ createUseSimulateContract({
    abi: timelockControllerAbi,
    functionName: 'executeBatch',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateTimelockControllerGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: timelockControllerAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const useSimulateTimelockControllerOnErc1155BatchReceived =
  /*#__PURE__*/ createUseSimulateContract({
    abi: timelockControllerAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const useSimulateTimelockControllerOnErc1155Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: timelockControllerAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useSimulateTimelockControllerOnErc721Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: timelockControllerAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateTimelockControllerRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: timelockControllerAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateTimelockControllerRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: timelockControllerAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"schedule"`
 */
export const useSimulateTimelockControllerSchedule =
  /*#__PURE__*/ createUseSimulateContract({
    abi: timelockControllerAbi,
    functionName: 'schedule',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"scheduleBatch"`
 */
export const useSimulateTimelockControllerScheduleBatch =
  /*#__PURE__*/ createUseSimulateContract({
    abi: timelockControllerAbi,
    functionName: 'scheduleBatch',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"updateDelay"`
 */
export const useSimulateTimelockControllerUpdateDelay =
  /*#__PURE__*/ createUseSimulateContract({
    abi: timelockControllerAbi,
    functionName: 'updateDelay',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link timelockControllerAbi}__
 */
export const useWatchTimelockControllerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: timelockControllerAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link timelockControllerAbi}__ and `eventName` set to `"CallExecuted"`
 */
export const useWatchTimelockControllerCallExecutedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: timelockControllerAbi,
    eventName: 'CallExecuted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link timelockControllerAbi}__ and `eventName` set to `"CallSalt"`
 */
export const useWatchTimelockControllerCallSaltEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: timelockControllerAbi,
    eventName: 'CallSalt',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link timelockControllerAbi}__ and `eventName` set to `"CallScheduled"`
 */
export const useWatchTimelockControllerCallScheduledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: timelockControllerAbi,
    eventName: 'CallScheduled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link timelockControllerAbi}__ and `eventName` set to `"Cancelled"`
 */
export const useWatchTimelockControllerCancelledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: timelockControllerAbi,
    eventName: 'Cancelled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link timelockControllerAbi}__ and `eventName` set to `"MinDelayChange"`
 */
export const useWatchTimelockControllerMinDelayChangeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: timelockControllerAbi,
    eventName: 'MinDelayChange',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link timelockControllerAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchTimelockControllerRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: timelockControllerAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link timelockControllerAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchTimelockControllerRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: timelockControllerAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link timelockControllerAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchTimelockControllerRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: timelockControllerAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votesAbi}__
 */
export const useReadVotes = /*#__PURE__*/ createUseReadContract({
  abi: votesAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"CLOCK_MODE"`
 */
export const useReadVotesClockMode = /*#__PURE__*/ createUseReadContract({
  abi: votesAbi,
  functionName: 'CLOCK_MODE',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"clock"`
 */
export const useReadVotesClock = /*#__PURE__*/ createUseReadContract({
  abi: votesAbi,
  functionName: 'clock',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"delegates"`
 */
export const useReadVotesDelegates = /*#__PURE__*/ createUseReadContract({
  abi: votesAbi,
  functionName: 'delegates',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"eip712Domain"`
 */
export const useReadVotesEip712Domain = /*#__PURE__*/ createUseReadContract({
  abi: votesAbi,
  functionName: 'eip712Domain',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"getPastTotalSupply"`
 */
export const useReadVotesGetPastTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: votesAbi,
    functionName: 'getPastTotalSupply',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"getPastVotes"`
 */
export const useReadVotesGetPastVotes = /*#__PURE__*/ createUseReadContract({
  abi: votesAbi,
  functionName: 'getPastVotes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"getVotes"`
 */
export const useReadVotesGetVotes = /*#__PURE__*/ createUseReadContract({
  abi: votesAbi,
  functionName: 'getVotes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"nonces"`
 */
export const useReadVotesNonces = /*#__PURE__*/ createUseReadContract({
  abi: votesAbi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link votesAbi}__
 */
export const useWriteVotes = /*#__PURE__*/ createUseWriteContract({
  abi: votesAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"delegate"`
 */
export const useWriteVotesDelegate = /*#__PURE__*/ createUseWriteContract({
  abi: votesAbi,
  functionName: 'delegate',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"delegateBySig"`
 */
export const useWriteVotesDelegateBySig = /*#__PURE__*/ createUseWriteContract({
  abi: votesAbi,
  functionName: 'delegateBySig',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link votesAbi}__
 */
export const useSimulateVotes = /*#__PURE__*/ createUseSimulateContract({
  abi: votesAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"delegate"`
 */
export const useSimulateVotesDelegate = /*#__PURE__*/ createUseSimulateContract(
  { abi: votesAbi, functionName: 'delegate' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"delegateBySig"`
 */
export const useSimulateVotesDelegateBySig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: votesAbi,
    functionName: 'delegateBySig',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link votesAbi}__
 */
export const useWatchVotesEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: votesAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link votesAbi}__ and `eventName` set to `"DelegateChanged"`
 */
export const useWatchVotesDelegateChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: votesAbi,
    eventName: 'DelegateChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link votesAbi}__ and `eventName` set to `"DelegateVotesChanged"`
 */
export const useWatchVotesDelegateVotesChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: votesAbi,
    eventName: 'DelegateVotesChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link votesAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const useWatchVotesEip712DomainChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: votesAbi,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link windowAbi}__
 */
export const useReadWindow = /*#__PURE__*/ createUseReadContract({
  abi: windowAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"assetToUsd"`
 */
export const useReadWindowAssetToUsd = /*#__PURE__*/ createUseReadContract({
  abi: windowAbi,
  functionName: 'assetToUsd',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"assets"`
 */
export const useReadWindowAssets = /*#__PURE__*/ createUseReadContract({
  abi: windowAbi,
  functionName: 'assets',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"dataFeedPrice"`
 */
export const useReadWindowDataFeedPrice = /*#__PURE__*/ createUseReadContract({
  abi: windowAbi,
  functionName: 'dataFeedPrice',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"etherDataFeedAddress"`
 */
export const useReadWindowEtherDataFeedAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: windowAbi,
    functionName: 'etherDataFeedAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"getChainlinkDataFeedLatestAnswer"`
 */
export const useReadWindowGetChainlinkDataFeedLatestAnswer =
  /*#__PURE__*/ createUseReadContract({
    abi: windowAbi,
    functionName: 'getChainlinkDataFeedLatestAnswer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"getParam"`
 */
export const useReadWindowGetParam = /*#__PURE__*/ createUseReadContract({
  abi: windowAbi,
  functionName: 'getParam',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"loans"`
 */
export const useReadWindowLoans = /*#__PURE__*/ createUseReadContract({
  abi: windowAbi,
  functionName: 'loans',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"owner"`
 */
export const useReadWindowOwner = /*#__PURE__*/ createUseReadContract({
  abi: windowAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"params"`
 */
export const useReadWindowParams = /*#__PURE__*/ createUseReadContract({
  abi: windowAbi,
  functionName: 'params',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"usdToAsset"`
 */
export const useReadWindowUsdToAsset = /*#__PURE__*/ createUseReadContract({
  abi: windowAbi,
  functionName: 'usdToAsset',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link windowAbi}__
 */
export const useWriteWindow = /*#__PURE__*/ createUseWriteContract({
  abi: windowAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"approveAsset"`
 */
export const useWriteWindowApproveAsset = /*#__PURE__*/ createUseWriteContract({
  abi: windowAbi,
  functionName: 'approveAsset',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"issue"`
 */
export const useWriteWindowIssue = /*#__PURE__*/ createUseWriteContract({
  abi: windowAbi,
  functionName: 'issue',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"loanEntityEvent"`
 */
export const useWriteWindowLoanEntityEvent =
  /*#__PURE__*/ createUseWriteContract({
    abi: windowAbi,
    functionName: 'loanEntityEvent',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteWindowRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: windowAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"setEtherDataFeed"`
 */
export const useWriteWindowSetEtherDataFeed =
  /*#__PURE__*/ createUseWriteContract({
    abi: windowAbi,
    functionName: 'setEtherDataFeed',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"setParam"`
 */
export const useWriteWindowSetParam = /*#__PURE__*/ createUseWriteContract({
  abi: windowAbi,
  functionName: 'setParam',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteWindowTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: windowAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link windowAbi}__
 */
export const useSimulateWindow = /*#__PURE__*/ createUseSimulateContract({
  abi: windowAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"approveAsset"`
 */
export const useSimulateWindowApproveAsset =
  /*#__PURE__*/ createUseSimulateContract({
    abi: windowAbi,
    functionName: 'approveAsset',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"issue"`
 */
export const useSimulateWindowIssue = /*#__PURE__*/ createUseSimulateContract({
  abi: windowAbi,
  functionName: 'issue',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"loanEntityEvent"`
 */
export const useSimulateWindowLoanEntityEvent =
  /*#__PURE__*/ createUseSimulateContract({
    abi: windowAbi,
    functionName: 'loanEntityEvent',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateWindowRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: windowAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"setEtherDataFeed"`
 */
export const useSimulateWindowSetEtherDataFeed =
  /*#__PURE__*/ createUseSimulateContract({
    abi: windowAbi,
    functionName: 'setEtherDataFeed',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"setParam"`
 */
export const useSimulateWindowSetParam =
  /*#__PURE__*/ createUseSimulateContract({
    abi: windowAbi,
    functionName: 'setParam',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateWindowTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: windowAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link windowAbi}__
 */
export const useWatchWindowEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: windowAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link windowAbi}__ and `eventName` set to `"AssetEntity"`
 */
export const useWatchWindowAssetEntityEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: windowAbi,
    eventName: 'AssetEntity',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link windowAbi}__ and `eventName` set to `"LoanEntity"`
 */
export const useWatchWindowLoanEntityEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: windowAbi,
    eventName: 'LoanEntity',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link windowAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchWindowOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: windowAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link windowInterfaceAbi}__
 */
export const useWriteWindowInterface = /*#__PURE__*/ createUseWriteContract({
  abi: windowInterfaceAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link windowInterfaceAbi}__ and `functionName` set to `"getParam"`
 */
export const useWriteWindowInterfaceGetParam =
  /*#__PURE__*/ createUseWriteContract({
    abi: windowInterfaceAbi,
    functionName: 'getParam',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link windowInterfaceAbi}__ and `functionName` set to `"loanEntityEvent"`
 */
export const useWriteWindowInterfaceLoanEntityEvent =
  /*#__PURE__*/ createUseWriteContract({
    abi: windowInterfaceAbi,
    functionName: 'loanEntityEvent',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link windowInterfaceAbi}__
 */
export const useSimulateWindowInterface =
  /*#__PURE__*/ createUseSimulateContract({ abi: windowInterfaceAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link windowInterfaceAbi}__ and `functionName` set to `"getParam"`
 */
export const useSimulateWindowInterfaceGetParam =
  /*#__PURE__*/ createUseSimulateContract({
    abi: windowInterfaceAbi,
    functionName: 'getParam',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link windowInterfaceAbi}__ and `functionName` set to `"loanEntityEvent"`
 */
export const useSimulateWindowInterfaceLoanEntityEvent =
  /*#__PURE__*/ createUseSimulateContract({
    abi: windowInterfaceAbi,
    functionName: 'loanEntityEvent',
  })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link accessControlAbi}__
 */
export const readAccessControl = /*#__PURE__*/ createReadContract({
  abi: accessControlAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const readAccessControlDefaultAdminRole =
  /*#__PURE__*/ createReadContract({
    abi: accessControlAbi,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const readAccessControlGetRoleAdmin = /*#__PURE__*/ createReadContract({
  abi: accessControlAbi,
  functionName: 'getRoleAdmin',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"hasRole"`
 */
export const readAccessControlHasRole = /*#__PURE__*/ createReadContract({
  abi: accessControlAbi,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readAccessControlSupportsInterface =
  /*#__PURE__*/ createReadContract({
    abi: accessControlAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link accessControlAbi}__
 */
export const writeAccessControl = /*#__PURE__*/ createWriteContract({
  abi: accessControlAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const writeAccessControlGrantRole = /*#__PURE__*/ createWriteContract({
  abi: accessControlAbi,
  functionName: 'grantRole',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const writeAccessControlRenounceRole = /*#__PURE__*/ createWriteContract(
  { abi: accessControlAbi, functionName: 'renounceRole' },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const writeAccessControlRevokeRole = /*#__PURE__*/ createWriteContract({
  abi: accessControlAbi,
  functionName: 'revokeRole',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link accessControlAbi}__
 */
export const simulateAccessControl = /*#__PURE__*/ createSimulateContract({
  abi: accessControlAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const simulateAccessControlGrantRole =
  /*#__PURE__*/ createSimulateContract({
    abi: accessControlAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const simulateAccessControlRenounceRole =
  /*#__PURE__*/ createSimulateContract({
    abi: accessControlAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const simulateAccessControlRevokeRole =
  /*#__PURE__*/ createSimulateContract({
    abi: accessControlAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link accessControlAbi}__
 */
export const watchAccessControlEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: accessControlAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link accessControlAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const watchAccessControlRoleAdminChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: accessControlAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link accessControlAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const watchAccessControlRoleGrantedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: accessControlAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link accessControlAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const watchAccessControlRoleRevokedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: accessControlAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aggregatorV3InterfaceAbi}__
 */
export const readAggregatorV3Interface = /*#__PURE__*/ createReadContract({
  abi: aggregatorV3InterfaceAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aggregatorV3InterfaceAbi}__ and `functionName` set to `"decimals"`
 */
export const readAggregatorV3InterfaceDecimals =
  /*#__PURE__*/ createReadContract({
    abi: aggregatorV3InterfaceAbi,
    functionName: 'decimals',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aggregatorV3InterfaceAbi}__ and `functionName` set to `"description"`
 */
export const readAggregatorV3InterfaceDescription =
  /*#__PURE__*/ createReadContract({
    abi: aggregatorV3InterfaceAbi,
    functionName: 'description',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aggregatorV3InterfaceAbi}__ and `functionName` set to `"getRoundData"`
 */
export const readAggregatorV3InterfaceGetRoundData =
  /*#__PURE__*/ createReadContract({
    abi: aggregatorV3InterfaceAbi,
    functionName: 'getRoundData',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aggregatorV3InterfaceAbi}__ and `functionName` set to `"latestRoundData"`
 */
export const readAggregatorV3InterfaceLatestRoundData =
  /*#__PURE__*/ createReadContract({
    abi: aggregatorV3InterfaceAbi,
    functionName: 'latestRoundData',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aggregatorV3InterfaceAbi}__ and `functionName` set to `"version"`
 */
export const readAggregatorV3InterfaceVersion =
  /*#__PURE__*/ createReadContract({
    abi: aggregatorV3InterfaceAbi,
    functionName: 'version',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionTokenAbi}__
 */
export const readAionToken = /*#__PURE__*/ createReadContract({
  abi: aionTokenAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"CLOCK_MODE"`
 */
export const readAionTokenClockMode = /*#__PURE__*/ createReadContract({
  abi: aionTokenAbi,
  functionName: 'CLOCK_MODE',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 */
export const readAionTokenDomainSeparator = /*#__PURE__*/ createReadContract({
  abi: aionTokenAbi,
  functionName: 'DOMAIN_SEPARATOR',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"allowance"`
 */
export const readAionTokenAllowance = /*#__PURE__*/ createReadContract({
  abi: aionTokenAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readAionTokenBalanceOf = /*#__PURE__*/ createReadContract({
  abi: aionTokenAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"checkpoints"`
 */
export const readAionTokenCheckpoints = /*#__PURE__*/ createReadContract({
  abi: aionTokenAbi,
  functionName: 'checkpoints',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"clock"`
 */
export const readAionTokenClock = /*#__PURE__*/ createReadContract({
  abi: aionTokenAbi,
  functionName: 'clock',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"decimals"`
 */
export const readAionTokenDecimals = /*#__PURE__*/ createReadContract({
  abi: aionTokenAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"delegates"`
 */
export const readAionTokenDelegates = /*#__PURE__*/ createReadContract({
  abi: aionTokenAbi,
  functionName: 'delegates',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"eip712Domain"`
 */
export const readAionTokenEip712Domain = /*#__PURE__*/ createReadContract({
  abi: aionTokenAbi,
  functionName: 'eip712Domain',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"getPastTotalSupply"`
 */
export const readAionTokenGetPastTotalSupply = /*#__PURE__*/ createReadContract(
  { abi: aionTokenAbi, functionName: 'getPastTotalSupply' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"getPastVotes"`
 */
export const readAionTokenGetPastVotes = /*#__PURE__*/ createReadContract({
  abi: aionTokenAbi,
  functionName: 'getPastVotes',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"getVotes"`
 */
export const readAionTokenGetVotes = /*#__PURE__*/ createReadContract({
  abi: aionTokenAbi,
  functionName: 'getVotes',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"name"`
 */
export const readAionTokenName = /*#__PURE__*/ createReadContract({
  abi: aionTokenAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"nonces"`
 */
export const readAionTokenNonces = /*#__PURE__*/ createReadContract({
  abi: aionTokenAbi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"numCheckpoints"`
 */
export const readAionTokenNumCheckpoints = /*#__PURE__*/ createReadContract({
  abi: aionTokenAbi,
  functionName: 'numCheckpoints',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"symbol"`
 */
export const readAionTokenSymbol = /*#__PURE__*/ createReadContract({
  abi: aionTokenAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"totalSupply"`
 */
export const readAionTokenTotalSupply = /*#__PURE__*/ createReadContract({
  abi: aionTokenAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link aionTokenAbi}__
 */
export const writeAionToken = /*#__PURE__*/ createWriteContract({
  abi: aionTokenAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"approve"`
 */
export const writeAionTokenApprove = /*#__PURE__*/ createWriteContract({
  abi: aionTokenAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"delegate"`
 */
export const writeAionTokenDelegate = /*#__PURE__*/ createWriteContract({
  abi: aionTokenAbi,
  functionName: 'delegate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"delegateBySig"`
 */
export const writeAionTokenDelegateBySig = /*#__PURE__*/ createWriteContract({
  abi: aionTokenAbi,
  functionName: 'delegateBySig',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"permit"`
 */
export const writeAionTokenPermit = /*#__PURE__*/ createWriteContract({
  abi: aionTokenAbi,
  functionName: 'permit',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"transfer"`
 */
export const writeAionTokenTransfer = /*#__PURE__*/ createWriteContract({
  abi: aionTokenAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeAionTokenTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: aionTokenAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link aionTokenAbi}__
 */
export const simulateAionToken = /*#__PURE__*/ createSimulateContract({
  abi: aionTokenAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"approve"`
 */
export const simulateAionTokenApprove = /*#__PURE__*/ createSimulateContract({
  abi: aionTokenAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"delegate"`
 */
export const simulateAionTokenDelegate = /*#__PURE__*/ createSimulateContract({
  abi: aionTokenAbi,
  functionName: 'delegate',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"delegateBySig"`
 */
export const simulateAionTokenDelegateBySig =
  /*#__PURE__*/ createSimulateContract({
    abi: aionTokenAbi,
    functionName: 'delegateBySig',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"permit"`
 */
export const simulateAionTokenPermit = /*#__PURE__*/ createSimulateContract({
  abi: aionTokenAbi,
  functionName: 'permit',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"transfer"`
 */
export const simulateAionTokenTransfer = /*#__PURE__*/ createSimulateContract({
  abi: aionTokenAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link aionTokenAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateAionTokenTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: aionTokenAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link aionTokenAbi}__
 */
export const watchAionTokenEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: aionTokenAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link aionTokenAbi}__ and `eventName` set to `"Approval"`
 */
export const watchAionTokenApprovalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: aionTokenAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link aionTokenAbi}__ and `eventName` set to `"DelegateChanged"`
 */
export const watchAionTokenDelegateChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: aionTokenAbi,
    eventName: 'DelegateChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link aionTokenAbi}__ and `eventName` set to `"DelegateVotesChanged"`
 */
export const watchAionTokenDelegateVotesChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: aionTokenAbi,
    eventName: 'DelegateVotesChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link aionTokenAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const watchAionTokenEip712DomainChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: aionTokenAbi,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link aionTokenAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchAionTokenTransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: aionTokenAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicGovernorAbi}__
 */
export const readAionicGovernor = /*#__PURE__*/ createReadContract({
  abi: aionicGovernorAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"BALLOT_TYPEHASH"`
 */
export const readAionicGovernorBallotTypehash =
  /*#__PURE__*/ createReadContract({
    abi: aionicGovernorAbi,
    functionName: 'BALLOT_TYPEHASH',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"CLOCK_MODE"`
 */
export const readAionicGovernorClockMode = /*#__PURE__*/ createReadContract({
  abi: aionicGovernorAbi,
  functionName: 'CLOCK_MODE',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"COUNTING_MODE"`
 */
export const readAionicGovernorCountingMode = /*#__PURE__*/ createReadContract({
  abi: aionicGovernorAbi,
  functionName: 'COUNTING_MODE',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"EXTENDED_BALLOT_TYPEHASH"`
 */
export const readAionicGovernorExtendedBallotTypehash =
  /*#__PURE__*/ createReadContract({
    abi: aionicGovernorAbi,
    functionName: 'EXTENDED_BALLOT_TYPEHASH',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"clock"`
 */
export const readAionicGovernorClock = /*#__PURE__*/ createReadContract({
  abi: aionicGovernorAbi,
  functionName: 'clock',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"eip712Domain"`
 */
export const readAionicGovernorEip712Domain = /*#__PURE__*/ createReadContract({
  abi: aionicGovernorAbi,
  functionName: 'eip712Domain',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"getVotes"`
 */
export const readAionicGovernorGetVotes = /*#__PURE__*/ createReadContract({
  abi: aionicGovernorAbi,
  functionName: 'getVotes',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"getVotesWithParams"`
 */
export const readAionicGovernorGetVotesWithParams =
  /*#__PURE__*/ createReadContract({
    abi: aionicGovernorAbi,
    functionName: 'getVotesWithParams',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"hasVoted"`
 */
export const readAionicGovernorHasVoted = /*#__PURE__*/ createReadContract({
  abi: aionicGovernorAbi,
  functionName: 'hasVoted',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"hashProposal"`
 */
export const readAionicGovernorHashProposal = /*#__PURE__*/ createReadContract({
  abi: aionicGovernorAbi,
  functionName: 'hashProposal',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"name"`
 */
export const readAionicGovernorName = /*#__PURE__*/ createReadContract({
  abi: aionicGovernorAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"nonces"`
 */
export const readAionicGovernorNonces = /*#__PURE__*/ createReadContract({
  abi: aionicGovernorAbi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"proposalDeadline"`
 */
export const readAionicGovernorProposalDeadline =
  /*#__PURE__*/ createReadContract({
    abi: aionicGovernorAbi,
    functionName: 'proposalDeadline',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"proposalEta"`
 */
export const readAionicGovernorProposalEta = /*#__PURE__*/ createReadContract({
  abi: aionicGovernorAbi,
  functionName: 'proposalEta',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"proposalNeedsQueuing"`
 */
export const readAionicGovernorProposalNeedsQueuing =
  /*#__PURE__*/ createReadContract({
    abi: aionicGovernorAbi,
    functionName: 'proposalNeedsQueuing',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"proposalProposer"`
 */
export const readAionicGovernorProposalProposer =
  /*#__PURE__*/ createReadContract({
    abi: aionicGovernorAbi,
    functionName: 'proposalProposer',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"proposalSnapshot"`
 */
export const readAionicGovernorProposalSnapshot =
  /*#__PURE__*/ createReadContract({
    abi: aionicGovernorAbi,
    functionName: 'proposalSnapshot',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"proposalThreshold"`
 */
export const readAionicGovernorProposalThreshold =
  /*#__PURE__*/ createReadContract({
    abi: aionicGovernorAbi,
    functionName: 'proposalThreshold',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"proposalVotes"`
 */
export const readAionicGovernorProposalVotes = /*#__PURE__*/ createReadContract(
  { abi: aionicGovernorAbi, functionName: 'proposalVotes' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"quorum"`
 */
export const readAionicGovernorQuorum = /*#__PURE__*/ createReadContract({
  abi: aionicGovernorAbi,
  functionName: 'quorum',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"quorumDenominator"`
 */
export const readAionicGovernorQuorumDenominator =
  /*#__PURE__*/ createReadContract({
    abi: aionicGovernorAbi,
    functionName: 'quorumDenominator',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"quorumNumerator"`
 */
export const readAionicGovernorQuorumNumerator =
  /*#__PURE__*/ createReadContract({
    abi: aionicGovernorAbi,
    functionName: 'quorumNumerator',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"state"`
 */
export const readAionicGovernorState = /*#__PURE__*/ createReadContract({
  abi: aionicGovernorAbi,
  functionName: 'state',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readAionicGovernorSupportsInterface =
  /*#__PURE__*/ createReadContract({
    abi: aionicGovernorAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"timelock"`
 */
export const readAionicGovernorTimelock = /*#__PURE__*/ createReadContract({
  abi: aionicGovernorAbi,
  functionName: 'timelock',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"token"`
 */
export const readAionicGovernorToken = /*#__PURE__*/ createReadContract({
  abi: aionicGovernorAbi,
  functionName: 'token',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"version"`
 */
export const readAionicGovernorVersion = /*#__PURE__*/ createReadContract({
  abi: aionicGovernorAbi,
  functionName: 'version',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"votingDelay"`
 */
export const readAionicGovernorVotingDelay = /*#__PURE__*/ createReadContract({
  abi: aionicGovernorAbi,
  functionName: 'votingDelay',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"votingPeriod"`
 */
export const readAionicGovernorVotingPeriod = /*#__PURE__*/ createReadContract({
  abi: aionicGovernorAbi,
  functionName: 'votingPeriod',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link aionicGovernorAbi}__
 */
export const writeAionicGovernor = /*#__PURE__*/ createWriteContract({
  abi: aionicGovernorAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"cancel"`
 */
export const writeAionicGovernorCancel = /*#__PURE__*/ createWriteContract({
  abi: aionicGovernorAbi,
  functionName: 'cancel',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"castVote"`
 */
export const writeAionicGovernorCastVote = /*#__PURE__*/ createWriteContract({
  abi: aionicGovernorAbi,
  functionName: 'castVote',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"castVoteBySig"`
 */
export const writeAionicGovernorCastVoteBySig =
  /*#__PURE__*/ createWriteContract({
    abi: aionicGovernorAbi,
    functionName: 'castVoteBySig',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"castVoteWithReason"`
 */
export const writeAionicGovernorCastVoteWithReason =
  /*#__PURE__*/ createWriteContract({
    abi: aionicGovernorAbi,
    functionName: 'castVoteWithReason',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"castVoteWithReasonAndParams"`
 */
export const writeAionicGovernorCastVoteWithReasonAndParams =
  /*#__PURE__*/ createWriteContract({
    abi: aionicGovernorAbi,
    functionName: 'castVoteWithReasonAndParams',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"castVoteWithReasonAndParamsBySig"`
 */
export const writeAionicGovernorCastVoteWithReasonAndParamsBySig =
  /*#__PURE__*/ createWriteContract({
    abi: aionicGovernorAbi,
    functionName: 'castVoteWithReasonAndParamsBySig',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"execute"`
 */
export const writeAionicGovernorExecute = /*#__PURE__*/ createWriteContract({
  abi: aionicGovernorAbi,
  functionName: 'execute',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const writeAionicGovernorOnErc1155BatchReceived =
  /*#__PURE__*/ createWriteContract({
    abi: aionicGovernorAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const writeAionicGovernorOnErc1155Received =
  /*#__PURE__*/ createWriteContract({
    abi: aionicGovernorAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const writeAionicGovernorOnErc721Received =
  /*#__PURE__*/ createWriteContract({
    abi: aionicGovernorAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"propose"`
 */
export const writeAionicGovernorPropose = /*#__PURE__*/ createWriteContract({
  abi: aionicGovernorAbi,
  functionName: 'propose',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"queue"`
 */
export const writeAionicGovernorQueue = /*#__PURE__*/ createWriteContract({
  abi: aionicGovernorAbi,
  functionName: 'queue',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"relay"`
 */
export const writeAionicGovernorRelay = /*#__PURE__*/ createWriteContract({
  abi: aionicGovernorAbi,
  functionName: 'relay',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"updateQuorumNumerator"`
 */
export const writeAionicGovernorUpdateQuorumNumerator =
  /*#__PURE__*/ createWriteContract({
    abi: aionicGovernorAbi,
    functionName: 'updateQuorumNumerator',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"updateTimelock"`
 */
export const writeAionicGovernorUpdateTimelock =
  /*#__PURE__*/ createWriteContract({
    abi: aionicGovernorAbi,
    functionName: 'updateTimelock',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link aionicGovernorAbi}__
 */
export const simulateAionicGovernor = /*#__PURE__*/ createSimulateContract({
  abi: aionicGovernorAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"cancel"`
 */
export const simulateAionicGovernorCancel =
  /*#__PURE__*/ createSimulateContract({
    abi: aionicGovernorAbi,
    functionName: 'cancel',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"castVote"`
 */
export const simulateAionicGovernorCastVote =
  /*#__PURE__*/ createSimulateContract({
    abi: aionicGovernorAbi,
    functionName: 'castVote',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"castVoteBySig"`
 */
export const simulateAionicGovernorCastVoteBySig =
  /*#__PURE__*/ createSimulateContract({
    abi: aionicGovernorAbi,
    functionName: 'castVoteBySig',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"castVoteWithReason"`
 */
export const simulateAionicGovernorCastVoteWithReason =
  /*#__PURE__*/ createSimulateContract({
    abi: aionicGovernorAbi,
    functionName: 'castVoteWithReason',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"castVoteWithReasonAndParams"`
 */
export const simulateAionicGovernorCastVoteWithReasonAndParams =
  /*#__PURE__*/ createSimulateContract({
    abi: aionicGovernorAbi,
    functionName: 'castVoteWithReasonAndParams',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"castVoteWithReasonAndParamsBySig"`
 */
export const simulateAionicGovernorCastVoteWithReasonAndParamsBySig =
  /*#__PURE__*/ createSimulateContract({
    abi: aionicGovernorAbi,
    functionName: 'castVoteWithReasonAndParamsBySig',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"execute"`
 */
export const simulateAionicGovernorExecute =
  /*#__PURE__*/ createSimulateContract({
    abi: aionicGovernorAbi,
    functionName: 'execute',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const simulateAionicGovernorOnErc1155BatchReceived =
  /*#__PURE__*/ createSimulateContract({
    abi: aionicGovernorAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const simulateAionicGovernorOnErc1155Received =
  /*#__PURE__*/ createSimulateContract({
    abi: aionicGovernorAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const simulateAionicGovernorOnErc721Received =
  /*#__PURE__*/ createSimulateContract({
    abi: aionicGovernorAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"propose"`
 */
export const simulateAionicGovernorPropose =
  /*#__PURE__*/ createSimulateContract({
    abi: aionicGovernorAbi,
    functionName: 'propose',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"queue"`
 */
export const simulateAionicGovernorQueue = /*#__PURE__*/ createSimulateContract(
  { abi: aionicGovernorAbi, functionName: 'queue' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"relay"`
 */
export const simulateAionicGovernorRelay = /*#__PURE__*/ createSimulateContract(
  { abi: aionicGovernorAbi, functionName: 'relay' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"updateQuorumNumerator"`
 */
export const simulateAionicGovernorUpdateQuorumNumerator =
  /*#__PURE__*/ createSimulateContract({
    abi: aionicGovernorAbi,
    functionName: 'updateQuorumNumerator',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link aionicGovernorAbi}__ and `functionName` set to `"updateTimelock"`
 */
export const simulateAionicGovernorUpdateTimelock =
  /*#__PURE__*/ createSimulateContract({
    abi: aionicGovernorAbi,
    functionName: 'updateTimelock',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link aionicGovernorAbi}__
 */
export const watchAionicGovernorEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: aionicGovernorAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link aionicGovernorAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const watchAionicGovernorEip712DomainChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: aionicGovernorAbi,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link aionicGovernorAbi}__ and `eventName` set to `"ProposalCanceled"`
 */
export const watchAionicGovernorProposalCanceledEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: aionicGovernorAbi,
    eventName: 'ProposalCanceled',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link aionicGovernorAbi}__ and `eventName` set to `"ProposalCreated"`
 */
export const watchAionicGovernorProposalCreatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: aionicGovernorAbi,
    eventName: 'ProposalCreated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link aionicGovernorAbi}__ and `eventName` set to `"ProposalExecuted"`
 */
export const watchAionicGovernorProposalExecutedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: aionicGovernorAbi,
    eventName: 'ProposalExecuted',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link aionicGovernorAbi}__ and `eventName` set to `"ProposalQueued"`
 */
export const watchAionicGovernorProposalQueuedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: aionicGovernorAbi,
    eventName: 'ProposalQueued',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link aionicGovernorAbi}__ and `eventName` set to `"QuorumNumeratorUpdated"`
 */
export const watchAionicGovernorQuorumNumeratorUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: aionicGovernorAbi,
    eventName: 'QuorumNumeratorUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link aionicGovernorAbi}__ and `eventName` set to `"TimelockChange"`
 */
export const watchAionicGovernorTimelockChangeEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: aionicGovernorAbi,
    eventName: 'TimelockChange',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link aionicGovernorAbi}__ and `eventName` set to `"VoteCast"`
 */
export const watchAionicGovernorVoteCastEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: aionicGovernorAbi,
    eventName: 'VoteCast',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link aionicGovernorAbi}__ and `eventName` set to `"VoteCastWithParams"`
 */
export const watchAionicGovernorVoteCastWithParamsEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: aionicGovernorAbi,
    eventName: 'VoteCastWithParams',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicTimelockAbi}__
 */
export const readAionicTimelock = /*#__PURE__*/ createReadContract({
  abi: aionicTimelockAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"CANCELLER_ROLE"`
 */
export const readAionicTimelockCancellerRole = /*#__PURE__*/ createReadContract(
  { abi: aionicTimelockAbi, functionName: 'CANCELLER_ROLE' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const readAionicTimelockDefaultAdminRole =
  /*#__PURE__*/ createReadContract({
    abi: aionicTimelockAbi,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"EXECUTOR_ROLE"`
 */
export const readAionicTimelockExecutorRole = /*#__PURE__*/ createReadContract({
  abi: aionicTimelockAbi,
  functionName: 'EXECUTOR_ROLE',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"PROPOSER_ROLE"`
 */
export const readAionicTimelockProposerRole = /*#__PURE__*/ createReadContract({
  abi: aionicTimelockAbi,
  functionName: 'PROPOSER_ROLE',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"getMinDelay"`
 */
export const readAionicTimelockGetMinDelay = /*#__PURE__*/ createReadContract({
  abi: aionicTimelockAbi,
  functionName: 'getMinDelay',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"getOperationState"`
 */
export const readAionicTimelockGetOperationState =
  /*#__PURE__*/ createReadContract({
    abi: aionicTimelockAbi,
    functionName: 'getOperationState',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const readAionicTimelockGetRoleAdmin = /*#__PURE__*/ createReadContract({
  abi: aionicTimelockAbi,
  functionName: 'getRoleAdmin',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"getTimestamp"`
 */
export const readAionicTimelockGetTimestamp = /*#__PURE__*/ createReadContract({
  abi: aionicTimelockAbi,
  functionName: 'getTimestamp',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"hasRole"`
 */
export const readAionicTimelockHasRole = /*#__PURE__*/ createReadContract({
  abi: aionicTimelockAbi,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"hashOperation"`
 */
export const readAionicTimelockHashOperation = /*#__PURE__*/ createReadContract(
  { abi: aionicTimelockAbi, functionName: 'hashOperation' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"hashOperationBatch"`
 */
export const readAionicTimelockHashOperationBatch =
  /*#__PURE__*/ createReadContract({
    abi: aionicTimelockAbi,
    functionName: 'hashOperationBatch',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"isOperation"`
 */
export const readAionicTimelockIsOperation = /*#__PURE__*/ createReadContract({
  abi: aionicTimelockAbi,
  functionName: 'isOperation',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"isOperationDone"`
 */
export const readAionicTimelockIsOperationDone =
  /*#__PURE__*/ createReadContract({
    abi: aionicTimelockAbi,
    functionName: 'isOperationDone',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"isOperationPending"`
 */
export const readAionicTimelockIsOperationPending =
  /*#__PURE__*/ createReadContract({
    abi: aionicTimelockAbi,
    functionName: 'isOperationPending',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"isOperationReady"`
 */
export const readAionicTimelockIsOperationReady =
  /*#__PURE__*/ createReadContract({
    abi: aionicTimelockAbi,
    functionName: 'isOperationReady',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readAionicTimelockSupportsInterface =
  /*#__PURE__*/ createReadContract({
    abi: aionicTimelockAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link aionicTimelockAbi}__
 */
export const writeAionicTimelock = /*#__PURE__*/ createWriteContract({
  abi: aionicTimelockAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"cancel"`
 */
export const writeAionicTimelockCancel = /*#__PURE__*/ createWriteContract({
  abi: aionicTimelockAbi,
  functionName: 'cancel',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"execute"`
 */
export const writeAionicTimelockExecute = /*#__PURE__*/ createWriteContract({
  abi: aionicTimelockAbi,
  functionName: 'execute',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"executeBatch"`
 */
export const writeAionicTimelockExecuteBatch =
  /*#__PURE__*/ createWriteContract({
    abi: aionicTimelockAbi,
    functionName: 'executeBatch',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"grantRole"`
 */
export const writeAionicTimelockGrantRole = /*#__PURE__*/ createWriteContract({
  abi: aionicTimelockAbi,
  functionName: 'grantRole',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const writeAionicTimelockOnErc1155BatchReceived =
  /*#__PURE__*/ createWriteContract({
    abi: aionicTimelockAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const writeAionicTimelockOnErc1155Received =
  /*#__PURE__*/ createWriteContract({
    abi: aionicTimelockAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const writeAionicTimelockOnErc721Received =
  /*#__PURE__*/ createWriteContract({
    abi: aionicTimelockAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"renounceRole"`
 */
export const writeAionicTimelockRenounceRole =
  /*#__PURE__*/ createWriteContract({
    abi: aionicTimelockAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"revokeRole"`
 */
export const writeAionicTimelockRevokeRole = /*#__PURE__*/ createWriteContract({
  abi: aionicTimelockAbi,
  functionName: 'revokeRole',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"schedule"`
 */
export const writeAionicTimelockSchedule = /*#__PURE__*/ createWriteContract({
  abi: aionicTimelockAbi,
  functionName: 'schedule',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"scheduleBatch"`
 */
export const writeAionicTimelockScheduleBatch =
  /*#__PURE__*/ createWriteContract({
    abi: aionicTimelockAbi,
    functionName: 'scheduleBatch',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"updateDelay"`
 */
export const writeAionicTimelockUpdateDelay = /*#__PURE__*/ createWriteContract(
  { abi: aionicTimelockAbi, functionName: 'updateDelay' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link aionicTimelockAbi}__
 */
export const simulateAionicTimelock = /*#__PURE__*/ createSimulateContract({
  abi: aionicTimelockAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"cancel"`
 */
export const simulateAionicTimelockCancel =
  /*#__PURE__*/ createSimulateContract({
    abi: aionicTimelockAbi,
    functionName: 'cancel',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"execute"`
 */
export const simulateAionicTimelockExecute =
  /*#__PURE__*/ createSimulateContract({
    abi: aionicTimelockAbi,
    functionName: 'execute',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"executeBatch"`
 */
export const simulateAionicTimelockExecuteBatch =
  /*#__PURE__*/ createSimulateContract({
    abi: aionicTimelockAbi,
    functionName: 'executeBatch',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"grantRole"`
 */
export const simulateAionicTimelockGrantRole =
  /*#__PURE__*/ createSimulateContract({
    abi: aionicTimelockAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const simulateAionicTimelockOnErc1155BatchReceived =
  /*#__PURE__*/ createSimulateContract({
    abi: aionicTimelockAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const simulateAionicTimelockOnErc1155Received =
  /*#__PURE__*/ createSimulateContract({
    abi: aionicTimelockAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const simulateAionicTimelockOnErc721Received =
  /*#__PURE__*/ createSimulateContract({
    abi: aionicTimelockAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"renounceRole"`
 */
export const simulateAionicTimelockRenounceRole =
  /*#__PURE__*/ createSimulateContract({
    abi: aionicTimelockAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"revokeRole"`
 */
export const simulateAionicTimelockRevokeRole =
  /*#__PURE__*/ createSimulateContract({
    abi: aionicTimelockAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"schedule"`
 */
export const simulateAionicTimelockSchedule =
  /*#__PURE__*/ createSimulateContract({
    abi: aionicTimelockAbi,
    functionName: 'schedule',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"scheduleBatch"`
 */
export const simulateAionicTimelockScheduleBatch =
  /*#__PURE__*/ createSimulateContract({
    abi: aionicTimelockAbi,
    functionName: 'scheduleBatch',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link aionicTimelockAbi}__ and `functionName` set to `"updateDelay"`
 */
export const simulateAionicTimelockUpdateDelay =
  /*#__PURE__*/ createSimulateContract({
    abi: aionicTimelockAbi,
    functionName: 'updateDelay',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link aionicTimelockAbi}__
 */
export const watchAionicTimelockEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: aionicTimelockAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link aionicTimelockAbi}__ and `eventName` set to `"CallExecuted"`
 */
export const watchAionicTimelockCallExecutedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: aionicTimelockAbi,
    eventName: 'CallExecuted',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link aionicTimelockAbi}__ and `eventName` set to `"CallSalt"`
 */
export const watchAionicTimelockCallSaltEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: aionicTimelockAbi,
    eventName: 'CallSalt',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link aionicTimelockAbi}__ and `eventName` set to `"CallScheduled"`
 */
export const watchAionicTimelockCallScheduledEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: aionicTimelockAbi,
    eventName: 'CallScheduled',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link aionicTimelockAbi}__ and `eventName` set to `"Cancelled"`
 */
export const watchAionicTimelockCancelledEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: aionicTimelockAbi,
    eventName: 'Cancelled',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link aionicTimelockAbi}__ and `eventName` set to `"MinDelayChange"`
 */
export const watchAionicTimelockMinDelayChangeEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: aionicTimelockAbi,
    eventName: 'MinDelayChange',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link aionicTimelockAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const watchAionicTimelockRoleAdminChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: aionicTimelockAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link aionicTimelockAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const watchAionicTimelockRoleGrantedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: aionicTimelockAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link aionicTimelockAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const watchAionicTimelockRoleRevokedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: aionicTimelockAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link assetAbi}__
 */
export const readAsset = /*#__PURE__*/ createReadContract({ abi: assetAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"allowance"`
 */
export const readAssetAllowance = /*#__PURE__*/ createReadContract({
  abi: assetAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"assetDataFeedAddress"`
 */
export const readAssetAssetDataFeedAddress = /*#__PURE__*/ createReadContract({
  abi: assetAbi,
  functionName: 'assetDataFeedAddress',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readAssetBalanceOf = /*#__PURE__*/ createReadContract({
  abi: assetAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"decimals"`
 */
export const readAssetDecimals = /*#__PURE__*/ createReadContract({
  abi: assetAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"interestRate"`
 */
export const readAssetInterestRate = /*#__PURE__*/ createReadContract({
  abi: assetAbi,
  functionName: 'interestRate',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"liquidationRatio"`
 */
export const readAssetLiquidationRatio = /*#__PURE__*/ createReadContract({
  abi: assetAbi,
  functionName: 'liquidationRatio',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"name"`
 */
export const readAssetName = /*#__PURE__*/ createReadContract({
  abi: assetAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"owner"`
 */
export const readAssetOwner = /*#__PURE__*/ createReadContract({
  abi: assetAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"symbol"`
 */
export const readAssetSymbol = /*#__PURE__*/ createReadContract({
  abi: assetAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"totalSupply"`
 */
export const readAssetTotalSupply = /*#__PURE__*/ createReadContract({
  abi: assetAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link assetAbi}__
 */
export const writeAsset = /*#__PURE__*/ createWriteContract({ abi: assetAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"approve"`
 */
export const writeAssetApprove = /*#__PURE__*/ createWriteContract({
  abi: assetAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"burn"`
 */
export const writeAssetBurn = /*#__PURE__*/ createWriteContract({
  abi: assetAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"burnFrom"`
 */
export const writeAssetBurnFrom = /*#__PURE__*/ createWriteContract({
  abi: assetAbi,
  functionName: 'burnFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"mint"`
 */
export const writeAssetMint = /*#__PURE__*/ createWriteContract({
  abi: assetAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeAssetRenounceOwnership = /*#__PURE__*/ createWriteContract({
  abi: assetAbi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"setDataFeedAddress"`
 */
export const writeAssetSetDataFeedAddress = /*#__PURE__*/ createWriteContract({
  abi: assetAbi,
  functionName: 'setDataFeedAddress',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"setLiquidationRatio"`
 */
export const writeAssetSetLiquidationRatio = /*#__PURE__*/ createWriteContract({
  abi: assetAbi,
  functionName: 'setLiquidationRatio',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"setRate"`
 */
export const writeAssetSetRate = /*#__PURE__*/ createWriteContract({
  abi: assetAbi,
  functionName: 'setRate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"transfer"`
 */
export const writeAssetTransfer = /*#__PURE__*/ createWriteContract({
  abi: assetAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeAssetTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: assetAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeAssetTransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: assetAbi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link assetAbi}__
 */
export const simulateAsset = /*#__PURE__*/ createSimulateContract({
  abi: assetAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"approve"`
 */
export const simulateAssetApprove = /*#__PURE__*/ createSimulateContract({
  abi: assetAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"burn"`
 */
export const simulateAssetBurn = /*#__PURE__*/ createSimulateContract({
  abi: assetAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"burnFrom"`
 */
export const simulateAssetBurnFrom = /*#__PURE__*/ createSimulateContract({
  abi: assetAbi,
  functionName: 'burnFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"mint"`
 */
export const simulateAssetMint = /*#__PURE__*/ createSimulateContract({
  abi: assetAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateAssetRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: assetAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"setDataFeedAddress"`
 */
export const simulateAssetSetDataFeedAddress =
  /*#__PURE__*/ createSimulateContract({
    abi: assetAbi,
    functionName: 'setDataFeedAddress',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"setLiquidationRatio"`
 */
export const simulateAssetSetLiquidationRatio =
  /*#__PURE__*/ createSimulateContract({
    abi: assetAbi,
    functionName: 'setLiquidationRatio',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"setRate"`
 */
export const simulateAssetSetRate = /*#__PURE__*/ createSimulateContract({
  abi: assetAbi,
  functionName: 'setRate',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"transfer"`
 */
export const simulateAssetTransfer = /*#__PURE__*/ createSimulateContract({
  abi: assetAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateAssetTransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: assetAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link assetAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateAssetTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: assetAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link assetAbi}__
 */
export const watchAssetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: assetAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link assetAbi}__ and `eventName` set to `"Approval"`
 */
export const watchAssetApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: assetAbi,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link assetAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchAssetOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: assetAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link assetAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchAssetTransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: assetAbi,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link eip712Abi}__
 */
export const readEip712 = /*#__PURE__*/ createReadContract({ abi: eip712Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link eip712Abi}__ and `functionName` set to `"eip712Domain"`
 */
export const readEip712Eip712Domain = /*#__PURE__*/ createReadContract({
  abi: eip712Abi,
  functionName: 'eip712Domain',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link eip712Abi}__
 */
export const watchEip712Event = /*#__PURE__*/ createWatchContractEvent({
  abi: eip712Abi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link eip712Abi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const watchEip712Eip712DomainChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: eip712Abi,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc1155HolderAbi}__
 */
export const readErc1155Holder = /*#__PURE__*/ createReadContract({
  abi: erc1155HolderAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc1155HolderAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readErc1155HolderSupportsInterface =
  /*#__PURE__*/ createReadContract({
    abi: erc1155HolderAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc1155HolderAbi}__
 */
export const writeErc1155Holder = /*#__PURE__*/ createWriteContract({
  abi: erc1155HolderAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc1155HolderAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const writeErc1155HolderOnErc1155BatchReceived =
  /*#__PURE__*/ createWriteContract({
    abi: erc1155HolderAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc1155HolderAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const writeErc1155HolderOnErc1155Received =
  /*#__PURE__*/ createWriteContract({
    abi: erc1155HolderAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc1155HolderAbi}__
 */
export const simulateErc1155Holder = /*#__PURE__*/ createSimulateContract({
  abi: erc1155HolderAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc1155HolderAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const simulateErc1155HolderOnErc1155BatchReceived =
  /*#__PURE__*/ createSimulateContract({
    abi: erc1155HolderAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc1155HolderAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const simulateErc1155HolderOnErc1155Received =
  /*#__PURE__*/ createSimulateContract({
    abi: erc1155HolderAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc165Abi}__
 */
export const readErc165 = /*#__PURE__*/ createReadContract({ abi: erc165Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc165Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const readErc165SupportsInterface = /*#__PURE__*/ createReadContract({
  abi: erc165Abi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const readErc20 = /*#__PURE__*/ createReadContract({ abi: erc20Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const readErc20Allowance = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const readErc20BalanceOf = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const readErc20Decimals = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const readErc20Name = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const readErc20Symbol = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const readErc20TotalSupply = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const writeErc20 = /*#__PURE__*/ createWriteContract({ abi: erc20Abi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const writeErc20Approve = /*#__PURE__*/ createWriteContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const writeErc20Transfer = /*#__PURE__*/ createWriteContract({
  abi: erc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const writeErc20TransferFrom = /*#__PURE__*/ createWriteContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const simulateErc20 = /*#__PURE__*/ createSimulateContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const simulateErc20Approve = /*#__PURE__*/ createSimulateContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const simulateErc20Transfer = /*#__PURE__*/ createSimulateContract({
  abi: erc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateErc20TransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const watchErc20Event = /*#__PURE__*/ createWatchContractEvent({
  abi: erc20Abi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const watchErc20ApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc20Abi,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const watchErc20TransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc20Abi,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20BurnableAbi}__
 */
export const readErc20Burnable = /*#__PURE__*/ createReadContract({
  abi: erc20BurnableAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"allowance"`
 */
export const readErc20BurnableAllowance = /*#__PURE__*/ createReadContract({
  abi: erc20BurnableAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readErc20BurnableBalanceOf = /*#__PURE__*/ createReadContract({
  abi: erc20BurnableAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"decimals"`
 */
export const readErc20BurnableDecimals = /*#__PURE__*/ createReadContract({
  abi: erc20BurnableAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"name"`
 */
export const readErc20BurnableName = /*#__PURE__*/ createReadContract({
  abi: erc20BurnableAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"symbol"`
 */
export const readErc20BurnableSymbol = /*#__PURE__*/ createReadContract({
  abi: erc20BurnableAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"totalSupply"`
 */
export const readErc20BurnableTotalSupply = /*#__PURE__*/ createReadContract({
  abi: erc20BurnableAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20BurnableAbi}__
 */
export const writeErc20Burnable = /*#__PURE__*/ createWriteContract({
  abi: erc20BurnableAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"approve"`
 */
export const writeErc20BurnableApprove = /*#__PURE__*/ createWriteContract({
  abi: erc20BurnableAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"burn"`
 */
export const writeErc20BurnableBurn = /*#__PURE__*/ createWriteContract({
  abi: erc20BurnableAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"burnFrom"`
 */
export const writeErc20BurnableBurnFrom = /*#__PURE__*/ createWriteContract({
  abi: erc20BurnableAbi,
  functionName: 'burnFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"transfer"`
 */
export const writeErc20BurnableTransfer = /*#__PURE__*/ createWriteContract({
  abi: erc20BurnableAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeErc20BurnableTransferFrom = /*#__PURE__*/ createWriteContract(
  { abi: erc20BurnableAbi, functionName: 'transferFrom' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20BurnableAbi}__
 */
export const simulateErc20Burnable = /*#__PURE__*/ createSimulateContract({
  abi: erc20BurnableAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"approve"`
 */
export const simulateErc20BurnableApprove =
  /*#__PURE__*/ createSimulateContract({
    abi: erc20BurnableAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"burn"`
 */
export const simulateErc20BurnableBurn = /*#__PURE__*/ createSimulateContract({
  abi: erc20BurnableAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"burnFrom"`
 */
export const simulateErc20BurnableBurnFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: erc20BurnableAbi,
    functionName: 'burnFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"transfer"`
 */
export const simulateErc20BurnableTransfer =
  /*#__PURE__*/ createSimulateContract({
    abi: erc20BurnableAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateErc20BurnableTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: erc20BurnableAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20BurnableAbi}__
 */
export const watchErc20BurnableEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc20BurnableAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20BurnableAbi}__ and `eventName` set to `"Approval"`
 */
export const watchErc20BurnableApprovalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc20BurnableAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20BurnableAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchErc20BurnableTransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc20BurnableAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20PermitAbi}__
 */
export const readErc20Permit = /*#__PURE__*/ createReadContract({
  abi: erc20PermitAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 */
export const readErc20PermitDomainSeparator = /*#__PURE__*/ createReadContract({
  abi: erc20PermitAbi,
  functionName: 'DOMAIN_SEPARATOR',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"allowance"`
 */
export const readErc20PermitAllowance = /*#__PURE__*/ createReadContract({
  abi: erc20PermitAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readErc20PermitBalanceOf = /*#__PURE__*/ createReadContract({
  abi: erc20PermitAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"decimals"`
 */
export const readErc20PermitDecimals = /*#__PURE__*/ createReadContract({
  abi: erc20PermitAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"eip712Domain"`
 */
export const readErc20PermitEip712Domain = /*#__PURE__*/ createReadContract({
  abi: erc20PermitAbi,
  functionName: 'eip712Domain',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"name"`
 */
export const readErc20PermitName = /*#__PURE__*/ createReadContract({
  abi: erc20PermitAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"nonces"`
 */
export const readErc20PermitNonces = /*#__PURE__*/ createReadContract({
  abi: erc20PermitAbi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"symbol"`
 */
export const readErc20PermitSymbol = /*#__PURE__*/ createReadContract({
  abi: erc20PermitAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"totalSupply"`
 */
export const readErc20PermitTotalSupply = /*#__PURE__*/ createReadContract({
  abi: erc20PermitAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20PermitAbi}__
 */
export const writeErc20Permit = /*#__PURE__*/ createWriteContract({
  abi: erc20PermitAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"approve"`
 */
export const writeErc20PermitApprove = /*#__PURE__*/ createWriteContract({
  abi: erc20PermitAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"permit"`
 */
export const writeErc20PermitPermit = /*#__PURE__*/ createWriteContract({
  abi: erc20PermitAbi,
  functionName: 'permit',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"transfer"`
 */
export const writeErc20PermitTransfer = /*#__PURE__*/ createWriteContract({
  abi: erc20PermitAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeErc20PermitTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: erc20PermitAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20PermitAbi}__
 */
export const simulateErc20Permit = /*#__PURE__*/ createSimulateContract({
  abi: erc20PermitAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"approve"`
 */
export const simulateErc20PermitApprove = /*#__PURE__*/ createSimulateContract({
  abi: erc20PermitAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"permit"`
 */
export const simulateErc20PermitPermit = /*#__PURE__*/ createSimulateContract({
  abi: erc20PermitAbi,
  functionName: 'permit',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"transfer"`
 */
export const simulateErc20PermitTransfer = /*#__PURE__*/ createSimulateContract(
  { abi: erc20PermitAbi, functionName: 'transfer' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateErc20PermitTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: erc20PermitAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20PermitAbi}__
 */
export const watchErc20PermitEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc20PermitAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20PermitAbi}__ and `eventName` set to `"Approval"`
 */
export const watchErc20PermitApprovalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc20PermitAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20PermitAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const watchErc20PermitEip712DomainChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc20PermitAbi,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20PermitAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchErc20PermitTransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc20PermitAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20VotesAbi}__
 */
export const readErc20Votes = /*#__PURE__*/ createReadContract({
  abi: erc20VotesAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"CLOCK_MODE"`
 */
export const readErc20VotesClockMode = /*#__PURE__*/ createReadContract({
  abi: erc20VotesAbi,
  functionName: 'CLOCK_MODE',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"allowance"`
 */
export const readErc20VotesAllowance = /*#__PURE__*/ createReadContract({
  abi: erc20VotesAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readErc20VotesBalanceOf = /*#__PURE__*/ createReadContract({
  abi: erc20VotesAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"checkpoints"`
 */
export const readErc20VotesCheckpoints = /*#__PURE__*/ createReadContract({
  abi: erc20VotesAbi,
  functionName: 'checkpoints',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"clock"`
 */
export const readErc20VotesClock = /*#__PURE__*/ createReadContract({
  abi: erc20VotesAbi,
  functionName: 'clock',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"decimals"`
 */
export const readErc20VotesDecimals = /*#__PURE__*/ createReadContract({
  abi: erc20VotesAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"delegates"`
 */
export const readErc20VotesDelegates = /*#__PURE__*/ createReadContract({
  abi: erc20VotesAbi,
  functionName: 'delegates',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"eip712Domain"`
 */
export const readErc20VotesEip712Domain = /*#__PURE__*/ createReadContract({
  abi: erc20VotesAbi,
  functionName: 'eip712Domain',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"getPastTotalSupply"`
 */
export const readErc20VotesGetPastTotalSupply =
  /*#__PURE__*/ createReadContract({
    abi: erc20VotesAbi,
    functionName: 'getPastTotalSupply',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"getPastVotes"`
 */
export const readErc20VotesGetPastVotes = /*#__PURE__*/ createReadContract({
  abi: erc20VotesAbi,
  functionName: 'getPastVotes',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"getVotes"`
 */
export const readErc20VotesGetVotes = /*#__PURE__*/ createReadContract({
  abi: erc20VotesAbi,
  functionName: 'getVotes',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"name"`
 */
export const readErc20VotesName = /*#__PURE__*/ createReadContract({
  abi: erc20VotesAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"nonces"`
 */
export const readErc20VotesNonces = /*#__PURE__*/ createReadContract({
  abi: erc20VotesAbi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"numCheckpoints"`
 */
export const readErc20VotesNumCheckpoints = /*#__PURE__*/ createReadContract({
  abi: erc20VotesAbi,
  functionName: 'numCheckpoints',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"symbol"`
 */
export const readErc20VotesSymbol = /*#__PURE__*/ createReadContract({
  abi: erc20VotesAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"totalSupply"`
 */
export const readErc20VotesTotalSupply = /*#__PURE__*/ createReadContract({
  abi: erc20VotesAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20VotesAbi}__
 */
export const writeErc20Votes = /*#__PURE__*/ createWriteContract({
  abi: erc20VotesAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"approve"`
 */
export const writeErc20VotesApprove = /*#__PURE__*/ createWriteContract({
  abi: erc20VotesAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"delegate"`
 */
export const writeErc20VotesDelegate = /*#__PURE__*/ createWriteContract({
  abi: erc20VotesAbi,
  functionName: 'delegate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"delegateBySig"`
 */
export const writeErc20VotesDelegateBySig = /*#__PURE__*/ createWriteContract({
  abi: erc20VotesAbi,
  functionName: 'delegateBySig',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"transfer"`
 */
export const writeErc20VotesTransfer = /*#__PURE__*/ createWriteContract({
  abi: erc20VotesAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeErc20VotesTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: erc20VotesAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20VotesAbi}__
 */
export const simulateErc20Votes = /*#__PURE__*/ createSimulateContract({
  abi: erc20VotesAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"approve"`
 */
export const simulateErc20VotesApprove = /*#__PURE__*/ createSimulateContract({
  abi: erc20VotesAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"delegate"`
 */
export const simulateErc20VotesDelegate = /*#__PURE__*/ createSimulateContract({
  abi: erc20VotesAbi,
  functionName: 'delegate',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"delegateBySig"`
 */
export const simulateErc20VotesDelegateBySig =
  /*#__PURE__*/ createSimulateContract({
    abi: erc20VotesAbi,
    functionName: 'delegateBySig',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"transfer"`
 */
export const simulateErc20VotesTransfer = /*#__PURE__*/ createSimulateContract({
  abi: erc20VotesAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20VotesAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateErc20VotesTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: erc20VotesAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20VotesAbi}__
 */
export const watchErc20VotesEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc20VotesAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20VotesAbi}__ and `eventName` set to `"Approval"`
 */
export const watchErc20VotesApprovalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc20VotesAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20VotesAbi}__ and `eventName` set to `"DelegateChanged"`
 */
export const watchErc20VotesDelegateChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc20VotesAbi,
    eventName: 'DelegateChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20VotesAbi}__ and `eventName` set to `"DelegateVotesChanged"`
 */
export const watchErc20VotesDelegateVotesChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc20VotesAbi,
    eventName: 'DelegateVotesChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20VotesAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const watchErc20VotesEip712DomainChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc20VotesAbi,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20VotesAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchErc20VotesTransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc20VotesAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721HolderAbi}__
 */
export const writeErc721Holder = /*#__PURE__*/ createWriteContract({
  abi: erc721HolderAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721HolderAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const writeErc721HolderOnErc721Received =
  /*#__PURE__*/ createWriteContract({
    abi: erc721HolderAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc721HolderAbi}__
 */
export const simulateErc721Holder = /*#__PURE__*/ createSimulateContract({
  abi: erc721HolderAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc721HolderAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const simulateErc721HolderOnErc721Received =
  /*#__PURE__*/ createSimulateContract({
    abi: erc721HolderAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorAbi}__
 */
export const readGovernor = /*#__PURE__*/ createReadContract({
  abi: governorAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"BALLOT_TYPEHASH"`
 */
export const readGovernorBallotTypehash = /*#__PURE__*/ createReadContract({
  abi: governorAbi,
  functionName: 'BALLOT_TYPEHASH',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"CLOCK_MODE"`
 */
export const readGovernorClockMode = /*#__PURE__*/ createReadContract({
  abi: governorAbi,
  functionName: 'CLOCK_MODE',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"COUNTING_MODE"`
 */
export const readGovernorCountingMode = /*#__PURE__*/ createReadContract({
  abi: governorAbi,
  functionName: 'COUNTING_MODE',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"EXTENDED_BALLOT_TYPEHASH"`
 */
export const readGovernorExtendedBallotTypehash =
  /*#__PURE__*/ createReadContract({
    abi: governorAbi,
    functionName: 'EXTENDED_BALLOT_TYPEHASH',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"clock"`
 */
export const readGovernorClock = /*#__PURE__*/ createReadContract({
  abi: governorAbi,
  functionName: 'clock',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"eip712Domain"`
 */
export const readGovernorEip712Domain = /*#__PURE__*/ createReadContract({
  abi: governorAbi,
  functionName: 'eip712Domain',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"getVotes"`
 */
export const readGovernorGetVotes = /*#__PURE__*/ createReadContract({
  abi: governorAbi,
  functionName: 'getVotes',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"getVotesWithParams"`
 */
export const readGovernorGetVotesWithParams = /*#__PURE__*/ createReadContract({
  abi: governorAbi,
  functionName: 'getVotesWithParams',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"hasVoted"`
 */
export const readGovernorHasVoted = /*#__PURE__*/ createReadContract({
  abi: governorAbi,
  functionName: 'hasVoted',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"hashProposal"`
 */
export const readGovernorHashProposal = /*#__PURE__*/ createReadContract({
  abi: governorAbi,
  functionName: 'hashProposal',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"name"`
 */
export const readGovernorName = /*#__PURE__*/ createReadContract({
  abi: governorAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"nonces"`
 */
export const readGovernorNonces = /*#__PURE__*/ createReadContract({
  abi: governorAbi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"proposalDeadline"`
 */
export const readGovernorProposalDeadline = /*#__PURE__*/ createReadContract({
  abi: governorAbi,
  functionName: 'proposalDeadline',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"proposalEta"`
 */
export const readGovernorProposalEta = /*#__PURE__*/ createReadContract({
  abi: governorAbi,
  functionName: 'proposalEta',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"proposalNeedsQueuing"`
 */
export const readGovernorProposalNeedsQueuing =
  /*#__PURE__*/ createReadContract({
    abi: governorAbi,
    functionName: 'proposalNeedsQueuing',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"proposalProposer"`
 */
export const readGovernorProposalProposer = /*#__PURE__*/ createReadContract({
  abi: governorAbi,
  functionName: 'proposalProposer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"proposalSnapshot"`
 */
export const readGovernorProposalSnapshot = /*#__PURE__*/ createReadContract({
  abi: governorAbi,
  functionName: 'proposalSnapshot',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"proposalThreshold"`
 */
export const readGovernorProposalThreshold = /*#__PURE__*/ createReadContract({
  abi: governorAbi,
  functionName: 'proposalThreshold',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"quorum"`
 */
export const readGovernorQuorum = /*#__PURE__*/ createReadContract({
  abi: governorAbi,
  functionName: 'quorum',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"state"`
 */
export const readGovernorState = /*#__PURE__*/ createReadContract({
  abi: governorAbi,
  functionName: 'state',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readGovernorSupportsInterface = /*#__PURE__*/ createReadContract({
  abi: governorAbi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"version"`
 */
export const readGovernorVersion = /*#__PURE__*/ createReadContract({
  abi: governorAbi,
  functionName: 'version',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"votingDelay"`
 */
export const readGovernorVotingDelay = /*#__PURE__*/ createReadContract({
  abi: governorAbi,
  functionName: 'votingDelay',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"votingPeriod"`
 */
export const readGovernorVotingPeriod = /*#__PURE__*/ createReadContract({
  abi: governorAbi,
  functionName: 'votingPeriod',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorAbi}__
 */
export const writeGovernor = /*#__PURE__*/ createWriteContract({
  abi: governorAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"cancel"`
 */
export const writeGovernorCancel = /*#__PURE__*/ createWriteContract({
  abi: governorAbi,
  functionName: 'cancel',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"castVote"`
 */
export const writeGovernorCastVote = /*#__PURE__*/ createWriteContract({
  abi: governorAbi,
  functionName: 'castVote',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"castVoteBySig"`
 */
export const writeGovernorCastVoteBySig = /*#__PURE__*/ createWriteContract({
  abi: governorAbi,
  functionName: 'castVoteBySig',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"castVoteWithReason"`
 */
export const writeGovernorCastVoteWithReason =
  /*#__PURE__*/ createWriteContract({
    abi: governorAbi,
    functionName: 'castVoteWithReason',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"castVoteWithReasonAndParams"`
 */
export const writeGovernorCastVoteWithReasonAndParams =
  /*#__PURE__*/ createWriteContract({
    abi: governorAbi,
    functionName: 'castVoteWithReasonAndParams',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"castVoteWithReasonAndParamsBySig"`
 */
export const writeGovernorCastVoteWithReasonAndParamsBySig =
  /*#__PURE__*/ createWriteContract({
    abi: governorAbi,
    functionName: 'castVoteWithReasonAndParamsBySig',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"execute"`
 */
export const writeGovernorExecute = /*#__PURE__*/ createWriteContract({
  abi: governorAbi,
  functionName: 'execute',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const writeGovernorOnErc1155BatchReceived =
  /*#__PURE__*/ createWriteContract({
    abi: governorAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const writeGovernorOnErc1155Received = /*#__PURE__*/ createWriteContract(
  { abi: governorAbi, functionName: 'onERC1155Received' },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const writeGovernorOnErc721Received = /*#__PURE__*/ createWriteContract({
  abi: governorAbi,
  functionName: 'onERC721Received',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"propose"`
 */
export const writeGovernorPropose = /*#__PURE__*/ createWriteContract({
  abi: governorAbi,
  functionName: 'propose',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"queue"`
 */
export const writeGovernorQueue = /*#__PURE__*/ createWriteContract({
  abi: governorAbi,
  functionName: 'queue',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"relay"`
 */
export const writeGovernorRelay = /*#__PURE__*/ createWriteContract({
  abi: governorAbi,
  functionName: 'relay',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorAbi}__
 */
export const simulateGovernor = /*#__PURE__*/ createSimulateContract({
  abi: governorAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"cancel"`
 */
export const simulateGovernorCancel = /*#__PURE__*/ createSimulateContract({
  abi: governorAbi,
  functionName: 'cancel',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"castVote"`
 */
export const simulateGovernorCastVote = /*#__PURE__*/ createSimulateContract({
  abi: governorAbi,
  functionName: 'castVote',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"castVoteBySig"`
 */
export const simulateGovernorCastVoteBySig =
  /*#__PURE__*/ createSimulateContract({
    abi: governorAbi,
    functionName: 'castVoteBySig',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"castVoteWithReason"`
 */
export const simulateGovernorCastVoteWithReason =
  /*#__PURE__*/ createSimulateContract({
    abi: governorAbi,
    functionName: 'castVoteWithReason',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"castVoteWithReasonAndParams"`
 */
export const simulateGovernorCastVoteWithReasonAndParams =
  /*#__PURE__*/ createSimulateContract({
    abi: governorAbi,
    functionName: 'castVoteWithReasonAndParams',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"castVoteWithReasonAndParamsBySig"`
 */
export const simulateGovernorCastVoteWithReasonAndParamsBySig =
  /*#__PURE__*/ createSimulateContract({
    abi: governorAbi,
    functionName: 'castVoteWithReasonAndParamsBySig',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"execute"`
 */
export const simulateGovernorExecute = /*#__PURE__*/ createSimulateContract({
  abi: governorAbi,
  functionName: 'execute',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const simulateGovernorOnErc1155BatchReceived =
  /*#__PURE__*/ createSimulateContract({
    abi: governorAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const simulateGovernorOnErc1155Received =
  /*#__PURE__*/ createSimulateContract({
    abi: governorAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const simulateGovernorOnErc721Received =
  /*#__PURE__*/ createSimulateContract({
    abi: governorAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"propose"`
 */
export const simulateGovernorPropose = /*#__PURE__*/ createSimulateContract({
  abi: governorAbi,
  functionName: 'propose',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"queue"`
 */
export const simulateGovernorQueue = /*#__PURE__*/ createSimulateContract({
  abi: governorAbi,
  functionName: 'queue',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorAbi}__ and `functionName` set to `"relay"`
 */
export const simulateGovernorRelay = /*#__PURE__*/ createSimulateContract({
  abi: governorAbi,
  functionName: 'relay',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorAbi}__
 */
export const watchGovernorEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: governorAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const watchGovernorEip712DomainChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: governorAbi,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorAbi}__ and `eventName` set to `"ProposalCanceled"`
 */
export const watchGovernorProposalCanceledEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: governorAbi,
    eventName: 'ProposalCanceled',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorAbi}__ and `eventName` set to `"ProposalCreated"`
 */
export const watchGovernorProposalCreatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: governorAbi,
    eventName: 'ProposalCreated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorAbi}__ and `eventName` set to `"ProposalExecuted"`
 */
export const watchGovernorProposalExecutedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: governorAbi,
    eventName: 'ProposalExecuted',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorAbi}__ and `eventName` set to `"ProposalQueued"`
 */
export const watchGovernorProposalQueuedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: governorAbi,
    eventName: 'ProposalQueued',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorAbi}__ and `eventName` set to `"VoteCast"`
 */
export const watchGovernorVoteCastEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: governorAbi,
    eventName: 'VoteCast',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorAbi}__ and `eventName` set to `"VoteCastWithParams"`
 */
export const watchGovernorVoteCastWithParamsEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: governorAbi,
    eventName: 'VoteCastWithParams',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__
 */
export const readGovernorCountingSimple = /*#__PURE__*/ createReadContract({
  abi: governorCountingSimpleAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"BALLOT_TYPEHASH"`
 */
export const readGovernorCountingSimpleBallotTypehash =
  /*#__PURE__*/ createReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'BALLOT_TYPEHASH',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"CLOCK_MODE"`
 */
export const readGovernorCountingSimpleClockMode =
  /*#__PURE__*/ createReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'CLOCK_MODE',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"COUNTING_MODE"`
 */
export const readGovernorCountingSimpleCountingMode =
  /*#__PURE__*/ createReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'COUNTING_MODE',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"EXTENDED_BALLOT_TYPEHASH"`
 */
export const readGovernorCountingSimpleExtendedBallotTypehash =
  /*#__PURE__*/ createReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'EXTENDED_BALLOT_TYPEHASH',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"clock"`
 */
export const readGovernorCountingSimpleClock = /*#__PURE__*/ createReadContract(
  { abi: governorCountingSimpleAbi, functionName: 'clock' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"eip712Domain"`
 */
export const readGovernorCountingSimpleEip712Domain =
  /*#__PURE__*/ createReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'eip712Domain',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"getVotes"`
 */
export const readGovernorCountingSimpleGetVotes =
  /*#__PURE__*/ createReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'getVotes',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"getVotesWithParams"`
 */
export const readGovernorCountingSimpleGetVotesWithParams =
  /*#__PURE__*/ createReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'getVotesWithParams',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"hasVoted"`
 */
export const readGovernorCountingSimpleHasVoted =
  /*#__PURE__*/ createReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'hasVoted',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"hashProposal"`
 */
export const readGovernorCountingSimpleHashProposal =
  /*#__PURE__*/ createReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'hashProposal',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"name"`
 */
export const readGovernorCountingSimpleName = /*#__PURE__*/ createReadContract({
  abi: governorCountingSimpleAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"nonces"`
 */
export const readGovernorCountingSimpleNonces =
  /*#__PURE__*/ createReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'nonces',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"proposalDeadline"`
 */
export const readGovernorCountingSimpleProposalDeadline =
  /*#__PURE__*/ createReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'proposalDeadline',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"proposalEta"`
 */
export const readGovernorCountingSimpleProposalEta =
  /*#__PURE__*/ createReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'proposalEta',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"proposalNeedsQueuing"`
 */
export const readGovernorCountingSimpleProposalNeedsQueuing =
  /*#__PURE__*/ createReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'proposalNeedsQueuing',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"proposalProposer"`
 */
export const readGovernorCountingSimpleProposalProposer =
  /*#__PURE__*/ createReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'proposalProposer',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"proposalSnapshot"`
 */
export const readGovernorCountingSimpleProposalSnapshot =
  /*#__PURE__*/ createReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'proposalSnapshot',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"proposalThreshold"`
 */
export const readGovernorCountingSimpleProposalThreshold =
  /*#__PURE__*/ createReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'proposalThreshold',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"proposalVotes"`
 */
export const readGovernorCountingSimpleProposalVotes =
  /*#__PURE__*/ createReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'proposalVotes',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"quorum"`
 */
export const readGovernorCountingSimpleQuorum =
  /*#__PURE__*/ createReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'quorum',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"state"`
 */
export const readGovernorCountingSimpleState = /*#__PURE__*/ createReadContract(
  { abi: governorCountingSimpleAbi, functionName: 'state' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readGovernorCountingSimpleSupportsInterface =
  /*#__PURE__*/ createReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"version"`
 */
export const readGovernorCountingSimpleVersion =
  /*#__PURE__*/ createReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'version',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"votingDelay"`
 */
export const readGovernorCountingSimpleVotingDelay =
  /*#__PURE__*/ createReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'votingDelay',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"votingPeriod"`
 */
export const readGovernorCountingSimpleVotingPeriod =
  /*#__PURE__*/ createReadContract({
    abi: governorCountingSimpleAbi,
    functionName: 'votingPeriod',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__
 */
export const writeGovernorCountingSimple = /*#__PURE__*/ createWriteContract({
  abi: governorCountingSimpleAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"cancel"`
 */
export const writeGovernorCountingSimpleCancel =
  /*#__PURE__*/ createWriteContract({
    abi: governorCountingSimpleAbi,
    functionName: 'cancel',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"castVote"`
 */
export const writeGovernorCountingSimpleCastVote =
  /*#__PURE__*/ createWriteContract({
    abi: governorCountingSimpleAbi,
    functionName: 'castVote',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"castVoteBySig"`
 */
export const writeGovernorCountingSimpleCastVoteBySig =
  /*#__PURE__*/ createWriteContract({
    abi: governorCountingSimpleAbi,
    functionName: 'castVoteBySig',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"castVoteWithReason"`
 */
export const writeGovernorCountingSimpleCastVoteWithReason =
  /*#__PURE__*/ createWriteContract({
    abi: governorCountingSimpleAbi,
    functionName: 'castVoteWithReason',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"castVoteWithReasonAndParams"`
 */
export const writeGovernorCountingSimpleCastVoteWithReasonAndParams =
  /*#__PURE__*/ createWriteContract({
    abi: governorCountingSimpleAbi,
    functionName: 'castVoteWithReasonAndParams',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"castVoteWithReasonAndParamsBySig"`
 */
export const writeGovernorCountingSimpleCastVoteWithReasonAndParamsBySig =
  /*#__PURE__*/ createWriteContract({
    abi: governorCountingSimpleAbi,
    functionName: 'castVoteWithReasonAndParamsBySig',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"execute"`
 */
export const writeGovernorCountingSimpleExecute =
  /*#__PURE__*/ createWriteContract({
    abi: governorCountingSimpleAbi,
    functionName: 'execute',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const writeGovernorCountingSimpleOnErc1155BatchReceived =
  /*#__PURE__*/ createWriteContract({
    abi: governorCountingSimpleAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const writeGovernorCountingSimpleOnErc1155Received =
  /*#__PURE__*/ createWriteContract({
    abi: governorCountingSimpleAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const writeGovernorCountingSimpleOnErc721Received =
  /*#__PURE__*/ createWriteContract({
    abi: governorCountingSimpleAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"propose"`
 */
export const writeGovernorCountingSimplePropose =
  /*#__PURE__*/ createWriteContract({
    abi: governorCountingSimpleAbi,
    functionName: 'propose',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"queue"`
 */
export const writeGovernorCountingSimpleQueue =
  /*#__PURE__*/ createWriteContract({
    abi: governorCountingSimpleAbi,
    functionName: 'queue',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"relay"`
 */
export const writeGovernorCountingSimpleRelay =
  /*#__PURE__*/ createWriteContract({
    abi: governorCountingSimpleAbi,
    functionName: 'relay',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__
 */
export const simulateGovernorCountingSimple =
  /*#__PURE__*/ createSimulateContract({ abi: governorCountingSimpleAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"cancel"`
 */
export const simulateGovernorCountingSimpleCancel =
  /*#__PURE__*/ createSimulateContract({
    abi: governorCountingSimpleAbi,
    functionName: 'cancel',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"castVote"`
 */
export const simulateGovernorCountingSimpleCastVote =
  /*#__PURE__*/ createSimulateContract({
    abi: governorCountingSimpleAbi,
    functionName: 'castVote',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"castVoteBySig"`
 */
export const simulateGovernorCountingSimpleCastVoteBySig =
  /*#__PURE__*/ createSimulateContract({
    abi: governorCountingSimpleAbi,
    functionName: 'castVoteBySig',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"castVoteWithReason"`
 */
export const simulateGovernorCountingSimpleCastVoteWithReason =
  /*#__PURE__*/ createSimulateContract({
    abi: governorCountingSimpleAbi,
    functionName: 'castVoteWithReason',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"castVoteWithReasonAndParams"`
 */
export const simulateGovernorCountingSimpleCastVoteWithReasonAndParams =
  /*#__PURE__*/ createSimulateContract({
    abi: governorCountingSimpleAbi,
    functionName: 'castVoteWithReasonAndParams',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"castVoteWithReasonAndParamsBySig"`
 */
export const simulateGovernorCountingSimpleCastVoteWithReasonAndParamsBySig =
  /*#__PURE__*/ createSimulateContract({
    abi: governorCountingSimpleAbi,
    functionName: 'castVoteWithReasonAndParamsBySig',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"execute"`
 */
export const simulateGovernorCountingSimpleExecute =
  /*#__PURE__*/ createSimulateContract({
    abi: governorCountingSimpleAbi,
    functionName: 'execute',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const simulateGovernorCountingSimpleOnErc1155BatchReceived =
  /*#__PURE__*/ createSimulateContract({
    abi: governorCountingSimpleAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const simulateGovernorCountingSimpleOnErc1155Received =
  /*#__PURE__*/ createSimulateContract({
    abi: governorCountingSimpleAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const simulateGovernorCountingSimpleOnErc721Received =
  /*#__PURE__*/ createSimulateContract({
    abi: governorCountingSimpleAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"propose"`
 */
export const simulateGovernorCountingSimplePropose =
  /*#__PURE__*/ createSimulateContract({
    abi: governorCountingSimpleAbi,
    functionName: 'propose',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"queue"`
 */
export const simulateGovernorCountingSimpleQueue =
  /*#__PURE__*/ createSimulateContract({
    abi: governorCountingSimpleAbi,
    functionName: 'queue',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `functionName` set to `"relay"`
 */
export const simulateGovernorCountingSimpleRelay =
  /*#__PURE__*/ createSimulateContract({
    abi: governorCountingSimpleAbi,
    functionName: 'relay',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorCountingSimpleAbi}__
 */
export const watchGovernorCountingSimpleEvent =
  /*#__PURE__*/ createWatchContractEvent({ abi: governorCountingSimpleAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const watchGovernorCountingSimpleEip712DomainChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: governorCountingSimpleAbi,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `eventName` set to `"ProposalCanceled"`
 */
export const watchGovernorCountingSimpleProposalCanceledEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: governorCountingSimpleAbi,
    eventName: 'ProposalCanceled',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `eventName` set to `"ProposalCreated"`
 */
export const watchGovernorCountingSimpleProposalCreatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: governorCountingSimpleAbi,
    eventName: 'ProposalCreated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `eventName` set to `"ProposalExecuted"`
 */
export const watchGovernorCountingSimpleProposalExecutedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: governorCountingSimpleAbi,
    eventName: 'ProposalExecuted',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `eventName` set to `"ProposalQueued"`
 */
export const watchGovernorCountingSimpleProposalQueuedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: governorCountingSimpleAbi,
    eventName: 'ProposalQueued',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `eventName` set to `"VoteCast"`
 */
export const watchGovernorCountingSimpleVoteCastEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: governorCountingSimpleAbi,
    eventName: 'VoteCast',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorCountingSimpleAbi}__ and `eventName` set to `"VoteCastWithParams"`
 */
export const watchGovernorCountingSimpleVoteCastWithParamsEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: governorCountingSimpleAbi,
    eventName: 'VoteCastWithParams',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorTimelockControlAbi}__
 */
export const readGovernorTimelockControl = /*#__PURE__*/ createReadContract({
  abi: governorTimelockControlAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"BALLOT_TYPEHASH"`
 */
export const readGovernorTimelockControlBallotTypehash =
  /*#__PURE__*/ createReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'BALLOT_TYPEHASH',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"CLOCK_MODE"`
 */
export const readGovernorTimelockControlClockMode =
  /*#__PURE__*/ createReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'CLOCK_MODE',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"COUNTING_MODE"`
 */
export const readGovernorTimelockControlCountingMode =
  /*#__PURE__*/ createReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'COUNTING_MODE',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"EXTENDED_BALLOT_TYPEHASH"`
 */
export const readGovernorTimelockControlExtendedBallotTypehash =
  /*#__PURE__*/ createReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'EXTENDED_BALLOT_TYPEHASH',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"clock"`
 */
export const readGovernorTimelockControlClock =
  /*#__PURE__*/ createReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'clock',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"eip712Domain"`
 */
export const readGovernorTimelockControlEip712Domain =
  /*#__PURE__*/ createReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'eip712Domain',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"getVotes"`
 */
export const readGovernorTimelockControlGetVotes =
  /*#__PURE__*/ createReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'getVotes',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"getVotesWithParams"`
 */
export const readGovernorTimelockControlGetVotesWithParams =
  /*#__PURE__*/ createReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'getVotesWithParams',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"hasVoted"`
 */
export const readGovernorTimelockControlHasVoted =
  /*#__PURE__*/ createReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'hasVoted',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"hashProposal"`
 */
export const readGovernorTimelockControlHashProposal =
  /*#__PURE__*/ createReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'hashProposal',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"name"`
 */
export const readGovernorTimelockControlName = /*#__PURE__*/ createReadContract(
  { abi: governorTimelockControlAbi, functionName: 'name' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"nonces"`
 */
export const readGovernorTimelockControlNonces =
  /*#__PURE__*/ createReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'nonces',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"proposalDeadline"`
 */
export const readGovernorTimelockControlProposalDeadline =
  /*#__PURE__*/ createReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'proposalDeadline',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"proposalEta"`
 */
export const readGovernorTimelockControlProposalEta =
  /*#__PURE__*/ createReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'proposalEta',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"proposalNeedsQueuing"`
 */
export const readGovernorTimelockControlProposalNeedsQueuing =
  /*#__PURE__*/ createReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'proposalNeedsQueuing',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"proposalProposer"`
 */
export const readGovernorTimelockControlProposalProposer =
  /*#__PURE__*/ createReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'proposalProposer',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"proposalSnapshot"`
 */
export const readGovernorTimelockControlProposalSnapshot =
  /*#__PURE__*/ createReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'proposalSnapshot',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"proposalThreshold"`
 */
export const readGovernorTimelockControlProposalThreshold =
  /*#__PURE__*/ createReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'proposalThreshold',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"quorum"`
 */
export const readGovernorTimelockControlQuorum =
  /*#__PURE__*/ createReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'quorum',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"state"`
 */
export const readGovernorTimelockControlState =
  /*#__PURE__*/ createReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'state',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readGovernorTimelockControlSupportsInterface =
  /*#__PURE__*/ createReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"timelock"`
 */
export const readGovernorTimelockControlTimelock =
  /*#__PURE__*/ createReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'timelock',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"version"`
 */
export const readGovernorTimelockControlVersion =
  /*#__PURE__*/ createReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'version',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"votingDelay"`
 */
export const readGovernorTimelockControlVotingDelay =
  /*#__PURE__*/ createReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'votingDelay',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"votingPeriod"`
 */
export const readGovernorTimelockControlVotingPeriod =
  /*#__PURE__*/ createReadContract({
    abi: governorTimelockControlAbi,
    functionName: 'votingPeriod',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorTimelockControlAbi}__
 */
export const writeGovernorTimelockControl = /*#__PURE__*/ createWriteContract({
  abi: governorTimelockControlAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"cancel"`
 */
export const writeGovernorTimelockControlCancel =
  /*#__PURE__*/ createWriteContract({
    abi: governorTimelockControlAbi,
    functionName: 'cancel',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"castVote"`
 */
export const writeGovernorTimelockControlCastVote =
  /*#__PURE__*/ createWriteContract({
    abi: governorTimelockControlAbi,
    functionName: 'castVote',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"castVoteBySig"`
 */
export const writeGovernorTimelockControlCastVoteBySig =
  /*#__PURE__*/ createWriteContract({
    abi: governorTimelockControlAbi,
    functionName: 'castVoteBySig',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"castVoteWithReason"`
 */
export const writeGovernorTimelockControlCastVoteWithReason =
  /*#__PURE__*/ createWriteContract({
    abi: governorTimelockControlAbi,
    functionName: 'castVoteWithReason',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"castVoteWithReasonAndParams"`
 */
export const writeGovernorTimelockControlCastVoteWithReasonAndParams =
  /*#__PURE__*/ createWriteContract({
    abi: governorTimelockControlAbi,
    functionName: 'castVoteWithReasonAndParams',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"castVoteWithReasonAndParamsBySig"`
 */
export const writeGovernorTimelockControlCastVoteWithReasonAndParamsBySig =
  /*#__PURE__*/ createWriteContract({
    abi: governorTimelockControlAbi,
    functionName: 'castVoteWithReasonAndParamsBySig',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"execute"`
 */
export const writeGovernorTimelockControlExecute =
  /*#__PURE__*/ createWriteContract({
    abi: governorTimelockControlAbi,
    functionName: 'execute',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const writeGovernorTimelockControlOnErc1155BatchReceived =
  /*#__PURE__*/ createWriteContract({
    abi: governorTimelockControlAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const writeGovernorTimelockControlOnErc1155Received =
  /*#__PURE__*/ createWriteContract({
    abi: governorTimelockControlAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const writeGovernorTimelockControlOnErc721Received =
  /*#__PURE__*/ createWriteContract({
    abi: governorTimelockControlAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"propose"`
 */
export const writeGovernorTimelockControlPropose =
  /*#__PURE__*/ createWriteContract({
    abi: governorTimelockControlAbi,
    functionName: 'propose',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"queue"`
 */
export const writeGovernorTimelockControlQueue =
  /*#__PURE__*/ createWriteContract({
    abi: governorTimelockControlAbi,
    functionName: 'queue',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"relay"`
 */
export const writeGovernorTimelockControlRelay =
  /*#__PURE__*/ createWriteContract({
    abi: governorTimelockControlAbi,
    functionName: 'relay',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"updateTimelock"`
 */
export const writeGovernorTimelockControlUpdateTimelock =
  /*#__PURE__*/ createWriteContract({
    abi: governorTimelockControlAbi,
    functionName: 'updateTimelock',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorTimelockControlAbi}__
 */
export const simulateGovernorTimelockControl =
  /*#__PURE__*/ createSimulateContract({ abi: governorTimelockControlAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"cancel"`
 */
export const simulateGovernorTimelockControlCancel =
  /*#__PURE__*/ createSimulateContract({
    abi: governorTimelockControlAbi,
    functionName: 'cancel',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"castVote"`
 */
export const simulateGovernorTimelockControlCastVote =
  /*#__PURE__*/ createSimulateContract({
    abi: governorTimelockControlAbi,
    functionName: 'castVote',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"castVoteBySig"`
 */
export const simulateGovernorTimelockControlCastVoteBySig =
  /*#__PURE__*/ createSimulateContract({
    abi: governorTimelockControlAbi,
    functionName: 'castVoteBySig',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"castVoteWithReason"`
 */
export const simulateGovernorTimelockControlCastVoteWithReason =
  /*#__PURE__*/ createSimulateContract({
    abi: governorTimelockControlAbi,
    functionName: 'castVoteWithReason',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"castVoteWithReasonAndParams"`
 */
export const simulateGovernorTimelockControlCastVoteWithReasonAndParams =
  /*#__PURE__*/ createSimulateContract({
    abi: governorTimelockControlAbi,
    functionName: 'castVoteWithReasonAndParams',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"castVoteWithReasonAndParamsBySig"`
 */
export const simulateGovernorTimelockControlCastVoteWithReasonAndParamsBySig =
  /*#__PURE__*/ createSimulateContract({
    abi: governorTimelockControlAbi,
    functionName: 'castVoteWithReasonAndParamsBySig',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"execute"`
 */
export const simulateGovernorTimelockControlExecute =
  /*#__PURE__*/ createSimulateContract({
    abi: governorTimelockControlAbi,
    functionName: 'execute',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const simulateGovernorTimelockControlOnErc1155BatchReceived =
  /*#__PURE__*/ createSimulateContract({
    abi: governorTimelockControlAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const simulateGovernorTimelockControlOnErc1155Received =
  /*#__PURE__*/ createSimulateContract({
    abi: governorTimelockControlAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const simulateGovernorTimelockControlOnErc721Received =
  /*#__PURE__*/ createSimulateContract({
    abi: governorTimelockControlAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"propose"`
 */
export const simulateGovernorTimelockControlPropose =
  /*#__PURE__*/ createSimulateContract({
    abi: governorTimelockControlAbi,
    functionName: 'propose',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"queue"`
 */
export const simulateGovernorTimelockControlQueue =
  /*#__PURE__*/ createSimulateContract({
    abi: governorTimelockControlAbi,
    functionName: 'queue',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"relay"`
 */
export const simulateGovernorTimelockControlRelay =
  /*#__PURE__*/ createSimulateContract({
    abi: governorTimelockControlAbi,
    functionName: 'relay',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `functionName` set to `"updateTimelock"`
 */
export const simulateGovernorTimelockControlUpdateTimelock =
  /*#__PURE__*/ createSimulateContract({
    abi: governorTimelockControlAbi,
    functionName: 'updateTimelock',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorTimelockControlAbi}__
 */
export const watchGovernorTimelockControlEvent =
  /*#__PURE__*/ createWatchContractEvent({ abi: governorTimelockControlAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const watchGovernorTimelockControlEip712DomainChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: governorTimelockControlAbi,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `eventName` set to `"ProposalCanceled"`
 */
export const watchGovernorTimelockControlProposalCanceledEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: governorTimelockControlAbi,
    eventName: 'ProposalCanceled',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `eventName` set to `"ProposalCreated"`
 */
export const watchGovernorTimelockControlProposalCreatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: governorTimelockControlAbi,
    eventName: 'ProposalCreated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `eventName` set to `"ProposalExecuted"`
 */
export const watchGovernorTimelockControlProposalExecutedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: governorTimelockControlAbi,
    eventName: 'ProposalExecuted',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `eventName` set to `"ProposalQueued"`
 */
export const watchGovernorTimelockControlProposalQueuedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: governorTimelockControlAbi,
    eventName: 'ProposalQueued',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `eventName` set to `"TimelockChange"`
 */
export const watchGovernorTimelockControlTimelockChangeEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: governorTimelockControlAbi,
    eventName: 'TimelockChange',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `eventName` set to `"VoteCast"`
 */
export const watchGovernorTimelockControlVoteCastEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: governorTimelockControlAbi,
    eventName: 'VoteCast',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorTimelockControlAbi}__ and `eventName` set to `"VoteCastWithParams"`
 */
export const watchGovernorTimelockControlVoteCastWithParamsEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: governorTimelockControlAbi,
    eventName: 'VoteCastWithParams',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesAbi}__
 */
export const readGovernorVotes = /*#__PURE__*/ createReadContract({
  abi: governorVotesAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"BALLOT_TYPEHASH"`
 */
export const readGovernorVotesBallotTypehash = /*#__PURE__*/ createReadContract(
  { abi: governorVotesAbi, functionName: 'BALLOT_TYPEHASH' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"CLOCK_MODE"`
 */
export const readGovernorVotesClockMode = /*#__PURE__*/ createReadContract({
  abi: governorVotesAbi,
  functionName: 'CLOCK_MODE',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"COUNTING_MODE"`
 */
export const readGovernorVotesCountingMode = /*#__PURE__*/ createReadContract({
  abi: governorVotesAbi,
  functionName: 'COUNTING_MODE',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"EXTENDED_BALLOT_TYPEHASH"`
 */
export const readGovernorVotesExtendedBallotTypehash =
  /*#__PURE__*/ createReadContract({
    abi: governorVotesAbi,
    functionName: 'EXTENDED_BALLOT_TYPEHASH',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"clock"`
 */
export const readGovernorVotesClock = /*#__PURE__*/ createReadContract({
  abi: governorVotesAbi,
  functionName: 'clock',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"eip712Domain"`
 */
export const readGovernorVotesEip712Domain = /*#__PURE__*/ createReadContract({
  abi: governorVotesAbi,
  functionName: 'eip712Domain',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"getVotes"`
 */
export const readGovernorVotesGetVotes = /*#__PURE__*/ createReadContract({
  abi: governorVotesAbi,
  functionName: 'getVotes',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"getVotesWithParams"`
 */
export const readGovernorVotesGetVotesWithParams =
  /*#__PURE__*/ createReadContract({
    abi: governorVotesAbi,
    functionName: 'getVotesWithParams',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"hasVoted"`
 */
export const readGovernorVotesHasVoted = /*#__PURE__*/ createReadContract({
  abi: governorVotesAbi,
  functionName: 'hasVoted',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"hashProposal"`
 */
export const readGovernorVotesHashProposal = /*#__PURE__*/ createReadContract({
  abi: governorVotesAbi,
  functionName: 'hashProposal',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"name"`
 */
export const readGovernorVotesName = /*#__PURE__*/ createReadContract({
  abi: governorVotesAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"nonces"`
 */
export const readGovernorVotesNonces = /*#__PURE__*/ createReadContract({
  abi: governorVotesAbi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"proposalDeadline"`
 */
export const readGovernorVotesProposalDeadline =
  /*#__PURE__*/ createReadContract({
    abi: governorVotesAbi,
    functionName: 'proposalDeadline',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"proposalEta"`
 */
export const readGovernorVotesProposalEta = /*#__PURE__*/ createReadContract({
  abi: governorVotesAbi,
  functionName: 'proposalEta',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"proposalNeedsQueuing"`
 */
export const readGovernorVotesProposalNeedsQueuing =
  /*#__PURE__*/ createReadContract({
    abi: governorVotesAbi,
    functionName: 'proposalNeedsQueuing',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"proposalProposer"`
 */
export const readGovernorVotesProposalProposer =
  /*#__PURE__*/ createReadContract({
    abi: governorVotesAbi,
    functionName: 'proposalProposer',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"proposalSnapshot"`
 */
export const readGovernorVotesProposalSnapshot =
  /*#__PURE__*/ createReadContract({
    abi: governorVotesAbi,
    functionName: 'proposalSnapshot',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"proposalThreshold"`
 */
export const readGovernorVotesProposalThreshold =
  /*#__PURE__*/ createReadContract({
    abi: governorVotesAbi,
    functionName: 'proposalThreshold',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"quorum"`
 */
export const readGovernorVotesQuorum = /*#__PURE__*/ createReadContract({
  abi: governorVotesAbi,
  functionName: 'quorum',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"state"`
 */
export const readGovernorVotesState = /*#__PURE__*/ createReadContract({
  abi: governorVotesAbi,
  functionName: 'state',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readGovernorVotesSupportsInterface =
  /*#__PURE__*/ createReadContract({
    abi: governorVotesAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"token"`
 */
export const readGovernorVotesToken = /*#__PURE__*/ createReadContract({
  abi: governorVotesAbi,
  functionName: 'token',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"version"`
 */
export const readGovernorVotesVersion = /*#__PURE__*/ createReadContract({
  abi: governorVotesAbi,
  functionName: 'version',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"votingDelay"`
 */
export const readGovernorVotesVotingDelay = /*#__PURE__*/ createReadContract({
  abi: governorVotesAbi,
  functionName: 'votingDelay',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"votingPeriod"`
 */
export const readGovernorVotesVotingPeriod = /*#__PURE__*/ createReadContract({
  abi: governorVotesAbi,
  functionName: 'votingPeriod',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorVotesAbi}__
 */
export const writeGovernorVotes = /*#__PURE__*/ createWriteContract({
  abi: governorVotesAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"cancel"`
 */
export const writeGovernorVotesCancel = /*#__PURE__*/ createWriteContract({
  abi: governorVotesAbi,
  functionName: 'cancel',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"castVote"`
 */
export const writeGovernorVotesCastVote = /*#__PURE__*/ createWriteContract({
  abi: governorVotesAbi,
  functionName: 'castVote',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"castVoteBySig"`
 */
export const writeGovernorVotesCastVoteBySig =
  /*#__PURE__*/ createWriteContract({
    abi: governorVotesAbi,
    functionName: 'castVoteBySig',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"castVoteWithReason"`
 */
export const writeGovernorVotesCastVoteWithReason =
  /*#__PURE__*/ createWriteContract({
    abi: governorVotesAbi,
    functionName: 'castVoteWithReason',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"castVoteWithReasonAndParams"`
 */
export const writeGovernorVotesCastVoteWithReasonAndParams =
  /*#__PURE__*/ createWriteContract({
    abi: governorVotesAbi,
    functionName: 'castVoteWithReasonAndParams',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"castVoteWithReasonAndParamsBySig"`
 */
export const writeGovernorVotesCastVoteWithReasonAndParamsBySig =
  /*#__PURE__*/ createWriteContract({
    abi: governorVotesAbi,
    functionName: 'castVoteWithReasonAndParamsBySig',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"execute"`
 */
export const writeGovernorVotesExecute = /*#__PURE__*/ createWriteContract({
  abi: governorVotesAbi,
  functionName: 'execute',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const writeGovernorVotesOnErc1155BatchReceived =
  /*#__PURE__*/ createWriteContract({
    abi: governorVotesAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const writeGovernorVotesOnErc1155Received =
  /*#__PURE__*/ createWriteContract({
    abi: governorVotesAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const writeGovernorVotesOnErc721Received =
  /*#__PURE__*/ createWriteContract({
    abi: governorVotesAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"propose"`
 */
export const writeGovernorVotesPropose = /*#__PURE__*/ createWriteContract({
  abi: governorVotesAbi,
  functionName: 'propose',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"queue"`
 */
export const writeGovernorVotesQueue = /*#__PURE__*/ createWriteContract({
  abi: governorVotesAbi,
  functionName: 'queue',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"relay"`
 */
export const writeGovernorVotesRelay = /*#__PURE__*/ createWriteContract({
  abi: governorVotesAbi,
  functionName: 'relay',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorVotesAbi}__
 */
export const simulateGovernorVotes = /*#__PURE__*/ createSimulateContract({
  abi: governorVotesAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"cancel"`
 */
export const simulateGovernorVotesCancel = /*#__PURE__*/ createSimulateContract(
  { abi: governorVotesAbi, functionName: 'cancel' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"castVote"`
 */
export const simulateGovernorVotesCastVote =
  /*#__PURE__*/ createSimulateContract({
    abi: governorVotesAbi,
    functionName: 'castVote',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"castVoteBySig"`
 */
export const simulateGovernorVotesCastVoteBySig =
  /*#__PURE__*/ createSimulateContract({
    abi: governorVotesAbi,
    functionName: 'castVoteBySig',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"castVoteWithReason"`
 */
export const simulateGovernorVotesCastVoteWithReason =
  /*#__PURE__*/ createSimulateContract({
    abi: governorVotesAbi,
    functionName: 'castVoteWithReason',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"castVoteWithReasonAndParams"`
 */
export const simulateGovernorVotesCastVoteWithReasonAndParams =
  /*#__PURE__*/ createSimulateContract({
    abi: governorVotesAbi,
    functionName: 'castVoteWithReasonAndParams',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"castVoteWithReasonAndParamsBySig"`
 */
export const simulateGovernorVotesCastVoteWithReasonAndParamsBySig =
  /*#__PURE__*/ createSimulateContract({
    abi: governorVotesAbi,
    functionName: 'castVoteWithReasonAndParamsBySig',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"execute"`
 */
export const simulateGovernorVotesExecute =
  /*#__PURE__*/ createSimulateContract({
    abi: governorVotesAbi,
    functionName: 'execute',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const simulateGovernorVotesOnErc1155BatchReceived =
  /*#__PURE__*/ createSimulateContract({
    abi: governorVotesAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const simulateGovernorVotesOnErc1155Received =
  /*#__PURE__*/ createSimulateContract({
    abi: governorVotesAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const simulateGovernorVotesOnErc721Received =
  /*#__PURE__*/ createSimulateContract({
    abi: governorVotesAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"propose"`
 */
export const simulateGovernorVotesPropose =
  /*#__PURE__*/ createSimulateContract({
    abi: governorVotesAbi,
    functionName: 'propose',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"queue"`
 */
export const simulateGovernorVotesQueue = /*#__PURE__*/ createSimulateContract({
  abi: governorVotesAbi,
  functionName: 'queue',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorVotesAbi}__ and `functionName` set to `"relay"`
 */
export const simulateGovernorVotesRelay = /*#__PURE__*/ createSimulateContract({
  abi: governorVotesAbi,
  functionName: 'relay',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorVotesAbi}__
 */
export const watchGovernorVotesEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: governorVotesAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorVotesAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const watchGovernorVotesEip712DomainChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: governorVotesAbi,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorVotesAbi}__ and `eventName` set to `"ProposalCanceled"`
 */
export const watchGovernorVotesProposalCanceledEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: governorVotesAbi,
    eventName: 'ProposalCanceled',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorVotesAbi}__ and `eventName` set to `"ProposalCreated"`
 */
export const watchGovernorVotesProposalCreatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: governorVotesAbi,
    eventName: 'ProposalCreated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorVotesAbi}__ and `eventName` set to `"ProposalExecuted"`
 */
export const watchGovernorVotesProposalExecutedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: governorVotesAbi,
    eventName: 'ProposalExecuted',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorVotesAbi}__ and `eventName` set to `"ProposalQueued"`
 */
export const watchGovernorVotesProposalQueuedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: governorVotesAbi,
    eventName: 'ProposalQueued',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorVotesAbi}__ and `eventName` set to `"VoteCast"`
 */
export const watchGovernorVotesVoteCastEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: governorVotesAbi,
    eventName: 'VoteCast',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorVotesAbi}__ and `eventName` set to `"VoteCastWithParams"`
 */
export const watchGovernorVotesVoteCastWithParamsEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: governorVotesAbi,
    eventName: 'VoteCastWithParams',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__
 */
export const readGovernorVotesQuorumFraction = /*#__PURE__*/ createReadContract(
  { abi: governorVotesQuorumFractionAbi },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"BALLOT_TYPEHASH"`
 */
export const readGovernorVotesQuorumFractionBallotTypehash =
  /*#__PURE__*/ createReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'BALLOT_TYPEHASH',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"CLOCK_MODE"`
 */
export const readGovernorVotesQuorumFractionClockMode =
  /*#__PURE__*/ createReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'CLOCK_MODE',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"COUNTING_MODE"`
 */
export const readGovernorVotesQuorumFractionCountingMode =
  /*#__PURE__*/ createReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'COUNTING_MODE',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"EXTENDED_BALLOT_TYPEHASH"`
 */
export const readGovernorVotesQuorumFractionExtendedBallotTypehash =
  /*#__PURE__*/ createReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'EXTENDED_BALLOT_TYPEHASH',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"clock"`
 */
export const readGovernorVotesQuorumFractionClock =
  /*#__PURE__*/ createReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'clock',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"eip712Domain"`
 */
export const readGovernorVotesQuorumFractionEip712Domain =
  /*#__PURE__*/ createReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'eip712Domain',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"getVotes"`
 */
export const readGovernorVotesQuorumFractionGetVotes =
  /*#__PURE__*/ createReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'getVotes',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"getVotesWithParams"`
 */
export const readGovernorVotesQuorumFractionGetVotesWithParams =
  /*#__PURE__*/ createReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'getVotesWithParams',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"hasVoted"`
 */
export const readGovernorVotesQuorumFractionHasVoted =
  /*#__PURE__*/ createReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'hasVoted',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"hashProposal"`
 */
export const readGovernorVotesQuorumFractionHashProposal =
  /*#__PURE__*/ createReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'hashProposal',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"name"`
 */
export const readGovernorVotesQuorumFractionName =
  /*#__PURE__*/ createReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'name',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"nonces"`
 */
export const readGovernorVotesQuorumFractionNonces =
  /*#__PURE__*/ createReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'nonces',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"proposalDeadline"`
 */
export const readGovernorVotesQuorumFractionProposalDeadline =
  /*#__PURE__*/ createReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'proposalDeadline',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"proposalEta"`
 */
export const readGovernorVotesQuorumFractionProposalEta =
  /*#__PURE__*/ createReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'proposalEta',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"proposalNeedsQueuing"`
 */
export const readGovernorVotesQuorumFractionProposalNeedsQueuing =
  /*#__PURE__*/ createReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'proposalNeedsQueuing',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"proposalProposer"`
 */
export const readGovernorVotesQuorumFractionProposalProposer =
  /*#__PURE__*/ createReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'proposalProposer',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"proposalSnapshot"`
 */
export const readGovernorVotesQuorumFractionProposalSnapshot =
  /*#__PURE__*/ createReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'proposalSnapshot',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"proposalThreshold"`
 */
export const readGovernorVotesQuorumFractionProposalThreshold =
  /*#__PURE__*/ createReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'proposalThreshold',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"quorum"`
 */
export const readGovernorVotesQuorumFractionQuorum =
  /*#__PURE__*/ createReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'quorum',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"quorumDenominator"`
 */
export const readGovernorVotesQuorumFractionQuorumDenominator =
  /*#__PURE__*/ createReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'quorumDenominator',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"quorumNumerator"`
 */
export const readGovernorVotesQuorumFractionQuorumNumerator =
  /*#__PURE__*/ createReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'quorumNumerator',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"state"`
 */
export const readGovernorVotesQuorumFractionState =
  /*#__PURE__*/ createReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'state',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readGovernorVotesQuorumFractionSupportsInterface =
  /*#__PURE__*/ createReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"token"`
 */
export const readGovernorVotesQuorumFractionToken =
  /*#__PURE__*/ createReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'token',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"version"`
 */
export const readGovernorVotesQuorumFractionVersion =
  /*#__PURE__*/ createReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'version',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"votingDelay"`
 */
export const readGovernorVotesQuorumFractionVotingDelay =
  /*#__PURE__*/ createReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'votingDelay',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"votingPeriod"`
 */
export const readGovernorVotesQuorumFractionVotingPeriod =
  /*#__PURE__*/ createReadContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'votingPeriod',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__
 */
export const writeGovernorVotesQuorumFraction =
  /*#__PURE__*/ createWriteContract({ abi: governorVotesQuorumFractionAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"cancel"`
 */
export const writeGovernorVotesQuorumFractionCancel =
  /*#__PURE__*/ createWriteContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'cancel',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"castVote"`
 */
export const writeGovernorVotesQuorumFractionCastVote =
  /*#__PURE__*/ createWriteContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'castVote',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"castVoteBySig"`
 */
export const writeGovernorVotesQuorumFractionCastVoteBySig =
  /*#__PURE__*/ createWriteContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'castVoteBySig',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"castVoteWithReason"`
 */
export const writeGovernorVotesQuorumFractionCastVoteWithReason =
  /*#__PURE__*/ createWriteContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'castVoteWithReason',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"castVoteWithReasonAndParams"`
 */
export const writeGovernorVotesQuorumFractionCastVoteWithReasonAndParams =
  /*#__PURE__*/ createWriteContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'castVoteWithReasonAndParams',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"castVoteWithReasonAndParamsBySig"`
 */
export const writeGovernorVotesQuorumFractionCastVoteWithReasonAndParamsBySig =
  /*#__PURE__*/ createWriteContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'castVoteWithReasonAndParamsBySig',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"execute"`
 */
export const writeGovernorVotesQuorumFractionExecute =
  /*#__PURE__*/ createWriteContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'execute',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const writeGovernorVotesQuorumFractionOnErc1155BatchReceived =
  /*#__PURE__*/ createWriteContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const writeGovernorVotesQuorumFractionOnErc1155Received =
  /*#__PURE__*/ createWriteContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const writeGovernorVotesQuorumFractionOnErc721Received =
  /*#__PURE__*/ createWriteContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"propose"`
 */
export const writeGovernorVotesQuorumFractionPropose =
  /*#__PURE__*/ createWriteContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'propose',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"queue"`
 */
export const writeGovernorVotesQuorumFractionQueue =
  /*#__PURE__*/ createWriteContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'queue',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"relay"`
 */
export const writeGovernorVotesQuorumFractionRelay =
  /*#__PURE__*/ createWriteContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'relay',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"updateQuorumNumerator"`
 */
export const writeGovernorVotesQuorumFractionUpdateQuorumNumerator =
  /*#__PURE__*/ createWriteContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'updateQuorumNumerator',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__
 */
export const simulateGovernorVotesQuorumFraction =
  /*#__PURE__*/ createSimulateContract({ abi: governorVotesQuorumFractionAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"cancel"`
 */
export const simulateGovernorVotesQuorumFractionCancel =
  /*#__PURE__*/ createSimulateContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'cancel',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"castVote"`
 */
export const simulateGovernorVotesQuorumFractionCastVote =
  /*#__PURE__*/ createSimulateContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'castVote',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"castVoteBySig"`
 */
export const simulateGovernorVotesQuorumFractionCastVoteBySig =
  /*#__PURE__*/ createSimulateContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'castVoteBySig',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"castVoteWithReason"`
 */
export const simulateGovernorVotesQuorumFractionCastVoteWithReason =
  /*#__PURE__*/ createSimulateContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'castVoteWithReason',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"castVoteWithReasonAndParams"`
 */
export const simulateGovernorVotesQuorumFractionCastVoteWithReasonAndParams =
  /*#__PURE__*/ createSimulateContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'castVoteWithReasonAndParams',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"castVoteWithReasonAndParamsBySig"`
 */
export const simulateGovernorVotesQuorumFractionCastVoteWithReasonAndParamsBySig =
  /*#__PURE__*/ createSimulateContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'castVoteWithReasonAndParamsBySig',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"execute"`
 */
export const simulateGovernorVotesQuorumFractionExecute =
  /*#__PURE__*/ createSimulateContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'execute',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const simulateGovernorVotesQuorumFractionOnErc1155BatchReceived =
  /*#__PURE__*/ createSimulateContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const simulateGovernorVotesQuorumFractionOnErc1155Received =
  /*#__PURE__*/ createSimulateContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const simulateGovernorVotesQuorumFractionOnErc721Received =
  /*#__PURE__*/ createSimulateContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"propose"`
 */
export const simulateGovernorVotesQuorumFractionPropose =
  /*#__PURE__*/ createSimulateContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'propose',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"queue"`
 */
export const simulateGovernorVotesQuorumFractionQueue =
  /*#__PURE__*/ createSimulateContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'queue',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"relay"`
 */
export const simulateGovernorVotesQuorumFractionRelay =
  /*#__PURE__*/ createSimulateContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'relay',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `functionName` set to `"updateQuorumNumerator"`
 */
export const simulateGovernorVotesQuorumFractionUpdateQuorumNumerator =
  /*#__PURE__*/ createSimulateContract({
    abi: governorVotesQuorumFractionAbi,
    functionName: 'updateQuorumNumerator',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__
 */
export const watchGovernorVotesQuorumFractionEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: governorVotesQuorumFractionAbi,
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const watchGovernorVotesQuorumFractionEip712DomainChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: governorVotesQuorumFractionAbi,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `eventName` set to `"ProposalCanceled"`
 */
export const watchGovernorVotesQuorumFractionProposalCanceledEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: governorVotesQuorumFractionAbi,
    eventName: 'ProposalCanceled',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `eventName` set to `"ProposalCreated"`
 */
export const watchGovernorVotesQuorumFractionProposalCreatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: governorVotesQuorumFractionAbi,
    eventName: 'ProposalCreated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `eventName` set to `"ProposalExecuted"`
 */
export const watchGovernorVotesQuorumFractionProposalExecutedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: governorVotesQuorumFractionAbi,
    eventName: 'ProposalExecuted',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `eventName` set to `"ProposalQueued"`
 */
export const watchGovernorVotesQuorumFractionProposalQueuedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: governorVotesQuorumFractionAbi,
    eventName: 'ProposalQueued',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `eventName` set to `"QuorumNumeratorUpdated"`
 */
export const watchGovernorVotesQuorumFractionQuorumNumeratorUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: governorVotesQuorumFractionAbi,
    eventName: 'QuorumNumeratorUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `eventName` set to `"VoteCast"`
 */
export const watchGovernorVotesQuorumFractionVoteCastEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: governorVotesQuorumFractionAbi,
    eventName: 'VoteCast',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link governorVotesQuorumFractionAbi}__ and `eventName` set to `"VoteCastWithParams"`
 */
export const watchGovernorVotesQuorumFractionVoteCastWithParamsEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: governorVotesQuorumFractionAbi,
    eventName: 'VoteCastWithParams',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iAccessControlAbi}__
 */
export const readIAccessControl = /*#__PURE__*/ createReadContract({
  abi: iAccessControlAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const readIAccessControlGetRoleAdmin = /*#__PURE__*/ createReadContract({
  abi: iAccessControlAbi,
  functionName: 'getRoleAdmin',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"hasRole"`
 */
export const readIAccessControlHasRole = /*#__PURE__*/ createReadContract({
  abi: iAccessControlAbi,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iAccessControlAbi}__
 */
export const writeIAccessControl = /*#__PURE__*/ createWriteContract({
  abi: iAccessControlAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const writeIAccessControlGrantRole = /*#__PURE__*/ createWriteContract({
  abi: iAccessControlAbi,
  functionName: 'grantRole',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const writeIAccessControlRenounceRole =
  /*#__PURE__*/ createWriteContract({
    abi: iAccessControlAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const writeIAccessControlRevokeRole = /*#__PURE__*/ createWriteContract({
  abi: iAccessControlAbi,
  functionName: 'revokeRole',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iAccessControlAbi}__
 */
export const simulateIAccessControl = /*#__PURE__*/ createSimulateContract({
  abi: iAccessControlAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const simulateIAccessControlGrantRole =
  /*#__PURE__*/ createSimulateContract({
    abi: iAccessControlAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const simulateIAccessControlRenounceRole =
  /*#__PURE__*/ createSimulateContract({
    abi: iAccessControlAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const simulateIAccessControlRevokeRole =
  /*#__PURE__*/ createSimulateContract({
    abi: iAccessControlAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iAccessControlAbi}__
 */
export const watchIAccessControlEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iAccessControlAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iAccessControlAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const watchIAccessControlRoleAdminChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iAccessControlAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iAccessControlAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const watchIAccessControlRoleGrantedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iAccessControlAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iAccessControlAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const watchIAccessControlRoleRevokedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iAccessControlAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__
 */
export const readIerc1155Receiver = /*#__PURE__*/ createReadContract({
  abi: ierc1155ReceiverAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readIerc1155ReceiverSupportsInterface =
  /*#__PURE__*/ createReadContract({
    abi: ierc1155ReceiverAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__
 */
export const writeIerc1155Receiver = /*#__PURE__*/ createWriteContract({
  abi: ierc1155ReceiverAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const writeIerc1155ReceiverOnErc1155BatchReceived =
  /*#__PURE__*/ createWriteContract({
    abi: ierc1155ReceiverAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const writeIerc1155ReceiverOnErc1155Received =
  /*#__PURE__*/ createWriteContract({
    abi: ierc1155ReceiverAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__
 */
export const simulateIerc1155Receiver = /*#__PURE__*/ createSimulateContract({
  abi: ierc1155ReceiverAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const simulateIerc1155ReceiverOnErc1155BatchReceived =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc1155ReceiverAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const simulateIerc1155ReceiverOnErc1155Received =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc1155ReceiverAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc1271Abi}__
 */
export const readIerc1271 = /*#__PURE__*/ createReadContract({
  abi: ierc1271Abi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc1271Abi}__ and `functionName` set to `"isValidSignature"`
 */
export const readIerc1271IsValidSignature = /*#__PURE__*/ createReadContract({
  abi: ierc1271Abi,
  functionName: 'isValidSignature',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc165Abi}__
 */
export const readIerc165 = /*#__PURE__*/ createReadContract({ abi: ierc165Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc165Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const readIerc165SupportsInterface = /*#__PURE__*/ createReadContract({
  abi: ierc165Abi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const readIerc20 = /*#__PURE__*/ createReadContract({ abi: ierc20Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"allowance"`
 */
export const readIerc20Allowance = /*#__PURE__*/ createReadContract({
  abi: ierc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const readIerc20BalanceOf = /*#__PURE__*/ createReadContract({
  abi: ierc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const readIerc20TotalSupply = /*#__PURE__*/ createReadContract({
  abi: ierc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const writeIerc20 = /*#__PURE__*/ createWriteContract({ abi: ierc20Abi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"approve"`
 */
export const writeIerc20Approve = /*#__PURE__*/ createWriteContract({
  abi: ierc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transfer"`
 */
export const writeIerc20Transfer = /*#__PURE__*/ createWriteContract({
  abi: ierc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const writeIerc20TransferFrom = /*#__PURE__*/ createWriteContract({
  abi: ierc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const simulateIerc20 = /*#__PURE__*/ createSimulateContract({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"approve"`
 */
export const simulateIerc20Approve = /*#__PURE__*/ createSimulateContract({
  abi: ierc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transfer"`
 */
export const simulateIerc20Transfer = /*#__PURE__*/ createSimulateContract({
  abi: ierc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateIerc20TransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: ierc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc20Abi}__
 */
export const watchIerc20Event = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc20Abi}__ and `eventName` set to `"Approval"`
 */
export const watchIerc20ApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc20Abi,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const watchIerc20TransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc20Abi,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20BurnableAbi}__
 */
export const readIerc20Burnable = /*#__PURE__*/ createReadContract({
  abi: ierc20BurnableAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20BurnableAbi}__ and `functionName` set to `"allowance"`
 */
export const readIerc20BurnableAllowance = /*#__PURE__*/ createReadContract({
  abi: ierc20BurnableAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20BurnableAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readIerc20BurnableBalanceOf = /*#__PURE__*/ createReadContract({
  abi: ierc20BurnableAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20BurnableAbi}__ and `functionName` set to `"totalSupply"`
 */
export const readIerc20BurnableTotalSupply = /*#__PURE__*/ createReadContract({
  abi: ierc20BurnableAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20BurnableAbi}__
 */
export const writeIerc20Burnable = /*#__PURE__*/ createWriteContract({
  abi: ierc20BurnableAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20BurnableAbi}__ and `functionName` set to `"approve"`
 */
export const writeIerc20BurnableApprove = /*#__PURE__*/ createWriteContract({
  abi: ierc20BurnableAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20BurnableAbi}__ and `functionName` set to `"burnFrom"`
 */
export const writeIerc20BurnableBurnFrom = /*#__PURE__*/ createWriteContract({
  abi: ierc20BurnableAbi,
  functionName: 'burnFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20BurnableAbi}__ and `functionName` set to `"transfer"`
 */
export const writeIerc20BurnableTransfer = /*#__PURE__*/ createWriteContract({
  abi: ierc20BurnableAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20BurnableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeIerc20BurnableTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: ierc20BurnableAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20BurnableAbi}__
 */
export const simulateIerc20Burnable = /*#__PURE__*/ createSimulateContract({
  abi: ierc20BurnableAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20BurnableAbi}__ and `functionName` set to `"approve"`
 */
export const simulateIerc20BurnableApprove =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc20BurnableAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20BurnableAbi}__ and `functionName` set to `"burnFrom"`
 */
export const simulateIerc20BurnableBurnFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc20BurnableAbi,
    functionName: 'burnFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20BurnableAbi}__ and `functionName` set to `"transfer"`
 */
export const simulateIerc20BurnableTransfer =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc20BurnableAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20BurnableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateIerc20BurnableTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc20BurnableAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc20BurnableAbi}__
 */
export const watchIerc20BurnableEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc20BurnableAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc20BurnableAbi}__ and `eventName` set to `"Approval"`
 */
export const watchIerc20BurnableApprovalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc20BurnableAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc20BurnableAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchIerc20BurnableTransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc20BurnableAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const readIerc20Metadata = /*#__PURE__*/ createReadContract({
  abi: ierc20MetadataAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"allowance"`
 */
export const readIerc20MetadataAllowance = /*#__PURE__*/ createReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readIerc20MetadataBalanceOf = /*#__PURE__*/ createReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"decimals"`
 */
export const readIerc20MetadataDecimals = /*#__PURE__*/ createReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"name"`
 */
export const readIerc20MetadataName = /*#__PURE__*/ createReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"symbol"`
 */
export const readIerc20MetadataSymbol = /*#__PURE__*/ createReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"totalSupply"`
 */
export const readIerc20MetadataTotalSupply = /*#__PURE__*/ createReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const writeIerc20Metadata = /*#__PURE__*/ createWriteContract({
  abi: ierc20MetadataAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const writeIerc20MetadataApprove = /*#__PURE__*/ createWriteContract({
  abi: ierc20MetadataAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transfer"`
 */
export const writeIerc20MetadataTransfer = /*#__PURE__*/ createWriteContract({
  abi: ierc20MetadataAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeIerc20MetadataTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: ierc20MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const simulateIerc20Metadata = /*#__PURE__*/ createSimulateContract({
  abi: ierc20MetadataAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const simulateIerc20MetadataApprove =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transfer"`
 */
export const simulateIerc20MetadataTransfer =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateIerc20MetadataTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const watchIerc20MetadataEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc20MetadataAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `eventName` set to `"Approval"`
 */
export const watchIerc20MetadataApprovalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc20MetadataAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchIerc20MetadataTransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc20MetadataAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20PermitAbi}__
 */
export const readIerc20Permit = /*#__PURE__*/ createReadContract({
  abi: ierc20PermitAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20PermitAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 */
export const readIerc20PermitDomainSeparator = /*#__PURE__*/ createReadContract(
  { abi: ierc20PermitAbi, functionName: 'DOMAIN_SEPARATOR' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20PermitAbi}__ and `functionName` set to `"nonces"`
 */
export const readIerc20PermitNonces = /*#__PURE__*/ createReadContract({
  abi: ierc20PermitAbi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20PermitAbi}__
 */
export const writeIerc20Permit = /*#__PURE__*/ createWriteContract({
  abi: ierc20PermitAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20PermitAbi}__ and `functionName` set to `"permit"`
 */
export const writeIerc20PermitPermit = /*#__PURE__*/ createWriteContract({
  abi: ierc20PermitAbi,
  functionName: 'permit',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20PermitAbi}__
 */
export const simulateIerc20Permit = /*#__PURE__*/ createSimulateContract({
  abi: ierc20PermitAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20PermitAbi}__ and `functionName` set to `"permit"`
 */
export const simulateIerc20PermitPermit = /*#__PURE__*/ createSimulateContract({
  abi: ierc20PermitAbi,
  functionName: 'permit',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc5267Abi}__
 */
export const readIerc5267 = /*#__PURE__*/ createReadContract({
  abi: ierc5267Abi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc5267Abi}__ and `functionName` set to `"eip712Domain"`
 */
export const readIerc5267Eip712Domain = /*#__PURE__*/ createReadContract({
  abi: ierc5267Abi,
  functionName: 'eip712Domain',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc5267Abi}__
 */
export const watchIerc5267Event = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc5267Abi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc5267Abi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const watchIerc5267Eip712DomainChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc5267Abi,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc5805Abi}__
 */
export const readIerc5805 = /*#__PURE__*/ createReadContract({
  abi: ierc5805Abi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc5805Abi}__ and `functionName` set to `"CLOCK_MODE"`
 */
export const readIerc5805ClockMode = /*#__PURE__*/ createReadContract({
  abi: ierc5805Abi,
  functionName: 'CLOCK_MODE',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc5805Abi}__ and `functionName` set to `"clock"`
 */
export const readIerc5805Clock = /*#__PURE__*/ createReadContract({
  abi: ierc5805Abi,
  functionName: 'clock',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc5805Abi}__ and `functionName` set to `"delegates"`
 */
export const readIerc5805Delegates = /*#__PURE__*/ createReadContract({
  abi: ierc5805Abi,
  functionName: 'delegates',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc5805Abi}__ and `functionName` set to `"getPastTotalSupply"`
 */
export const readIerc5805GetPastTotalSupply = /*#__PURE__*/ createReadContract({
  abi: ierc5805Abi,
  functionName: 'getPastTotalSupply',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc5805Abi}__ and `functionName` set to `"getPastVotes"`
 */
export const readIerc5805GetPastVotes = /*#__PURE__*/ createReadContract({
  abi: ierc5805Abi,
  functionName: 'getPastVotes',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc5805Abi}__ and `functionName` set to `"getVotes"`
 */
export const readIerc5805GetVotes = /*#__PURE__*/ createReadContract({
  abi: ierc5805Abi,
  functionName: 'getVotes',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc5805Abi}__
 */
export const writeIerc5805 = /*#__PURE__*/ createWriteContract({
  abi: ierc5805Abi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc5805Abi}__ and `functionName` set to `"delegate"`
 */
export const writeIerc5805Delegate = /*#__PURE__*/ createWriteContract({
  abi: ierc5805Abi,
  functionName: 'delegate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc5805Abi}__ and `functionName` set to `"delegateBySig"`
 */
export const writeIerc5805DelegateBySig = /*#__PURE__*/ createWriteContract({
  abi: ierc5805Abi,
  functionName: 'delegateBySig',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc5805Abi}__
 */
export const simulateIerc5805 = /*#__PURE__*/ createSimulateContract({
  abi: ierc5805Abi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc5805Abi}__ and `functionName` set to `"delegate"`
 */
export const simulateIerc5805Delegate = /*#__PURE__*/ createSimulateContract({
  abi: ierc5805Abi,
  functionName: 'delegate',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc5805Abi}__ and `functionName` set to `"delegateBySig"`
 */
export const simulateIerc5805DelegateBySig =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc5805Abi,
    functionName: 'delegateBySig',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc5805Abi}__
 */
export const watchIerc5805Event = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc5805Abi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc5805Abi}__ and `eventName` set to `"DelegateChanged"`
 */
export const watchIerc5805DelegateChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc5805Abi,
    eventName: 'DelegateChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc5805Abi}__ and `eventName` set to `"DelegateVotesChanged"`
 */
export const watchIerc5805DelegateVotesChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc5805Abi,
    eventName: 'DelegateVotesChanged',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc6372Abi}__
 */
export const readIerc6372 = /*#__PURE__*/ createReadContract({
  abi: ierc6372Abi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc6372Abi}__ and `functionName` set to `"CLOCK_MODE"`
 */
export const readIerc6372ClockMode = /*#__PURE__*/ createReadContract({
  abi: ierc6372Abi,
  functionName: 'CLOCK_MODE',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc6372Abi}__ and `functionName` set to `"clock"`
 */
export const readIerc6372Clock = /*#__PURE__*/ createReadContract({
  abi: ierc6372Abi,
  functionName: 'clock',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__
 */
export const writeIerc721Receiver = /*#__PURE__*/ createWriteContract({
  abi: ierc721ReceiverAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const writeIerc721ReceiverOnErc721Received =
  /*#__PURE__*/ createWriteContract({
    abi: ierc721ReceiverAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__
 */
export const simulateIerc721Receiver = /*#__PURE__*/ createSimulateContract({
  abi: ierc721ReceiverAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const simulateIerc721ReceiverOnErc721Received =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc721ReceiverAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iGovernorAbi}__
 */
export const readIGovernor = /*#__PURE__*/ createReadContract({
  abi: iGovernorAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"CLOCK_MODE"`
 */
export const readIGovernorClockMode = /*#__PURE__*/ createReadContract({
  abi: iGovernorAbi,
  functionName: 'CLOCK_MODE',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"COUNTING_MODE"`
 */
export const readIGovernorCountingMode = /*#__PURE__*/ createReadContract({
  abi: iGovernorAbi,
  functionName: 'COUNTING_MODE',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"clock"`
 */
export const readIGovernorClock = /*#__PURE__*/ createReadContract({
  abi: iGovernorAbi,
  functionName: 'clock',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"getVotes"`
 */
export const readIGovernorGetVotes = /*#__PURE__*/ createReadContract({
  abi: iGovernorAbi,
  functionName: 'getVotes',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"getVotesWithParams"`
 */
export const readIGovernorGetVotesWithParams = /*#__PURE__*/ createReadContract(
  { abi: iGovernorAbi, functionName: 'getVotesWithParams' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"hasVoted"`
 */
export const readIGovernorHasVoted = /*#__PURE__*/ createReadContract({
  abi: iGovernorAbi,
  functionName: 'hasVoted',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"hashProposal"`
 */
export const readIGovernorHashProposal = /*#__PURE__*/ createReadContract({
  abi: iGovernorAbi,
  functionName: 'hashProposal',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"name"`
 */
export const readIGovernorName = /*#__PURE__*/ createReadContract({
  abi: iGovernorAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"proposalDeadline"`
 */
export const readIGovernorProposalDeadline = /*#__PURE__*/ createReadContract({
  abi: iGovernorAbi,
  functionName: 'proposalDeadline',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"proposalEta"`
 */
export const readIGovernorProposalEta = /*#__PURE__*/ createReadContract({
  abi: iGovernorAbi,
  functionName: 'proposalEta',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"proposalNeedsQueuing"`
 */
export const readIGovernorProposalNeedsQueuing =
  /*#__PURE__*/ createReadContract({
    abi: iGovernorAbi,
    functionName: 'proposalNeedsQueuing',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"proposalProposer"`
 */
export const readIGovernorProposalProposer = /*#__PURE__*/ createReadContract({
  abi: iGovernorAbi,
  functionName: 'proposalProposer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"proposalSnapshot"`
 */
export const readIGovernorProposalSnapshot = /*#__PURE__*/ createReadContract({
  abi: iGovernorAbi,
  functionName: 'proposalSnapshot',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"proposalThreshold"`
 */
export const readIGovernorProposalThreshold = /*#__PURE__*/ createReadContract({
  abi: iGovernorAbi,
  functionName: 'proposalThreshold',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"quorum"`
 */
export const readIGovernorQuorum = /*#__PURE__*/ createReadContract({
  abi: iGovernorAbi,
  functionName: 'quorum',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"state"`
 */
export const readIGovernorState = /*#__PURE__*/ createReadContract({
  abi: iGovernorAbi,
  functionName: 'state',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readIGovernorSupportsInterface = /*#__PURE__*/ createReadContract({
  abi: iGovernorAbi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"version"`
 */
export const readIGovernorVersion = /*#__PURE__*/ createReadContract({
  abi: iGovernorAbi,
  functionName: 'version',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"votingDelay"`
 */
export const readIGovernorVotingDelay = /*#__PURE__*/ createReadContract({
  abi: iGovernorAbi,
  functionName: 'votingDelay',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"votingPeriod"`
 */
export const readIGovernorVotingPeriod = /*#__PURE__*/ createReadContract({
  abi: iGovernorAbi,
  functionName: 'votingPeriod',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iGovernorAbi}__
 */
export const writeIGovernor = /*#__PURE__*/ createWriteContract({
  abi: iGovernorAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"cancel"`
 */
export const writeIGovernorCancel = /*#__PURE__*/ createWriteContract({
  abi: iGovernorAbi,
  functionName: 'cancel',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"castVote"`
 */
export const writeIGovernorCastVote = /*#__PURE__*/ createWriteContract({
  abi: iGovernorAbi,
  functionName: 'castVote',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"castVoteBySig"`
 */
export const writeIGovernorCastVoteBySig = /*#__PURE__*/ createWriteContract({
  abi: iGovernorAbi,
  functionName: 'castVoteBySig',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"castVoteWithReason"`
 */
export const writeIGovernorCastVoteWithReason =
  /*#__PURE__*/ createWriteContract({
    abi: iGovernorAbi,
    functionName: 'castVoteWithReason',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"castVoteWithReasonAndParams"`
 */
export const writeIGovernorCastVoteWithReasonAndParams =
  /*#__PURE__*/ createWriteContract({
    abi: iGovernorAbi,
    functionName: 'castVoteWithReasonAndParams',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"castVoteWithReasonAndParamsBySig"`
 */
export const writeIGovernorCastVoteWithReasonAndParamsBySig =
  /*#__PURE__*/ createWriteContract({
    abi: iGovernorAbi,
    functionName: 'castVoteWithReasonAndParamsBySig',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"execute"`
 */
export const writeIGovernorExecute = /*#__PURE__*/ createWriteContract({
  abi: iGovernorAbi,
  functionName: 'execute',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"propose"`
 */
export const writeIGovernorPropose = /*#__PURE__*/ createWriteContract({
  abi: iGovernorAbi,
  functionName: 'propose',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"queue"`
 */
export const writeIGovernorQueue = /*#__PURE__*/ createWriteContract({
  abi: iGovernorAbi,
  functionName: 'queue',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iGovernorAbi}__
 */
export const simulateIGovernor = /*#__PURE__*/ createSimulateContract({
  abi: iGovernorAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"cancel"`
 */
export const simulateIGovernorCancel = /*#__PURE__*/ createSimulateContract({
  abi: iGovernorAbi,
  functionName: 'cancel',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"castVote"`
 */
export const simulateIGovernorCastVote = /*#__PURE__*/ createSimulateContract({
  abi: iGovernorAbi,
  functionName: 'castVote',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"castVoteBySig"`
 */
export const simulateIGovernorCastVoteBySig =
  /*#__PURE__*/ createSimulateContract({
    abi: iGovernorAbi,
    functionName: 'castVoteBySig',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"castVoteWithReason"`
 */
export const simulateIGovernorCastVoteWithReason =
  /*#__PURE__*/ createSimulateContract({
    abi: iGovernorAbi,
    functionName: 'castVoteWithReason',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"castVoteWithReasonAndParams"`
 */
export const simulateIGovernorCastVoteWithReasonAndParams =
  /*#__PURE__*/ createSimulateContract({
    abi: iGovernorAbi,
    functionName: 'castVoteWithReasonAndParams',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"castVoteWithReasonAndParamsBySig"`
 */
export const simulateIGovernorCastVoteWithReasonAndParamsBySig =
  /*#__PURE__*/ createSimulateContract({
    abi: iGovernorAbi,
    functionName: 'castVoteWithReasonAndParamsBySig',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"execute"`
 */
export const simulateIGovernorExecute = /*#__PURE__*/ createSimulateContract({
  abi: iGovernorAbi,
  functionName: 'execute',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"propose"`
 */
export const simulateIGovernorPropose = /*#__PURE__*/ createSimulateContract({
  abi: iGovernorAbi,
  functionName: 'propose',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iGovernorAbi}__ and `functionName` set to `"queue"`
 */
export const simulateIGovernorQueue = /*#__PURE__*/ createSimulateContract({
  abi: iGovernorAbi,
  functionName: 'queue',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iGovernorAbi}__
 */
export const watchIGovernorEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iGovernorAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iGovernorAbi}__ and `eventName` set to `"ProposalCanceled"`
 */
export const watchIGovernorProposalCanceledEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iGovernorAbi,
    eventName: 'ProposalCanceled',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iGovernorAbi}__ and `eventName` set to `"ProposalCreated"`
 */
export const watchIGovernorProposalCreatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iGovernorAbi,
    eventName: 'ProposalCreated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iGovernorAbi}__ and `eventName` set to `"ProposalExecuted"`
 */
export const watchIGovernorProposalExecutedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iGovernorAbi,
    eventName: 'ProposalExecuted',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iGovernorAbi}__ and `eventName` set to `"ProposalQueued"`
 */
export const watchIGovernorProposalQueuedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iGovernorAbi,
    eventName: 'ProposalQueued',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iGovernorAbi}__ and `eventName` set to `"VoteCast"`
 */
export const watchIGovernorVoteCastEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iGovernorAbi,
    eventName: 'VoteCast',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iGovernorAbi}__ and `eventName` set to `"VoteCastWithParams"`
 */
export const watchIGovernorVoteCastWithParamsEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iGovernorAbi,
    eventName: 'VoteCastWithParams',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iVotesAbi}__
 */
export const readIVotes = /*#__PURE__*/ createReadContract({ abi: iVotesAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iVotesAbi}__ and `functionName` set to `"delegates"`
 */
export const readIVotesDelegates = /*#__PURE__*/ createReadContract({
  abi: iVotesAbi,
  functionName: 'delegates',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iVotesAbi}__ and `functionName` set to `"getPastTotalSupply"`
 */
export const readIVotesGetPastTotalSupply = /*#__PURE__*/ createReadContract({
  abi: iVotesAbi,
  functionName: 'getPastTotalSupply',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iVotesAbi}__ and `functionName` set to `"getPastVotes"`
 */
export const readIVotesGetPastVotes = /*#__PURE__*/ createReadContract({
  abi: iVotesAbi,
  functionName: 'getPastVotes',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iVotesAbi}__ and `functionName` set to `"getVotes"`
 */
export const readIVotesGetVotes = /*#__PURE__*/ createReadContract({
  abi: iVotesAbi,
  functionName: 'getVotes',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iVotesAbi}__
 */
export const writeIVotes = /*#__PURE__*/ createWriteContract({ abi: iVotesAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iVotesAbi}__ and `functionName` set to `"delegate"`
 */
export const writeIVotesDelegate = /*#__PURE__*/ createWriteContract({
  abi: iVotesAbi,
  functionName: 'delegate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iVotesAbi}__ and `functionName` set to `"delegateBySig"`
 */
export const writeIVotesDelegateBySig = /*#__PURE__*/ createWriteContract({
  abi: iVotesAbi,
  functionName: 'delegateBySig',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iVotesAbi}__
 */
export const simulateIVotes = /*#__PURE__*/ createSimulateContract({
  abi: iVotesAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iVotesAbi}__ and `functionName` set to `"delegate"`
 */
export const simulateIVotesDelegate = /*#__PURE__*/ createSimulateContract({
  abi: iVotesAbi,
  functionName: 'delegate',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iVotesAbi}__ and `functionName` set to `"delegateBySig"`
 */
export const simulateIVotesDelegateBySig = /*#__PURE__*/ createSimulateContract(
  { abi: iVotesAbi, functionName: 'delegateBySig' },
)

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iVotesAbi}__
 */
export const watchIVotesEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iVotesAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iVotesAbi}__ and `eventName` set to `"DelegateChanged"`
 */
export const watchIVotesDelegateChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iVotesAbi,
    eventName: 'DelegateChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iVotesAbi}__ and `eventName` set to `"DelegateVotesChanged"`
 */
export const watchIVotesDelegateVotesChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iVotesAbi,
    eventName: 'DelegateVotesChanged',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link loanAbi}__
 */
export const readLoan = /*#__PURE__*/ createReadContract({ abi: loanAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"asset"`
 */
export const readLoanAsset = /*#__PURE__*/ createReadContract({
  abi: loanAbi,
  functionName: 'asset',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"assetDataFeedAddress"`
 */
export const readLoanAssetDataFeedAddress = /*#__PURE__*/ createReadContract({
  abi: loanAbi,
  functionName: 'assetDataFeedAddress',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"assetToUsd"`
 */
export const readLoanAssetToUsd = /*#__PURE__*/ createReadContract({
  abi: loanAbi,
  functionName: 'assetToUsd',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"borrowingRatio"`
 */
export const readLoanBorrowingRatio = /*#__PURE__*/ createReadContract({
  abi: loanAbi,
  functionName: 'borrowingRatio',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"collateralizationRatio"`
 */
export const readLoanCollateralizationRatio = /*#__PURE__*/ createReadContract({
  abi: loanAbi,
  functionName: 'collateralizationRatio',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"dataFeedPrice"`
 */
export const readLoanDataFeedPrice = /*#__PURE__*/ createReadContract({
  abi: loanAbi,
  functionName: 'dataFeedPrice',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"etherDataFeedAddress"`
 */
export const readLoanEtherDataFeedAddress = /*#__PURE__*/ createReadContract({
  abi: loanAbi,
  functionName: 'etherDataFeedAddress',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"interestRate"`
 */
export const readLoanInterestRate = /*#__PURE__*/ createReadContract({
  abi: loanAbi,
  functionName: 'interestRate',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"lastCollection"`
 */
export const readLoanLastCollection = /*#__PURE__*/ createReadContract({
  abi: loanAbi,
  functionName: 'lastCollection',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"liabilityAmount"`
 */
export const readLoanLiabilityAmount = /*#__PURE__*/ createReadContract({
  abi: loanAbi,
  functionName: 'liabilityAmount',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"liquidationRatio"`
 */
export const readLoanLiquidationRatio = /*#__PURE__*/ createReadContract({
  abi: loanAbi,
  functionName: 'liquidationRatio',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"owner"`
 */
export const readLoanOwner = /*#__PURE__*/ createReadContract({
  abi: loanAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"usdToAsset"`
 */
export const readLoanUsdToAsset = /*#__PURE__*/ createReadContract({
  abi: loanAbi,
  functionName: 'usdToAsset',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"withdrawalAmount"`
 */
export const readLoanWithdrawalAmount = /*#__PURE__*/ createReadContract({
  abi: loanAbi,
  functionName: 'withdrawalAmount',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link loanAbi}__
 */
export const writeLoan = /*#__PURE__*/ createWriteContract({ abi: loanAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"collect"`
 */
export const writeLoanCollect = /*#__PURE__*/ createWriteContract({
  abi: loanAbi,
  functionName: 'collect',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"liquidate"`
 */
export const writeLoanLiquidate = /*#__PURE__*/ createWriteContract({
  abi: loanAbi,
  functionName: 'liquidate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"payback"`
 */
export const writeLoanPayback = /*#__PURE__*/ createWriteContract({
  abi: loanAbi,
  functionName: 'payback',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeLoanRenounceOwnership = /*#__PURE__*/ createWriteContract({
  abi: loanAbi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeLoanTransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: loanAbi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link loanAbi}__
 */
export const simulateLoan = /*#__PURE__*/ createSimulateContract({
  abi: loanAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"collect"`
 */
export const simulateLoanCollect = /*#__PURE__*/ createSimulateContract({
  abi: loanAbi,
  functionName: 'collect',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"liquidate"`
 */
export const simulateLoanLiquidate = /*#__PURE__*/ createSimulateContract({
  abi: loanAbi,
  functionName: 'liquidate',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"payback"`
 */
export const simulateLoanPayback = /*#__PURE__*/ createSimulateContract({
  abi: loanAbi,
  functionName: 'payback',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateLoanRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: loanAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link loanAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateLoanTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: loanAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link loanAbi}__
 */
export const watchLoanEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: loanAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link loanAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchLoanOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: loanAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link loanAbi}__ and `eventName` set to `"Received"`
 */
export const watchLoanReceivedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: loanAbi,
  eventName: 'Received',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link mockAggregatorV3InterfaceAbi}__
 */
export const readMockAggregatorV3Interface = /*#__PURE__*/ createReadContract({
  abi: mockAggregatorV3InterfaceAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link mockAggregatorV3InterfaceAbi}__ and `functionName` set to `"decimals"`
 */
export const readMockAggregatorV3InterfaceDecimals =
  /*#__PURE__*/ createReadContract({
    abi: mockAggregatorV3InterfaceAbi,
    functionName: 'decimals',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link mockAggregatorV3InterfaceAbi}__ and `functionName` set to `"description"`
 */
export const readMockAggregatorV3InterfaceDescription =
  /*#__PURE__*/ createReadContract({
    abi: mockAggregatorV3InterfaceAbi,
    functionName: 'description',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link mockAggregatorV3InterfaceAbi}__ and `functionName` set to `"getAnswer"`
 */
export const readMockAggregatorV3InterfaceGetAnswer =
  /*#__PURE__*/ createReadContract({
    abi: mockAggregatorV3InterfaceAbi,
    functionName: 'getAnswer',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link mockAggregatorV3InterfaceAbi}__ and `functionName` set to `"getRoundData"`
 */
export const readMockAggregatorV3InterfaceGetRoundData =
  /*#__PURE__*/ createReadContract({
    abi: mockAggregatorV3InterfaceAbi,
    functionName: 'getRoundData',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link mockAggregatorV3InterfaceAbi}__ and `functionName` set to `"getTimestamp"`
 */
export const readMockAggregatorV3InterfaceGetTimestamp =
  /*#__PURE__*/ createReadContract({
    abi: mockAggregatorV3InterfaceAbi,
    functionName: 'getTimestamp',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link mockAggregatorV3InterfaceAbi}__ and `functionName` set to `"latestAnswer"`
 */
export const readMockAggregatorV3InterfaceLatestAnswer =
  /*#__PURE__*/ createReadContract({
    abi: mockAggregatorV3InterfaceAbi,
    functionName: 'latestAnswer',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link mockAggregatorV3InterfaceAbi}__ and `functionName` set to `"latestRound"`
 */
export const readMockAggregatorV3InterfaceLatestRound =
  /*#__PURE__*/ createReadContract({
    abi: mockAggregatorV3InterfaceAbi,
    functionName: 'latestRound',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link mockAggregatorV3InterfaceAbi}__ and `functionName` set to `"latestRoundData"`
 */
export const readMockAggregatorV3InterfaceLatestRoundData =
  /*#__PURE__*/ createReadContract({
    abi: mockAggregatorV3InterfaceAbi,
    functionName: 'latestRoundData',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link mockAggregatorV3InterfaceAbi}__ and `functionName` set to `"latestTimestamp"`
 */
export const readMockAggregatorV3InterfaceLatestTimestamp =
  /*#__PURE__*/ createReadContract({
    abi: mockAggregatorV3InterfaceAbi,
    functionName: 'latestTimestamp',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link mockAggregatorV3InterfaceAbi}__ and `functionName` set to `"version"`
 */
export const readMockAggregatorV3InterfaceVersion =
  /*#__PURE__*/ createReadContract({
    abi: mockAggregatorV3InterfaceAbi,
    functionName: 'version',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link mockAggregatorV3InterfaceAbi}__
 */
export const writeMockAggregatorV3Interface = /*#__PURE__*/ createWriteContract(
  { abi: mockAggregatorV3InterfaceAbi },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link mockAggregatorV3InterfaceAbi}__ and `functionName` set to `"updateAnswer"`
 */
export const writeMockAggregatorV3InterfaceUpdateAnswer =
  /*#__PURE__*/ createWriteContract({
    abi: mockAggregatorV3InterfaceAbi,
    functionName: 'updateAnswer',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link mockAggregatorV3InterfaceAbi}__ and `functionName` set to `"updateRoundData"`
 */
export const writeMockAggregatorV3InterfaceUpdateRoundData =
  /*#__PURE__*/ createWriteContract({
    abi: mockAggregatorV3InterfaceAbi,
    functionName: 'updateRoundData',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link mockAggregatorV3InterfaceAbi}__
 */
export const simulateMockAggregatorV3Interface =
  /*#__PURE__*/ createSimulateContract({ abi: mockAggregatorV3InterfaceAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link mockAggregatorV3InterfaceAbi}__ and `functionName` set to `"updateAnswer"`
 */
export const simulateMockAggregatorV3InterfaceUpdateAnswer =
  /*#__PURE__*/ createSimulateContract({
    abi: mockAggregatorV3InterfaceAbi,
    functionName: 'updateAnswer',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link mockAggregatorV3InterfaceAbi}__ and `functionName` set to `"updateRoundData"`
 */
export const simulateMockAggregatorV3InterfaceUpdateRoundData =
  /*#__PURE__*/ createSimulateContract({
    abi: mockAggregatorV3InterfaceAbi,
    functionName: 'updateRoundData',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link noncesAbi}__
 */
export const readNonces = /*#__PURE__*/ createReadContract({ abi: noncesAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link noncesAbi}__ and `functionName` set to `"nonces"`
 */
export const readNoncesNonces = /*#__PURE__*/ createReadContract({
  abi: noncesAbi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const readOwnable = /*#__PURE__*/ createReadContract({ abi: ownableAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"owner"`
 */
export const readOwnableOwner = /*#__PURE__*/ createReadContract({
  abi: ownableAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const writeOwnable = /*#__PURE__*/ createWriteContract({
  abi: ownableAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeOwnableRenounceOwnership = /*#__PURE__*/ createWriteContract({
  abi: ownableAbi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeOwnableTransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: ownableAbi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const simulateOwnable = /*#__PURE__*/ createSimulateContract({
  abi: ownableAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateOwnableRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: ownableAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateOwnableTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: ownableAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ownableAbi}__
 */
export const watchOwnableEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ownableAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ownableAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchOwnableOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ownableAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link timelockControllerAbi}__
 */
export const readTimelockController = /*#__PURE__*/ createReadContract({
  abi: timelockControllerAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"CANCELLER_ROLE"`
 */
export const readTimelockControllerCancellerRole =
  /*#__PURE__*/ createReadContract({
    abi: timelockControllerAbi,
    functionName: 'CANCELLER_ROLE',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const readTimelockControllerDefaultAdminRole =
  /*#__PURE__*/ createReadContract({
    abi: timelockControllerAbi,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"EXECUTOR_ROLE"`
 */
export const readTimelockControllerExecutorRole =
  /*#__PURE__*/ createReadContract({
    abi: timelockControllerAbi,
    functionName: 'EXECUTOR_ROLE',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"PROPOSER_ROLE"`
 */
export const readTimelockControllerProposerRole =
  /*#__PURE__*/ createReadContract({
    abi: timelockControllerAbi,
    functionName: 'PROPOSER_ROLE',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"getMinDelay"`
 */
export const readTimelockControllerGetMinDelay =
  /*#__PURE__*/ createReadContract({
    abi: timelockControllerAbi,
    functionName: 'getMinDelay',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"getOperationState"`
 */
export const readTimelockControllerGetOperationState =
  /*#__PURE__*/ createReadContract({
    abi: timelockControllerAbi,
    functionName: 'getOperationState',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const readTimelockControllerGetRoleAdmin =
  /*#__PURE__*/ createReadContract({
    abi: timelockControllerAbi,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"getTimestamp"`
 */
export const readTimelockControllerGetTimestamp =
  /*#__PURE__*/ createReadContract({
    abi: timelockControllerAbi,
    functionName: 'getTimestamp',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"hasRole"`
 */
export const readTimelockControllerHasRole = /*#__PURE__*/ createReadContract({
  abi: timelockControllerAbi,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"hashOperation"`
 */
export const readTimelockControllerHashOperation =
  /*#__PURE__*/ createReadContract({
    abi: timelockControllerAbi,
    functionName: 'hashOperation',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"hashOperationBatch"`
 */
export const readTimelockControllerHashOperationBatch =
  /*#__PURE__*/ createReadContract({
    abi: timelockControllerAbi,
    functionName: 'hashOperationBatch',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"isOperation"`
 */
export const readTimelockControllerIsOperation =
  /*#__PURE__*/ createReadContract({
    abi: timelockControllerAbi,
    functionName: 'isOperation',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"isOperationDone"`
 */
export const readTimelockControllerIsOperationDone =
  /*#__PURE__*/ createReadContract({
    abi: timelockControllerAbi,
    functionName: 'isOperationDone',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"isOperationPending"`
 */
export const readTimelockControllerIsOperationPending =
  /*#__PURE__*/ createReadContract({
    abi: timelockControllerAbi,
    functionName: 'isOperationPending',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"isOperationReady"`
 */
export const readTimelockControllerIsOperationReady =
  /*#__PURE__*/ createReadContract({
    abi: timelockControllerAbi,
    functionName: 'isOperationReady',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readTimelockControllerSupportsInterface =
  /*#__PURE__*/ createReadContract({
    abi: timelockControllerAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link timelockControllerAbi}__
 */
export const writeTimelockController = /*#__PURE__*/ createWriteContract({
  abi: timelockControllerAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"cancel"`
 */
export const writeTimelockControllerCancel = /*#__PURE__*/ createWriteContract({
  abi: timelockControllerAbi,
  functionName: 'cancel',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"execute"`
 */
export const writeTimelockControllerExecute = /*#__PURE__*/ createWriteContract(
  { abi: timelockControllerAbi, functionName: 'execute' },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"executeBatch"`
 */
export const writeTimelockControllerExecuteBatch =
  /*#__PURE__*/ createWriteContract({
    abi: timelockControllerAbi,
    functionName: 'executeBatch',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"grantRole"`
 */
export const writeTimelockControllerGrantRole =
  /*#__PURE__*/ createWriteContract({
    abi: timelockControllerAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const writeTimelockControllerOnErc1155BatchReceived =
  /*#__PURE__*/ createWriteContract({
    abi: timelockControllerAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const writeTimelockControllerOnErc1155Received =
  /*#__PURE__*/ createWriteContract({
    abi: timelockControllerAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const writeTimelockControllerOnErc721Received =
  /*#__PURE__*/ createWriteContract({
    abi: timelockControllerAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"renounceRole"`
 */
export const writeTimelockControllerRenounceRole =
  /*#__PURE__*/ createWriteContract({
    abi: timelockControllerAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"revokeRole"`
 */
export const writeTimelockControllerRevokeRole =
  /*#__PURE__*/ createWriteContract({
    abi: timelockControllerAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"schedule"`
 */
export const writeTimelockControllerSchedule =
  /*#__PURE__*/ createWriteContract({
    abi: timelockControllerAbi,
    functionName: 'schedule',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"scheduleBatch"`
 */
export const writeTimelockControllerScheduleBatch =
  /*#__PURE__*/ createWriteContract({
    abi: timelockControllerAbi,
    functionName: 'scheduleBatch',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"updateDelay"`
 */
export const writeTimelockControllerUpdateDelay =
  /*#__PURE__*/ createWriteContract({
    abi: timelockControllerAbi,
    functionName: 'updateDelay',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link timelockControllerAbi}__
 */
export const simulateTimelockController = /*#__PURE__*/ createSimulateContract({
  abi: timelockControllerAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"cancel"`
 */
export const simulateTimelockControllerCancel =
  /*#__PURE__*/ createSimulateContract({
    abi: timelockControllerAbi,
    functionName: 'cancel',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"execute"`
 */
export const simulateTimelockControllerExecute =
  /*#__PURE__*/ createSimulateContract({
    abi: timelockControllerAbi,
    functionName: 'execute',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"executeBatch"`
 */
export const simulateTimelockControllerExecuteBatch =
  /*#__PURE__*/ createSimulateContract({
    abi: timelockControllerAbi,
    functionName: 'executeBatch',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"grantRole"`
 */
export const simulateTimelockControllerGrantRole =
  /*#__PURE__*/ createSimulateContract({
    abi: timelockControllerAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const simulateTimelockControllerOnErc1155BatchReceived =
  /*#__PURE__*/ createSimulateContract({
    abi: timelockControllerAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const simulateTimelockControllerOnErc1155Received =
  /*#__PURE__*/ createSimulateContract({
    abi: timelockControllerAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const simulateTimelockControllerOnErc721Received =
  /*#__PURE__*/ createSimulateContract({
    abi: timelockControllerAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"renounceRole"`
 */
export const simulateTimelockControllerRenounceRole =
  /*#__PURE__*/ createSimulateContract({
    abi: timelockControllerAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"revokeRole"`
 */
export const simulateTimelockControllerRevokeRole =
  /*#__PURE__*/ createSimulateContract({
    abi: timelockControllerAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"schedule"`
 */
export const simulateTimelockControllerSchedule =
  /*#__PURE__*/ createSimulateContract({
    abi: timelockControllerAbi,
    functionName: 'schedule',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"scheduleBatch"`
 */
export const simulateTimelockControllerScheduleBatch =
  /*#__PURE__*/ createSimulateContract({
    abi: timelockControllerAbi,
    functionName: 'scheduleBatch',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link timelockControllerAbi}__ and `functionName` set to `"updateDelay"`
 */
export const simulateTimelockControllerUpdateDelay =
  /*#__PURE__*/ createSimulateContract({
    abi: timelockControllerAbi,
    functionName: 'updateDelay',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link timelockControllerAbi}__
 */
export const watchTimelockControllerEvent =
  /*#__PURE__*/ createWatchContractEvent({ abi: timelockControllerAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link timelockControllerAbi}__ and `eventName` set to `"CallExecuted"`
 */
export const watchTimelockControllerCallExecutedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: timelockControllerAbi,
    eventName: 'CallExecuted',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link timelockControllerAbi}__ and `eventName` set to `"CallSalt"`
 */
export const watchTimelockControllerCallSaltEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: timelockControllerAbi,
    eventName: 'CallSalt',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link timelockControllerAbi}__ and `eventName` set to `"CallScheduled"`
 */
export const watchTimelockControllerCallScheduledEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: timelockControllerAbi,
    eventName: 'CallScheduled',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link timelockControllerAbi}__ and `eventName` set to `"Cancelled"`
 */
export const watchTimelockControllerCancelledEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: timelockControllerAbi,
    eventName: 'Cancelled',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link timelockControllerAbi}__ and `eventName` set to `"MinDelayChange"`
 */
export const watchTimelockControllerMinDelayChangeEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: timelockControllerAbi,
    eventName: 'MinDelayChange',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link timelockControllerAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const watchTimelockControllerRoleAdminChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: timelockControllerAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link timelockControllerAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const watchTimelockControllerRoleGrantedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: timelockControllerAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link timelockControllerAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const watchTimelockControllerRoleRevokedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: timelockControllerAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link votesAbi}__
 */
export const readVotes = /*#__PURE__*/ createReadContract({ abi: votesAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"CLOCK_MODE"`
 */
export const readVotesClockMode = /*#__PURE__*/ createReadContract({
  abi: votesAbi,
  functionName: 'CLOCK_MODE',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"clock"`
 */
export const readVotesClock = /*#__PURE__*/ createReadContract({
  abi: votesAbi,
  functionName: 'clock',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"delegates"`
 */
export const readVotesDelegates = /*#__PURE__*/ createReadContract({
  abi: votesAbi,
  functionName: 'delegates',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"eip712Domain"`
 */
export const readVotesEip712Domain = /*#__PURE__*/ createReadContract({
  abi: votesAbi,
  functionName: 'eip712Domain',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"getPastTotalSupply"`
 */
export const readVotesGetPastTotalSupply = /*#__PURE__*/ createReadContract({
  abi: votesAbi,
  functionName: 'getPastTotalSupply',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"getPastVotes"`
 */
export const readVotesGetPastVotes = /*#__PURE__*/ createReadContract({
  abi: votesAbi,
  functionName: 'getPastVotes',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"getVotes"`
 */
export const readVotesGetVotes = /*#__PURE__*/ createReadContract({
  abi: votesAbi,
  functionName: 'getVotes',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"nonces"`
 */
export const readVotesNonces = /*#__PURE__*/ createReadContract({
  abi: votesAbi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link votesAbi}__
 */
export const writeVotes = /*#__PURE__*/ createWriteContract({ abi: votesAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"delegate"`
 */
export const writeVotesDelegate = /*#__PURE__*/ createWriteContract({
  abi: votesAbi,
  functionName: 'delegate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"delegateBySig"`
 */
export const writeVotesDelegateBySig = /*#__PURE__*/ createWriteContract({
  abi: votesAbi,
  functionName: 'delegateBySig',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link votesAbi}__
 */
export const simulateVotes = /*#__PURE__*/ createSimulateContract({
  abi: votesAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"delegate"`
 */
export const simulateVotesDelegate = /*#__PURE__*/ createSimulateContract({
  abi: votesAbi,
  functionName: 'delegate',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link votesAbi}__ and `functionName` set to `"delegateBySig"`
 */
export const simulateVotesDelegateBySig = /*#__PURE__*/ createSimulateContract({
  abi: votesAbi,
  functionName: 'delegateBySig',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link votesAbi}__
 */
export const watchVotesEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: votesAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link votesAbi}__ and `eventName` set to `"DelegateChanged"`
 */
export const watchVotesDelegateChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: votesAbi,
    eventName: 'DelegateChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link votesAbi}__ and `eventName` set to `"DelegateVotesChanged"`
 */
export const watchVotesDelegateVotesChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: votesAbi,
    eventName: 'DelegateVotesChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link votesAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const watchVotesEip712DomainChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: votesAbi,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link windowAbi}__
 */
export const readWindow = /*#__PURE__*/ createReadContract({ abi: windowAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"assetToUsd"`
 */
export const readWindowAssetToUsd = /*#__PURE__*/ createReadContract({
  abi: windowAbi,
  functionName: 'assetToUsd',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"assets"`
 */
export const readWindowAssets = /*#__PURE__*/ createReadContract({
  abi: windowAbi,
  functionName: 'assets',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"dataFeedPrice"`
 */
export const readWindowDataFeedPrice = /*#__PURE__*/ createReadContract({
  abi: windowAbi,
  functionName: 'dataFeedPrice',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"etherDataFeedAddress"`
 */
export const readWindowEtherDataFeedAddress = /*#__PURE__*/ createReadContract({
  abi: windowAbi,
  functionName: 'etherDataFeedAddress',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"getChainlinkDataFeedLatestAnswer"`
 */
export const readWindowGetChainlinkDataFeedLatestAnswer =
  /*#__PURE__*/ createReadContract({
    abi: windowAbi,
    functionName: 'getChainlinkDataFeedLatestAnswer',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"getParam"`
 */
export const readWindowGetParam = /*#__PURE__*/ createReadContract({
  abi: windowAbi,
  functionName: 'getParam',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"loans"`
 */
export const readWindowLoans = /*#__PURE__*/ createReadContract({
  abi: windowAbi,
  functionName: 'loans',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"owner"`
 */
export const readWindowOwner = /*#__PURE__*/ createReadContract({
  abi: windowAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"params"`
 */
export const readWindowParams = /*#__PURE__*/ createReadContract({
  abi: windowAbi,
  functionName: 'params',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"usdToAsset"`
 */
export const readWindowUsdToAsset = /*#__PURE__*/ createReadContract({
  abi: windowAbi,
  functionName: 'usdToAsset',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link windowAbi}__
 */
export const writeWindow = /*#__PURE__*/ createWriteContract({ abi: windowAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"approveAsset"`
 */
export const writeWindowApproveAsset = /*#__PURE__*/ createWriteContract({
  abi: windowAbi,
  functionName: 'approveAsset',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"issue"`
 */
export const writeWindowIssue = /*#__PURE__*/ createWriteContract({
  abi: windowAbi,
  functionName: 'issue',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"loanEntityEvent"`
 */
export const writeWindowLoanEntityEvent = /*#__PURE__*/ createWriteContract({
  abi: windowAbi,
  functionName: 'loanEntityEvent',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeWindowRenounceOwnership = /*#__PURE__*/ createWriteContract({
  abi: windowAbi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"setEtherDataFeed"`
 */
export const writeWindowSetEtherDataFeed = /*#__PURE__*/ createWriteContract({
  abi: windowAbi,
  functionName: 'setEtherDataFeed',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"setParam"`
 */
export const writeWindowSetParam = /*#__PURE__*/ createWriteContract({
  abi: windowAbi,
  functionName: 'setParam',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeWindowTransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: windowAbi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link windowAbi}__
 */
export const simulateWindow = /*#__PURE__*/ createSimulateContract({
  abi: windowAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"approveAsset"`
 */
export const simulateWindowApproveAsset = /*#__PURE__*/ createSimulateContract({
  abi: windowAbi,
  functionName: 'approveAsset',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"issue"`
 */
export const simulateWindowIssue = /*#__PURE__*/ createSimulateContract({
  abi: windowAbi,
  functionName: 'issue',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"loanEntityEvent"`
 */
export const simulateWindowLoanEntityEvent =
  /*#__PURE__*/ createSimulateContract({
    abi: windowAbi,
    functionName: 'loanEntityEvent',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateWindowRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: windowAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"setEtherDataFeed"`
 */
export const simulateWindowSetEtherDataFeed =
  /*#__PURE__*/ createSimulateContract({
    abi: windowAbi,
    functionName: 'setEtherDataFeed',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"setParam"`
 */
export const simulateWindowSetParam = /*#__PURE__*/ createSimulateContract({
  abi: windowAbi,
  functionName: 'setParam',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link windowAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateWindowTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: windowAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link windowAbi}__
 */
export const watchWindowEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: windowAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link windowAbi}__ and `eventName` set to `"AssetEntity"`
 */
export const watchWindowAssetEntityEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: windowAbi,
    eventName: 'AssetEntity',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link windowAbi}__ and `eventName` set to `"LoanEntity"`
 */
export const watchWindowLoanEntityEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: windowAbi,
    eventName: 'LoanEntity',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link windowAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchWindowOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: windowAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link windowInterfaceAbi}__
 */
export const writeWindowInterface = /*#__PURE__*/ createWriteContract({
  abi: windowInterfaceAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link windowInterfaceAbi}__ and `functionName` set to `"getParam"`
 */
export const writeWindowInterfaceGetParam = /*#__PURE__*/ createWriteContract({
  abi: windowInterfaceAbi,
  functionName: 'getParam',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link windowInterfaceAbi}__ and `functionName` set to `"loanEntityEvent"`
 */
export const writeWindowInterfaceLoanEntityEvent =
  /*#__PURE__*/ createWriteContract({
    abi: windowInterfaceAbi,
    functionName: 'loanEntityEvent',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link windowInterfaceAbi}__
 */
export const simulateWindowInterface = /*#__PURE__*/ createSimulateContract({
  abi: windowInterfaceAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link windowInterfaceAbi}__ and `functionName` set to `"getParam"`
 */
export const simulateWindowInterfaceGetParam =
  /*#__PURE__*/ createSimulateContract({
    abi: windowInterfaceAbi,
    functionName: 'getParam',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link windowInterfaceAbi}__ and `functionName` set to `"loanEntityEvent"`
 */
export const simulateWindowInterfaceLoanEntityEvent =
  /*#__PURE__*/ createSimulateContract({
    abi: windowInterfaceAbi,
    functionName: 'loanEntityEvent',
  })
