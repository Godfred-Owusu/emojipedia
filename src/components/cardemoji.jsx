import React from "react";

function CardEmoji(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.body}</dd>
    </div>
  );
}

export default CardEmoji;
