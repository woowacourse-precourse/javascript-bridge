const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE, MOVING } = require("./constants");

const OutputView = {
  printStart() {
    Console.print(MESSAGE.START);
  },

  printMap(bridge) {
    const upperMap = bridge.getMap(MOVING.UP);
    const lowerMap = bridge.getMap(MOVING.DOWN);
    Console.print(upperMap);
    Console.print(lowerMap);
  },

  printResult(bridge) {
    const result = bridge.getResult();
    const trialCount = bridge.getTrialCount();
    Console.print(MESSAGE.END);
    this.printMap(bridge);
    Console.print(MESSAGE.RESULT(result));
    Console.print(MESSAGE.TRIAL_COUNT(trialCount));
    Console.close();
  },
};

module.exports = OutputView;
