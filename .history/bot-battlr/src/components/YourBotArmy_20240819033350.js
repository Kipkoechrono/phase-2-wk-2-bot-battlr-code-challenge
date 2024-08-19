import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ bots, onReleaseBot, onDischargeBot }) {
  return (
    <div>
      <h1>Your Bot Army</h1>
      {bots.map((bot) => (
        <BotCard 
          key={bot.id} 
          bot={bot} 
          onRelease={() => onReleaseBot(bot)}
          onDischarge={() => onDischargeBot(bot)}
        />
      ))}
    </div>
  );
}

export default YourBotArmy;