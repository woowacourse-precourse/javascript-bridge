const { BRIDGE_START, BRIDGE_END } = require('./MESSAGES/NumberMessage');
const {
  BRIDGE_INPUT_ERROR,
  REGAME_INPUT_ERROR,
} = require('./MESSAGES/InputMessage');

const InputErrorView = {
  bridgeSizeError(bridgeSize) {
    if (Number.isNaN(Number(bridgeSize))) {
      throw BRIDGE_INPUT_ERROR;
    }
    if (Number(bridgeSize) < BRIDGE_START || BRIDGE_END < Number(bridgeSize)) {
      throw BRIDGE_INPUT_ERROR;
    }
    return true;
  },

  reGameError(reGame) {
    if (reGame === 'R' || reGame === 'Q') {
      return true;
    }
    throw REGAME_INPUT_ERROR;
  },
};

Object.freeze(InputErrorView);
module.exports = InputErrorView;
