import { useState } from "react";

interface Props {
  head: boolean;
  torso: boolean;
  leftArm: boolean;
  rightArm: boolean;
  leftLeg: boolean;
  rightLeg: boolean;
}

export function Stickman({
  head,
  torso,
  leftArm,
  rightArm,
  leftLeg,
  rightLeg,
}: Props) {
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
