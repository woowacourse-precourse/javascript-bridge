const { Console } = require('@woowacourse/mission-utils');
const { SENTENCE } = require('../constants/Constants');
const { bridgeLengthValidation } = require('../utils/BridgeValidation');
const {
  movingValidation,
  gameCommandValidation,
} = require('../utils/KeyValidation');
const { bridgeLength, newLine, selectMoving, selectRestart } = SENTENCE;

const InputView = {
  readBridgeLength(initBridge) {
    Console.readLine(`${bridgeLength}${newLine}`, (inputLength) => {
      const num = Number(inputLength);
      bridgeLengthValidation(num);
      initBridge(num);
    });
  },

  readMoving(move) {
    Console.readLine(`${selectMoving}${newLine}`, (inputMoving) => {
      movingValidation(inputMoving);
      move(inputMoving);
    });
  },

  readGameCommand(isRetry) {
    Console.readLine(`${selectRestart}${newLine}`, (inputGameCommand) => {
      gameCommandValidation(inputGameCommand);
      isRetry(inputGameCommand);
    });
  },
};

module.exports = InputView;
