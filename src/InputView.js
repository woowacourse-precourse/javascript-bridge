const MissionUtils = require('@woowacourse/mission-utils');
const Message = require('../src/MessageContent')
const { isNumber, isUpDown } = require('./validator/IsValid')

const InputView = {

  readBridgeSize(callback) {
    MissionUtils.Console.readLine(Message.BRIDGE_SIZE, size => {
      callback(isNumber(size))
    })
  },

  readMoving(callback) {
    MissionUtils.Console.readLine(Message.MOVE, move => {
      callback(isUpDown(move))
    })
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
