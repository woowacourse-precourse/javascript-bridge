const { Console } = require('@woowacourse/mission-utils');
const { GAME_RESULT, BRIDGE } = require('./constant');

const OutputView = {
  printMap(map) {
    const [up, down] = map;

    Console.print(BRIDGE.START + up.join(BRIDGE.SEPARATE) + BRIDGE.END);
    Console.print(BRIDGE.START + down.join(BRIDGE.SEPARATE) + BRIDGE.END);
    Console.print('');
  },

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
