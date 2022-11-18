const { Console } = require('@woowacourse/mission-utils');
const { GAME_RESULT, GAME_MESSAGE } = require('./constants');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(upBridge, downBridge) {
    const result = `${upBridge}\n${downBridge}`;
    Console.print(result);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(upBridge, downBridge, success, attemps) {
    const result = `${GAME_RESULT.start}\n${upBridge}\n${downBridge}\n\n${
      GAME_RESULT.result
    } ${success ? GAME_RESULT.success : GAME_RESULT.fail}\n${
      GAME_RESULT.attempts
    } ${attemps}`;
    Console.print(result);
  },
};

module.exports = OutputView;
