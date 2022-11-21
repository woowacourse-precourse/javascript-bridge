const WinningBridge = require('./WinningBridge');
const CurrBridge = require('./CurrBridge');
const Validation = require('../utils/Validation');
const { ONE_TIME } = require('../utils/constants');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #retryingCount = ONE_TIME;

  constructor() {
    this.winningBridge = new WinningBridge();
    this.currBridge = new CurrBridge();
  }

  validateSize(size) {
    this.winningBridge.validate(size);
  }

  makeWinningBridge(size) {
    this.winningBridge.makeWinningBridge(size);
  }

  validateDirection(direction) {
    this.currBridge.validate(direction);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  canMove(direction) {
    return this.currBridge.canMove(direction, this.winningBridge);
  }

  move(direction, CAN_MOVE) {
    this.currBridge.move(direction, CAN_MOVE);
  }

  isLastStage() {
    return this.currBridge.isLast(this.winningBridge);
  }

  validateCommand(command) {
    Validation.checkBlank(command);
    Validation.checkStringType(command);
    Validation.checkUpperCaseOfCommand(command);
    Validation.checkValidCommand(command);
  }

  getRetryingCount() {
    return this.#retryingCount;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#retryingCount += ONE_TIME;
    this.currBridge.delete();
  }
}

module.exports = BridgeGame;
