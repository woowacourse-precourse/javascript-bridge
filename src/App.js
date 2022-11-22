const BridgeCtrl = require('./controller/BridgeCtrl');

class App {
  #control;

  constructor() {
    this.#control = new BridgeCtrl();
  }

  play() {
    this.#control.start();
  }
}

module.exports = App;
