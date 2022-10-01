import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

const url = "http://localhost:8002/bots";

function BotsPage() {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    fetch(url)
    .then((r) => r.json())
    .then((data) => setCollection(data));
  }, []);

  // a function for adding the collection to the your bot army section
  const addToBotArmySection = (bot) => {
    setCollection(
      collection.map(bots =>
        bots.id === bot.id ? { ...bots, addlist:true } : bots
      )
    );
  };

  // making the onclick button for removing the collection from both your bot army and bot collection
  const removeCollection = (bot) => {
    // fetch(`http://localhost:8002/bots/id`, {
    //   method: "DELETE",
    // });
    setCollection(collection.filter((perBot) => perBot.id !== bot.id));
  };

  return (
    <div>
      <YourBotArmy
        collection={collection}
        setCollection={setCollection}
        removeCollection={removeCollection}
      />
      <BotCollection
        collection={collection}
        setCollection={setCollection}
        removeCollection={removeCollection}
        addList={addToBotArmySection}
      />
    </div>
  );
}

export default BotsPage;
