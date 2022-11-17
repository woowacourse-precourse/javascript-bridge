const { BRIDGE_INPUT_ERROR } = require('./MESSAGES/InputMessage');
const { BRIDGE_START, BRIDGE_END } = require('./MESSAGES/NumberMessage');

const InputErrorView = {
  /*
  숫자로 평가되는지 판별
  */
  isNum(value) {
    return !Number.isNaN(value);
  },

  bridgeSizeError(bridgeSize) {
    if (!this.isNum(bridgeSize)) {
      throw new Error(BRIDGE_INPUT_ERROR);
    }
    if (Number(bridgeSize) < BRIDGE_START || Number(bridgeSize) > BRIDGE_END) {
      throw new Error(BRIDGE_INPUT_ERROR);
    }
    return true;
  },
};

Object.freeze(InputErrorView);
module.exports = InputErrorView;
