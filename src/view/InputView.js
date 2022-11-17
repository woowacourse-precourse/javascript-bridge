const { Console } = require('@woowacourse/mission-utils');
const { SENTENCE } = require('../constants/Constants');
const { bridgeLengthValidation } = require('../utils/BridgeValidation');

const InputView = {
  readBridgeSize() {
    let length;
    Console.readLine(SENTENCE.bridgeLength, (inputLength) => {
      const num = Number(inputLength);
      bridgeLengthValidation(num);
      length = num;
    });

    return length;
  },

  readMoving() {
    let whichMoving;
    Console.readLine(SENTENCE.selectMoving, (inputMoving) => {
      movingValidation(inputMoving);
      whichMoving = inputMoving;
    });

    return whichMoving;
  },

  readGameCommand() {},
};

module.exports = InputView;
