const MissionUtils = require("@woowacourse/mission-utils");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor() {
    this.bridgeSize = null;
    this.bridgeMap = {
      U: [],
      D: [],
    };
    this.tryCount = 1;
  }

  setBridge(size) {
    this.bridgeSize = size;
  }

  getBridgeMap() {
    return this.bridgeMap;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moveLetter) {
    this.drawMap(moveLetter);
    Console.print(
      `[ ${this.bridgeMap.U.join(" | ")} ]\n[ ${this.bridgeMap.D.join(
        " | "
      )} ]\n`
    );
  }

  drawMap(moveLetter) {
    const currentIndex = this.bridgeMap.U.length;
    const checkRightSpace =
      this.bridgeSize[currentIndex] === moveLetter ? "O" : "X";
    this.bridgeMap[moveLetter].push(checkRightSpace);
    const otherCase = moveLetter === "U" ? "D" : "U";
    this.bridgeMap[otherCase].push(" ");
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
