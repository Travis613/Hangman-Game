import { useState } from "react";
import { Stickman } from "./components/Stickman";
import { words } from "../public/util";
import { letters } from "../public/util";
import { Letter } from "./components/Letter";
import { Key } from "./components/Key";

export default function App() {
  const [letter1, setLetter1] = useState<boolean>(false);
  const [letter2, setLetter2] = useState<boolean>(false);
  const [letter3, setLetter3] = useState<boolean>(false);
  const [letter4, setLetter4] = useState<boolean>(false);
  const [letter5, setLetter5] = useState<boolean>(false);
  const [letter6, setLetter6] = useState<boolean>(false);
  const [letter7, setLetter7] = useState<boolean>(false);
  const [letter8, setLetter8] = useState<boolean>(false);
  const [letter9, setLetter9] = useState<boolean>(false);
  const [letter10, setLetter10] = useState<boolean>(false);
  const [head, setHead] = useState(false);
  const [torso, setTorso] = useState(false);
  const [leftArm, setLeftArm] = useState(false);
  const [rightArm, setRightArm] = useState(false);
  const [leftLeg, setLeftLeg] = useState(false);
  const [rightLeg, setRightLeg] = useState(false);
  const [word, setWord] = useState<string>(
    words[Math.floor(Math.random() * words.length)],
  );
  const [counter, setCounter] = useState(1);

  function checkLetter(letter: string) {
    for (let x = 0; x < word.length; x++) {
      if (word[x] === letter) {
        const index = word.indexOf(word[x]) + 1;
        switch (index) {
          case 1:
            setLetter1(true);
            break;
          case 2:
            setLetter2(true);
            break;
          case 3:
            setLetter3(true);
            break;
          case 4:
            setLetter4(true);
            break;
          case 5:
            setLetter5(true);
            break;
          case 6:
            setLetter6(true);
            break;
          case 7:
            setLetter7(true);
            break;
          case 8:
            setLetter8(true);
            break;
          case 9:
            setLetter9(true);
            break;
          case 10:
            setLetter10(true);
            break;
        }
        return;
      }
    }
    switch (counter) {
      case 1:
        setHead(true);
        break;
      case 2:
        setTorso(true);
        break;
      case 3:
        setRightArm(true);
        break;
      case 4:
        setLeftArm(true);
        break;
      case 5:
        setRightLeg(true);
        break;
      case 6:
        setLeftLeg(true);
        break;
    }
    setCounter(counter + 1);
  }
  console.log(word);
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
        <Letter letter={word[0]} visable={letter1} />
        <Letter letter={word[1]} visable={letter2} />
        <Letter letter={word[2]} visable={letter3} />
        <Letter letter={word[3]} visable={letter4} />
        <Letter letter={word[4]} visable={letter5} />
        <Letter letter={word[5]} visable={letter6} />
        <Letter letter={word[6]} visable={letter7} />
        <Letter letter={word[7]} visable={letter8} />
        <Letter letter={word[8]} visable={letter9} />
        <Letter letter={word[9]} visable={letter10} />
      </div>
      <div className="keyboardSection">
        <div className="keyboard">
          {letters.map((letter) => (
            <Key
              key={letter}
              letter={letter}
              handleClick={() => {
                checkLetter(letter);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
