const {INPUT_QUERY} = require("../Constants")
const { Console } = require('@woowacourse/mission-utils');

const InputView = {

  readBridgeSize(callback) {
    Console.readLine(INPUT_QUERY.BRIDGE_SIZE, callback);
  },

  readMoving(callback) {
    Console.readLine(INPUT_QUERY.MOVING_SPACE, callback);
  },

  readGameCommand(callback) {
    Console.readLine(INPUT_QUERY.GAME_COMMAND,callback)
  },
};

module.exports = InputView;
