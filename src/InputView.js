const { Console } = require('@woowacourse/mission-utils');
const { REQUEST_MSG } = require('./constants/message.js');

const InputView = {
  requestBridgeSize() {
    Console.readLine(REQUEST_MSG.bridgeSize, InputView.readBridgeSize);
  },

  readBridgeSize(size) {},

  readMoving() {},

  readGameCommand() {},
};

module.exports = InputView;
