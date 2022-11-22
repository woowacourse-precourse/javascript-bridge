const { Console } = require('@woowacourse/mission-utils');

const MESSAGE = Object.freeze({
  START: '다리 건너기 게임을 시작합니다.',
  RESULT: '최종 게임 결과',
  IS_CLEAR: (status) => `게임 성공 여부: ${status}`,
  TRY_COUNT: (count) => `총 시도한 횟수: ${count}`,
});

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStarting() {
    Console.print(`${MESSAGE.START}`);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(movingHistory) {
    movingHistory.forEach((row) => Console.print(row));
  },

  printError(error) {
    Console.print(`\n${error}`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(movingHistory, status, count) {
    Console.print(`\n${MESSAGE.RESULT}`);
    this.printMap(movingHistory);
    Console.print(`\n${MESSAGE.IS_CLEAR(status)}`);
    Console.print(MESSAGE.TRY_COUNT(count));
    Console.close();
  },
};

module.exports = OutputView;
