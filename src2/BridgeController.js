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
    const makeBridge = this.#bridge.buildBridge.bind(this.#bridge);
    const errorCallback = this.readBridege.bind(this);
    const callback = this.selectDirection.bind(this);
    this.#reader.bridgeSize(makeBridge, errorCallback, callback);
  }

  selectDirection() {
    const callback = this.#bridge.move.bind(this.#bridge);
    const errorCallback = this.selectDirection.bind(this);
    this.#reader.direction(callback, errorCallback);
  }
}

module.exports = BridgeController;
