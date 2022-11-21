const { Console } = require('@woowacourse/mission-utils');
const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const {
  BRIDGE_SIZE_ERROR,
  MOVE_INPUT_ERROR,
  MIN_BRIDGE_SIZE,
  MAX_BRIDGE_SIZE,
  MOVE_UP,
  MOVE_DOWN,
} = require('./constants');
const OutputView = require('./OutputView');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  // eslint-disable-next-line consistent-return
  #bridge;

  constructor() {}

  buildBridge(size) {
    if (!this.isValidBridgeSize(size)) {
      throw new Error(BRIDGE_SIZE_ERROR);
    }
    this.#bridge = BridgeMaker.makeBridge(size, generate);
  }

  isValidBridgeSize(bridgeSize) {
    if (
      // eslint-disable-next-line no-restricted-globals
      isNaN(bridgeSize) ||
      bridgeSize < MIN_BRIDGE_SIZE ||
      bridgeSize > MAX_BRIDGE_SIZE ||
      bridgeSize === ''
    ) {
      return false;
    }
    return true;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moveInput) {
    if (!this.isValidMove(moveInput)) {
      throw new Error(MOVE_INPUT_ERROR);
    }
    //
    OutputView.printGuide(moveInput);
  }

  isValidMove(moveInput) {
    if (moveInput === MOVE_DOWN || moveInput === MOVE_UP) return true;
    return false;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
