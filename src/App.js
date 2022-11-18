const MissionUtils = require('@woowacourse/mission-utils');
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
    const NOT_END = this.#game.isEnd() == true;
    const END = false;
    if (MOVE && NOT_END) return NOT_END;
    return END;
  }

  controlGame(input) {
    if (input == 'R') {
      this.#game.retry();
      readMoving.call(this, this.moveBridge, this.controlGame);
    } else {
      this.#game.statusPrint();
      end();
    }
  }
}
new App().play();
module.exports = App;
