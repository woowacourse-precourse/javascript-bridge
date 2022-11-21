const Model = require('./Model');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');
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
    const callback = (input, index) => {
      const OX = input === this.inputView.birdgeStrArr[index] ? CROSS_OR_NOT.YES : CROSS_OR_NOT.NO;
      BridgeGame.move(input, OX, this.model);
      this.outputView.printMap(this.model);
      if (OX === CROSS_OR_NOT.NO) return this.inputGameCommand();
      return index === this.inputView.bridgeSize - 1 && this.outputView.printResult(SUCCESS, this.model);
    };
    return this.inputView.readMoving(callback, 0, this.inputView.bridgeSize);
  }

  inputGameCommand() {
    const callback = (input) => {
      if (input === QUIT) return this.outputView.printResult(FAIL, this.model);
      BridgeGame.retry(this.model);
      return this.inputMoving();
    };
    return this.inputView.readGameCommand(callback);
  }
}

module.exports = Controller;
