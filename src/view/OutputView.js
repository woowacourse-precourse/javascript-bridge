const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE } = require('../utils/constants');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printGameStart() {
    Console.print(OUTPUT_MESSAGE.START_GAME);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(model) {
    const drawResult = model.getCurrentMap();
    Console.print(`${drawResult}\n`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(successOrFail, model) {
    Console.print(OUTPUT_MESSAGE.TOTAL_GAME_RESULT);
    this.printMap(model);
    const count = model.getTryCount();
    Console.print(OUTPUT_MESSAGE.SUCCESS_OR_NOT_AND_TOTAL_ATTEMPTS(successOrFail, count));
    this.close();
  },

  close() {
    Console.close();
  },
};

module.exports = OutputView;
