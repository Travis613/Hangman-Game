import { useState } from "react";

import { Letter } from "./Letter";

interface Props {
  word: string;
}

export function Word({ word }: Props) {
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
