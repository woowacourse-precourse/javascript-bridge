const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const { Console } = require('@woowacourse/mission-utils');

// 명심하기! controller는 데이터를 받거나 사용자에게 동작을 받으면 model 또는 view를 변경

class BridgeProcess {
  #outputView = OutputView;
  #inputView = InputView;

  start() {
    // 데이터 받고 있으므로 controller 역할 충실
    Console.print(this.#outputView.printStart());
    this.#inputBridgeSize();
  }

  #inputBridgeSize() {
    // 사용자에게 동작을 받아서 view 반복한다.
    Console.readLine(this.#outputView.printBridgeSize(), (bridgeSize) => {
      this.#inputView.readBridgeSize(bridgeSize);
    });
  }
}

module.exports = BridgeProcess;
