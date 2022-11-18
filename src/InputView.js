const MissionUtils = require("@woowacourse/mission-utils");
const ErrorCheck = require("./modules/ErrorCheck");
// 문자열 객체
const messageObject = {
  BRIGE_SIZE: "다리의 길이를 입력해주세요",
  SELECT_UORD: "이동할 칸을 선택해주세요. (위: U, 아래: D)",
};
const Error = new ErrorCheck();

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let inputSize = 0;
    MissionUtils.Console.readLine(
      messageObject.BRIGE_SIZE,
      (size) => (inputSize = Number(size))
    );
    MissionUtils.Console.close();
    Error.inputSizeErrorCheck(inputSize);
    return inputSize;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(size) {
    let upOrDown = [];
    let count = 0;
    while (count < size) {
      MissionUtils.Console.readLine(messageObject.SELECT_UORD, (UD) => {
        upOrDown.push(UD);
      });
      count += 1;
    }
    return upOrDown;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
