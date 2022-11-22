const { Console } = require("@woowacourse/mission-utils");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 게임의 시작을 출력한다.
   */
  printStart() {
    Console.print("다리 건너기 게임을 시작합니다.");
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   */
  printMap(map) {
    Console.print(map.firstLine);
    Console.print(map.secondLine);
  },

  /**
   * 에러 메세지를 출력한다.
   */
  printError(message) {
    Console.print(message);
    Console.close();
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   */
  printResult(map, result, count) {
    Console.print("최종 게임 결과");
    Console.print(map.firstLine);
    Console.print(map.secondLine);
    Console.print("");
    Console.print(`게임 성공 여부: ${result === "success" ? "성공" : "실패"}`);
    Console.print(`총 시도한 횟수: ${count}`);
  },
};

module.exports = OutputView;