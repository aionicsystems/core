import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Web3ModalProvider } from "./hooks/Web3ModalProvider.tsx";
import { GlobalStateProvider } from "./hooks/GlobalStateProvider.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Web3ModalProvider>
      <GlobalStateProvider>
        <App />
      </GlobalStateProvider>
    </Web3ModalProvider>
  </React.StrictMode>,
);
