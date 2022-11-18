const { KEY, BRIDGE } = require('./Constants');

const Validate = {
  checkBridgeSize(size) {
    // 다리 길이확인
    if (size >= BRIDGE.LENGTH_MIN && size <= BRIDGE.LENGTH_MAX) {
      return true;
    } else {
      return false;
    }
  },

  checkMovingKey(movingKey) {
    // 이동 키 확인
    if (movingKey === KEY.UP || movingKey === KEY.DOWN) {
      return true;
    } else {
      return false;
    }
  },

  checkCommandKey(commandKey) {
    // 재시작 여부 키 확인
    if (commandKey === KEY.RETRY || commandKey === KEY.END) {
      return true;
    } else {
      return false;
    }
  },

  checkUserInput(userInput, answerBridge) {
    // 성공 여부 확인
    if (userInput.toString() === answerBridge.toString()) {
      return true;
    } else {
      return false;
    }
  },
};

module.exports = Validate;
