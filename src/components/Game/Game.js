import { useState } from "react";

import GuessResults from "../GuessResults";
import GuessInput from "../GuessInput";
import Keyboard from "../Keyboard";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";
import { randomSelection } from "@/src/utils";
import { WORDS } from "@/src/data";
import { checkGuess } from "@/src/game-helpers";

function Game() {
  const [gameStatus, setGameStatus] = useState("running");
  const [answer, setAnswer] = useState(() => randomSelection(WORDS));
  const [guesses, setGuesses] = useState([]);
  console.log(answer);
  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);
    if (tentativeGuess === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= 5) {
      setGameStatus("lost");
    }
  }

  function handleRestart() {
    const newAnswer = randomSelection(WORDS);
    setAnswer(newAnswer);
    setGuesses([]);
    setGameStatus("running");
  }

  const validatedGuesses = guesses.map((guess) => checkGuess(guess, answer));

  return (
    <>
      <GuessResults validatedGuesses={validatedGuesses} answer={answer} />
      <GuessInput
        gameStatus={gameStatus}
        handleSubmitGuess={handleSubmitGuess}
      />
      <Keyboard validatedGuesses={validatedGuesses} />
      {gameStatus === "won" && (
        <WonBanner
          numOfGuesses={guesses.length}
          handleRestart={handleRestart}
        />
      )}
      {gameStatus === "lost" && (
        <LostBanner answer={answer} handleRestart={handleRestart} />
      )}
    </>
  );
}

export default Game;
