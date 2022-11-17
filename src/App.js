const BridgeGame = require('./BridgeGame');
const { readBridgeSize } = require('./InputView');

class App {
  #game;
  play() {
    readBridgeSize.call(this, this.createBridge, this.second, this.third);
  }
  createBridge(input) {
    this.#game = new BridgeGame(input);
  }
  second(input) {}
  third(input) {}
}
new App().play();
module.exports = App;
