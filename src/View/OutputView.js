const { GAME_MESSAGE, LINE_BREAK } = require('../utils/constants/GameSystem');
const { Console } = require('@woowacourse/mission-utils');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStart() {
    return Console.print(GAME_MESSAGE.start);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(map) {
    const [ up, down ] = map;
    Console.print(`[ ${up.join(' | ')} ]`);
    Console.print(`[ ${down.join(' | ')} ]`);
    Console.print('');             
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(map, isGameWin, retryCount) {
    Console.print(GAME_MESSAGE.game_result);
    this.printMap(map);
    Console.print(GAME_MESSAGE.success(isGameWin));
    Console.print(GAME_MESSAGE.attempts(retryCount));
  },

  printError(message) {
    return Console.print(message + LINE_BREAK);
  },

  lineBreak() {
    return Console.print('');
  },

  close() {
    return Console.close();
  },
};

module.exports = OutputView;
