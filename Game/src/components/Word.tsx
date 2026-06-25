import { useEffect, useState } from "react";

import { Letter } from "./Letter";

interface Props {
  word: string;
  guessedLetters: string[];
}

export function Word({ word, guessedLetters }: Props) {
  const [letter1, setLetter1] = useState<boolean | null>(true);
  const [letter2, setLetter2] = useState<boolean | null>(true);
  const [letter3, setLetter3] = useState<boolean | null>(true);
  const [letter4, setLetter4] = useState<boolean | null>(true);
  const [letter5, setLetter5] = useState<boolean | null>(true);
  const [letter6, setLetter6] = useState<boolean | null>(true);
  const [letter7, setLetter7] = useState<boolean | null>(true);
  const [letter8, setLetter8] = useState<boolean | null>(true);
  const [letter9, setLetter9] = useState<boolean | null>(true);
  const [letter10, setLetter10] = useState<boolean | null>(true);

  useEffect(() => {
    identifyCorrectLetters();
  });

  function identifyCorrectLetters() {
    let correctLetters: string[] = [];
    let counter = 0;
    for (let x = 0; x < word.length; x++) {
      for (let j = 0; j < guessedLetters.length; j++) {
        if (word[x] === guessedLetters[j]) {
          counter++;
          correctLetters.push(word[x]);
          console.log(
            `interation:${counter} correctletters: ${correctLetters}`,
          );
        }
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
