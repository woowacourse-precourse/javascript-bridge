const MissionUtils = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGES } = require('./common/messages');

const OutputView = {
  printMap(uparray, downarray) {
    MissionUtils.Console.print('[ ' + uparray.join(' | ') + ' ]');
    MissionUtils.Console.print('[ ' + downarray.join(' | ') + ' ]');
  },

  printResult(result) {
    const [Player, Bridge] = result;

    this.printMap(Bridge.getUpBridge(), Bridge.getDownBridge());
    MissionUtils.Console.print(OUTPUT_MESSAGES.OUTPUT_FINALCOUNT(Player.getCount()));
  },

  StartGame() {
    MissionUtils.Console.print(OUTPUT_MESSAGES.OUTPUT_STARTGAME);
  },
};

module.exports = OutputView;
