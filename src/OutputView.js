const { Console } = require("@woowacourse/mission-utils");
const gameConst = require("./const");

const OutputView = {
  printMap(userBridge) {
    Console.print("[ " + userBridge.up.join(" | ") + " ]");
    Console.print("[ " + userBridge.down.join(" | ") + " ]");
  },

  printResult(userBridge, success, tryCnt) {
    Console.print(gameConst.result.message.RESULT_MESSAGE);
    this.printMap(userBridge);

    Console.print("");
    this.printResultInfo(tryCnt, success);
  },

  printResultInfo(success, tryCnt) {
    const STATUS = success ? gameConst.result.value.SUCCESS : gameConst.result.value.FAIL;
    const TRIAL_CNT = tryCnt;
    Console.print(gameConst.result.message.SUCCESS_MESSAGE + " " + STATUS);
    Console.print(gameConst.result.message.TRIAL_MESSAGE + " " + TRIAL_CNT);
  },

  printStartMessage() {
    Console.print(gameConst.process.START_MESSAGE);
  },
};

module.exports = OutputView;
