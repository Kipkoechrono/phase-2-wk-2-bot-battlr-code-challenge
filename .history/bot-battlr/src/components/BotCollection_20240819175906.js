import React from 'react';


function BotCollection({ bots, onEnlist }) {
  return (
    <div className="bot-collection">
      {bots.map(bot => (
        <div key={bot.id} className="bot-card">
          <h2>{bot.name}</h2>
          {/* Render the image */}
          <img src={bot.image} alt={bot.name} style={{ width: '150px', height: '150px' }} />
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <button onClick={() => onEnlist(bot.id)}>Enlist Bot</button>
        </div>
      ))}
    </div>
  );
}

export default BotCollection;
