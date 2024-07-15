// @ts-nocheck

import blumLogo from "./assets/Blum.png";
import telegramLogo from "./assets/telegram.png";
import twitterLogo from "./assets/twitter.png";
import discordLogo from "./assets/discord.png";
import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useTonWallet } from "@tonconnect/ui-react";

function App() {
  const wallet = useTonWallet();

  return (
    <>
      <div>
        <div className="socials-container">
          <a href="http://t.me/blumcrypto" target="_blank">
            <img
              src={telegramLogo}
              className="logo-social"
              alt="Telegram logo"
            />
          </a>
          <a href="http://x.com/Blumcrypto" target="_blank">
            <img src={twitterLogo} className="logo-social" alt="Twitter logo" />
          </a>
          <a href="https://discord.gg/blumcrypto" target="_blank">
            <img src={discordLogo} className="logo-social" alt="Discord logo" />
          </a>
        </div>
        <a href="https://react.dev" target="_blank">
          <img src={blumLogo} className="logo" alt="React logo" />
        </a>
      </div>
      <h1>GET FREE BLUM TOKENS</h1>
      {wallet ? (
        <div>
          <span>Connected wallet: {wallet.name}</span>
          <span>Device: {wallet.device.appName}</span>
        </div>
      ) : (
        <TonConnectButton />
      )}
    </>
  );
}

export default App;
