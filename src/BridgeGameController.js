const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const OutputView = require('./OutputView');
const Validator = require('./Validator');
const GAME_SETTING = require('../constants/Setting');

const BridgeGameController = {
  getSize(value) {
    Validator.bridgeSize(value);
    this.bridgeSize = Number(value);
    this.bridgeGame = new BridgeGame();
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
    [this.isPass, this.upper, this.lower] = this.bridgeGame.move(
      this.chooseBlock,
      this.rightBlocks[index]
    );
    this.outputData(false);
  },
  validationCommand(inputValue) {
    Validator.retryOrQuit(inputValue);
  },
  getCommand() {
    this.bridgeGame.retry();
  },
  errorMessage(message) {
    OutputView.printError(message);
  },
  outputData(isFinal, isSuccess, tryCount) {
    const upperBlocks = this.upper.join(GAME_SETTING.verticalBar);
    const lowerBlocks = this.lower.join(GAME_SETTING.verticalBar);
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
