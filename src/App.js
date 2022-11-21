const BridgeGame = require('./BridgeGame');
const ValidateInput = require('./ValidateInput');
const { readMoving, end, conectStart } = require('./View/InputView');
const { printGameStart } = require('./View/OutputView');
const RETRY = 'R';

class App {
  #game;

  constructor() {
    printGameStart();
  }

  play() {
    conectStart.bind(this)([
      this.makeBridge,
      this.moveBridge,
      this.controlGame,
    ]);
  }

  makeBridge(size) {
    ValidateInput.validate(size);
    this.#game = new BridgeGame(size);
  }

  moveBridge(direction) {
    ValidateInput.validateDirection(direction);
    const isMove = this.#game.move(direction);
    const isEnd = this.#game.isEnd();
    if (isMove && !isEnd) {
      this.gameEnd();
    }
    return [isMove, isEnd];
  }

  controlGame(command) {
    ValidateInput.validateControl(command);
    if (command === RETRY) {
      this.#game.retry();
      readMoving.call(this, [this.moveBridge, this.controlGame]);
    } else {
      this.gameEnd();
    }
  }

  gameEnd() {
    this.#game.finalPrint();
    end();
  }
}

new App().play();
module.exports = App;
