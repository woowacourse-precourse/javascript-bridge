/**
 * 에러 처리
 */
const MissionUtils = require("@woowacourse/mission-utils");

// 에러 메세지 객체
const errorObject = {
  Error1: "잘못된 입력 값입니다.",
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
}
module.exports = ErrorCheck;
