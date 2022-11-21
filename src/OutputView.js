const { Console } = require('@woowacourse/mission-utils');
const { GAME_RESULT, BRIDGE } = require('./constant');

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
    const [up, down] = map;

    Console.print(BRIDGE.START + up.join(BRIDGE.SEPARATE) + BRIDGE.END);
    Console.print(BRIDGE.START + down.join(BRIDGE.SEPARATE) + BRIDGE.END);
    Console.print('');
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridge, result) {
    this.finalResultText(bridge, result);
    Console.close();
  },

  finalResultText(bridge, result) {
    const [up, down] = bridge;
    const pass = result.isPass ? GAME_RESULT.SUCCESS : GAME_RESULT.FAIL;

    Console.print(GAME_RESULT.FINAL_RESULT);
    Console.print(BRIDGE.START + up.join(BRIDGE.SEPARATE) + BRIDGE.END);
    Console.print(BRIDGE.START + down.join(BRIDGE.SEPARATE) + BRIDGE.END);
    Console.print(GAME_RESULT.IS_PASS + `${pass}`);
    Console.print(GAME_RESULT.TRY_COUNT + `${result.try}`);
  },
};

module.exports = OutputView;
