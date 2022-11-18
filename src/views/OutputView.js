const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../constant');

const OutputView = {
  printMessage(message) {
    Console.print(message);
  },

  printMap(bridgeState) {
    bridgeState.forEach((row, idx) => {
      Console.print(MESSAGE.state(row, idx));
    });
  },

  printResult([bridgeState, isSuccess, numberOfAttempts]) {
    Console.print(MESSAGE.RESULT_NOTIFICATION);
    OutputView.printMap(bridgeState);
    Console.print(
      `${MESSAGE.SUCCEED_OR_FAIL}${isSuccess ? MESSAGE.SUCCESS : MESSAGE.FAIL}`
    );
    Console.print(`${MESSAGE.NUMBER_OF_ATTEMPTS}${numberOfAttempts}`);
  },
};

module.exports = OutputView;
