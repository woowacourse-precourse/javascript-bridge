const { BRIDGE_DRAWER } = require("./constants/Messages");

class BridgeGame {
  #bridge = [];
  #nowIndex = 0;
  #upString = BRIDGE_DRAWER.START;
  #downString = BRIDGE_DRAWER.START;

  setBridge(bridge) {
    this.#bridge = bridge;
  }
  compareBridge(input) {
    const result = this.#bridge[this.#nowIndex] === input;
    this.move();
    return result;
  }
  getBridgeString() {
    return [this.#upString, this.#downString];
  }
  move() {
    this.#nowIndex += 1;
  }
  addCorrect() {
    if (this.#bridge[this.#nowIndex] === "U") {
      this.#upString += BRIDGE_DRAWER.CORRECT;
      this.#downString += BRIDGE_DRAWER.NOTHING;
    } else {
      this.#upString += BRIDGE_DRAWER.NOTHING;
      this.#downString += BRIDGE_DRAWER.CORRECT;
    }
  }
  addSeperate() {
    if (this.checkLast()) {
      this.#upString += BRIDGE_DRAWER.END;
      this.#downString += BRIDGE_DRAWER.END;
    } else {
      this.#upString += BRIDGE_DRAWER.BAR;
      this.#downString += BRIDGE_DRAWER.BAR;
    }
  }

  addWrong() {
    if (this.#bridge[this.#nowIndex] === "U") {
      this.#upString += BRIDGE_DRAWER.NOTHING + BRIDGE_DRAWER.END;
      this.#downString += BRIDGE_DRAWER.WRONG + BRIDGE_DRAWER.END;
    } else {
      this.#upString += BRIDGE_DRAWER.WRONG + BRIDGE_DRAWER.END;
      this.#downString += BRIDGE_DRAWER.NOTHING + BRIDGE_DRAWER.END;
    }
  }
  checkLast() {
    return this.#nowIndex === this.#bridge.length;
  }

  retry() {
    this.#nowIndex = 0;
    this.#upString = BRIDGE_DRAWER.START;
    this.#downString = BRIDGE_DRAWER.START;
  }
}

module.exports = BridgeGame;
