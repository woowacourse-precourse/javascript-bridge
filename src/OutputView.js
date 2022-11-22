/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  start() {
    Console.print("다리 건너기 게임을 시작합니다");
  },

  printMap(inputMove) {
    let count = 0;

    if (inputMove === "U" && count === 0) {
      Console.print(`[ O ]
[   ]
      `);
    } else if (inputMove === "D" && count === 0) {
      Console.print(`[   ]
[ O ]
      `);
    }
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {
    Console.print("최종 게임 결과");
    Console.print("[][][]");
    Console.print("\n게임 성공 여부: ", result);
    Console.print("총 시도한 횟수: ", count);
  },
};
OutputView.printMap("D");
module.exports = OutputView;
