/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const MissionUtils = require("@woowacourse/mission-utils");
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  leg: "",
  readBridgeSize() {
    MissionUtils.Console.readLine(
      "다리의 길이를 입력해주세요.\n",(length)=>{
        this.leg = length;
      }
    );
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  select:"",
  readGameCommand() {
    MissionUtils.Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",(select)=>{
        this.select = select;
      }
    );
  },
};

module.exports = InputView;
