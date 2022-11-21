const { makeBridge } = require("../BridgeMaker");
const { generate } = require("../BridgeRandomNumberGenerator");
const { BRIDGE } = require("../constants/bridge.constants");
const { INPUT_ERR } = require("../constants/input.constants");
const InValidInputError = require("../error/InValidInputError");
const BridgeResult = require("./BridgeResult");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  bridge;
  idx;
  result;
  try;

  constructor(size) {
    this.validate(size);
    this.bridge = makeBridge(size, generate);
    this.idx = 0;
    this.try = 1;
  }

  validate(size) {
    if (!/^[0-9]+$/.test(size)) throw new InValidInputError(INPUT_ERR.NO_NUM);
    if (size < 3 || size > 20) throw new InValidInputError(INPUT_ERR.NO_RANGE);
  }

  moveValidate(direction) {
    if (direction !== BRIDGE.UP && direction !== BRIDGE.DOWN)
      throw new InValidInputError(INPUT_ERR.DIRECTION_ERR);
  }

  endValidate(input) {
    if (input !== "R" && input !== "Q")
      throw new InValidInputError(INPUT_ERR.CONTROL_ERR);
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
    this.idx += 1;
    return isPossible;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.idx = 0;
    this.try += 1;
  }

  isEnd() {
    return this.bridge.length <= this.idx;
  }
}

module.exports = BridgeGame;
