const MissionUtils = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../utils/constants');

const InputView = {
  readBridgeSize(callback) {
    MissionUtils.Console.readLine(MESSAGE.READ_USER_INPUT_SIZE, (input) => {
      callback(input);
    });
  },

  readMoving(callback) {
    MissionUtils.Console.readLine(MESSAGE.READ_USER_INPUT_MOVE, (input) => {
      callback(input);
    });
  },

  readGameCommand(callback) {
    MissionUtils.Console.readLine(MESSAGE.READ_USER_INPUT_COMMAND, (input) => {
      callback(input);
    });
  }
};

module.exports = InputView;
