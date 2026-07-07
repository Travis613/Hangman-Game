import { useState } from "react";

interface Props {
  letter: string;
  handleClick: () => void;
}

export function Key({ letter, handleClick }: Props) {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <button
        className="key"
        onClick={() => {
          handleClick();
          setClicked(true);
        }}
        style={{ backgroundColor: clicked ? "lightgrey" : "white" }}
      >
        {letter}
      </button>
    </>
  );
}
