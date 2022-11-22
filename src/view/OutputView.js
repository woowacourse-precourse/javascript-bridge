const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE } = require('../utils/Constant');

const OutputView = {
  printStartGame() {
    Console.print(OUTPUT_MESSAGE.START_GAME);
  },

  printMap({ upsideBridge, downsideBridge }) {
    Console.print(OUTPUT_MESSAGE.UPSIDE_BRIDGE(upsideBridge));
    Console.print(OUTPUT_MESSAGE.DOWNSIDE_BRIDGE(downsideBridge));
  },

  printResult(result, attempts) {
    Console.print(OUTPUT_MESSAGE.IS_SUCCESS(result));
    Console.print(OUTPUT_MESSAGE.ATTEMPTS(attempts));
  },
};

module.exports = OutputView;
