const MissionUtils = require('@woowacourse/mission-utils');

/* ************************************************ *
 * GameProgress: 게임 진행을 위한 문장을 출력하는 객체 *
 * ************************************************ *
 */

const GameProgress = {
  printGameStart() {
    const BRIDGE_GAME_START = '다리 건너기 게임을 시작합니다.\n';
    MissionUtils.Console.print(BRIDGE_GAME_START);
  },

  printErrorMessage(err) {
    MissionUtils.Console.print(`${err}\n`);
  },

};

module.exports = GameProgress;
