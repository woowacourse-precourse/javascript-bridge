const { Console } = require("@woowacourse/mission-utils");
const Player = require("./Player");

const START_MESSAGE = "다리 건너기 게임을 시작합니다.\n";

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap() {
    Console.print(`[${Player.state[0].join("|")}]`);
    Console.print(`[${Player.state[1].join("|")}]`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {
    Console.print("\n최종 게임 결과");
    Console.print(`[${Player.state[0].join("|")}]`);
    Console.print(`[${Player.state[1].join("|")}]`);
    Console.print("");
    Console.print(`게임 성공 여부: ${Player.gameSuccess ? "성공" : "실패"}`);
    Console.print(`총 시도한 횟수: ${Player.tryingCount}`);
    Console.close();
  },

  printStart() {
    Console.print(START_MESSAGE);
  },
};

module.exports = OutputView;
