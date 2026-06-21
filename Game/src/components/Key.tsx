interface Props {
  letter: string;
}

export default function Key({ letter }: Props) {
  return (
    <>
      <button className="key">{letter}</button>
    </>
  );
}
