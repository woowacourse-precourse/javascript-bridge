const MissionUtils = require("@woowacourse/mission-utils");
const Notice = require("./NoticeMessage.js")
const Validate = require("./Validate.js")

const InputView = {

  readBridgeSize(fun) {
    MissionUtils.Console.readLine(Notice.INPUT_BRIDGE_LENGTH,(input)=>{
      try{
        Validate.BridgeLengthInput(input)
        fun(input)
      }catch(err){
        MissionUtils.Console.print(err)
        this.readBridgeSize(fun)
      }
    })
  },

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

  readGameCommand(fun) {
    MissionUtils.Console.readLine(Notice.RETRY_GAME,(input)=>{
      try{
        Validate.RetryInput(input)
        fun(input)
      }catch(err){
        MissionUtils.Console.print(err)
        this.readGameCommand(fun)
      }
    })
  },
};

module.exports = InputView;
