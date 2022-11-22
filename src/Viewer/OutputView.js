const MissionUtils = require('@woowacourse/mission-utils');
const { MESSAGE, SIGN } = require('../utils/constants');

const OutputView = {
  printStart() {
    MissionUtils.Console.print(MESSAGE.GAME_START);
  },

  printMap(upper, lower) {
    const bridgeUpper = upper.join('|');
    const bridgeLower = lower.join('|');
    const bridge = [
      SIGN.OPENER.concat(bridgeUpper, SIGN.CLOSER),
      SIGN.OPENER.concat(bridgeLower, SIGN.CLOSER)
    ];
    MissionUtils.Console.print(`${bridge[0]}\n${bridge[1]}\n`);
  },

  printResult(game) {
    const getWin = game.getGameWin();
    const getTrialCount = game.getTrialCount();
    const getUpper = game.getBridgeUpper();
    const getLower = game.getBridgeLower();
    MissionUtils.Console.print(MESSAGE.GAME_RESULT_PRINT);
    this.printMap(getUpper, getLower);
    this.printGameResultSuccessFail(getWin, getTrialCount);
  },

  printGameResultSuccessFail(getWin, getTrialCount) {
    if (getWin === true) {
      this.printGameResultSuccess(getTrialCount);
      return;
    }
    this.printGameResultFail(getTrialCount);
  },

  printGameResultSuccess(getTrialCount) {
    MissionUtils.Console.print(MESSAGE.GAME_RESULT_SUCCESS);
    MissionUtils.Console.print(
      `${MESSAGE.TOTAL_TRIAL_NUMBERS}` + `${getTrialCount}`
    );
    MissionUtils.Console.close();
  },

  printGameResultFail(getTrialCount) {
    MissionUtils.Console.print(MESSAGE.GAME_RESULT_FAIL);
    MissionUtils.Console.print(
      `${MESSAGE.TOTAL_TRIAL_NUMBERS}` + `${getTrialCount}`
    );
    MissionUtils.Console.close();
  },

  printError(error) {
    MissionUtils.Console.print(error);
  }
};

module.exports = OutputView;
