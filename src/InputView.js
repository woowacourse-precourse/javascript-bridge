const MissionUtils = require('@woowacourse/mission-utils');
const { Console } = MissionUtils;
const ConstValue = require('./ConstValue');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let bridgeLength = 0;
    Console.readLine(ConstValue.INPUT_BRIDGE_LENGTH_MESSAGE, value => {
      bridgeLength = Number(value);
    });

    return bridgeLength;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let moveDirection;
    Console.readLine(ConstValue.INPUT_MOVE_SELECT_MESSAGE, value => {
      moveDirection = value;
    });

    return moveDirection;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    let command;
    Console.readLine(ConstValue.INPUT_RESTART_MESSAGE, value => {
      command = value;
    });

    return command;
  },
};

module.exports = InputView;
