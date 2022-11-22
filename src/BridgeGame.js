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
    const index = movingList[0].length;
    if (moving === bridge[index]) {
      moving === "U" ? movingList[0].push("O") : movingList[1].push("O");
      moving === "U" ? movingList[1].push(" ") : movingList[0].push(" ");
    } else {
      moving === "U" ? movingList[0].push("X") : movingList[1].push("X");
      moving === "U" ? movingList[1].push(" ") : movingList[0].push(" ");
    }

    OutputView.printMap(movingList);
    return movingList;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    let moveList = [[], []];
    return moveList;
  }
}

module.exports = BridgeGame;
