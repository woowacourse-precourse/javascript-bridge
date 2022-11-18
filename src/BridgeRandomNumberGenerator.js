/*
Random 값 추출은 제공된 BridgeRandomNumberGenerator의 generate()를 활용한다.
BridgeRandomNumberGenerator의 코드는 변경할 수 없다.
*/
//! 다리 정답 정해주는 함수 0 또는 1

const MissionUtils = require('@woowacourse/mission-utils');

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
