/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #marker = 0;

  constructor(bridge) {
    this.#bridge = bridge;
  }

  // 사용자가 칸을 이동할 때 사용하는 메서드
  move(nextStep) {
    if (nextStep === this.#bridge[this.#marker]) {
      this.#marker += 1;
      // Input, Output 사용 금지
    } else {
      // Input, Output 사용 금지
    }
  }

  getUBlock() {
    let UBlock = [];
    for (let i = 0; i < this.#marker; i++) {
      if (this.#bridge[i] === 'U') {
        UBlock.push('O');
      } else {
        UBlock.push(' ');
      }
    }
    return UBlock;
  }

  getDBlock() {
    let DBlock = [];
    for (let i = 0; i < this.#marker; i++) {
      if (this.#bridge[i] === 'D') {
        DBlock.push('O');
      } else {
        DBlock.push(' ');
      }
    }
    return DBlock;
  }

  // 사용자가 게임을 다시 시도할 때 사용하는 메서드
  retry() {}
}

module.exports = BridgeGame;
