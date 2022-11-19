const MissionUtils = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./constants/messages');
const { VALUE } = require('./constants/values');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
 const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
   printMap(upper, lower) {
    const bridgeUpper = upper.join('|');
    const bridgeLower = lower.join('|');
    const bridge = [
      VALUE.OPENER.concat(bridgeUpper, VALUE.CLOSER),
      VALUE.OPENER.concat(bridgeLower, VALUE.CLOSER)
    ];
    MissionUtils.Console.print(`${bridge[0]}\n${bridge[1]}\n`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
   printResult(game) {
    let getWin = game.getGameWin();
    let getTrialCount = game.getTrialCount();
    let getUpper = game.getBridgeUpper();
    let getLower = game.getBridgeLower();
    MissionUtils.Console.print(MESSAGE.GAME_RESULT_PRINT);
    this.printMap(getUpper, getLower);
    this.printGameSuccessFail(getWin, getTrialCount);
  },

  printGameSuccessFail(getWin, getTrialCount) {
    if (getWin === true) {
      this.printGameSuccess(getTrialCount);
      return;
    }
    this.printGameFail(getTrialCount);
  },

  printGameSuccess(getTrialCount) {
    MissionUtils.Console.print(MESSAGE.GAME_SUCCESS);
    MissionUtils.Console.print(
      `${MESSAGE.TOTAL_TRIAL_NUMBERS}` + `${getTrialCount}`
    );
    MissionUtils.Console.close();
  },

  printGameFail(getTrialCount) {
    MissionUtils.Console.print(MESSAGE.GAME_FAILURE);
    MissionUtils.Console.print(
      `${MESSAGE.TOTAL_TRIAL_NUMBERS}` + `${getTrialCount}`
    );
    MissionUtils.Console.close();
  }
};

module.exports = OutputView;