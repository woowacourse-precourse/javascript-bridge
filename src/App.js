const BridgeGamePlay = require("./BridgeGamePlay");

class App {
  constructor() {
    this.bridgeGamePlay = new BridgeGamePlay();
  }

  play() {
    this.bridgeGamePlay.start();
  }
}

module.exports = App;
