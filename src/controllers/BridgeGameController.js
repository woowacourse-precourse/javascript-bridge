const { Console } = require('@woowacourse/mission-utils');
const InputView = require('../views/InputView');

class BridgeGameController {
  start() {
    Console.print('다리 건너기 게임을 시작합니다.\n');
    InputView.readBridgeSize(this.handleInputSize);
  }
}

module.exports = BridgeGameController;
