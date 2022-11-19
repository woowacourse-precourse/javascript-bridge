const OutputView = require("./OutputView");
const InputView = require("./InputView");

/**
 * 다리 건너기 게임과 View를 관리하는 클래스입니다.
 */
class BridgeGameController {
  #bridgeGame;

  constructor(bridgeGame) {
    this.#bridgeGame = bridgeGame;
  }

  start() {
    OutputView.printStart();
    InputView.readBridgeSize(this.#bridgeGame);
  }
}

module.exports = BridgeGameController;
