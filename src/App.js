const BridgeGameProceed = require('./BridgeGameProceed');

class App {
  #bridgeGameProceed;

  constructor() {
    this.#bridgeGameProceed = new BridgeGameProceed();
  }

  play() {
    this.#bridgeGameProceed.start();
  }
}

module.exports = App;
