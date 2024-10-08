import { http, createConfig } from 'wagmi'
import { arbitrum, arbitrumSepolia } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'
import { type Chain } from 'viem'

const projectId = "287f2bbc9d09a05d96ade9636d01f17c";

export const aionTestnet = {
  id: 56700,
  name: 'AionicDAO Testnet',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: { http: ['http://34.72.19.102:8545'] },
  }
} as const satisfies Chain

export const config = createConfig({
  chains: [arbitrum, arbitrumSepolia, aionTestnet],
  connectors: [
    injected(),
    walletConnect({ projectId }),
    metaMask(),
    safe(),
  ],
  transports: {
    [arbitrum.id]: http(),
    [arbitrumSepolia.id]: http(),
    [aionTestnet.id]: http(),
  },
});