/**
 * 다리 건너기 게임을 관리하는 클래스
 * InputView, OutputView 사용 X
 */
const { ERROR, BUTTON } = require("./Utils/constant");
class BridgeGame {
  constructor(bridge, size, move) {
    this.bridge = bridge;
    this.size = size;
    this.moveIsU(move);
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  index = 0;
  realBridge = [[], []];

  moveIsU(move) {
    this.move = move;
    if (![BUTTON.UP, BUTTON.DOWN].includes(this.move)) {
      throw new Error(ERROR.MOVE);
    }
    if (this.move === BUTTON.UP) {
      if (this.bridge[this.index] === this.move) {
        this.realBridge[0].push("O");
        this.realBridge[1].push(" ");
      }
      if (this.bridge[this.index] !== this.move) {
        this.realBridge[0].push("X");
        this.realBridge[1].push(" ");
      }
      this.getRealBridge();
    }
    if (this.move === BUTTON.DOWN) {
      this.moveIsD(this.move);
    }
  }

  moveIsD(move) {
    this.move = move;
    if (this.bridge[this.index] === this.move) {
      this.realBridge[1].push("O");
      this.realBridge[0].push(" ");
    }
    if (this.bridge[this.index] !== this.move) {
      this.realBridge[1].push("X");
      this.realBridge[0].push(" ");
    }
    this.getRealBridge();
  }

  getRealBridge() {
    this.index += 1;
    return this.realBridge;
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(move) {
    this.realBridge[0].pop();
    this.realBridge[1].pop();
    this.index -= 1;
    this.moveIsU(move);
  }
}

module.exports = BridgeGame;
