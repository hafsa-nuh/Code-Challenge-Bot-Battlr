import React from "react";
import BotCard from "./BotCard";

function BotCollection({ collection, removeCollection , addList }) {
  
  return (
    <div className="ui four column grid">
      <div className="row">
        {collection.map((bot) => (
          <BotCard 
            key={bot.id} 
            bot={bot}
            removeCollection={removeCollection}
            addList={addList}
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;