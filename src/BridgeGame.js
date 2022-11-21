/**
 * 다리 건너기 게임을 관리하는 클래스
 * InputView, OutputView 사용 X
 */
const { BUTTON } = require('./Utils/constant');

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
      this.realBridge[0].push('O');
      this.realBridge[1].push(' ');
    }
    if (this.bridge[this.#index] !== move) {
      this.realBridge[0].push('X');
      this.realBridge[1].push(' ');
    }
    this.getRealBridge();
  }

  moveIsD(move) {
    if (this.bridge[this.#index] === move) {
      this.realBridge[1].push('O');
      this.realBridge[0].push(' ');
    }
    if (this.bridge[this.#index] !== move) {
      this.realBridge[1].push('X');
      this.realBridge[0].push(' ');
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
