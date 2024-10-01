import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from './config'
import { RainbowKitProvider, darkTheme, Theme } from '@rainbow-me/rainbowkit';
import merge from 'lodash.merge';

const myTheme = merge(darkTheme(), {
  colors: {
    accentColor: '#36C5FB',
    accentColorForeground: 'white',
    modalBackground: '#092234',
    modalText: '#ffffff',
  },
} as Theme);

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider 
            modalSize="compact"
            theme={myTheme}
          >
            <App />
          </RainbowKitProvider>
        </QueryClientProvider> 
      </WagmiProvider>
  </React.StrictMode>,
);
