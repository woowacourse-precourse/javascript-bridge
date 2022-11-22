const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('../constants/Messages');

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(INPUT_MESSAGE.bridge_size, (input) => callback(input));
  },
  readMoving(callback) {
    Console.readLine(INPUT_MESSAGE.moving, (input) => callback(input));
  },
  readGameCommand(callback) {
    Console.readLine(INPUT_MESSAGE.game_command, (input) => callback(input));
  },
};

module.exports = InputView;
