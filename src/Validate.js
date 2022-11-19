const { KEY, BRIDGE, ERROR } = require('./Constants');
const OutputView = require('./OutputView');

const Validate = {
  checkBridgeSize(size) {
    // 다리 길이 확인
    const CONDITION = size >= BRIDGE.LENGTH_MIN && size <= BRIDGE.LENGTH_MAX;
    const ERROR_MESSAGE = ERROR.BRIDGE_SIZE;
    return this.checkError(CONDITION, ERROR_MESSAGE);
  },

  checkMovingKey(movingKey) {
    // 이동 키 확인
    const CONDITION = movingKey === KEY.UP || movingKey === KEY.DOWN;
    const ERROR_MESSAGE = ERROR.MOVING_KEY;
    return this.checkError(CONDITION, ERROR_MESSAGE);
  },

  checkCommandKey(commandKey) {
    // 명령 키 확인
    const CONDITION = commandKey === KEY.RETRY || commandKey === KEY.END;
    const ERROR_MESSAGE = ERROR.GAME_COMMAND;
    return this.checkError(CONDITION, ERROR_MESSAGE);
  },

  isRetry(commandKey) {
    // 재시작 여부 확인
    if (commandKey === KEY.RETRY) {
      return true;
    }
    if (commandKey === KEY.END) {
      return false;
    }
  },

  checkUserInput(bridgeGame) {
    // 성공 여부 확인
    const USER_INPUT = bridgeGame.userInput;
    const ANSWER_BRIDGE = bridgeGame.answerBridge;
    if (USER_INPUT.toString() === ANSWER_BRIDGE.toString()) {
      return true;
    } else {
      return false;
    }
  },

  checkError(condition, errorMessage) {
    try {
      if (condition) {
        return true;
      }
      throw new Error(errorMessage);
    } catch (error) {
      OutputView.printError(error.message);
      return false;
    }
  },
};

module.exports = Validate;
