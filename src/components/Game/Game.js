import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../../components/GuessInput/";
import GuessesList from "../../components/GuessesList/";
import Banner from "../../components/Banner/";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("");

  return (
    <>
      <GuessesList guesses={guesses} answer={answer} />
      <GuessInput
        guesses={guesses}
        setGuesses={setGuesses}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        answer={answer}
      />
      {gameStatus && <Banner gameStatus={gameStatus} guesses={guesses} />}
    </>
  );
}

export default Game;
