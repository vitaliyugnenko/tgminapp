import { useState } from "react";
import blumLogo from "./assets/Blum.png";
import telegramLogo from "./assets/telegram.png";
import twitterLogo from "./assets/twitter.png";
import discordLogo from "./assets/discord.png";
import "./App.css";

import WebApp from "@twa-dev/sdk";

function App() {
  const [count, setCount] = useState(0);

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
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      {/* Here we add our button with alert callback */}
      <div className="card">
        <button
          onClick={() =>
            WebApp.showAlert(`Hello World! Current count is ${count}`)
          }
        >
          Show Alert
        </button>
      </div>
    </>
  );
}

export default App;
