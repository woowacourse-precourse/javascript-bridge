const OutputView = require("./view/OutputView");

class BridgeGame {
  #bridge;
  #moveCount = 0;
  #playerInput;
  #nowUpBridge = [];
  #nowDownBridge = [];
  #tryCount = 1;

  constructor(bridge) {
    this.#bridge = bridge;
    this.outputView = OutputView;
  }

  get nowBridge() {
    return [this.#nowUpBridge, this.#nowDownBridge];
  }

  get tryCount() {
    return this.#tryCount;
  }

  move(playerInput) {
    this.#playerInput = playerInput;
    this.nowBridgeState();
    this.outputView.printMap([this.#nowUpBridge, this.#nowDownBridge]);
    this.#moveCount++;
  }

  isGameEnd() {
    if (this.#moveCount === this.#bridge.length) {
      return true;
    }
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
