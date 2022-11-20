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
    InputView.readBridgeSize(this.handleGameStartPhase.bind(this));
  }

  handleGameStartPhase(size) {
    this.generateBridgeGame(size);
    OutputView.printNewLine();
    InputView.readMoving(this.handleAnswerCheckPhase.bind(this));
  }

  generateBridgeGame(size) {
    this.#bridgeGame = new BridgeGame(
      new Bridge(BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate))
    );
  }

  handleAnswerCheckPhase(direction) {
    this.#bridgeGame.updateResult(direction);
    OutputView.printMap(this.#bridgeGame.getResult());
    if(this.#bridgeGame.isAnswer(direction)) {
      this.handleGameEndPhase();
      return;
    }
    InputView.readGameCommand(this.handleGameRetryPhase.bind(this));
  }

  handleGameEndPhase() {
    if(this.#bridgeGame.isGameEnd()) {
      OutputView.printResult(this.#bridgeGame.getResult(), this.#bridgeGame.getAttempts(), true);
      return;
    }
    this.#bridgeGame.move();
    InputView.readMoving(this.handleAnswerCheckPhase.bind(this));
  }

  handleGameRetryPhase(retryAnswer) {
    if (retryAnswer === 'R') {
      this.#bridgeGame.retry();
      InputView.readMoving(this.handleAnswerCheckPhase.bind(this));
      return;
    }
    OutputView.printResult(this.#bridgeGame.getResult(), this.#bridgeGame.getAttempts(), false);
  }
}

module.exports = BrideGameController;