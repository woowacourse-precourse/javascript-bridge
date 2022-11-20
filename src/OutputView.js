const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE, MOVING } = require("./constants");

const OutputView = {
  printStart() {
    Console.print(MESSAGE.START);
  },

  printMap(bridgeGame) {
    const upperMap = bridgeGame.getMap(MOVING.UP);
    const lowerMap = bridgeGame.getMap(MOVING.DOWN);
    Console.print(upperMap);
    Console.print(lowerMap);
  },

  printResult(bridgeGame) {
    const result = bridgeGame.getResult();
    const trialCount = bridgeGame.getTrialCount();
    Console.print(MESSAGE.END);
    this.printMap(bridgeGame);
    Console.print(MESSAGE.RESULT(result));
    Console.print(MESSAGE.TRIAL_COUNT(trialCount));
    Console.close();
  },
};

module.exports = OutputView;
