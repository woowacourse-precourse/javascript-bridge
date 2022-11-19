const { generate } = require('../BridgeRandomNumberGenerator');
const { makeBridge } = require('../BridgeMaker');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;

  constructor(size) {
    this.#bridge = makeBridge(size, generate);
    this.userBridge = [];
    this.tryCount = 1;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(square) {
    this.userBridge.push(square);
    return this;
  }

  isValidateSquare() {
    const bridgePiece = this.#bridge.slice(0, this.userBridge.length);
    return JSON.stringify(this.userBridge) === JSON.stringify(bridgePiece);
  }

  isEnd() {
    return JSON.stringify(this.userBridge) === JSON.stringify(this.#bridge);
  }

  makeMiddleBridge() {
    const upBridge = [];
    const downBridge = [];
    this.userBridge.forEach((square) => {
      if (square === 'U') {
        upBridge.push('O');
        downBridge.push(' ');
        return;
      }
      upBridge.push(' ');
      downBridge.push('O');
    });
    if (!this.isValidateSquare()) {
      if (this.userBridge[upBridge.length - 1] === 'U') {
        upBridge[upBridge.length - 1] = 'X';
        return { upBridge, downBridge };
      }
      if (this.userBridge[downBridge.length - 1] === 'D') {
        downBridge[downBridge.length - 1] = 'X';
        return { upBridge, downBridge };
      }
    }
    return { upBridge, downBridge };
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(input) {
    if (input === 'R') {
      this.tryCount += 1;
      this.userBridge = [];
      return true;
    }
    return false;
  }

  getResult() {
    const bridge = this.makeMiddleBridge();
    const result = this.isValidateSquare() ? '성공' : '실패';
    const count = this.tryCount;
    return { bridge, result, count };
  }
}

module.exports = BridgeGame;
