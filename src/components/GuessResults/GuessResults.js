import { range } from "@/src/utils";

import Guess from "@/src/components/Guess";

function GuessResults({ validatedGuesses, answer }) {
  return (
    <>
      <div className="guess-results">
        {range(5).map((num) => (
          <Guess key={num} value={validatedGuesses[num]} />
        ))}
      </div>
    </>
  );
}

export default GuessResults;
