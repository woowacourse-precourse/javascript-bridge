const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const InputView = require("./InputView");
const Console = MissionUtils.Console;

class App {
  play() {
    Console.print("다리 건너기 게임을 시작합니다.\n");
    return InputView.readBridgeSize(this.bridgeSizeValidate);
  }

  bridgeSizeValidate = (bridgeSize) => {
    const SIZE = bridgeSize;
    return this.answerBridge(SIZE);
  };

  bridgeValidate(bridgeArray, answerBridgeArray) {
    return this.bridgeErrorCheck.validateBridgeArray(
      bridgeArray,
      answerBridgeArray
    );
  }

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

module.exports = App;
