const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE } = require('../Utils/Constant');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   *
   * @param {boolean|undefined[]} result
   */
  printMap(result) {
    Console.print(this.getPrintLine(0, result));
    Console.print(this.getPrintLine(1, result));
    Console.print('');
  },

  /**
   *
   * @param {number} line
   * @param {boolean|undefined[]} result
   * @returns {string}
   */
  getPrintLine(line, result) {
    let messageLine = OUTPUT_MESSAGE.START;
    for (let level = 0; level < result[line].length; level += 1) {
      messageLine += this.getMessageElement(line, result, level);
      if (!this.isLastLine(level, result[line].length)) {
        messageLine += OUTPUT_MESSAGE.LINE;
      }
    }
    return messageLine + OUTPUT_MESSAGE.END;
  },

  /**
   *
   * @param {number} line
   * @param {boolean|undefined[]} result
   * @param {number} level
   * @returns {string}
   */
  getMessageElement(line, result, level) {
    if (result[line][level] === true) return OUTPUT_MESSAGE.CORRECT;
    if (result[line][level] === false) return OUTPUT_MESSAGE.INCORRECT;
    return OUTPUT_MESSAGE.EMPTY;
  },

  /**
   *
   * @param {number} level
   * @param {number} resultMapLength
   * @returns {boolean}
   */
  isLastLine(level, resultMapLength) {
    return level === resultMapLength - 1;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   *
   * @param {boolean|undefined[]} result
   * @param {boolean} isWin
   * @param {number} tryCnt
   */
  printResult(game) {
    Console.print(OUTPUT_MESSAGE.GAME_RESULT);
    this.printMap(game.result);
    Console.print(OUTPUT_MESSAGE.GAME_IS_SUCCESS(game.isWin()));
    Console.print(OUTPUT_MESSAGE.GAME_TRY_CNT(game.tryNumber));
    Console.close();
  },
};

module.exports = OutputView;
