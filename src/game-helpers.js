export const checkGuess = (guess, answer) => {
  if (!guess) return null;

  const guessLetters = guess.split("");
  const answerLetters = answer.split("");
  const result = [];

  for (let i = 0; i < guessLetters.length; i++) {
    if (guessLetters[i] === answerLetters[i]) {
      result[i] = { letter: guessLetters[i], status: "correct" };
    } else if (answerLetters.includes(guessLetters[i])) {
      result[i] = { letter: guessLetters[i], status: "misplaced" };
    } else {
      result[i] = { letter: guessLetters[i], status: "incorrect" };
    }
  }
  return result;
};
