const OutputView = require("./OutputView");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moving, bridge, movingList) {
    const number = movingList[0].length;
    if (moving === "U") {
      if (moving === bridge[number]) {
        movingList[0].push("O");
        movingList[1].push(" ");
      } else {
        movingList[0].push("X");
        movingList[1].push(" ");
      }
    } else {
      if (moving === bridge[number]) {
        movingList[1].push("O");
        movingList[0].push(" ");
      } else {
        movingList[1].push("X");
        movingList[0].push(" ");
      }
    }

    OutputView.printMap(movingList);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
