import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { WagmiProvider } from "wagmi";
import { arbitrum, mainnet, acala, anvil, ancient8, localhost } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
// 0. Setup queryClient
const queryClient = new QueryClient();

// 1. Get projectId from https://cloud.walletconnect.com
const projectId = "287f2bbc9d09a05d96ade9636d01f17c";

// 2. Create wagmiConfig
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};
const chains = [mainnet, arbitrum, anvil, acala, ancient8, localhost] as const;
const config = defaultWagmiConfig({
  projectId,
  chains,
  metadata,
});

createWeb3Modal({
  metadata,
  wagmiConfig: config,
  projectId,
  themeMode: "dark",
  themeVariables: {
    "--w3m-color-mix": "#144e80",
    "--w3m-color-mix-strength": 40,
  },
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

export function Web3ModalProvider({ children }: PropsWithChildren) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
