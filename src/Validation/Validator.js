const { Console } = require("@woowacourse/mission-utils");

const Validator = {
  checkBetweenThreeToTwenty(bridgeSize) {
    try {
      if (!(bridgeSize >= 3 && bridgeSize <= 20)) {
        throw new Error(
          "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다. "
        );
      }
    } catch (err) {
      Console.print(err);
      return true;
    }
  },

  checkUpOrDown(selectedBlock) {
    try {
      if (selectedBlock !== "U" && selectedBlock !== "D")
        throw new Error("[ERROR] 이동할 칸은 'U' 또는 'D'만 입력 가능합니다.");
    } catch (err) {
      Console.print(err);
      return true;
    }
  },

  checkRetryOrQuit(request) {
    try {
      if (request !== "R" && request !== "Q")
        throw new Error(
          "[ERROR] 재시작/종료는 'R' 또는 'Q'만 입력 가능합니다."
        );
    } catch (err) {
      Console.print(err);
      return true;
    }
  },
};

module.exports = Validator;
