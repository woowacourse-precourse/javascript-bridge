const {Random} = require('@woowacourse/mission-utils');

class BridgeRandomNumberGenerator {
  static RANDOM_LOWER_INCLUSIVE = 0;
  static RANDOM_UPPER_INCLUSIVE = 1;

  generate() {
    return Random.pickNumberInRange(
      BridgeRandomNumberGenerator.RANDOM_LOWER_INCLUSIVE,
      BridgeRandomNumberGenerator.RANDOM_UPPER_INCLUSIVE
    );
  }
}

module.exports = BridgeRandomNumberGenerator;
