//import { randomWords } from "../public/util";

import { Stickman } from "./components/Stickman";

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
      <div className="wordSection"></div>
    </div>
  );
}
