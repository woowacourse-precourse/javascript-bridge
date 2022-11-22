const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGES } = require('../constant/Messages');
const { BRIDGE_CONSTANTS } = require('../constant/GameConstants');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStartMessage() {
    Console.print(GAME_MESSAGES.start);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(maps) {
    maps.forEach((map) => {
      Console.print(map.join('') + BRIDGE_CONSTANTS.shapeOfEnd);
    });
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(maps, IS_SUCCESS, numberOfAttempts) {
    Console.print(GAME_MESSAGES.result);
    this.printMap(maps);
    const finalGameResult = IS_SUCCESS ? GAME_MESSAGES.success : GAME_MESSAGES.failure;
    Console.print(finalGameResult);
    Console.print(GAME_MESSAGES.totalAttempts + numberOfAttempts);
    Console.close();
  },
};

module.exports = OutputView;
