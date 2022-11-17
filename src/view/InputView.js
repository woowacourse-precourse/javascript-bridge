const { Console } = require('@woowacourse/mission-utils');
const { SENTENCE } = require('../constants/Constants');
const { BridgeLengthValidation } = require('../utils/BridgeValidation');
const { MovingValidation } = require('../utils/movingValidation');

const InputView = {
  readBridgeSize() {
    let length;
    Console.readLine(SENTENCE.bridgeLength, (inputLength) => {
      const num = Number(inputLength);
      BridgeLengthValidation(num);
      length = num;
    });

    return length;
  },

  readMoving() {
    let whichMoving;
    Console.readLine(SENTENCE.selectMoving, (inputMoving) => {
      MovingValidation(inputMoving);
      whichMoving = inputMoving;
    });

    return whichMoving;
  },

  readGameCommand() {},
};

module.exports = InputView;
