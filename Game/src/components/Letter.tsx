interface Props {
  letter: string;
}

export function Letter({ letter }: Props) {
  return (
    <>
      <div className="letterSection">{letter}</div>
    </>
  );
}
