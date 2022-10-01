import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

const BotCard = ({ bot, addList, removeCollection }) => {
  return (
    <div className="ui column">
      <div className="ui card" key={bot.id} 
      onClick={() => addList(bot)}>
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={(event) => {
                  //                  / \
                  //   ---------------| |-----------------
                 //    | element1     | |                |
                  //   |   -----------| |-----------     |
                  //   |   |element2  | |          |     |
                  //   |    -------------------------    |
                  //   |        Event BUBBLING           |
                  //    -----------------------------------

                  // the event handler of element2 fires first, the event handler of element1 fires last.
                 // Any event taking place in the W3C event model is first captured until it reaches the target element and then bubbles up again.

                  // Propagation means bubbling up to parent elements or capturing down to child elements.With stopPropagation, only the button's click handler is called while the div's click handler never fires.
                  event.stopPropagation();
                  removeCollection(bot);
                }}
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BotCard;
