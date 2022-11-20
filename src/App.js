const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const OUTPUT_MESSAGE = require("./constans/OutputMessage");
class App {
  constructor() {
    this.bridge = [];
    this.upperTrack = [];
    this.lowerTrack = [];
    this.gameMap = [];
  }
  makeLine(track) {
    let line = "[";
    for (let i = 0; i < track.length; i++) {
      line += track[i];
      if (i == track.length - 1) {
        line += "]";
        break;
      }
      line += "|";
    }
    return line;
  }

  marking(movePoint) {
    if (movePoint === "U") {
      this.upperTrack.push(" O ");
      this.lowerTrack.push("   ");
      return;
    }
    this.upperTrack.push("   ");
    this.lowerTrack.push(" X ");
  }
  bridgeDrawing(movePoint) {
    this.marking(movePoint);
    const upper = this.makeLine(this.upperTrack);
    const lower = this.makeLine(this.lowerTrack);
    return [upper, lower];
  }
  gameResultPrint(winOrLose) {
    const result = winOrLose
      ? OUTPUT_MESSAGE.SUCCESS_RESULT
      : OUTPUT_MESSAGE.FAILURE_RESULT;
    MissionUtils.Console.print(result);
  }
  moveing(movePoint, obstacle) {
    return obstacle === movePoint ? true : false;
  }
  BridgeMove() {
    const movePoint = InputView.readMoving();
    this.bridge.forEach((obstacle) => {
      if (!moveing(movePoint, obstacle)) {
        this.gameMap = this.bridgeDrawing(movePoint);
        OutputView.printMap(this.gameMap);
        return this.gameResultPrint(false);
      }
    });
    this.gameMap = this.bridgeDrawing(movePoint);
    OutputView.printMap(this.gameMap);
    return this.gameResultPrint(true);
  }
  BridgeMaker() {
    try {
      const birdgeSize = InputView.readBridgeSize();
      this.bridge = BridgeMaker.makeBridge(
        birdgeSize,
        BridgeRandomNumberGenerator.generate
      );
    } catch (error) {
      console.log(error);
    }
    this.BridgeMove();
  }
  play() {
    OutputView.gameStart();
    this.BridgeMaker();
  }
}

module.exports = App;
