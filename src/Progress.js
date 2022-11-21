const Validator = require("./Validator");

class Progress {
  #firstBridge = [];
  #secondBridge = [];

  success(command) {
    Validator.validateMoveCommand(command);
    command === "U" ? this.#addFirstBridge("O") : this.#addSecondBridge("O");
  }

  fail(command) {
    Validator.validateMoveCommand(command);
    command === "U" ? this.#addFirstBridge("X") : this.#addSecondBridge("X");
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
