const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');
const { Console } = require('@woowacourse/mission-utils');
const Check= require('./Check');
const BridgeMaker = require('./BridgeMaker');

class Gameflow {
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


}

module.exports = Gameflow;