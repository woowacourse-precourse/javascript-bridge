const { Console } = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");
const bridgeGame = new BridgeGame();
const OutputView = require("./OutputView");
const Validation = require("./Validation");
const InputView = require("./InputView");

class GameContoller {
  constructor() {
    this.bridge = [];
  }

  GameStart() {
    const bridgeSize = InputView.readBridgeSize();
    console.log(bridgeSize);
    // this.makeBridge(bridgeSize);
  }

  makeBridge(bridgeSize) {
    console.log(bridgeSize);
    try {
      Validation.validateBridgeSize(bridgeSize);
      const newBridge = BridgeMaker.makeBridge(
        bridgeSize,
        BridgeRandomNumberGenerator.generate
      );
      console.log(newBridge);
      this.bridge = newBridge;
      //   this.readMoving(bridge);
    } catch (e) {
      Console.print(e);
      this.readBridgeSize();
    }
  }
}

module.exports = GameContoller;
