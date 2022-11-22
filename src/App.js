const BridgeGame = require('./BridgeGame');
const { ERROR_NAME, QUIT } = require('./Constant/constant');
const {
  readMoving,
  end,
  readGameCommand,
  readBridgeSize,
} = require('./View/InputView');
const {
  printStart,
  printError,
  printResult,
  printMap,
} = require('./View/OutputView');

class App {
  #game;

  play() {
    printStart();
    readBridgeSize.bind(this)(this.createBridge);
  }

  createBridge(input) {
    this.tryCatch(() => {
      this.#game = new BridgeGame(input);
      readMoving.bind(this)(this.moveBridge);
    });
  }

  moveBridge(input) {
    this.tryCatch(() => {
      this.#game.move(input);
      printMap(this.#game.result);
      this.determineNextAction();
    });
  }

  determineNextAction() {
    const Move = this.#game.status;
    const NOT_END = this.#game.isNotEnd() === true;
    if (Move && !NOT_END) this.gameEnd();
    if (Move && NOT_END) readMoving.bind(this)(this.moveBridge);
    if (!Move) readGameCommand.bind(this)(this.controlGame);
  }

  controlGame(input) {
    this.tryCatch(() => {
      if (input === QUIT) this.gameEnd();
      this.#game.retry(input);
      readMoving.bind(this)(this.moveBridge);
    });
  }

  gameEnd() {
    printResult(this.#game.result, this.#game.tryCount, this.#game.status);
    end();
  }

  tryCatch(callback) {
    try {
      callback();
    } catch (err) {
      this.errorHandler(err);
    }
  }

  errorHandler(err) {
    printError(err);
    if (err.name === ERROR_NAME.BRIDGE)
      readBridgeSize.bind(this)(this.createBridge);
    if (err.name === ERROR_NAME.CONTROL)
      readGameCommand.bind(this)(this.controlGame);
    if (err.name === ERROR_NAME.MOVE) readMoving.bind(this)(this.moveBridge);
  }
}
module.exports = App;
