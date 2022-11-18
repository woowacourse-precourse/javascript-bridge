const { ERROR } = require('./phrases');

const Validation = {
  bridgeSize(input) {
    if (isNaN(input)) throw new Error(ERROR.BRIDGE_SIZE_TYPE);
    if (input < 3) throw new Error(ERROR.BRIDGE_SIZE_MIN);
    if (input > 20) throw new Error(ERROR.BRIDGE_SIZE_MAX);
  },
};
