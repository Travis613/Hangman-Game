import { Keyboard } from "./components/Keyboard";
import { Stickman } from "./components/Stickman";
import { Word } from "./components/Word";

// testing something

export default function App() {
  return (
    <div className="documentBody">
      <div className="hangindSectionWithStickFigure">
        <div className="hangingStand">
          <div className="horizontalTopPost redunantStyles" />
          <div className="verticlePost redunantStyles" />
          <div className="rope redunantStyles" />
          <div className="horizontalBottomPost redunantStyles" />
          <div className="stickManSection">
            <Stickman />
          </div>
        </div>
      </div>
      <div className="wordSection">
        <Word />
      </div>
      <div className="keyboardSection">
        <Keyboard />
      </div>
    </div>
  );
}
