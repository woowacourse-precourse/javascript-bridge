const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const { Console } = require('@woowacourse/mission-utils');
const { PRINTBRIDGESIZE } = require('../view/Message');
const BridgeRandomNumberGenerator = require('../model/BridgeRandomNumberGenerator');

// 명심하기! controller는 데이터를 받거나 사용자에게 동작을 받으면 model 또는 view를 변경

class BridgeProcess {
  #outputView = OutputView;
  #inputView = InputView;

  start() {
    Console.print(this.#outputView.printStart());
    this.#inputBridgeSize();
  }

  #inputBridgeSize() {
    Console.readLine(PRINTBRIDGESIZE, (bridgeSize) => {
      this.#inputView.readBridgeSize(bridgeSize) ? this.#gen() : this.#inputBridgeSize();
    });
  }

  #gen() {
    console.log(BridgeRandomNumberGenerator.generate());
  }
}
module.exports = BridgeProcess;
