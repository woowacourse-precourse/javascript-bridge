const Model = require('./Model');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');
const Validator = require('./Validator');
const { SUCCESS, FAIL, QUIT, CROSS_OR_NOT } = require('./constants');

class Controller {
  constructor() {
    this.model = new Model();
    this.inputView = InputView;
    this.outputView = OutputView;
  }

  startGame() {
    this.outputView.printGameStart();
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    const readBridgeSizeCallback = (input) => {
      Validator.validateSize(input);
      const bridgeSize = parseInt(input, 10);
      this.setSizeAndArr(bridgeSize);
      return this.inputMoving();
    };
    return this.inputView.readBridgeSize(readBridgeSizeCallback);
  }

  setSizeAndArr(num) {
    this.inputView.bridgeSize = num;
    this.inputView.birdgeStrArr = BridgeMaker.makeBridge(num, generate);
  }

  inputMoving() {
    const readMovingCallback = (input, index) => {
      Validator.validateUpDown(input);
      const OX = input === this.inputView.birdgeStrArr[index] ? CROSS_OR_NOT.YES : CROSS_OR_NOT.NO;
      this.reflectMapResult(input, OX);
      if (OX === CROSS_OR_NOT.NO) return this.inputGameCommand();
      return index === this.inputView.bridgeSize - 1 && this.outputView.printResult(SUCCESS, this.model);
    };
    return this.inputView.readMoving(readMovingCallback, 0, this.inputView.bridgeSize);
  }

  reflectMapResult(upOrDown, crossOrNot) {
    BridgeGame.move(upOrDown, crossOrNot, this.model);
    this.outputView.printMap(this.model);
  }

  inputGameCommand() {
    const callback = (input) => {
      Validator.validateGameCommand(input);
      if (input === QUIT) return this.outputView.printResult(FAIL, this.model);
      BridgeGame.retry(this.model);
      return this.inputMoving();
    };
    return this.inputView.readGameCommand(callback);
  }
}

module.exports = Controller;
