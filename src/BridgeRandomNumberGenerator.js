const MissionUtils = require("@woowacourse/mission-utils");
// generate() 를 사용
// 코드 변경 불가
//  다리 칸을 생성하기 위해 Radom값은 const number = generateRandomNumber()을 사용
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
