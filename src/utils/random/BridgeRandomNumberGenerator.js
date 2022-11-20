const MissionUtils = require("@woowacourse/mission-utils");

const BridgeRandomNumberGenerator = {
  RANDOM_LOWER_INCLUSIVE: 0,
  RANDOM_UPPER_INCLUSIVE: 1,

  /**
   * 랜덤 번호를 만들어주는 함수 (1 또는 0)
   * @returns 랜덤 번호(1 또는 0)
   */
  generate() {
    return MissionUtils.Random.pickNumberInRange(
      BridgeRandomNumberGenerator.RANDOM_LOWER_INCLUSIVE,
      BridgeRandomNumberGenerator.RANDOM_UPPER_INCLUSIVE
    );
  },
};

module.exports = BridgeRandomNumberGenerator;
