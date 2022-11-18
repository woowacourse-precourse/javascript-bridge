const BridgeGame = require('./BridgeGame');
const { readMoving, end, getInputs } = require('./InputView');

class App {
  #game;
  play() {
    getInputs.bind(this)(this.createBridge, this.moveBridge, this.controlGame);
  }

  createBridge(input) {
    this.#game = new BridgeGame(input);
  }

  moveBridge(input) {
    const MOVE = this.#game.move(input);
    const NOT_END = this.#game.isEnd() == true;
    if (MOVE && !NOT_END) this.gameEnd();
    return [MOVE, NOT_END];
  }

  controlGame(input) {
    if (input == 'R') {
      this.#game.retry();
      readMoving.call(this, this.moveBridge, this.controlGame);
    } else this.gameEnd();
  }
  gameEnd() {
    this.#game.statusPrint();
    end();
  }
}
new App().play();
module.exports = App;
