/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const { Console } = require("@woowacourse/mission-utils");
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   */
  printMap(map) {
    Console.print(`${map.upper}\n${map.lower}`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   */
  printResult(map, tryNum, result) {
    Console.print(
      `\n최종 게임 결과\n${map.upper}\n${map.lower}\n\n게임 성공 여부: ${result}\n총 시도한 횟수: ${tryNum}`
    );
    Console.close();
  },

  /**
   * 게임 시작을 알리는 문구를 출력한다.
   */
  printStart() {
    Console.print("다리 건너기 게임을 시작합니다.");
  },

  /**
   * 에러 메세지를 출력한다.
   */
  printError(errorMessage) {
    Console.print(errorMessage);
  },
};

module.exports = OutputView;
