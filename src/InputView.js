const MissionUtils = require('@woowacourse/mission-utils');
const { MESSAGE_INPUT_BRIDGE_LENGTH, MESSAGE_NEXT_MOVING_INPUT, MESSAGE_RETRY } = require('./constants');

const { Console } = MissionUtils;

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  readBridgeSize() {
    Console.readLine(MESSAGE_INPUT_BRIDGE_LENGTH, (length) => {
    });
  },

  readMoving() {
    Console.readLine(MESSAGE_NEXT_MOVING_INPUT, (direction) => {

    });
  },

  readGameCommand() {
    Console.readLine(MESSAGE_RETRY, (command) => {

    });
  },
};

module.exports = InputView;
