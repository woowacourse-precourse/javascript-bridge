const Model = require('./Model');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Validator = require('./Validator');
const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');

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
      const num = parseInt(input, 10);
      this.model.setBridgeSize(num);
      this.model.setComputerBridgeArr(BridgeMaker.makeBridge(num, generate));
      return this.inputMoving();
    };
    InputView.readBridgeSize(readBridgeSizeCallback);
  }

  inputMoving() {
    const callback = (input, index) => {
      Validator.validateUpDown(input);
      const computerBridgeArr = this.model.getComputerBridgeArr();
      const OX = input === computerBridgeArr[index] ? ' O ' : ' X ';
      if (OX === ' X ') return InputView.readGameCommand(this.inputGameCommandCallback);
      BridgeGame.move(input, OX, this.model);
      return OutputView.printMap(this.model);
    };
    InputView.readMoving(callback, this.model, 0);
  }
}
module.exports = Controller;
