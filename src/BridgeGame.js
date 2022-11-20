const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');
const { Console } = require('@woowacourse/mission-utils');
const Check= require('./Check');
const BridgeMaker = require('./BridgeMaker');

class BridgeGame {
  size

  constructor() {
    this.Check = new Check();
  }

  start() {
    InputView.readBridgeSize((size) => {
      // this.Check.validate(size);
      this.size = size;
      BridgeMaker.initializeBridge(size);
    })
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
