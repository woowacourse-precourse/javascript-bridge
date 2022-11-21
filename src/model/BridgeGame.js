const { makeBridge } = require("../BridgeMaker");
const { generate } = require("../BridgeRandomNumberGenerator");
const { BRIDGE } = require("../constants/bridge.constants");
const MOVE = require("../constants/move.constants");
const InValidInputError = require("../error/InValidInputError");
const BridgeResult = require("./BridgeResult");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  bridge;
  idx;
  result;

  constructor(size) {
    this.validate(size);
    this.bridge = makeBridge(size, generate);
    this.idx = 0;
  }

  validate(size) {
    if (!/^[0-9]+$/.test(size)) throw new InValidInputError(BRIDGE.NO_NUM);
    if (size < 3 || size > 20) throw new InValidInputError(BRIDGE.NO_RANGE);
  }

  moveValidate(direction) {
    if (direction !== "U" && direction !== "D")
      throw new InValidInputError(MOVE.DIRECTION);
  }

  isPossibleMove(idx, direction) {
    return this.bridge[idx] === direction;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(input) {
    this.moveValidate(input);
    const isPossible = this.isPossibleMove(this.idx, input);
    this.result = new BridgeResult(this.bridge, this.idx, isPossible);
    this.result.printMiddleResult();
    return isPossible;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
