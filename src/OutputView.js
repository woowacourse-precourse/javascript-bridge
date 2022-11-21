const { Console } = require('@woowacourse/mission-utils');
const { BRIDGE, MESSAGE, MAP } = require('./constant/Bridge');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(map) {
    const upper = MAP.START + map[BRIDGE.UPPER].join(MAP.DELIMITER) + MAP.END;
    const lower = MAP.START + map[BRIDGE.LOWER].join(MAP.DELIMITER) + MAP.END;
    Console.print(upper);
    Console.print(lower);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(map, gameResult, tryCount) {
    Console.print(MESSAGE.END);
    this.printMap(map);
    Console.print(MESSAGE.GAME_RESULT + gameResult);
    Console.print(MESSAGE.TRY + tryCount);
  }
};

module.exports = OutputView;
