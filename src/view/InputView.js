const { Console } = require('@woowacourse/mission-utils');
const { SENTENCE } = require('../constants/Constants');
const { bridgeLengthValidation } = require('../utils/BridgeValidation');
const {
  movingValidation,
  gameCommandValidation,
} = require('../utils/KeyValidation');
const { bridgeLength, newLine, selectMoving, selectRestart } = SENTENCE;
const OutputView = require('./OutputView');

const InputView = {
  endRead() {
    Console.close();
  },

  readBridgeLength(initBridge) {
    Console.readLine(`${bridgeLength}${newLine}`, (inputLength) => {
      this.readBridgeLengthHandler(inputLength, initBridge);
    });
  },

  readMoving(move) {
    Console.readLine(`${selectMoving}${newLine}`, (inputMoving) => {
      this.readMovingHandler(inputMoving, move);
    });
  },

  readGameCommand(isRetry) {
    Console.readLine(`${selectRestart}${newLine}`, (inputGameCommand) => {
      this.readGameCommandHandler(inputGameCommand, isRetry);
    });
  },

  readBridgeLengthHandler(inputLength, initBridge) {
    try {
      const num = Number(inputLength);
      bridgeLengthValidation(num);
      initBridge(num);
    } catch (error) {
      OutputView.printError(error);
      this.readBridgeLength(initBridge);
    }
  },

  readMovingHandler(inputMoving, move) {
    try {
      movingValidation(inputMoving);
      move(inputMoving);
    } catch (error) {
      OutputView.printError(error);
      this.readMoving(move);
    }
  },

  readGameCommandHandler(inputGameCommand, isRetry) {
    try {
      gameCommandValidation(inputGameCommand);
      isRetry(inputGameCommand);
    } catch (error) {
      OutputView.printError(error);
      this.readGameCommand(isRetry);
    }
  },
};

module.exports = InputView;
