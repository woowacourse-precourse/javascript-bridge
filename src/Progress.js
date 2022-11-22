const { MOVE_COMMAND } = require("./core/BridgeGameCore");

class Progress {
  #upBridges;
  #downBridges;
  #factory;

  constructor() {
    this.#upBridges = [];
    this.#downBridges = [];
    this.#factory = {
      [MOVE_COMMAND.UP]: (value) => this.#addUpBridge(value),
      [MOVE_COMMAND.DOWN]: (value) => this.#addDownBridge(value),
    };
  }

  desc() {
    const upBridges = [...this.#upBridges];
    const downBridges = [...this.#downBridges];
    return [upBridges, downBridges];
  }

  success(command) {
    this.#setBridge(command, "O");
  }

  fail(command) {
    this.#setBridge(command, "X");
  }

  #setBridge(command, value) {
    this.#validate(command);
    this.#factory[command](value);
  }

  #addUpBridge(value) {
    this.#upBridges.push(value);
    this.#downBridges.push(" ");
  }

  #addDownBridge(value) {
    this.#upBridges.push(" ");
    this.#downBridges.push(value);
  }

  #validate(command) {
    if (!Object.values(MOVE_COMMAND).includes(command)) {
      throw new Error("command must be U or D.");
    }
  }
}

module.exports = Progress;
