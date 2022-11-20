const { COMMAND } = require('./utils/constants');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Bridge = require('./model/Bridge');
const BridgeGame = require('./BridgeGame');
const History = require('./model/History');
const Result = require('./model/Result');

class GameController {
  #bridgeGame;
  #history;
  #result;

  constructor() {
    this.#history = new History();
    this.#result = new Result();
  }

  load() {
    InputView.readBridgeSize(this.setBridgeGame.bind(this));
  }

  setBridgeGame({ command }) {
    this.#bridgeGame = new BridgeGame(new Bridge(command));

    InputView.readMoving(this.playGame.bind(this));
  }

  playGame({ command }) {
    const { moveSuccess, isEndOfBridge } = this.#bridgeGame.move(command);
    OutputView.printMap(this.#history.updateHistory(command, moveSuccess));

    if (moveSuccess) {
      this.handleMoveSuccess(isEndOfBridge);
    } else {
      this.handleMoveFail();
    }
  }

  handleMoveSuccess(isEndOfBridge) {
    if (isEndOfBridge) {
      OutputView.printResult(this.#history.getHistory(), this.#result.updateResult(true));
      InputView.closeView();
    } else {
      InputView.readMoving(this.playGame.bind(this));
    }
  }

  handleMoveFail() {
    InputView.readGameCommand(this.handleGameCommand.bind(this));
  }

  handleGameCommand({ command }) {
    if (command === COMMAND.restart) {
      this.handleRestart();
    } else if (command === COMMAND.quit) {
      this.handleQuit();
    }
  }

  handleRestart() {
    this.#result.updateTryCount();
    this.#bridgeGame.retry();
    this.#history.resetHistory();
    InputView.readMoving(this.playGame.bind(this));
  }

  handleQuit() {
    OutputView.printResult(this.#history.getHistory(), this.#result.updateResult(false));
    InputView.closeView();
  }
}

module.exports = GameController;
