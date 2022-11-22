const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const Validation = require("./libs/Validation");
const { generate } = require("./BridgeRandomNumberGenerator");
const { COMMAND_OPTION } = require("./libs/const");
const { throwException } = require("./libs/Error");
class Manager {
  #bridgeGame;

  constructor() {
    this.#bridgeGame = null;
  }
  start() {
    OutputView.printStartMessage();
    this.requestBridgeSize();
  }
  requestBridgeSize() {
    InputView.readBridgeSize((size) => {
      const { errorMsg } = Validation.validateBridgeSize(size);
      if (errorMsg)
        return throwException(errorMsg, () => this.requestBridgeSize());

      this.createBridgeGame(size);

      this.requestDirection();
    });
  }
  createBridgeGame(size) {
    const bridge = BridgeMaker.makeBridge(Number(size), generate);

    this.#bridgeGame = new BridgeGame(bridge);
  }
  requestDirection() {
    InputView.readMoving((direction) => {
      const { errorMsg } = Validation.validateDirection(direction);
      if (errorMsg)
        return throwException(errorMsg, () => this.requestDirection());

      this.#bridgeGame.move(direction);
      this.printBridgeCrossingResult();

      this.actionAboutBridgeGame();
    });
  }
  printBridgeCrossingResult() {
    const bridgeCrossingResult = this.#bridgeGame.getBridgeCrossingResult();

    OutputView.printMap(bridgeCrossingResult);
  }
  actionAboutBridgeGame() {
    if (this.#bridgeGame.isFail()) return this.requestRestartOrQuit();

    if (this.#bridgeGame.isLast()) return this.quit();

    return this.requestDirection();
  }
  requestRestartOrQuit() {
    InputView.readGameCommand((commandOption) => {
      const { errorMsg } = Validation.checkCommandOption(commandOption);
      if (errorMsg)
        return throwException(errorMsg, () => this.requestRestartOrQuit());

      this.actionAboutGameCommand(commandOption);
    });
  }
  actionAboutGameCommand(commandOption) {
    if (commandOption == COMMAND_OPTION.restart) return this.restart();

    return this.quit();
  }
  restart() {
    this.#bridgeGame.retry();
    this.requestDirection();
  }
  quit() {
    this.printBridgeGameResult();
    Console.close();
  }
  printBridgeGameResult() {
    OutputView.printEndMessage(this.#bridgeGame.isFail());
    OutputView.printMap(this.#bridgeGame.getBridgeCrossingResult());
    OutputView.printResult(this.#bridgeGame.getResult());
  }
}

module.exports = Manager;
