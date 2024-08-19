import React, { useState, useEffect } from 'react';
import BotCard from './BotCard';

function BotCollection({ onAddBot }) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  return (
    <div>
      <h1>Bot Collection</h1>
      {bots.map((bot) => (
        <BotCard 
          key={bot.id} 
          bot={bot} 
          onAdd={() => onAddBot(bot)}
        />
      ))}
    </div>
  );
}

export default BotCollection;
