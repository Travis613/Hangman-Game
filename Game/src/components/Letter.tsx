interface Props {
  letter: string | null;
}

export function Letter({ letter }: Props) {
  return (
    <>
      <div className="letterSection">{letter}</div>
    </>
  );
}
