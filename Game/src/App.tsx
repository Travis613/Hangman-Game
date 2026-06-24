import { useState } from "react";
import { Keyboard } from "./components/Keyboard";
import { Stickman } from "./components/Stickman";
import { Word } from "./components/Word";
import { words } from "../public/util";

export default function App() {
  const [head, setHead] = useState(false);
  const [torso, setTorso] = useState(false);
  const [leftArm, setLeftArm] = useState(false);
  const [rightArm, setRightArm] = useState(false);
  const [leftLeg, setLeftLeg] = useState(false);
  const [rightLeg, setRightLeg] = useState(false);

  const [word, setWord] = useState<string>(
    words[Math.floor(Math.random() * words.length)],
  );

  return (
    <div className="documentBody">
      <div className="hangindSectionWithStickFigure">
        <div className="hangingStand">
          <div className="horizontalTopPost redunantStyles" />
          <div className="verticlePost redunantStyles" />
          <div className="rope redunantStyles" />
          <div className="horizontalBottomPost redunantStyles" />
          <div className="stickManSection">
            <Stickman
              head={head}
              torso={torso}
              leftArm={leftArm}
              rightArm={rightArm}
              leftLeg={leftLeg}
              rightLeg={rightLeg}
            />
          </div>
        </div>
      </div>
      <div className="wordSection">
        <Word word={word} />
      </div>
      <div className="keyboardSection">
        <Keyboard />
      </div>
    </div>
  );
}
