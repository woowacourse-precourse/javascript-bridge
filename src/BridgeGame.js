const { BRIDGE_DRAWER } = require("./constants/messages");

class BridgeGame {
  #bridge = [];
  #nowIndex = 0;
  #tryCount = 1;
  #up = [];
  #down = [];

  setBridge(bridge) {
    this.#bridge = bridge;
  }
  compareBridge(input) {
    const result = this.#bridge[this.#nowIndex] === input;
    return result;
  }
  getNowIndex() {
    return this.#nowIndex;
  }
  getBridgeString() {
    const upString = BRIDGE_DRAWER.START + this.#up.join(BRIDGE_DRAWER.BAR) + BRIDGE_DRAWER.END;
    const downString = BRIDGE_DRAWER.START + this.#down.join(BRIDGE_DRAWER.BAR) + BRIDGE_DRAWER.END;
    return [upString, downString];
  }
  getTryCount() {
    return this.#tryCount;
  }
  move() {
    this.#nowIndex += 1;
  }
  addCorrectPosition() {
    if (this.#bridge[this.#nowIndex] === "U") {
      this.#up.push(BRIDGE_DRAWER.CORRECT);
      this.#down.push(BRIDGE_DRAWER.NOTHING);
    } else {
      this.#up.push(BRIDGE_DRAWER.NOTHING);
      this.#down.push(BRIDGE_DRAWER.CORRECT);
    }
    this.move();
  }
  addWrongPosition() {
    if (this.#bridge[this.#nowIndex] === "U") {
      this.#up.push(BRIDGE_DRAWER.NOTHING);
      this.#down.push(BRIDGE_DRAWER.WRONG);
    } else {
      this.#up.push(BRIDGE_DRAWER.WRONG);
      this.#down.push(BRIDGE_DRAWER.NOTHING);
    }
  }
  checkLast() {
    return this.#nowIndex === this.#bridge.length;
  }
  retry() {
    this.#tryCount += 1;
    this.#nowIndex = 0;
    this.#up = [];
    this.#down = [];
  }
}

module.exports = BridgeGame;
