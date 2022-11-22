const { Console } = require("@woowacourse/mission-utils");

const START_SPACE = "[ ";
const CONTINUE_SPACE = " | ";
const END_SPACE = " ]\n";
const RIGHT = "O";
const WRONG = "X";
const NONE = " ";

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 게임의 시작을 출력한다.
   */
  printStart() {
    Console.print("다리 건너기 게임을 시작합니다.\n");
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridge, userSpaces) {
    let firstLine = START_SPACE;
    let secondLine = START_SPACE;
    for (let i = 0; i < userSpaces.length; i++) {
      if (i !== 0) {
        firstLine += CONTINUE_SPACE;
        secondLine += CONTINUE_SPACE;
      }
      if (userSpaces[i] === "U" && bridge[i] === "U") {
        firstLine += RIGHT;
        secondLine += NONE;
      }
      if (userSpaces[i] === "U" && bridge[i] === "D") {
        firstLine += WRONG;
        secondLine += NONE;
      }
      if (userSpaces[i] === "D" && bridge[i] === "U") {
        firstLine += NONE;
        secondLine += WRONG;
      }
      if (userSpaces[i] === "D" && bridge[i] === "D") {
        firstLine += NONE;
        secondLine += RIGHT;
      }
    }
    firstLine += END_SPACE;
    secondLine += END_SPACE;
    Console.print(firstLine);
    Console.print(secondLine);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

module.exports = OutputView;