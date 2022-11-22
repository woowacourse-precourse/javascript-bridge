const { Console } = require("@woowacourse/mission-utils");
const {
  BRIDGE_INPUT_MESSAGES,
  FINAL_RESULT_MESSAGES,
} = require("../constants/Messages");

const OutputView = {
  // 첫 시작 메세지를 출력한다.
  printOpening() {
    Console.print(BRIDGE_INPUT_MESSAGES.OPENING);
  },

  /**
   * 에러 로그를 출력한다.
   * @param errorLog {object} [Error 객체]
   */
  printError(errorLog) {
    Console.print(errorLog.message);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * @param up {string[]} 위쪽 다리 성공여부
   * @param down {string[]} 아래쪽 다리 성공여부
   */
  printMap({ up, down }) {
    const upLineToPrint = up.join(" | ");
    const downLineToPrint = down.join(" | ");
    Console.print(`[ ${upLineToPrint} ]`);
    Console.print(`[ ${downLineToPrint} ]
    `);
  },

  // 형식을 위해 빈 줄을 출력한다.
  printEmptyLine() {
    Console.print("");
  },

  /**
   * 최종 성공 여부를 출력한다.
   * @param isSuccess {boolean} [게임 성공 여부]
   */
  printFinalSuccessOrFailure(isSuccess) {
    const successOrFailureMessage = FINAL_RESULT_MESSAGES.SUCCESS_OR_FAILURE;
    if (isSuccess) {
      Console.print(successOrFailureMessage + FINAL_RESULT_MESSAGES.SUCCESS);
    }
    if (!isSuccess) {
      Console.print(successOrFailureMessage + FINAL_RESULT_MESSAGES.FAILURE);
    }
  },

  /**
   * 총 시도한 횟수를 출력한다.
   * @param userTryCount {number} [유저의 시도 횟수]
   */
  printUserTryCount(userTryCount) {
    Console.print(FINAL_RESULT_MESSAGES.TRY_COUNT + userTryCount);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * @param movingStatus {{up: string[], down: string[]}} [다리별 움직임 성공여부]
   * @param isSuccess {boolean} [유저의 최종 성공여부]
   * @param userTryCount {number} [유저의 시도 횟수]
   */
  printResult(movingStatus, isSuccess, userTryCount) {
    Console.print(FINAL_RESULT_MESSAGES.OPENING);
    this.printMap(movingStatus);
    this.printFinalSuccessOrFailure(isSuccess);
    this.printUserTryCount(userTryCount);
  },
};

module.exports = OutputView;
