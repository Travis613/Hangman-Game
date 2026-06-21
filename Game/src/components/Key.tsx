interface Props {
  letter: string;
}

export default function Key({ letter }: Props) {
  return (
    <>
      <div className="key">{letter}</div>
    </>
  );
}
