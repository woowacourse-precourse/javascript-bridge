/**
 * 다리 건너기 게임을 관리하는 클래스
 */
const InputView = require("./view/InputView");
class BridgeGame {
  UP = [];
  DOWN = [];
  IDX = 0;
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(bridge, playerMove) {
    const { up, down, compareResult } = this.compare(
      bridge,
      playerMove,
      this.IDX
    );
    if (compareResult === "O") {
      this.isCorrect(up, down);
      return { up: this.UP, down: this.DOWN, compareResult, idx: this.IDX };
    }

    return {
      up: [...this.UP, up],
      down: [...this.DOWN, down],
      compareResult,
      idx: this.IDX,
    };
  }
  compare(bridge, playerMove, idx) {
    if (bridge[idx] === "U") {
      if (bridge[idx] === playerMove)
        return { up: "O", down: " ", compareResult: "O" };

      return { up: "X", down: " ", compareResult: "X" };
    } else {
      if (bridge[idx] === playerMove)
        return { up: " ", down: "O", compareResult: "O" };

      return { up: " ", down: "X", compareResult: "X" };
    }
  }
  isCorrect(up, down) {
    this.UP.push(up);
    this.DOWN.push(down);
    this.IDX = this.IDX + 1;
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(bridge) {
    InputView.readMoving(bridge);
  }
}

module.exports = BridgeGame;
