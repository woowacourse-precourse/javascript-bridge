const MissionUtils = require('@woowacourse/mission-utils');
const { Console } = MissionUtils;
const ConstValue = require('./ConstValue');

const InputView = {
  readBridgeSize() {
    let bridgeLength = 0;
    Console.readLine(ConstValue.INPUT_BRIDGE_LENGTH_MESSAGE, value => {
      bridgeLength = Number(value);
    });

    return bridgeLength;
  },

  readMoving() {
    let moveDirection;
    Console.readLine(ConstValue.INPUT_MOVE_SELECT_MESSAGE, value => {
      moveDirection = value;
    });

    return moveDirection;
  },

  readGameCommand() {
    let command;
    Console.readLine(ConstValue.INPUT_RESTART_MESSAGE, value => {
      command = value;
    });

    return command;
  },
};

module.exports = InputView;
