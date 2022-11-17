const BridgeGame = require('./BridgeGame');
const { readBridgeSize } = require('./InputView');

class App {
  #game;
  play() {
    readBridgeSize.call(this, this.createBridge, this.moveBridge, this.third);
  }

  createBridge(input) {
    this.#game = new BridgeGame(input);
  }

  moveBridge(input) {
    const MOVE = this.#game.move(input);
    const END_CHECK = this.#game.isEnd();
    const END = !END_CHECK;
    if (MOVE) {
      return END_CHECK;
    }
    return END;
  }

  third(input) {}
}
new App().play();
module.exports = App;
