import { useState } from "react";
import { Stickman } from "./components/Stickman";
import { words } from "../public/util";
import { Letter } from "./components/Letter";
import { Key } from "./components/Key";

export default function App() {
  const [letter1, setLetter1] = useState<boolean | null>(false);
  const [letter2, setLetter2] = useState<boolean | null>(false);
  const [letter3, setLetter3] = useState<boolean | null>(false);
  const [letter4, setLetter4] = useState<boolean | null>(false);
  const [letter5, setLetter5] = useState<boolean | null>(false);
  const [letter6, setLetter6] = useState<boolean | null>(false);
  const [letter7, setLetter7] = useState<boolean | null>(false);
  const [letter8, setLetter8] = useState<boolean | null>(false);
  const [letter9, setLetter9] = useState<boolean | null>(false);
  const [letter10, setLetter10] = useState<boolean | null>(false);

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
        console.log(letter);
        return;
      }
    }
    console.log(counter);
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
          <Key
            letter={"a"}
            handleClick={() => {
              checkLetter("a");
            }}
          />
          <Key
            letter={"b"}
            handleClick={() => {
              checkLetter("b");
            }}
          />
          <Key
            letter={"c"}
            handleClick={() => {
              checkLetter("c");
            }}
          />
          <Key
            letter={"d"}
            handleClick={() => {
              checkLetter("d");
            }}
          />
          <Key
            letter={"e"}
            handleClick={() => {
              checkLetter("e");
            }}
          />
          <Key
            letter={"f"}
            handleClick={() => {
              checkLetter("f");
            }}
          />
          <Key
            letter={"g"}
            handleClick={() => {
              checkLetter("g");
            }}
          />
          <Key
            letter={"h"}
            handleClick={() => {
              checkLetter("h");
            }}
          />
          <Key
            letter={"i"}
            handleClick={() => {
              checkLetter("i");
            }}
          />
          <Key
            letter={"j"}
            handleClick={() => {
              checkLetter("j");
            }}
          />
          <Key
            letter={"k"}
            handleClick={() => {
              checkLetter("k");
            }}
          />
          <Key
            letter={"l"}
            handleClick={() => {
              checkLetter("l");
            }}
          />
          <Key
            letter={"m"}
            handleClick={() => {
              checkLetter("m");
            }}
          />
          <Key
            letter={"n"}
            handleClick={() => {
              checkLetter("n");
            }}
          />
          <Key
            letter={"o"}
            handleClick={() => {
              checkLetter("o");
            }}
          />
          <Key
            letter={"p"}
            handleClick={() => {
              checkLetter("p");
            }}
          />
          <Key
            letter={"q"}
            handleClick={() => {
              checkLetter("q");
            }}
          />
          <Key
            letter={"r"}
            handleClick={() => {
              checkLetter("r");
            }}
          />
          <Key
            letter={"s"}
            handleClick={() => {
              checkLetter("s");
            }}
          />
          <Key
            letter={"t"}
            handleClick={() => {
              checkLetter("t");
            }}
          />
          <Key
            letter={"u"}
            handleClick={() => {
              checkLetter("u");
            }}
          />
          <Key
            letter={"v"}
            handleClick={() => {
              checkLetter("v");
            }}
          />
          <Key
            letter={"w"}
            handleClick={() => {
              checkLetter("w");
            }}
          />
          <Key
            letter={"x"}
            handleClick={() => {
              checkLetter("x");
            }}
          />
          <Key
            letter={"y"}
            handleClick={() => {
              checkLetter("y");
            }}
          />
          <Key
            letter={"z"}
            handleClick={() => {
              checkLetter("z");
            }}
          />
        </div>
      </div>
    </div>
  );
}
