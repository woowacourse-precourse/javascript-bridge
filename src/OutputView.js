const { Console } = require("@woowacourse/mission-utils");
const gameConst = require("../constant/constant.js");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
   printMap(userBridge) {
    Console.print("[ " + userBridge.up.join(" | ") + " ]");
    Console.print("[ " + userBridge.down.join(" | ") + " ]");
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
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
