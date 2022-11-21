const { Console } = require('@woowacourse/mission-utils');
const InputView = require('./InputView');
const MESSAGE = require('../constants/Message');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStartMessage() {
    Console.print(MESSAGE.ANNOUNCE.START);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridgegame) {
    const [up, down] = this.makeMap(bridgegame);
    Console.print(`[${up}]`);
    Console.print(`[${down}]`);
  },

  makeMap(bridgegame) {
    let up = '';
    let down = '';
    for (const history of bridgegame.getHistory()) {
      if (up.length == 0 || down.length == 0) {
        [up, down] = this.firstDraw(history);
        continue;
      }
      [up, down] = this.addDraw(up, down, history);
    }
    return [up, down];
  },

  firstDraw(history) {
    const value = history[0],
      result = history[1];
    if (value == 'U') {
      if (result) return [' O ', '   '];
      return [' X ', '   '];
    }
    if (result) return ['   ', ' O '];
    return ['   ', ' X '];
  },

  addDraw(up, down, history) {
    const value = history[0],
      result = history[1];
    if (value == 'U' && result) (up += '| O '), (down += '|   ');
    if (value == 'U' && !result) (up += '| X '), (down += '|   ');
    if (value == 'D' && result) (up += '|   '), (down += '| O ');
    if (value == 'D' && !result) (up += '|   '), (down += '| X ');
    return [up, down];
  },

  printError(error, method, object) {
    Console.print(error);
    return method(object);
  },
  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridgegame) {
    Console.print(MESSAGE.RESULT.TITLE);
    this.printMap(bridgegame);
    Console.print(`${MESSAGE.RESULT.SUCESS}${bridgegame.getResult()}`);
    Console.print(`${MESSAGE.RESULT.TRY}${bridgegame.getTry()}`);
    Console.close();
  },
};

module.exports = OutputView;
