interface Props {
  word: string;
  guessedLetters: string[];
}

export function Word({ word, guessedLetters }: Props) {
  const wordArray = word.split("");
  return (
    <div className="wordSection">
      {wordArray.map((letter) =>
        guessedLetters.includes(letter) ? (
          <div className="letterSection">{letter}</div>
        ) : (
          <div className="letterSection">
            <p style={{ display: "none" }}>{letter}</p>
          </div>
        ),
      )}
    </div>
  );
}
