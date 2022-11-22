const { Console } = require('@woowacourse/mission-utils');
const { RESULT } = require('./constants/messages');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(gameStatus) {
    let result = [];
    if (gameStatus.playerLocation === 1) {
      result.push(`[ ${gameStatus.bridgeStatus.up} ]`);
      result.push(`[ ${gameStatus.bridgeStatus.down} ]`);
    } else {
      result.push(`[ ${gameStatus.bridgeStatus.up.join(' | ')} ]`);
      result.push(`[ ${gameStatus.bridgeStatus.down.join(' | ')} ]`);
    }
    Console.print(result[0]);
    Console.print(result[1]);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(gameStatus) {
    Console.print(RESULT.GAME_RESULT_PRINT);
    this.printMap(gameStatus);
    Console.print(RESULT.GAME_RESULT_SUCCESS);
    if (gameStatus.wrongFlag) Console.print(RESULT.GAME_FAIL);
    if (!gameStatus.wrongFlag) Console.print(RESULT.GAME_SUCCESS);
    Console.print(RESULT.GAME_COUNT);
    Console.print(gameStatus.tryCount);
    Console.close();
  },
};

module.exports = OutputView;
