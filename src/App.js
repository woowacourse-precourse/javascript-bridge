const BridgeGame = require('./BridgeGame');
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
    try {
      BridgeValidation(input);
      this.#game = new BridgeGame(input);
      readMoving.bind(this)(this.moveBridge);
    } catch (err) {
      printError(err);
      readBridgeSize.bind(this)(this.createBridge);
    }
  }

  moveBridge(input) {
    try {
      MoveValidation(input);
      const MOVE = this.#game.move(input);
      printMap(this.#game.result);
      const NOT_END = this.#game.isEnd() == true;
      if (MOVE && !NOT_END) this.gameEnd();
      if (MOVE && NOT_END) readMoving.bind(this)(this.moveBridge);
      if (!MOVE) readGameCommand.bind(this)(this.controlGame);
    } catch (err) {
      printError(err);
      readMoving.bind(this)(this.moveBridge);
    }
  }

  controlGame(input) {
    try {
      ControlValidation(input);
      if (input == 'R') {
        this.#game.retry();
        readMoving.bind(this)(this.moveBridge);
      } else this.gameEnd();
    } catch (err) {
      printError(err);
      readGameCommand.bind(this)(this.controlGame);
    }
  }

  gameEnd() {
    printResult(this.#game.result, this.#game.tryCount, this.#game.status);
    end();
  }
}
new App().play();
module.exports = App;
