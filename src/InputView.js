const MissionUtils = require('@woowacourse/mission-utils');
const MESSAGE = require('../src/MESSAGEContent')
const { isNumber, isUpDown, isRetryQuit } = require('./validator/IsValid')

const InputView = {

  readBridgeSize(callback) {
    MissionUtils.Console.readLine(MESSAGE.BRIDGE_SIZE, size => {
      try {
        callback(isNumber(size))
      } catch (error) {
        MissionUtils.Console.print(error)
        this.readBridgeSize(callback)
      }
    })
  },

  readMoving(callback) {
    MissionUtils.Console.readLine(MESSAGE.MOVE, move => {
      try {
        callback(isUpDown(move))
      } catch (error) {
        MissionUtils.Console.print(error)
        this.readMoving(callback)
      }
    })
  },

  readGameCommand(callback) {
    MissionUtils.Console.readLine(MESSAGE.RETRY, retry => {
      try {
        callback(isRetryQuit(retry))
      } catch (error) {
        MissionUtils.Console.print(error)
        this.readGameCommand(callback)
      }
    })
  },
};

module.exports = InputView;
