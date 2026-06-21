import { useState } from "react";
import { words } from "../../public/util";

import { Letter } from "./Letter";

export function Word() {
  const [word, setWord] = useState<string>(
    words[Math.floor(Math.random() * words.length)],
  );

  const [letterOneVisability, setLetterOneVisability] =
    useState<boolean>(false);
  const [letterTwoVisability, setLetterTwoVisability] =
    useState<boolean>(false);
  const [letterThreeVisability, setLetterThreeVisability] =
    useState<boolean>(false);
  const [letterFourVisability, setLetterFourVisability] =
    useState<boolean>(false);
  const [letterFiveVisability, setLetterFiveVisability] =
    useState<boolean>(false);
  const [letterSixVisability, setLetterSixVisability] =
    useState<boolean>(false);
  const [letterSevenVisability, setLetterSevenVisability] =
    useState<boolean>(false);
  const [letterEightVisability, setLetterEightVisability] =
    useState<boolean>(false);
  const [letterNineVisability, setLetterNineVisability] =
    useState<boolean>(false);
  const [letterTenVisability, setLetterTenVisability] =
    useState<boolean>(false);

  return (
    <>
      <Letter letter={word[0]} visable={letterOneVisability} />
      <Letter letter={word[1]} visable={letterTwoVisability} />
      <Letter letter={word[2]} visable={letterThreeVisability} />
      <Letter letter={word[3]} visable={letterFourVisability} />
      <Letter letter={word[4]} visable={letterFiveVisability} />
      <Letter letter={word[5]} visable={letterSixVisability} />
      <Letter letter={word[6]} visable={letterSevenVisability} />
      <Letter letter={word[7]} visable={letterEightVisability} />
      <Letter letter={word[8]} visable={letterNineVisability} />
      <Letter letter={word[9]} visable={letterTenVisability} />
    </>
  );
}
