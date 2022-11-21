/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #moveCount = 0;
  #playerInput;
  #nowUpBridge = [];
  #nowDownBridge = [];

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
      if (this.#playerInput === "U") {
        this.#nowUpBridge.push("O");
        this.#nowDownBridge.push(" ");
      }
      if (this.#playerInput === "D") {
        this.#nowUpBridge.push(" ");
        this.#nowDownBridge.push("X");
      }
    }
    if (this.#bridge[this.#moveCount] === "D") {
      if (this.#playerInput === "D") {
        this.#nowUpBridge.push(" ");
        this.#nowDownBridge.push("O");
      }
      if (this.#playerInput === "U") {
        this.#nowUpBridge.push("X");
        this.#nowDownBridge.push(" ");
      }
    }
  }
}

module.exports = BridgeGame;
