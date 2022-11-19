const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE, ERROR_MESSAGE } = require('../constants/constants');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  gameStart() {
    Console.print(GAME_MESSAGE.GAME_START);
  },

  gameResult() {
    Console.print(GAME_MESSAGE.GAME_RESULT);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridge) {
    let [top, bottom] = bridge.slice();
    const topResult = `[ ${top.join().replace(/,/g, ' | ')} ]`;
    const bottomResult = `[ ${bottom.join().replace(/,/g, ' | ')} ]`;
    return Console.print(`${topResult}\n${bottomResult}`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(trycount, success) {
    const count = trycount === 0 ? 1 : trycount;

    Console.print('\n' + GAME_MESSAGE.GAME_CLEAR(success));
    Console.print(GAME_MESSAGE.TRY_COUNT(count));
  },

  lengthInputError() {
    Console.print(ERROR_MESSAGE.INVALID_LENGTH + '\n');
  },

  moveInputError() {
    Console.print(ERROR_MESSAGE.INVALID_MOVE + '\n');
  },

  quitInputError() {
    Console.print(ERROR_MESSAGE.INVALID_QUIT + '\n');
  },
};

module.exports = OutputView;
