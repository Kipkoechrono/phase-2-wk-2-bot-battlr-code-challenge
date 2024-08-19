import React, { useState } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './BotArmy';

function App() {
  const [army, setArmy] = useState([]);

  const handleAddBot = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const handleReleaseBot = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  const handleDischargeBot = (bot) => {
    fetch(`http://localhost:3001/bots/${bot.id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setArmy(army.filter((b) => b.id !== bot.id));
      });
  };

  return (
    <div className="app">
      <BotCollection onAddBot={handleAddBot} />
      <YourBotArmy 
        bots={army} 
        onReleaseBot={handleReleaseBot} 
        onDischargeBot={handleDischargeBot} 
      />
    </div>
  );
}

export default App;