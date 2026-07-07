import { useState } from "react";
import { Stickman } from "./components/Stickman";
import { words } from "../public/util";
import { letters } from "../public/util";
import { Key } from "./components/Key";
import { Word } from "./components/Word";

export default function App() {
  const [gussedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [word, setWord] = useState(
    words[Math.floor(Math.random() * words.length)],
  );

  function keyClicked(letter: string) {
    setGuessedLetters([...gussedLetters, letter]);
    if (!word.includes(letter)) {
      setWrongGuesses(wrongGuesses + 1);
    }
  }
  return (
    <div className="documentBody">
      <div>
        {wrongGuesses === 6 ? <p>You Lose, Refresh To Play Again</p> : <p></p>}
      </div>
      <div className="hangindSectionWithStickFigure">
        <div className="hangingStand">
          <div className="horizontalTopPost redunantStyles" />
          <div className="verticlePost redunantStyles" />
          <div className="rope redunantStyles" />
          <div className="horizontalBottomPost redunantStyles" />
          <div className="stickManSection">
            <Stickman numberOfWrongGuesses={wrongGuesses} />
          </div>
        </div>
      </div>
      <Word word={word} guessedLetters={gussedLetters} />
      <div className="keyboardSection">
        <div className="keyboard">
          {letters.map((letter) => (
            <Key
              key={letter}
              letter={letter}
              handleClick={() => {
                keyClicked(letter);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
