const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../constant');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStartMessage() {
    Console.print(MESSAGE.START_NOTIFICATION);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridgeState) {
    bridgeState.forEach((row, idx) => {
      Console.print(`[ ${row.join(' | ')} ]${idx ? '\n' : ''}`);
    });
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridgeState, isSuccess, numberOfAttempts) {
    Console.print('최종 게임 결과');
    OutputView.printMap(bridgeState);
    Console.print(`게임 성공 여부: ${isSuccess ? '성공' : '실패'}`);
    Console.print(`총 시도한 횟수: ${numberOfAttempts}`);
    Console.close();
  },
};

module.exports = OutputView;
