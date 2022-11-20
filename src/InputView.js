const MissionUtils = require("@woowacourse/mission-utils");
const Notice = require("./NoticeMessage.js")
const Validate = require("./Validate.js")
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(fun) {
    MissionUtils.Console.readLine(Notice.INPUT_BRIDGE_LENGTH,fun)
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(fun) {
    MissionUtils.Console.readLine(Notice.SELECT_MOVE,(input)=>{
      try{
        Validate.MoveInput(input)
        fun(input)
      }catch(err){
        MissionUtils.Console.print(err)
        this.readMoving(fun)
      }
    })
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(fun) {
    MissionUtils.Console.readLine(Notice.RETRY_GAME,fun)
  },
};

module.exports = InputView;
