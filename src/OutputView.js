const { Console } = require("@woowacourse/mission-utils");
const { PROMPT, WORD } = require("./Constants/Constants");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStart() {
    Console.print(PROMPT.START);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(sketch) {
    const up = sketch[0].join(` ${WORD.BAR} `);
    const down = sketch[1].join(` ${WORD.BAR} `);
    Console.print(`${WORD.LEFT_BRACKET} ${up} ${WORD.RIGHT_BRACKET}`);
    Console.print(`${WORD.LEFT_BRACKET} ${down} ${WORD.RIGHT_BRACKET}${WORD.NEW_LINE}`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(map, state, countRetry) {
    Console.print(PROMPT.RESULT);
    this.printMap(map);
    state ? Console.print(PROMPT.SUCCESS) : Console.print(PROMPT.FAIL);
    Console.print(`${PROMPT.COUNT}${countRetry}`);
  },

  printErrorMessage(error) {
    Console.print(error);
  }
};

module.exports = OutputView;
