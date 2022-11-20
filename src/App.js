const BridgeGame = require('./BridgeGame');
const { RETRY, ERROR_NAME } = require('./Constant/constant');
const BridgeValidation = require('./Validation/BridgeValidation');
const ControlValidation = require('./Validation/ControlValidation');
const MoveValidation = require('./Validation/MoveValidation');
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
    this.errorHandler(() => {
      BridgeValidation(input);
      this.#game = new BridgeGame(input);
      readMoving.bind(this)(this.moveBridge);
    });
  }

  moveBridge(input) {
    this.errorHandler(() => {
      MoveValidation(input);
      this.#game.move(input);
      printMap(this.#game.result);
      this.determineNextAction();
    });
  }

  determineNextAction() {
    const Move = this.#game.status;
    const NOT_END = this.#game.isEnd() === true;
    if (Move && !NOT_END) this.gameEnd();
    if (Move && NOT_END) readMoving.bind(this)(this.moveBridge);
    if (!Move) readGameCommand.bind(this)(this.controlGame);
  }

  controlGame(input) {
    this.errorHandler(() => {
      ControlValidation(input);
      if (input === RETRY) {
        this.#game.retry();
        readMoving.bind(this)(this.moveBridge);
      } else this.gameEnd();
    });
  }

  gameEnd() {
    printResult(this.#game.result, this.#game.tryCount, this.#game.status);
    end();
  }

  errorHandler(callback) {
    try {
      callback();
    } catch (err) {
      printError(err);
      if (err.name === ERROR_NAME.BRIDGE)
        readBridgeSize.bind(this)(this.createBridge);
      if (err.name === ERROR_NAME.CONTROL)
        readGameCommand.bind(this)(this.controlGame);
      if (err.name === ERROR_NAME.MOVE) readMoving.bind(this)(this.moveBridge);
    }
  }
}
new App().play();
module.exports = App;
