const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const InputView = require("./InputView");
const BridgeErrorCheck = require("./BridgeError");
const Console = MissionUtils.Console;

class App {
  constructor() {
    Console.print("다리 건너기 게임을 시작합니다.\n");
    this.errorCheck = new BridgeErrorCheck();
  }

  play() {
    return InputView.readBridgeSize(this.bridgeSizeValidate);
  }

  bridgeSizeValidate = (bridgeSize) => {
    try {
      const SIZE = bridgeSize;
      this.errorCheck.validateBridgeSize(SIZE);
      return this.answerBridge(SIZE);
    } catch (e) {
      Console.print(e);
      return this.play();
    }
  };

  makeRandomNumber(bridgeSize) {
    const BRIDGE_ARRAY = BridgeMaker.makeBridge(
      bridgeSize,
      BridgeRandomNumberGenerator.generate
    );
    return BRIDGE_ARRAY;
  }

  answerBridge(bridgeSize) {
    try {
      const BRIDGE_ARRAY = this.makeRandomNumber(bridgeSize);
      this.errorCheck.validateRandomArray(BRIDGE_ARRAY);
      return this.initGame(BRIDGE_ARRAY);
    } catch (e) {
      Console.print(e);
      return this.play();
    }
  }

  initGame(answerBridgeArray) {
    const BRIDGE_GAME = new BridgeGame(answerBridgeArray);
    return BRIDGE_GAME.move();
  }
}

const app = new App();
app.play();
module.exports = App;
