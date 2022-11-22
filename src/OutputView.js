const { Console } = require("@woowacourse/mission-utils");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  MESSAGE_START_BRIDGE_GAME: "다리 건너기 게임을 시작합니다.",
  RESULT_MESSAGE_HEADER: "최종 게임 결과",
  RESULT_MESSAGE_IS_SUCCESS: (successOrFailure) =>
    `게임 성공 여부: ${successOrFailure}`,
  RESULT_MESSAGE_TOTAL_ATTEMPTS: (attempts) => `총 시도한 횟수: ${attempts}`,
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * @param {Map<List, List>} bridgeStatus - 현재까지 이동한 다리의 상태
   */
  printMap([topBridge, bottomBridge]) {
    Console.print(`[ ${topBridge.join(" | ")} ]`);
    Console.print(`[ ${bottomBridge.join(" | ")} ]`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * @param {Map<List, List>} bridgeMap - 게임의 최종 결과를 출력할 다리의 상태
   * @param {String} successOrFailure - 게임의 성공 여부
   * @param {Number} numberOfAttempts - 게임을 성공한 뒤 시도한 횟수
   */
  printResult(bridgeMap, successOrFailure, numberOfAttempts) {
    Console.print(`\n${OutputView.RESULT_MESSAGE_HEADER}`);
    this.printMap(bridgeMap);
    Console.print(
      `\n${OutputView.RESULT_MESSAGE_IS_SUCCESS(successOrFailure)}`
    );
    Console.print(
      `${OutputView.RESULT_MESSAGE_TOTAL_ATTEMPTS(numberOfAttempts)}`
    );
  },

  /**
   * 게임을 시작하기 전에 출력할 메시지를 출력한다.
   */
  printStartMessage() {
    Console.print(`${OutputView.MESSAGE_START_BRIDGE_GAME}\n`);
  },

  /**
   * 예외사항이 발생했을 때 출력할 메시지를 출력한다.
   * @param {String} message - 출력할 메시지
   */
  printErrorMessage(message) {
    Console.print(message);
  },
};

module.exports = OutputView;
