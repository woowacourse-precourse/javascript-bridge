const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGE } = require('./constant/Constant');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine(MESSAGE.INPUTBRIDGELENGTH, (input) => {
      this.validateBridgeSize(); // 예외처리 추가 예정
      return input;
    }); 
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    MissionUtils.Console.readLine(MESSAGE.INPUTMOVINGLOCATION, (input) => {
      this.validateMove(input); // 예외처리 추가 예정
      return input;
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    MissionUtils.Console.readLine(MESSAGE.INPUTRETRYORQUIT, (input) => {
      this.validateRetry(input); // 예외처리 추가 예정
      return input;
    });
  },
};

module.exports = InputView;
