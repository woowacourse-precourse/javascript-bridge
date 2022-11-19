const MissionUtils = require('@woowacourse/mission-utils');

const GameProgress = {
  printGameStart() {
    MissionUtils.Console.print('다리 건너기 게임을 시작합니다.\n');
  },

  printErrorMessage(err) {
    MissionUtils.Console.print(`${err}\n`);
  },

};

module.exports = GameProgress;
