/**
 * 다리 건너기 게임을 관리하는 클래스
 */

const Bridge = require('../model/Bridge');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const { makeBridge } = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');

class BridgeGame {
  count;
  bridge;
  constructor() {
    this.count = 0;
    this.bridge = new Bridge();
  }

  // 게임을 시작한다.
  startGame() {
    this.addCount();
    OutputView.printStart();
    InputView.readBridgeSize();
  }

  // 사용자가 게임을 새로 진행할 때마다 총 시도 횟수를 1만큼 증가시킨다.
  addCount() {
    this.count += 1;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {}

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
