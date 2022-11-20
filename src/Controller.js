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
      Validator.validateNumber(input);
      Validator.validateNumberInRange(input);
      this.model.setBridgeSize(parseInt(input, 10));
      this.model.setComputerBridgeArr(BridgeMaker.makeBridge(parseInt(input, 10), generate));
      this.inputMoving();
    };
    InputView.readBridgeSize(readBridgeSizeCallback);
  }

  inputMoving() {
    const callback = (input, index) => {
      Validator.validateUpDown(input);
      const computerBridgeArr = this.model.getComputerBridgeArr();
      const game = new BridgeGame();
      game.move(input, computerBridgeArr[index], this.model);
      OutputView.printMap(this.model);
    };
    InputView.readMoving(callback, this.model, 0);
  }
}
module.exports = Controller;
