const MissionUtils = require('@woowacourse/mission-utils');
const MESSAGE = require('../src/MESSAGEContent')
const { isNumber, isUpDown } = require('./validator/IsValid')

const InputView = {

  readBridgeSize(callback) {
    MissionUtils.Console.readLine(MESSAGE.BRIDGE_SIZE, size => {
      callback(isNumber(size))
    })
  },

  readMoving(callback) {
    MissionUtils.Console.readLine(MESSAGE.MOVE, move => {
      callback(isUpDown(move))
    })
  },

  readGameCommand(callback) {
    MissionUtils.Console.readLine(MESSAGE.RETRY, retry => {
      callback(retry)
    })
  },
};

module.exports = InputView;
