const MissionUtils = require('@woowacourse/mission-utils');
const Constants = require('./Constants');

const OutputView = {
  printMap(map) {
    const [up, down] = OutputView.convertMap(map);
    MissionUtils.Console.print(up);
    MissionUtils.Console.print(down);
  },
  printResult(map, tryNumber, result) {
    const [up, down] = OutputView.convertMap(map);
    MissionUtils.Console.print(Constants.Output.FINAL_RESULT);
    MissionUtils.Console.print(up);
    MissionUtils.Console.print(down);
    MissionUtils.Console.print(`${Constants.Output.SUCCESS_OR_FAILURE} ${result}`);
    MissionUtils.Console.print(`${Constants.Output.NUMBER_OF_TRY} ${tryNumber}`);
    MissionUtils.Console.close();
  },
  convertMap(map) {
    const { U, D } = map;
    const up = `[ ${U.join(' | ')} ]`;
    const down = `[ ${D.join(' | ')} ]`;
    return [up, down];
  },
};

module.exports = OutputView;
