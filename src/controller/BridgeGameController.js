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

  handleAnswerCheckPhase(direction) {
    OutputView.printMap(this.#bridgeGame.getResult());
    if(this.#bridgeGame.isAnswer(direction)) {
      this.handleGameEndPhase();
    }
    InputView.readGameCommand(this.handleGameRetryPhase);
  }

  handleGameEndPhase() {
    if(this.#bridgeGame.isGameEnd()) {
      OutputView.printResult();
      return;
    }
    this.#bridgeGame.move();
    InputView.readMoving(this.handleAnswerCheckPhase);
  }

  handleGameRetryPhase(retryAnswer) {
    if (retryAnswer === 'R') {
      this.#bridgeGame.retry();
      return;
    }
    Console.close();
  }
}

module.exports = BrideGameController;