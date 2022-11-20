const Model = require('./Model');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Validator = require('./Validator');
const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');

class Controller {
  constructor() {
    this.model = new Model();
  }

  startGame() {
    OutputView.printGameStart();
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    const readBridgeSizeCallback = (input) => {
      Validator.validateNumber(input);
      Validator.validateNumberInRange(input);
      const num = parseInt(input, 10);
      this.model.setComputerBridgeArr(BridgeMaker.makeBridge(num, generate));
    };
    InputView.readBridgeSize(readBridgeSizeCallback);
  }
}
module.exports = Controller;
