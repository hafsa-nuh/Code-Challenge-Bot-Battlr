import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ collection, setCollection,  removeCollection}) {

  // adding the list selected
  function addList(bot) {
    setCollection(
      collection.map((bots) =>
        bots.id === bot.id ? { ...bots, addlist: false } : bots
      )
    );
  }

  // filter thro the bots that are selected by the user
  const bots = collection.filter((bot) => bot.addlist);

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {bots.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              removeCollection={removeCollection}
              addList={addList}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
