const BridgeGame = require('./BridgeGame');
const { readBridgeSize, readMoving, end } = require('./InputView');

class App {
  #game;
  play() {
    readBridgeSize.call(
      this,
      this.createBridge,
      this.moveBridge,
      this.controlGame
    );
  }

  createBridge(input) {
    this.#game = new BridgeGame(input);
  }

  moveBridge(input) {
    const MOVE = this.#game.move(input);
    const END = false;
    if (MOVE) {
      const END_CHECK = this.#game.isEnd();
      if (!END_CHECK) this.#game.statusPrint();
      return END_CHECK;
    }
    this.#game.statusPrint();
    return END;
  }

  controlGame(input) {
    if (input == 'R') {
      this.#game.retry();
      readMoving.call(this, this.moveBridge, this.controlGame);
    } else {
      end();
    }
  }
}
new App().play();
module.exports = App;
