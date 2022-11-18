const { Console } = require('@woowacourse/mission-utils');
const { GAME_RESULT } = require('./constants');
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
    const result = OutputView.getMap(upBridge, downBridge);
    Console.print(result);
  },

  getMap(upBridge, downBridge) {
    const result = `${upBridge}\n${downBridge}`;
    return result;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridgeResult, success, attemps) {
    let result = '';
    result += `${GAME_RESULT.start}\n`;
    result += `${bridgeResult}\n\n`;
    result += `${OutputView.getResultString(success)}\n`;
    result += `${GAME_RESULT.attempts} ${attemps}`;
    Console.print(result);
  },

  getResultString(success) {
    if (success) {
      return `${GAME_RESULT.result} ${GAME_RESULT.success}`;
    }
    return `${GAME_RESULT.result} ${GAME_RESULT.fail}`;
  },
};

module.exports = OutputView;
