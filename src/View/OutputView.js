const MissionUtils = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../Utils/constant');

const OutputView = {

  printStart() {
    MissionUtils.Console.print(MESSAGE.GAME_START);
  },

  printMap(bridgeGame) {
    bridgeGame.realBridge.map((x) => MissionUtils.Console.print(`[ ${x.join('\n')} ]`));
  },

  printResult(bridgeGame, isSucces, count) {
    MissionUtils.Console.print(MESSAGE.RESULT);
    bridgeGame.realBridge.map((x) => MissionUtils.Console.print(`[ ${x.join(' | ')} ]`));
    MissionUtils.Console.print(MESSAGE.isSucces(isSucces));
    MissionUtils.Console.print(MESSAGE.printCount(count));
    MissionUtils.Console.close();
  },
};

module.exports = OutputView;
