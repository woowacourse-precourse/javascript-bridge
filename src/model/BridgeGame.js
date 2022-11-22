const { makeBridge } = require("../BridgeMaker");
const { generate } = require("../BridgeRandomNumberGenerator");
const { INPUT_ERR } = require("../constants/input.constants");
const InValidInputError = require("../error/InValidInputError");
const Validator = require("../Validator");
const BridgeResult = require("./BridgeResult");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  bridge;
  idx;
  gameResult;
  tryNum;

  constructor(size) {
    this.validate(size);
    this.bridge = makeBridge(size, generate);
    this.idx = 0;
    this.tryNum = 1;
  }

  validate(size) {
    if (!/^[0-9]+$/.test(size)) throw new InValidInputError(INPUT_ERR.NO_NUM);
    if (size < 3 || size > 20) throw new InValidInputError(INPUT_ERR.NO_RANGE);
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
    Validator.moveValidate(input);
    const isPossible = this.isPossibleMove(this.idx, input);
    this.gameResult = new BridgeResult(this.bridge, this.idx, isPossible);
    this.gameResult.printResult();
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
    this.tryNum += 1;
  }

  isEnd() {
    return this.bridge.length <= this.idx;
  }
}

module.exports = BridgeGame;
