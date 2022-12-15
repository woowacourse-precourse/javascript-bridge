const Printer = require('./Printer');
const Reader = require('./Reader');
const Bridge = require('./Bridge');

class BridgeController {
  #printer;
  #reader;
  #bridge;

  constructor() {
    this.#bridge = new Bridge(this);
  }

  init(msg) {
    this.#printer = new Printer();
    this.#reader = new Reader();

    this.#printer.text(msg);
    this.readBridege();
  }

  readBridege() {
    this.#reader.bridgSize();
  }
}

module.exports = BridgeController;
