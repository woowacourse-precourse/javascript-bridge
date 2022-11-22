const { Console } = require('@woowacourse/mission-utils');
const {
  GAME_START,
  RESULT,
  SUCCESS_OR_FAILURE,
  SUCCESS,
  FAILURE,
  TRY_COUNT,
  map,
} = require('../constants/Message');

const { BEGINNING, MIDDLE, END } = map;

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStart() {
    Console.print(GAME_START);
  },

  getMap(mapRows) {
    return mapRows.map((row) => `${BEGINNING}${row.join(MIDDLE)}${END}`).join('\n');
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(mapRows) {
    Console.print(OutputView.getMap(mapRows));
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(mapRows, isSuccess, tryCount) {
    const map = OutputView.getMap(mapRows);
    const result = `\n${RESULT}${map}\n${SUCCESS_OR_FAILURE}${
      isSuccess ? SUCCESS : FAILURE
    }${TRY_COUNT}${tryCount}`;

    Console.print(result);
  },
};

module.exports = OutputView;
