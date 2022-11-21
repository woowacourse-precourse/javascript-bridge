/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const { Console } = require('@woowacourse/mission-utils');
const { GAME, MOVEMENT } = require('../utils/constants');

const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * @param {Array} bridgeMoving 다리 건넌 진행상황 : 위 칸이면 U, 아래 칸이면 D로 표현한다.
   * @return {string[]}
   *
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  printGameStart() {
    Console.print(GAME.START);
  },

  makeUpside(lastPoint, upMove) {
    return upMove.reduce((arr, value, idx) => {
      if (idx === upMove.length - 1) {
        value ? arr.push(lastPoint) : arr.push(' ');
        return arr;
      }
      value ? arr.push(MOVEMENT.SUCCESS) : arr.push(' ');
      return arr;
    }, []);
  },

  makeDownside(lastPoint, downMove) {
    return downMove.reduce((arr, value, idx) => {
      if (idx === downMove.length - 1) {
        value ? arr.push(lastPoint) : arr.push(' ');
        return arr;
      }
      value ? arr.push(MOVEMENT.SUCCESS) : arr.push(' ');
      return arr;
    }, []);
  },

  printMap([isSuccess, upMove, downMove]) {
    const lastPoint = isSuccess ? MOVEMENT.SUCCESS : MOVEMENT.FAIL;
    Console.print(`[ ${this.makeUpside(lastPoint, upMove).join(' | ')} ]`);
    Console.print(`[ ${this.makeDownside(lastPoint, downMove).join(' | ')} ]`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {
    Console.print(GAME.END_RESULT);
  },

  printExceptionMessage(e) {
    Console.print(e.message);
  },

  printSucessOrFail(isSuccess) {
    Console.print(`${GAME.RESULT}${isSuccess ? GAME.SUCCESS : GAME.FAIL}`);
  },

  printTryCount(gameCount) {
    Console.print(`${GAME.TRY_COUNT}${gameCount}`);
  },
};

module.exports = OutputView;
