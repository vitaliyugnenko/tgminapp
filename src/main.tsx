import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import WebApp from "@twa-dev/sdk";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

const manifestUrl = "";

WebApp.ready();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <TonConnectUIProvider manifestUrl={}>
    <App />
  </TonConnectUIProvider>
);
