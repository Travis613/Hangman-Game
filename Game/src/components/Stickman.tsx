interface Props {
  numberOfWrongGuesses: number;
}

export function Stickman({ numberOfWrongGuesses }: Props) {
  return (
    <>
      <div
        className="head redunantStyles"
        style={{
          visibility: numberOfWrongGuesses > 0 ? "visible" : "hidden",
        }}
      />
      <div
        className="torso redunantStyles"
        style={{
          visibility: numberOfWrongGuesses > 1 ? "visible" : "hidden",
        }}
      />
      <div
        className="leftArm redunantStyles"
        style={{
          visibility: numberOfWrongGuesses > 2 ? "visible" : "hidden",
        }}
      />
      <div
        className="rightArm redunantStyles"
        style={{
          visibility: numberOfWrongGuesses > 3 ? "visible" : "hidden",
        }}
      />
      <div
        className="leftLeg redunantStyles"
        style={{
          visibility: numberOfWrongGuesses > 4 ? "visible" : "hidden",
        }}
      />
      <div
        className="rightLeg redunantStyles"
        style={{
          visibility: numberOfWrongGuesses > 5 ? "visible" : "hidden",
        }}
      />
    </>
  );
}
