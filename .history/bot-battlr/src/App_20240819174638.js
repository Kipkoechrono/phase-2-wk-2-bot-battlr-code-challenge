import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import './index.css'; // Import your updated CSS

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/bots')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched bots:', data); // Log to check the data
        setBots(data);
      })
      .catch(error => console.error('Fetch error:', error));
  }, []);
  

  const handleEnlist = (botId) => {
    fetch(`http://localhost:3001/bots/${botId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(botToAdd => {
        if (!army.find(bot => bot.id === botId)) {
          setArmy([...army, botToAdd]);
        }
      })
      .catch(error => console.error('Fetch error:', error));
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
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      })
      .catch(error => console.error('Delete error:', error));
  };

  return (
    <div className="app">
      <h1>Bot Battlr</h1>
      <YourBotArmy army={army} onRelease={handleRelease} onDischarge={handleDischarge} />
      <BotCollection bots={bots} onEnlist={handleEnlist} />
    </div>
  );
}

export default App;
