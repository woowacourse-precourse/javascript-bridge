const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const {
  BRIDGE,
  DECIMAL,
  ATTEMPT_START,
  ATTEMPT_INCREASE,
} = require("./constants/data");
const { OUTPUT_MESSAGE } = require("./constants/message");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  movingLog;
  attemptNumber;
  bridge;
  constructor() {
    this.movingLog = { upper: [], lower: [] };
    this.attemptNumber = ATTEMPT_START;
    this.bridge = [];
  }

  makeBridge(length) {
    const bridge = BridgeMaker.makeBridge(
      parseInt(length, DECIMAL),
      BridgeRandomNumberGenerator.generate
    );
    this.bridge = bridge;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moveInput) {
    const currentZone = this.movingLog.upper.length;
    if (moveInput === BRIDGE.UPPER_ZONE)
      return this.moveUpper(moveInput, currentZone);
    if (moveInput === BRIDGE.LOWER_ZONE)
      return this.moveLower(moveInput, currentZone);
  }

  /**
   * 유저가 위 칸으로 이동할 때의 메서드
   */
  moveUpper(moveInput, currentZone) {
    if (moveInput === this.bridge[currentZone]) {
      this.movingLog.upper.push(BRIDGE.RIGHT_ZONE);
      this.movingLog.lower.push(OUTPUT_MESSAGE.BLANK);
    }
    if (moveInput !== this.bridge[currentZone]) {
      this.movingLog.upper.push(BRIDGE.WRONG_ZONE);
      this.movingLog.lower.push(OUTPUT_MESSAGE.BLANK);
    }
  }
  /**
   * 유저가 아래 칸으로 이동할 때의 메서드
   */
  moveLower(moveInput, currentZone) {
    if (moveInput === this.bridge[currentZone]) {
      this.movingLog.lower.push(BRIDGE.RIGHT_ZONE);
      this.movingLog.upper.push(OUTPUT_MESSAGE.BLANK);
    }
    if (moveInput !== this.bridge[currentZone]) {
      this.movingLog.lower.push(BRIDGE.WRONG_ZONE);
      this.movingLog.upper.push(OUTPUT_MESSAGE.BLANK);
    }
  }

  /**
   * 다리를 잘못 건넜는지 판단하는 메서드
   */
  isWrongZone() {
    const isWrong = this.movingLog.upper
      .concat(this.movingLog.lower)
      .includes(BRIDGE.WRONG_ZONE);
    return isWrong;
  }

  /**
   * 다리를 끝까지 건넜는지 판단하는 메서드
   */
  isReached() {
    const isReached = this.movingLog.upper.length === this.bridge.length;
    return isReached;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.movingLog = { upper: [], lower: [] };
    this.attemptNumber += ATTEMPT_INCREASE;
  }

  getLog() {
    return this.movingLog;
  }

  getAttmeptNumber() {
    return this.attemptNumber;
  }
}

module.exports = BridgeGame;
