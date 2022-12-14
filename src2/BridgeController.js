class BridgeController {
  #printer;
  #reader;

  constructor(printer, reader) {
    this.#printer = printer;
    this.#reader = reader;
  }

  init(msg) {
    this.#printer.text(msg);
  }
}

module.exports = BridgeController;
