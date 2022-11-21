const MissionUtils = require("@woowacourse/mission-utils");
const { OutputMessage } = require("./constant/Constants");

const OutputView = {
  printStartMessage(){
    MissionUtils.Console.print(OutputMessage.START);
  },

  printMap(upBridge, downBridge) {
    MissionUtils.Console.print(OutputMessage.FORMAT(upBridge));
    MissionUtils.Console.print(OutputMessage.FORMAT(downBridge));
  },

  printResult(upBridge, downBridge, isSuccess, tryNumber) {
    MissionUtils.Console.print(OutputMessage.RESULT_TITLE);
    this.printMap(upBridge, downBridge);
    MissionUtils.Console.print(OutputMessage.RESULT(isSuccess));
    MissionUtils.Console.print(OutputMessage.TRY_NUMBER(tryNumber));
    MissionUtils.Console.close();
  },
};

module.exports = OutputView;
