const { BRIDGE } = require('./constants');

const ERROR_MESSAGE = Object.freeze({
  isBridgeSize: `다리 길이는 ${BRIDGE.MIN_SIZE}부터 ${BRIDGE.MAX_SIZE} 사이의 숫자여야 합니다.`,
});

module.exports = {
  validate(input, validator) {
    if (!validator(input)) {
      throw new Error(`[ERROR] ${ERROR_MESSAGE.isBridgeSize}`);
    }
  },

  isBridgeSize(input) {
    const size = Number(input);
    return (
      Number.isInteger(size) &&
      BRIDGE.MIN_SIZE <= size &&
      size <= BRIDGE.MAX_SIZE
    );
  },
};
