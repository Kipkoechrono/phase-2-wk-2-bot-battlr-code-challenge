import React from 'react';

// This is a BotCard component
function BotCard({ bot, onEnlist, isInArmy, onRelease, onDischarge }) {
  return (
    <div className="bot-card">
      <h3>{bot.name}</h3>
      <p>{bot.model}</p>
      {isInArmy ? (
        <>
          <button onClick={() => onRelease(bot.id)}>Release</button>
          <button
            className="discharge-button"
            onClick={() => onDischarge(bot.id)}
          >
            Discharge (x)
          </button>
        </>
      ) : (
        <button onClick={() => onEnlist(bot.id)}>Enlist</button>
      )}
    </div>
  );
}

export default BotCard;