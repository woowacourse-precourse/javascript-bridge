const Model = require('./Model');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');

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
      const num = parseInt(input, 10);
      this.inputView.bridgeSize = num;
      this.inputView.birdgeStrArr = BridgeMaker.makeBridge(num, generate);
      return this.inputMoving();
    };
    return this.inputView.readBridgeSize(readBridgeSizeCallback);
  }

  inputMoving() {
    const callback = (input, index) => {
      const OX = input === this.inputView.birdgeStrArr[index] ? ' O ' : ' X ';
      BridgeGame.move(input, OX, this.model);
      this.outputView.printMap(this.model);
      if (OX === ' X ') return this.inputGameCommand();
      return index === this.inputView.bridgeSize - 1 && this.outputView.printResult('성공', this.model);
    };
    return this.inputView.readMoving(callback, 0, this.inputView.bridgeSize);
  }

  inputGameCommand() {
    const callback = (input) => {
      if (input === 'Q') return this.outputView.printResult('실패', this.model);
      BridgeGame.retry(this.model);
      return this.inputMoving();
    };
    return this.inputView.readGameCommand(callback);
  }
}

module.exports = Controller;
