/**
 * 다리 건너기 게임을 관리하는 클래스
 */

const Bridge = require('../model/Bridge');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class BridgeGame {
  count;
  bridge;
  constructor() {
    this.count = 0;
    this.bridge = new Bridge();
  }

  /**
   * 총 시도 횟수 +1만큼 증가시키는 메서드
   */
  addCount() {
    this.count += 1;
  }

  /**
   * 다리 길이만큼 다리를 생성하는 메서드
   * @param {number} bridgeSize 다리 길이
   */
  buildBridge(bridgeSize) {
    this.bridge.setBridge(bridgeSize);
    console.log(this.bridge);
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

  /**
   * 사용자가 게임을 새로 진행할 때마다 총 시도 횟수를 1만큼 증가시킨다.
   */
}

module.exports = BridgeGame;
