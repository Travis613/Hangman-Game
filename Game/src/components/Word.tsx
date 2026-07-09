interface Props {
  word: string;
  guessedLetters: string[];
  gameOver: boolean;
}

export function Word({ word, guessedLetters, gameOver }: Props) {
  const wordArray = word.split("");

  return (
    <div className="wordSection">
      {wordArray.map((letter) =>
        guessedLetters.includes(letter) || gameOver ? (
          <div
            className="letterSection"
            style={{
              backgroundColor: guessedLetters.includes(letter)
                ? "lightgreen"
                : "lightcoral",
            }}
          >
            {letter}
          </div>
        ) : (
          <div className="letterSection">
            <p style={{ display: "none" }}>{letter}</p>
          </div>
        ),
      )}
    </div>
  );
}
