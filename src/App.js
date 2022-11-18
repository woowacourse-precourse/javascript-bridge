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
    const SIZE = bridgeSize;
    try {
      this.errorCheck.validateBridgeSize(SIZE);
      this.answerBridge(SIZE);
    } catch (e) {
      Console.print(e);
      this.play();
    }
    return;
  };

  answerBridge(bridgeSize) {
    const RANDOM_NUMBER_GENERATOR = BridgeRandomNumberGenerator.generate;
    const ANSWER_BRIDGE_ARRAY = BridgeMaker.makeBridge(
      bridgeSize,
      RANDOM_NUMBER_GENERATOR
    );
    const BRIDGE_GAME = new BridgeGame(ANSWER_BRIDGE_ARRAY);
    return BRIDGE_GAME.move();
  }
}

const app = new App();
app.play();
module.exports = App;
