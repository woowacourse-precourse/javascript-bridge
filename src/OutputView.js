/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, GAME_STATUS } = require('./Message');

const OutputView = {
  /**
   * 게임 시작 문구를 출력한다.
   */
  printInit() {
    const { START } = MESSAGE;
    Console.print(START);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(first, second) {
    const { START, LINE, END } = GAME_STATUS;
    const firstRow = `${START}${first.join(LINE)}${END}`;
    const secondRow = `${START}${second.join(LINE)}${END}`;

    Console.print(firstRow);
    Console.print(secondRow);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(firstRow, secondRow, result, count) {
    const { RESULT, SCORE, RETRY_CNT } = MESSAGE;

    Console.print(RESULT);
    OutputView.printMap(firstRow, secondRow);
    Console.print(`${SCORE}${result}`);
    Console.print(`${RETRY_CNT} ${count}`);
  },

  printError(error) {
    Console.print(error);
  },

  quit() {
    Console.close();
  },
};

module.exports = OutputView;
