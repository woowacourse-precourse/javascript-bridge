const { BUTTON, BRIDGE } = require('./Utils/constant');

class BridgeGame {
  realBridge = [[], []];

  #index = 0;

  constructor(bridge, move) {
    this.bridge = bridge;
    this.moveIsWhat(move);
  }

  moveIsWhat(move) {
    if (move === BUTTON.UP) {
      this.moveIsU(move);
    }
    if (move === BUTTON.DOWN) {
      this.moveIsD(move);
    }
  }

  moveIsU(move) {
    if (this.bridge[this.#index] === move) {
      this.realBridge[0].push(BRIDGE.CORRECT);
      this.realBridge[1].push(BRIDGE.BLANK);
    }
    if (this.bridge[this.#index] !== move) {
      this.realBridge[0].push(BRIDGE.IN_CORRECT);
      this.realBridge[1].push(BRIDGE.BLANK);
    }
    this.getRealBridge();
  }

  moveIsD(move) {
    if (this.bridge[this.#index] === move) {
      this.realBridge[1].push(BRIDGE.CORRECT);
      this.realBridge[0].push(BRIDGE.BLANK);
    }
    if (this.bridge[this.#index] !== move) {
      this.realBridge[1].push(BRIDGE.IN_CORRECT);
      this.realBridge[0].push(BRIDGE.BLANK);
    }
    this.getRealBridge();
  }

  getRealBridge() {
    this.#index += 1;
    return this.realBridge;
  }

  retry(move) {
    this.realBridge[0].pop();
    this.realBridge[1].pop();
    this.#index -= 1;
    this.moveIsWhat(move);
  }
}

module.exports = BridgeGame;
