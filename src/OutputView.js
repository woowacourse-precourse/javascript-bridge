const { Console } = require("@woowacourse/mission-utils");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printGameStart() {
    Console.print("다리 건너기 게임을 시작합니다.");
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap({ bridge_U, bridge_D }) {
    Console.print(`[ ${bridge_U.join(" | ")} ]`);
    Console.print(`[ ${bridge_D.join(" | ")} ]`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(result, tryCount) {
    if (result === "성공") this.printSuccess();
    if (result === "실패") this.printFailure();
    this.printTryCount(tryCount);
  },

  printSuccess() {
    Console.print("\n게임 성공 여부: 성공");
  },

  printFailure() {
    Console.print("\n게임 성공 여부: 실패");
  },

  printTryCount(tryCount) {
    Console.print(`총 시도한 횟수: ${tryCount}`);
  },
};

module.exports = OutputView;
