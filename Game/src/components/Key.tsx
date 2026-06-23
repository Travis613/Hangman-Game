interface Props {
  letter: string;
}

export function Key({ letter }: Props) {
  return (
    <>
      <button className="key">{letter}</button>
    </>
  );
}
