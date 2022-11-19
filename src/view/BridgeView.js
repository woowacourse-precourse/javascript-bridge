const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Validation = require('../util');

class BridgeView {
  
  constructor() {
    this.input = InputView;
    this.output = OutputView;
    this.output.printStart();
  }
  
}

module.exports = BridgeView;