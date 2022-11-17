const { Console } = require('@woowacourse/mission-utils');
const { SENTENCE } = require('../constants/Constants');
const { bridgeLengthValidation } = require('../utils/BridgeValidation');

const InputView = {
  readBridgeSize() {
    let length;
    Console.readLine(SENTENCE.bridgeLength, (input) => {
      const num = Number(input);
      bridgeLengthValidation(num);
      length = num;
    });

    return length;
  },

  readMoving() {
    let whichMoving;
    Console.readLine(SENTENCE.selectMoving, (moving) => (whichMoving = moving));
    return whichMoving;
  },

  readGameCommand() {},
};

module.exports = InputView;
