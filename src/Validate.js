const { KEY, BRIDGE, ERROR } = require('./Constants');
const OutputView = require('./OutputView');

const Validate = {
  checkBridgeSize(size) {
    // 다리 길이 확인
    const CONDITION = size >= BRIDGE.LENGTH_MIN && size <= BRIDGE.LENGTH_MAX;
    return this.checkError(CONDITION, ERROR.BRIDGE_SIZE);
  },

  checkMovingKey(movingKey) {
    // 이동 키 확인
    const CONDITION = movingKey === KEY.UP || movingKey === KEY.DOWN;
    return this.checkError(CONDITION, ERROR.MOVING_KEY);
  },

  checkCommandKey(commandKey) {
    // 명령 키 확인
    const CONDITION = commandKey === KEY.RETRY || commandKey === KEY.END;
    return this.checkError(CONDITION, ERROR.GAME_COMMAND);
  },

  checkError(condition, errorMessage) {
    try {
      if (condition) return true;
      throw new Error(errorMessage);
    } catch (error) {
      OutputView.printError(error.message);
      return false;
    }
  },
};

module.exports = Validate;
