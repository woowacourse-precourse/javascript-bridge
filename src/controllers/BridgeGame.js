const Bridge = require('../models/Bridge');
const Result = require('../models/Result');
const InputView = require('../views/InputView');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  bridge;
  try;
  index;
  answer;
  result;

  constructor(size) {
    this.bridge = new Bridge(size);
    this.try = 1;
    this.index = 0;
    this.answer = [];

    console.log(this.bridge); // ! remove
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(input) {
    const canMoveForward = this.bridge.canMoveForward(this.index, input);

    this.result = new Result(this.bridge, this.index, canMoveForward);
    this.result.print();
    this.index += 1;

    return canMoveForward;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.index = 0;
    this.try += 1;
  }

  isGameEnd() {
    return this.bridge.bridgeArr.length <= this.index;
  }

  gameEnd() {
    InputView.close();
  }

  printResult() {
    this.result.printResult(this.try);
  }
}

module.exports = BridgeGame;
