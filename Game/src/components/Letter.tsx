import { useState } from "react";

interface Props {
  letter: string | null;
  visable: boolean | null;
}

export function Letter({ letter, visable }: Props) {
  return (
    <>
      {visable ? (
        <div className="letterSection">{letter}</div>
      ) : (
        <div className="letterSection" />
      )}
    </>
  );
}
