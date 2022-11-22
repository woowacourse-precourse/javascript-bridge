const { Console } = require('@woowacourse/mission-utils');
const { COMMAND_TYPE, MOVE_TYPE, COMMAND_MATCH_INDEX } = require('../constants/Settings');
const MESSAGES = require('../constants/Messages');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStartMessage() {
    Console.print(MESSAGES.start);
  },

  printError(error) {
    Console.print(error.message);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(moves) {
    // utils 폴더 만들어서 빼기?
    const gameMap = moves.reduce(
      (acc, [result, command]) => {
        let row = COMMAND_MATCH_INDEX[command];

        acc[row].push(MOVE_TYPE[result]);
        acc[(row + 1) % 2].push(' ');

        return acc;
      },
      [[], []]
    );

    Console.print(gameMap.map((row) => `[ ${row.join(' | ')} ]`).join('\n'));
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

module.exports = OutputView;
