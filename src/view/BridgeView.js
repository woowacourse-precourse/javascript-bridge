const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Validation = require('../util');
const { TYPE } = require('../constants');

class BridgeView {
  constructor() {
    this.input = InputView;
    this.output = OutputView;
  }

  getBridgeLength(printLength) {
    const validation = (length) => {
      this.inputValidation(length, printLength, TYPE.SIZE);
      this.getBridgeLength(printLength);
    }
    this.output.printStart();
    this.input.readBridgeSize(validation);
  }

  getWhereToGo(updateMove) {
    const validation = (destination) => {
      this.inputValidation(destination, updateMove, TYPE.STEP);
    }
    this.input.readMoving(validation);
  } 

  getWhatToDo(getCommand) {
    const validation = (command) => {
      this.inputValidation(command, getCommand, TYPE.RETRY);
    }
    this.input.readGameCommand(validation)
  } 
  
  printMap(map) {
    this.output.printMap(map)
  }

  printResult(isRight, tryCount, map) {
    this.output.printResult(isRight, tryCount, map)
  }

  printError(type, callback) {
    return this.output.printError(type, callback)
  }

  inputValidation(input, callback, type) {
    try {
      Validation[type](input);
      return callback(input);
    } catch (errorType) {
      this.printError(errorType);
    }
  }

}

module.exports = BridgeView;