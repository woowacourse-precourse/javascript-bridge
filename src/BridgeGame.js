const { ERROR } = require('./Messages');
const InputView = require('./InputView');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge
  #position

  constructor() {
    this.#position = -1;
    this.#bridge = null;
  }

  getBridge() {
    return this.#bridge;
  }

  setBridge(bridge) {
    this.#bridge = bridge.getBridge();
  }

  getPosition() {
    return this.#position;
  }

  setPosition(position) {
    this.#position = position;
  }

  start() {
    InputView.readBridgeSize(this);
  }

  validateMoveType(moveType) {
    const typeCheck = RegExp(/^['U' | 'D']&/);
    if (typeCheck.test(moveType))
      throw new Error(ERROR.INVALID_MOVE_TYPE);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moveType) {
    this.validateMoveType(moveType);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() { }
}

module.exports = BridgeGame;
