const OutputView = require("./OutputView");

class Bridge {
  #answerBridge;
  #upBridge = [];
  #downBridge = [];

  constructor(bridge) {
    this.#answerBridge = bridge;
  }

  move(command, stage) {
    if (this.#answerBridge[stage] === command) {
      this.passableBridge(command);
      return [this.#upBridge, this.#downBridge, true];
    }
    this.unPassableBridge(command);
    return [this.#upBridge, this.#downBridge, false];
  }

  passableBridge(command) {
    switch (command) {
      case "U": {
        this.#upBridge.push(" O ");
        this.#downBridge.push("   ");
        break;
      }
      case "D": {
        this.#upBridge.push("   ");
        this.#downBridge.push(" O ");
        break;
      }
    }
  }
  unPassableBridge(command) {
    switch (command) {
      case "U": {
        this.#upBridge.push(" X ");
        this.#downBridge.push("   ");
        break;
      }
      case "D": {
        this.#upBridge.push("   ");
        this.#downBridge.push(" X ");
        break;
      }
    }
    //gameOver()
  }

  setRetry() {
    this.#downBridge = [];
    this.#upBridge = [];
  }

  getResult() {
    return [this.#upBridge, this.#downBridge];
  }

  isFinal(stage) {
    return this.#answerBridge.length === stage;
  }
}

module.exports = Bridge;
