const { KEY } = require('./Constants');

const Validate = {
  checkBridgeSize(size) {
    // 다리 길이가 3 이상, 20 이하의 숫자인가?
    if (size >= 3 && size <= 20) {
      return true;
    } else {
      return false;
    }
  },

  checkMovingKey(key) {
    if (key === KEY.UP || key === KEY.DOWN) {
      return true;
    } else {
      return false;
    }
  },

  checkCommandKey(key) {
    if (key === KEY.RETRY || key === KEY.END) {
      return true;
    } else {
      return false;
    }
  },
};

module.exports = Validate;
