const { ERROR } = require('../constant/error');

class Validate {
  static notInRange(input, maximum, minimum) {
    console.log('vali', input, maximum, minimum);
    if (input > maximum || input < minimum) {
      throw new Error(ERROR.BRIDGE_SIZE(maximum, minimum));
    }
  }
}

module.exports = Validate;
