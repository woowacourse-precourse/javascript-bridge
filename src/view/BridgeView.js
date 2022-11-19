const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Validation = require('../util');

class BridgeView {
  
  constructor() {
    this.input = InputView;
    this.output = OutputView;
    this.output.printStart();
  }

  getBridgeLength(printLength) {
    const validation = (length) => {
      try {
        Validation.isRightSize(length);
        return printLength(length);
      } catch (err) {
        this.printError(err);
        this.input.readBridgeSize(validation);
      }
    }
    this.input.readBridgeSize(validation);
  }

  getWhereToGo(updateMove) {
    const validation = (destination) => {
      try {
        Validation.isRightStep(destination);
        return updateMove(destination);
      } catch (err) {
        this.printError(err);
        this.input.readMoving(validation);
      }
    }
    this.input.readMoving(validation);
  } 

  printError(type) {
    this.output.printError(type)
  }

}

module.exports = BridgeView;