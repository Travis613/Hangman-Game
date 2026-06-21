import { useState } from "react";
import { words } from "../../public/util";

import { Letter } from "./Letter";

export function Word() {
  let [word, setWord] = useState<string>(
    words[Math.floor(Math.random() * words.length)],
  );

  return (
    <>
      <Letter letter={word[0]} />
      <Letter letter={word[1]} />
      <Letter letter={word[2]} />
      <Letter letter={word[3]} />
      <Letter letter={word[4]} />
      <Letter letter={word[5]} />
      <Letter letter={word[6]} />
      <Letter letter={word[7]} />
      <Letter letter={word[8]} />
      <Letter letter={word[9]} />
    </>
  );
}
