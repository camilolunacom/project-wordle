import React from "react";

import Guess from "../../components/Guess/";

import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessesList({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(0,NUM_OF_GUESSES_ALLOWED).map(num => (
        <Guess value={guesses[num]} key={num} answer={answer} />
      ))}
    </div>
  );
}

export default GuessesList;
