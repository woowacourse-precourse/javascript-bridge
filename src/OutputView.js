const MissionUtils = require("@woowacourse/mission-utils");
const { OutputMessage } = require("./constant/Constants");

const OutputView = {
  printStartMessage(){
    MissionUtils.Console.print(OutputMessage.START);
  },

  printErrorMessage(message){
    MissionUtils.Console.print(message);
  },

  printMap(currentBridge) {
    const [upBridge, downBridge] = currentBridge;
    MissionUtils.Console.print(OutputMessage.FORMAT(upBridge));
    MissionUtils.Console.print(OutputMessage.FORMAT(downBridge));
  },

  printResult(currentBridge, isSuccess, tryNumber) {
    MissionUtils.Console.print(OutputMessage.RESULT_TITLE);
    this.printMap(currentBridge);
    MissionUtils.Console.print(OutputMessage.RESULT(isSuccess));
    MissionUtils.Console.print(OutputMessage.TRY_NUMBER(tryNumber));
    MissionUtils.Console.close();
  },
};

module.exports = OutputView;
