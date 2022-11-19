const { Console } = require('@woowacourse/mission-utils');
const { SENTENCE } = require('../constants/Constants');
const { bridgeLengthValidation } = require('../utils/BridgeValidation');
const { movingValidation } = require('../utils/movingValidation');
const { bridgeLength, newLine, selectMoving } = SENTENCE;

const InputView = {
  readBridgeLength(initBridge) {
    let length;
    Console.readLine(`${bridgeLength}${newLine}`, (inputLength) => {
      const num = Number(inputLength);
      bridgeLengthValidation(num);
      initBridge(num);
    });
  },

  readMoving() {
    let whichMoving;
    Console.readLine(`${selectMoving}${newLine}`, (inputMoving) => {
      movingValidation(inputMoving);
      whichMoving = inputMoving;
    });

    return whichMoving;
  },

  readGameCommand() {},
};

module.exports = InputView;
