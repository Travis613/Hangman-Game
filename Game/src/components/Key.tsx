interface Props {
  letter: string;
  handleClick: () => void;
}

export function Key({ letter, handleClick }: Props) {
  return (
    <>
      <button className="key" onClick={handleClick}>
        {letter}
      </button>
    </>
  );
}
