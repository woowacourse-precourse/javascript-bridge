/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #moveCount = 0;
  #playerInput;
  #nowUpBridge = [];
  #nowDownBridge = [];
  #tryCount = 1;

  constructor(bridge) {
    this.#bridge = bridge;
  }

  haveBridge() {
    if (this.#playerInput === this.#bridge[this.#moveCount - 1]) {
      return true;
    }
  }

  nowBridgeState() {
    if (this.#bridge[this.#moveCount] === "U") {
      this.makeUpBridgeState();
    }
    if (this.#bridge[this.#moveCount] === "D") {
      this.makeDownBridgeState();
    }
  }

  makeUpBridgeState() {
    if (this.#playerInput === "U") {
      this.#nowUpBridge.push("O");
      this.#nowDownBridge.push(" ");
    }
    if (this.#playerInput === "D") {
      this.#nowUpBridge.push(" ");
      this.#nowDownBridge.push("X");
    }
  }

  makeDownBridgeState() {
    if (this.#playerInput === "D") {
      this.#nowUpBridge.push(" ");
      this.#nowDownBridge.push("O");
    }
    if (this.#playerInput === "U") {
      this.#nowUpBridge.push("X");
      this.#nowDownBridge.push(" ");
    }
  }

  retry() {
    this.#moveCount = 0;
    this.#nowUpBridge = [];
    this.#nowDownBridge = [];
    this.#tryCount++;
  }
}

module.exports = BridgeGame;
