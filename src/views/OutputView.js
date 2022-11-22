/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const { Console } = require('@woowacourse/mission-utils');
const { GAME, MOVEMENT } = require('../utils/Constants');

const OutputView = {
  printGameStart() {
    Console.print(GAME.START);
  },

  printMap(isSuccess, [upSide, downSide]) {
    Console.print(
      `[ ${this.makeSide(isSuccess, upSide).join(MOVEMENT.BORDER)} ]`
    );
    Console.print(
      `[ ${this.makeSide(isSuccess, downSide).join(MOVEMENT.BORDER)} ]`
    );
  },

  makeSide(isSuccess, moveResult) {
    const lastPoint = isSuccess ? MOVEMENT.SUCCESS : MOVEMENT.FAIL;
    return moveResult.reduce((arr, value, idx) => {
      if (idx === moveResult.length - 1) {
        value ? arr.push(lastPoint) : arr.push(MOVEMENT.BLANK);
        return arr;
      }
      value ? arr.push(MOVEMENT.SUCCESS) : arr.push(MOVEMENT.BLANK);
      return arr;
    }, []);
  },

  printExceptionMessage(e) {
    Console.print(e.message);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {
    Console.print(GAME.END_RESULT);
  },

  printSucessOrFail(gameSuccess) {
    Console.print(`${GAME.RESULT}${gameSuccess? GAME.SUCCESS : GAME.FAIL}`);
  },
  
  printTryCount(gameCount) {
    Console.print(`${GAME.TRY_COUNT}${gameCount}`);
  },
    
};

module.exports = OutputView;
