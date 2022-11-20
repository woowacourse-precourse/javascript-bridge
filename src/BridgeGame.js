const { BRIDGE } = require("./constants/data");
const OutputView = require("./OutputView");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  movingLog;
  constructor() {
    this.movingLog = { upper: [], lower: [] };
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(userInput, bridge) {
    const currentZone = this.movingLog.upper.length;
    if (userInput === BRIDGE.UPPER_ZONE)
      return this.moveUpper(userInput, bridge, currentZone);
    return this.moveLower(userInput, bridge, currentZone);
  }

  /**
   * 유저가 위 칸으로 이동할 때의 메서드
   */
  moveUpper(userInput, bridge, currentZone) {
    if (userInput === bridge[currentZone]) {
      this.movingLog.upper.push(BRIDGE.RIGHT_ZONE);
      this.movingLog.lower.push(BRIDGE.WRONG_ZONE);
    }
    if (userInput !== bridge[currentZone]) {
      this.movingLog.upper.push(BRIDGE.WRONG_ZONE);
      this.movingLog.lower.push(BRIDGE.RIGHT_ZONE);
    }
    return this.printCurrentBridge();
  }
  /**
   * 유저가 아래 칸으로 이동할 때의 메서드
   */
  moveLower(userInput, bridge, currentZone) {
    if (userInput === bridge[currentZone]) {
      this.movingLog.lower.push(BRIDGE.RIGHT_ZONE);
      this.movingLog.upper.push(BRIDGE.WRONG_ZONE);
    }
    if (userInput !== bridge[currentZone]) {
      this.movingLog.lower.push(BRIDGE.WRONG_ZONE);
      this.movingLog.upper.push(BRIDGE.RIGHT_ZONE);
    }
    return this.printCurrentBridge();
  }

  /**
   * 현재 다리 상황을 출력하는 메서드
   */
  printCurrentBridge() {
    return OutputView.printMap(this.movingLog);
  }

  /**
   * 다리를 잘못 건넜는지 판단하는 메서드
   */
  isWrongZone() {
    if (
      this.movingLog.upper
        .concat(this.movingLog.lower)
        .includes(BRIDGE.WRONG_ZONE)
    )
      return true;
    return false;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.movingLog = { upper: [], lower: [] };
  }
}

module.exports = BridgeGame;
