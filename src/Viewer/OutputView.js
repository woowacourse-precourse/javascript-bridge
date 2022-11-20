const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE } = require('../utils/Constant');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridge, game) {
    const resultMap = game.getResultMap(bridge);
    Console.print(this.getPrintLine(0, resultMap));
    Console.print(this.getPrintLine(1, resultMap));
  },

  getPrintLine(line, resultMap) {
    let messageLine = OUTPUT_MESSAGE.START;
    for (let levelCnt = 0; levelCnt < resultMap[line].length; levelCnt += 1) {
      messageLine += this.getMessageElement(line, resultMap, levelCnt);
      if (!this.isLastLine(levelCnt, resultMap[line].length)) {
        messageLine += OUTPUT_MESSAGE.LINE;
      }
    }
    return messageLine + OUTPUT_MESSAGE.END;
  },

  getMessageElement(line, resultMap, levelCnt) {
    if (resultMap[line][levelCnt] === true) return OUTPUT_MESSAGE.CORRECT;
    if (resultMap[line][levelCnt] === false) return OUTPUT_MESSAGE.INCORRECT;
    return OUTPUT_MESSAGE.EMPTY;
  },

  isLastLine(levelCnt, resultMapLength) {
    return levelCnt === resultMapLength - 1;
  },
  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridge, game) {
    Console.print(OUTPUT_MESSAGE.GAME_RESULT);
    this.printMap(bridge, game);
    Console.print(OUTPUT_MESSAGE.GAME_IS_SUCCESS(game.getResult(bridge)));
    Console.print(OUTPUT_MESSAGE.GAME_TRY_CNT(game.getTryCnt()));
  },
};

module.exports = OutputView;
