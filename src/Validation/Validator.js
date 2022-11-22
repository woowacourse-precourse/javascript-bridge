const { Console } = require("@woowacourse/mission-utils");

const Validator = {
  checkBetweenThreeToTwenty(BridgeSize) {
    try {
      if (BridgeSize < 3 || BridgeSize > 20) {
        throw new Error(
          "[Error] 다리 길이는 3부터 20 사이의 숫자여야 합니다. "
        );
      }
    } catch (err) {
      Console.print(err);
      return true;
    }
  },
};

module.exports = Validator;
