const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('../constants/Message');

const InputView = {

  readBridgeSize(bridgeLength) {
    Console.readLine(INPUT_MESSAGE.PUT_BRIDGE_LENGTH, bridgeLength);
  },

  readMoving(nextSpace) {
    Console.readLine(INPUT_MESSAGE.PUT_NEXT_SPACE, nextSpace);
  },

  readGameCommand(retryOrNot) {
    Console.readLine(INPUT_MESSAGE.PUT_RETRY_OR_NOT, retryOrNot);
  },

};

module.exports = InputView;
