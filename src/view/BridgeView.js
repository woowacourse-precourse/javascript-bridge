const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Validation = require('../util');
const { TYPE } = require('../constants');

class BridgeView {
  constructor() {
    this.input = InputView;
    this.output = OutputView;
    this.output.printStart();
  }

  getBridgeLength(printLength) {
    const validation = (length) => {
      this.inputValidation(length, printLength, TYPE.SIZE);
    }
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

  printError(type) {
    return this.output.printError(type)
  }

  inputValidation(input, callback, type) {
    try {
      Validation[type](input);
      return callback(input);
    } catch (err) {
      const fnName = this.printError(err);
      return this[fnName](callback);
    }
  }

}

module.exports = BridgeView;