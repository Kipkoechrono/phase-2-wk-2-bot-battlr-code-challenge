
import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import './index.css'; // Import your updated CSS

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/bots')
      .then(response => response.json())
      .then(data => setBots(data));
  }, []);

  const handleEnlist = (botId) => {
    fetch(`http://localhost:3001/bots/${botId}`)
      .then(response => response.json())
      .then(botToAdd => {
        if (!army.find(bot => bot.id === botId)) {
          setArmy([...army, botToAdd]);
        }
      });
  };

  const handleRelease = (botId) => {
    setArmy(army.filter(bot => bot.id !== botId));
  };

  const handleDischarge = (botId) => {
    fetch(`http://localhost:3001/bots/${botId}`, { method: 'DELETE' })
      .then(response => {
        if (response.ok) {
          setArmy(army.filter(bot => bot.id !== botId));
          setBots(bots.filter(bot => bot.id !== botId));
        }
      });
  };

  return (
    <div className="app">
      <h1>Bot Battlr</h1>
      <YourBotArmy army={army} onRelease={handleRelease} onDischarge={handleDischarge} />
      <BotCollection onEnlist={handleEnlist} />
    </div>
  );
}

export default App;