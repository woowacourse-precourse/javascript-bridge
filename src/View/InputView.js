const { Console } = require('@woowacourse/mission-utils');
const NOTICE = require('../Constants/Notice');

 const InputView = {

  readBridgeSize(callBack) {
    Console.readLine(NOTICE.INPUT_BRIDGE_LENGTH_ASK, callBack);
  },

  readMoving(callBack) {
    Console.readLine(NOTICE.INPUT_MOVE_ASK, callBack);
  },

  readGameCommand(callBack) {
    Console.readLine(NOTICE.INPUT_RETRY_ASK, callBack);
  },
};

module.exports = InputView;
