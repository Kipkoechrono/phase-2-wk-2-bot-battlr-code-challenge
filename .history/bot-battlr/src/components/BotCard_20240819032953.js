import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));
function BotCard({ bot, onAdd, onRelease, onDischarge }) {
  return (
    <div className="bot-card">
      <img src={bot.image} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Health: {bot.health}</p>
      <p>Attack: {bot.attack}</p>
      <p>Defense: {bot.defense}</p>
      {onAdd && <button onClick={onAdd}>Add to Army</button>}
      {onRelease && <button onClick={onRelease}>Release from Army</button>}
      {onDischarge && <button onClick={onDischarge} style={{ color: 'red' }}>x</button>}
    </div>
  );
}

export default BotCard;
