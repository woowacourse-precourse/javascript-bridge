const { Console } = require("@woowacourse/mission-utils");
const BridgeMaker = require("../BridgeMaker");
const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");
const Bridge = require("../models/Bridge");
const BridgeGame = require("../models/BridgeGame");
const InputView = require("../views/InputView");
const OutputView = require("../views/OutputView");


class BrideGameController {
  #bridgeGame;

  start() {
    OutputView.printIntialMessage();
    InputView.readBridgeSize(this.handleGameStartPhase);
  }

  handleGameStartPhase(size) {
    this.generateBridgeGame(size);
    InputView.readMoving(this.handleAnswerCheckPhase);
  }

  generateBridgeGame(size) {
    this.#bridgeGame = new BridgeGame(
      new Bridge(BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate))
    );
  }
}

module.exports = BrideGameController;