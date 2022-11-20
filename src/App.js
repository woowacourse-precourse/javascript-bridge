const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
class App {
  constructor() {
    this.bridge = [];
    this.gameResult = null;
  }
  moveing(movePoint, obstacle) {
    return obstacle === movePoint ? true : false;
  }
  BridgeMove() {
    const movePoint = InputView.readMoving();
    this.bridge.forEach((obstacle) => {
      if (!moveing(movePoint, obstacle)) {
        gameResult = false;
        return;
      }
    });
    gameResult = true;
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
