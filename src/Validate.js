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

  checkMovingKey(key) {
    // 이동 키 확인
    if (key === KEY.UP || key === KEY.DOWN) {
      return true;
    } else {
      return false;
    }
  },

  checkCommandKey(key) {
    // 재시작 여부 키 확인
    if (key === KEY.RETRY || key === KEY.END) {
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
