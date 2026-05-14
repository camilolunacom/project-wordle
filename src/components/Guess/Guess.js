import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  const guess = value ? checkGuess(value, answer) : false;

  return (
    <p className="guess">
      {range(0, 5).map((num) => {
        let classes = "cell";
        let letter = "";

        if (guess) {
          classes += ` ${guess[num].status}`;
          letter = guess[num].letter;
        }

        return (
          <span className={classes} key={num}>
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
