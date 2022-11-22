const { Console } = require("@woowacourse/mission-utils");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  MESSAGE_START_BRIDGE_GAME: "다리 건너기 게임을 시작합니다.",
  RESULT_MESSAGE_HEADER: "최종 게임 결과",
  RESULT_MESSAGE_IS_SUCCESS: (successOrFailure) => `게임 성공 여부: ${successOrFailure}`,
  RESULT_MESSAGE_TOTAL_ATTEMPTS: (attempts) => `총 시도한 횟수: ${attempts}`,
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap() {},

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult({ topBridge, bottomBridge }, numberOfAttempts, successOrFailure) {
    Console.print(`${OutputView.RESULT_MESSAGE_HEADER}`);
    this.printMap({ topBridge, bottomBridge });
    Console.print(`${OutputView.RESULT_MESSAGE_IS_SUCCESS(successOrFailure)}`);
    Console.print(`${OutputView.RESULT_MESSAGE_TOTAL_ATTEMPTS(numberOfAttempts)}`);
  },

  printStartMessage() {
    Console.print(`${OutputView.MESSAGE_START_BRIDGE_GAME}\n`);
  },
};

module.exports = OutputView;
