const MissionUtils = require('@woowacourse/mission-utils');

const BridgeRandomNumberGenerator = {
  RANDOM_LOWER_INCLUSIVE: 0,
  RANDOM_UPPER_INCLUSIVE: 1,
  generate() {
    return MissionUtils.Random.pickNumberInRange(
      BridgeRandomNumberGenerator.RANDOM_LOWER_INCLUSIVE,
      BridgeRandomNumberGenerator.RANDOM_UPPER_INCLUSIVE,
    );
  },
};

module.exports = BridgeRandomNumberGenerator;
