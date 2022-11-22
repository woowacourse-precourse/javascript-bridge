const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const OutputView = require('./OutputView');
const Validator = require('./Validator');

const BridgeGameController = {
  getSize(value) {
    Validator.bridgeSize(value);
    this.bridgeSize = Number(value);
    this.upper = [];
    this.lower = [];
    this.getRightBlocks();
  },
  getMoving(block, index) {
    Validator.moving(block);
    this.chooseBlock = block;
    this.getMove(index);
    return this.isPass;
  },
  getRightBlocks() {
    this.rightBlocks = BridgeMaker.makeBridge(
      this.bridgeSize,
      BridgeRandomNumberGenerator.generate
    );
  },
  getMove(index) {
    this.isPass = new BridgeGame().move(
      this.chooseBlock,
      this.rightBlocks[index]
    );
    if (this.isPass) this.passData();
    if (this.isPass === false) this.failData();
    this.outputData(false);
  },
  getCommand() {
    this.upper = [];
    this.lower = [];
  },
  errorMessage(message) {
    OutputView.printError(message);
  },
  passData() {
    if (this.isPass && this.chooseBlock === 'U') {
      this.upper.push('O');
      this.lower.push(' ');
    }
    if (this.isPass && this.chooseBlock === 'D') {
      this.upper.push(' ');
      this.lower.push('O');
    }
  },
  failData() {
    if (this.isPass === false && this.chooseBlock === 'U') {
      this.upper.push('X');
      this.lower.push(' ');
    }
    if (this.isPass == false && this.chooseBlock === 'D') {
      this.upper.push(' ');
      this.lower.push('X');
    }
  },
  outputData(isFinal, isSuccess, tryCount) {
    const upperBlocks = this.upper.join(' | ');
    const lowerBlocks = this.lower.join(' | ');
    const isSuccessAndTryCount = [isSuccess, tryCount];
    if (isFinal) {
      OutputView.printResult(upperBlocks, lowerBlocks, isSuccessAndTryCount);
    }
    if (isFinal === false) {
      OutputView.printMap(upperBlocks, lowerBlocks);
    }
  },
};

module.exports = BridgeGameController;
