import React from "react";

function GuessInput({
  guesses,
  setGuesses,
  gameStatus,
  setGameStatus,
  answer,
}) {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();

        const nextGuesses = [...guesses, guess];

        console.log({ guess });
        setGuesses(nextGuesses);
        setGuess("");

        if (guess === answer) {
          setGameStatus('won');
          return;
        }

        if (nextGuesses.length > 5) {
          setGameStatus('lost');
        }
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="[A-Z]{5}"
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
        title="5 letters"
        disabled={gameStatus}
        required
      />
    </form>
  );
}

export default GuessInput;
