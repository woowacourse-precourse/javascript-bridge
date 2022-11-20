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
  gameResultPrint(count, winOrLose) {
    const result = winOrLose
      ? OUTPUT_MESSAGE.SUCCESS_RESULT
      : OUTPUT_MESSAGE.FAILURE_RESULT;
    MissionUtils.Console.print(OUTPUT_MESSAGE.SUCCESS_OR_FAILURE + result);
    MissionUtils.Console.print(OUTPUT_MESSAGE.TOTAL_ATTEMPT + count);
  }
  moveing(movePoint, obstacle) {
    return obstacle === movePoint ? true : false;
  }
  BridgeMove() {
    const movePoint = InputView.readMoving();
    this.bridge.forEach((obstacle) => {
      if (!this.moveing(movePoint, obstacle)) {
        this.gameMap = this.bridgeDrawing(movePoint);
        OutputView.printMap(this.gameMap);
        return false;
      }
    });
    this.gameMap = this.bridgeDrawing(movePoint);
    OutputView.printMap(this.gameMap);
    return true;
  }
  reStartCheck(command) {
    if (command == "R") return true;
    return false;
  }
  reStart(result) {
    let retry;
    if (result) return false;
    const command = InputView.readGameCommand();
    try {
      retry = this.reStartCheck(command);
    } catch (error) {
      console.log(error);
    }
    return retry;
  }
  gamePlaying() {
    let result = false;
    let count = 0;
    while (1) {
      result = this.BridgeMove();
      count++;
      if (!this.reStart(result)) break;
    }
    this.gameResultPrint(count, result);
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
    this.gamePlaying();
  }
  play() {
    OutputView.gameStart();
    this.BridgeMaker();
  }
}

module.exports = App;
