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

  // 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력
  printMap(bridge) {
    let [top, bottom] = bridge.slice();
    const topResult = `[ ${top.join().replace(/,/g, ' | ')} ]`;
    const bottomResult = `[ ${bottom.join().replace(/,/g, ' | ')} ]`;
    return Console.print(`${topResult}\n${bottomResult}`);
  },

  // 게임 최종 결과 출력
  printResult(trycount, success) {
    const count = trycount === 0 ? 1 : trycount;

    Console.print('\n' + GAME_MESSAGE.GAME_CLEAR(success));
    Console.print(GAME_MESSAGE.TRY_COUNT(count));
  },

  // 다리 길이 입력 오류 메시지 출력
  lengthInputError() {
    Console.print(ERROR_MESSAGE.INVALID_LENGTH + '\n');
  },

  // 다리 이동 입력 오류 메시지 출력
  moveInputError() {
    Console.print(ERROR_MESSAGE.INVALID_MOVE + '\n');
  },

  // 재시작 여부 입력 오류 메시지 출력
  quitInputError() {
    Console.print(ERROR_MESSAGE.INVALID_QUIT + '\n');
  },

  // 그 밖의 예상못한 입력 오류 메시지 출력
  unExceptedError() {
    Console.print(ERROR_MESSAGE.UNEXCEPTED_ERROR + '\n');
  },
};

module.exports = OutputView;
