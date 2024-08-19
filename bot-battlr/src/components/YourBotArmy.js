import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ army, onRelease, onDischarge }) {
  return (
    <div className="your-bot-army">
      {army.map(bot => (
        <BotCard
          key={bot.id}
          bot={bot}
          isInArmy={true}
          onRelease={onRelease}
          onDischarge={onDischarge}
        />
      ))}
    </div>
  );
}

export default YourBotArmy;