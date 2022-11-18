const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const { Console } = require('@woowacourse/mission-utils');
const { PRINTBRIDGESIZE } = require('../view/Message');
const BridgeMaker = require('../model/BridgeMaker');
const { generate } = require('../model/BridgeRandomNumberGenerator');

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
      const bridgeSizeNumber = this.#inputView.readBridgeSize(bridgeSize);
      bridgeSizeNumber ? this.#gen(bridgeSizeNumber) : this.#inputBridgeSize();
    });
  }

  #gen(bridgeSizeNumber) {
    const tt = BridgeMaker.makeBridge(bridgeSizeNumber, generate);
    console.log(tt);
  }
}
module.exports = BridgeProcess;
