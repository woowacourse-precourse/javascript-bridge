const MissionUtils = require("@woowacourse/mission-utils");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
 const InputView = {
  /**
   * 다리의 길이를 입력받는 함수 + 예외처리
   */
  readBridgeSize(callback) {
    MissionUtils.Console.readLine("다리의 길이를 입력해주세요.", (input) => {
      try {
        if ((input >= 3)&&(input <= 20)) callback(input) ;
        else throw new Error("[ERROR] 다리의 길이는 3이상 20이하입니다.")
      } catch (err) {
        MissionUtils.Console.print(err.message) ;
        InputView.readBridgeSize(callback) ; 
      }
    })
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
