import Banner from "../Banner";

function LostBanner({ answer, handleRestart }) {
  return (
    <Banner status="sad" action={handleRestart} actionText="Restart game">
      <p>
        Sorry, you lost. The answer was <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default LostBanner;
