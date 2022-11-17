const { Console } = require('@woowacourse/mission-utils');
const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');
const BridgeSize = require('./available-check/BridgeSize');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

class BridgeGameControl {
  size;
  bridge;

  constructor() {
    this.bidgeSize = new BridgeSize();
  };
  
  start() {
    InputView.readBridgeSize((size) => {
      this.bidgeSize.validate(size);
      this.size = size;
      this.makeBridge();
    });
  };

  makeBridge() {
    this.bridge = BridgeMaker.makeBridge(this.size, BridgeRandomNumberGenerator.generate);
    // Console.print('ddddddd')
    // Console.print(this.bridge)
  };

};

module.exports = BridgeGameControl;
