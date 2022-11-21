const {
  MOVE_COMMAND: { UP },
} = require("./core/BridgeGameCore");

class Progress {
  #firstBridge = [];
  #secondBridge = [];

  success(command) {
    command === UP ? this.#addFirstBridge("O") : this.#addSecondBridge("O");
  }

  fail(command) {
    command === UP ? this.#addFirstBridge("X") : this.#addSecondBridge("X");
  }

  desc() {
    const firstBridge = `[ ${this.#firstBridge.join(" | ")} ]`;
    const secondBridge = `[ ${this.#secondBridge.join(" | ")} ]`;
    return { firstBridge, secondBridge };
  }

  #addFirstBridge(value) {
    this.#firstBridge.push(value);
    this.#secondBridge.push(" ");
  }

  #addSecondBridge(value) {
    this.#firstBridge.push(" ");
    this.#secondBridge.push(value);
  }
}

module.exports = Progress;
