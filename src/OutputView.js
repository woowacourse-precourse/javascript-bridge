/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const { Console } = require("@woowacourse/mission-utils");

const {
  DEFAULT,
  OUTPUT_VIEW_VALUE: {
    FIRST_EMPTY,
    FIRST_WRONG,
    FIRST_RIGHT,
    EMPTY,
    RIGHT,
    WRONG,
    START_GAME,
    RESULT_COMMENT,
    END_COMMENT,
    COUNT_COMMENT,
    SUCCESS,
    FAIL,
  },
} = require("./utils/constant");
const { isZero } = require("./utils/utilityFuncions");

const OutputView = {
  printInitialComment() {
    Console.print(START_GAME);
  },

  printMap(inputHistory, bridge, bridgeOpposition) {
    Console.print(
      `[${inputHistory.reduce((acc, cur, idx) => {
        if (cur === bridgeOpposition)
          return (acc += isZero(idx) ? FIRST_EMPTY : EMPTY);
        if (cur !== bridge[idx])
          return (acc += isZero(idx) ? FIRST_WRONG : WRONG);
        return (acc += isZero(idx) ? FIRST_RIGHT : RIGHT);
      }, DEFAULT.EMPTY_STRING)}]`,
    );
  },

  printResult({ isSuccess, tryCount }) {
    Console.print(`${RESULT_COMMENT}: ${isSuccess ? SUCCESS : FAIL}`);
    Console.print(`${COUNT_COMMENT}: ${tryCount}`);

    Console.close();
  },

  printGameEnd() {
    Console.print(END_COMMENT);
  },

  printUserInput(inputHistory, bridge) {
    OutputView.printMap(inputHistory, bridge, DEFAULT.DOWN);
    OutputView.printMap(inputHistory, bridge, DEFAULT.UP);
    Console.print(DEFAULT.EMPTY_STRING);
  },
};

module.exports = OutputView;
