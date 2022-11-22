const BridgeProcess = require('./controller/BridgeProcess');

class App {
  #bridgeProcess = new BridgeProcess();

  play() {
    this.#bridgeProcess.start();
  }
}

module.exports = App;
