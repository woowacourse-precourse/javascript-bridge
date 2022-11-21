const WinningBridge = require('./WinningBridge');
const CurrBridge = require('./CurrBridge');
const Validation = require('./utils/Validation');
const { ONE_TIME } = require('./utils/constants');
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

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  validateDirection(direction) {
    this.currBridge.validate(direction);
  }

  move(direction) {
    const CAN_MOVE = this.currBridge.canMove(direction, this.winningBridge);

    this.currBridge.makeBridge(direction, CAN_MOVE);
    const [UPPER_BRIDGE, LOWER_BRIDGE] = this.currBridge.getBridge();
    return [CAN_MOVE, UPPER_BRIDGE, LOWER_BRIDGE];
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

  getResult() {
    const [UPPER_BRIDGE, LOWER_BRIDGE] = this.currBridge.getBridge();
    return [this.#retryingCount, UPPER_BRIDGE, LOWER_BRIDGE];
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
