const InputView = require("./InputView");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #upperTrack = [];
  #lowerTrack = [];
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  move(moving, block) {
    if (moving !== "U" || moving !== "D") throw "U 또는 D가 아님";
    if (moving === block) return true;
    return false;
  }

  printOX(mark) {
    if (mark == true) return " O ";
    return " X ";
  }

  markTrack(moving, bool) {
    if (moving === "U") {
      this.#upperTrack = this.printOX(bool);
      this.#lowerTrack = "   ";
    }
    this.#upperTrack = "   ";
    this.#lowerTrack = this.printOX(bool);
  }

  constructMap() {}

  printCurrent(moving, bool) {
    this.markTrack(moving, bool);
    this.constructMap();
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
