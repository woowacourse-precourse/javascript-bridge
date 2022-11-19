/**
 * Random 값 추출은 이 객체의 generator()를 활용한다.
 * 변경불가 : 이 코드는 변경할 수 없다.
 */

const MissionUtils = require("@woowacourse/mission-utils");

const BridgeRandomNumberGenerator = {
  RANDOM_LOWER_INCLUSIVE: 0,
  RANDOM_UPPER_INCLUSIVE: 1,
  generate() {
    return MissionUtils.Random.pickNumberInRange(
      BridgeRandomNumberGenerator.RANDOM_LOWER_INCLUSIVE,
      BridgeRandomNumberGenerator.RANDOM_UPPER_INCLUSIVE
    );
  },
};

module.exports = BridgeRandomNumberGenerator;
