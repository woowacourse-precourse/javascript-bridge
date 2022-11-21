const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { BRIDGE } = require("./constants/data");
const OutputView = require("./OutputView");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  movingLog;
  attemptNumber;
  bridge;

  constructor() {
    this.movingLog = { upper: [], lower: [] };
    this.attemptNumber = 1;
    this.bridge = [];
  }
  makeBridge(length) {
    const bridge = BridgeMaker.makeBridge(
      parseInt(length, 10),
      BridgeRandomNumberGenerator.generate
    );
    this.bridge = bridge;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(userInput) {
    const currentZone = this.movingLog.upper.length;
    if (userInput === BRIDGE.UPPER_ZONE)
      return this.moveUpper(userInput, currentZone);
    if (userInput === BRIDGE.LOWER_ZONE)
      return this.moveLower(userInput, currentZone);
  }

  /**
   * 유저가 위 칸으로 이동할 때의 메서드
   */
  moveUpper(userInput, currentZone) {
    if (userInput === this.bridge[currentZone]) {
      this.movingLog.upper.push(BRIDGE.RIGHT_ZONE);
      this.movingLog.lower.push(" ");
    }
    if (userInput !== this.bridge[currentZone]) {
      this.movingLog.upper.push(BRIDGE.WRONG_ZONE);
      this.movingLog.lower.push(" ");
    }
  }
  /**
   * 유저가 아래 칸으로 이동할 때의 메서드
   */
  moveLower(userInput, currentZone) {
    if (userInput === this.bridge[currentZone]) {
      this.movingLog.lower.push(BRIDGE.RIGHT_ZONE);
      this.movingLog.upper.push(" ");
    }
    if (userInput !== this.bridge[currentZone]) {
      this.movingLog.lower.push(BRIDGE.WRONG_ZONE);
      this.movingLog.upper.push(" ");
    }
  }
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
   * 다리를 끝까지 건넜는지 판단하는 메서드
   */
  isReached() {
    if (this.movingLog.upper.length === this.bridge.length) return true;
    return false;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.movingLog = { upper: [], lower: [] };
    this.attemptNumber += 1;
  }

  getLog() {
    return this.movingLog;
  }

  getAttmeptNumber() {
    return this.attemptNumber;
  }
}

module.exports = BridgeGame;
