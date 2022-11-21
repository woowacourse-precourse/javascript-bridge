const Validator = require('./Validator');
const { makeBridge } = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { ERROR_MSG } = require('./libs/constant');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  size;
  bridge = [];
  pos = [];
  try = 1;
  result = true;

  constructor(size) {
    this.size = size;
    this.validateBridgeSize();
    this.initBridge();
  }

  validateBridgeSize() {
    const isValidBridgeSize = Validator.validBridgeSize(this.size);

    if (!isValidBridgeSize) {
      throw new Error(ERROR_MSG.invalidBridgeSize);
    }

    return isValidBridgeSize;
  }

  initBridge() {
    this.bridge = makeBridge(this.size, BridgeRandomNumberGenerator.generate);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    this.validateMoveDirection(direction);
    this.pos.push(direction);
  }

  validateMoveDirection(direction) {
    const isValidMoveDirection = Validator.validMovieDirection(direction);

    if (!isValidMoveDirection) {
      throw new Error(ERROR_MSG.invalidMoveDirection);
    }

    return isValidMoveDirection;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
