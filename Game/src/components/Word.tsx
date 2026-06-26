import { useEffect, useState } from "react";

import { Letter } from "./Letter";

interface Props {
  word: string;
  guessedLetter: string;
}

export function Word({ word, guessedLetter }: Props) {
  const [letter1, setLetter1] = useState<boolean | null>(false);
  const [letter2, setLetter2] = useState<boolean | null>(false);
  const [letter3, setLetter3] = useState<boolean | null>(false);
  const [letter4, setLetter4] = useState<boolean | null>(false);
  const [letter5, setLetter5] = useState<boolean | null>(false);
  const [letter6, setLetter6] = useState<boolean | null>(false);
  const [letter7, setLetter7] = useState<boolean | null>(false);
  const [letter8, setLetter8] = useState<boolean | null>(false);
  const [letter9, setLetter9] = useState<boolean | null>(false);
  const [letter10, setLetter10] = useState<boolean | null>(false);

  useEffect(() => {
    identifyCorrectLetters();
  });

  function identifyCorrectLetters() {
    let correctlyGuessedLetters: string[] = [];
    let counter = 0;
    for (let x = 0; x < word.length; x++) {
      if (word[x] === guessedLetter) {
        counter++;
        correctlyGuessedLetters.push(word[x]);
        console.log("Correct!");
      }
    }
  }

  return (
    <>
      <Letter letter={word[0]} visable={letter1} />
      <Letter letter={word[1]} visable={letter2} />
      <Letter letter={word[2]} visable={letter3} />
      <Letter letter={word[3]} visable={letter4} />
      <Letter letter={word[4]} visable={letter5} />
      <Letter letter={word[5]} visable={letter6} />
      <Letter letter={word[6]} visable={letter7} />
      <Letter letter={word[7]} visable={letter8} />
      <Letter letter={word[8]} visable={letter9} />
      <Letter letter={word[9]} visable={letter10} />
    </>
  );
}
