// const { Console } = require('@woowacourse/mission-utils');
const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');
const BridgeSize = require('./available-check/BridgeSize');

class BridgeGameControl {
  size

  constructor() {
    this.bidgeSize = new BridgeSize();
  }
  
  start() {
    InputView.readBridgeSize((size) => {
      this.bidgeSize.validate(size);
      this.size = size;
      // Console.print('DJDKJFDKJALKDJDL');
    });
  };

};

module.exports = BridgeGameControl;
