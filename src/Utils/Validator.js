const { ERROR_MESSAGE, BRIDGE_LENGTH_LIMIT } = require("./Constants");
const { NOT_APPROPRIATE_LENGTH } = ERROR_MESSAGE;

class Validator {
  bridgeLength(bridgeLength) {
    if (!BRIDGE_LENGTH_LIMIT.includes(Number(bridgeLength))) {
      throw new Error(NOT_APPROPRIATE_LENGTH);
    }
  }
}

module.exports = Validator;
