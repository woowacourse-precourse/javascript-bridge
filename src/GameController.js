const { Console } = require('@woowacourse/mission-utils');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

class GameController {
  constructor() {
    this.inputView = InputView;
    this.outputView = OutputView;
  }

  start() {
    this.outputView.printStartMessage();
    const onDeliverySizeInputted = (brigeSize) => {
      BridgeMaker.makeBridge(Number(brigeSize), BridgeRandomNumberGenerator.generate);
    };

    this.inputView.readBridgeSize(onDeliverySizeInputted);
  }

  end() {
    Console.close();
  }
}

module.exports = GameController;
