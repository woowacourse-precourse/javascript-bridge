const { Console } = require("@woowacourse/mission-utils");

const Exception = {
  checkBridgeLength(input) {
    try {
      if (isNaN(input)) {
        throw "[ERROR]다리 길이는 숫자를 입력해주세요.";
      }
      if (input < 3 || input > 20) {
        throw "[ERROR] 다리 길이는 3 ~ 20사이의 숫자여야 합니다.";
      }
      return false;
    } catch (e) {
      Console.print(e);
      return true;
    }
  },
  checkGameMove(input) {
    try {
      if (input !== "U" && input !== "D") {
        throw "[ERROR] 라운드 별 이동은 U 또는 D여야 합니다.";
      }
      return false;
    } catch (e) {
      Console.print(e);
      return true;
    }
  },
  checkGameCommand(input) {
    try {
      if (input !== "Q" && input !== "R") {
        throw "[ERROR] 게임 Command는 R 또는 Q여야 합니다.";
      }
      return false;
    } catch (e) {
      Console.print(e);
      return true;
    }
  },
};

module.exports = Exception;
