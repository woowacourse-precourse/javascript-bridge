const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const OUTPUT_MESSAGE = require("./constans/Outputmessage");
class App {
  constructor() {
    this.bridge = [];
  }
  gameResultPrint(winOrLose) {
    winOrLose
      ? MissionUtils.Console.print(OUTPUT_MESSAGE.SUCCESS_RESULT)
      : MissionUtils.Console.print(OUTPUT_MESSAGE.FAILURE_RESULT);
  }
  moveing(movePoint, obstacle) {
    return obstacle === movePoint ? true : false;
  }
  BridgeMove() {
    const movePoint = InputView.readMoving();
    this.bridge.forEach((obstacle) => {
      if (!moveing(movePoint, obstacle)) {
        gameResultPrint(false);
        return;
      }
    });
    gameResultPrint(true);
    return;
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
