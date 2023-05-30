import React from "react";
import CardEmoji from "./cardemoji";
import emojipedia from "../emojipedia";

function App() {
  const data = emojipedia.map((emoji) => {
    return (
      <CardEmoji
        key={emoji.key}
        emoji={emoji.emoji}
        name={emoji.name}
        body={emoji.meaning}
      />
    );
  });

  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{data}</dl>
    </div>
  );
}

export default App;
