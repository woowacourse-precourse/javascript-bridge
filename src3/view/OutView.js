const MissionUtils = require('@woowacourse/mission-utils');
const GameList = require('../GameList');

const OutView = {
  initMessage(levels) {
    this.print(`과정 : 백엔드 | 프론트엔드`);
    this.print(`미션:`);

    levels.forEach(level => {
      const messag = ` - ${level}: ${GameList[level].join(' | ')}`;
      this.print(messag);
    });
  },

  print(message) {
    MissionUtils.Console.print(message);
  },
};

module.exports = OutView;
