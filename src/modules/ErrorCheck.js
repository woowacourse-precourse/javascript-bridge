/**
 * 에러 처리
 */
const MissionUtils = require("@woowacourse/mission-utils");

// 에러 메세지 객체
const errorObject = {
  Error1: "잘못된 입력 값입니다. 숫자를 입력해주세요",
  Error2: "잘못된 입력 값입니다. 정수를 입력해주세요",
  Error3: "잘못된 입력 값입니다. 'U' 또는 'D'를 입력해주세요",
};

class ErrorCheck {
  inputSizeErrorCheck(size) {
    try {
      if (isNaN(size)) throw new Error(errorObject.Error1);
    } catch (e) {
      MissionUtils.Console.print(`[ERROR] : ${e.message}`);
    } finally {
      MissionUtils.Console.close();
    }
  }
  inputMovingErrorCheck(UD) {
    try {
      if (UD !== "U" && UD !== "D") throw new Error(errorObject.Error3);
    } catch (e) {
      MissionUtils.Console.print(`[ERROR] : ${e.message}`);
    } finally {
      MissionUtils.Console.close();
    }
  }
}
module.exports = ErrorCheck;
