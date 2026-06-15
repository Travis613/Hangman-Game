import { useEffect, useState } from "react";

export function Stickman() {
  const [head, setHead] = useState(false);
  const [torso, setTorso] = useState(false);
  const [leftArm, setLeftArm] = useState(false);
  const [rightArm, setRightArm] = useState(false);
  const [leftLeg, setLeftLeg] = useState(false);
  const [rightLeg, setRightLeg] = useState(false);

  return (
    <>
      <div
        className="head redunantStyles"
        style={{ visibility: head ? "visible" : "hidden" }}
      />
      <div
        className="torso redunantStyles"
        style={{ visibility: torso ? "visible" : "hidden" }}
      />
      <div
        className="leftArm redunantStyles"
        style={{ visibility: leftArm ? "visible" : "hidden" }}
      />
      <div
        className="rightArm redunantStyles"
        style={{ visibility: rightArm ? "visible" : "hidden" }}
      />
      <div
        className="leftLeg redunantStyles"
        style={{ visibility: leftLeg ? "visible" : "hidden" }}
      />
      <div
        className="rightLeg redunantStyles"
        style={{ visibility: rightLeg ? "visible" : "hidden" }}
      />
    </>
  );
}
