const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../Constants');

const OutputView = {
  DIVIDER: ' | ',
  SUCCESS: '성공',
  FAILURE: '실패',

  printMap(bridgeGame) {
    const upperMap = bridgeGame.getUpperTrack().join(OutputView.DIVIDER);
    const LowerMap = bridgeGame.getLowerTrack().join(OutputView.DIVIDER);
    Console.print(`[ ${upperMap} ]`);
    Console.print(`[ ${LowerMap} ]`);
  },

  printResult(bridgeGame) {
    const trial = bridgeGame.getTrialCount();
    let outcome;
    if (bridgeGame.isSuccess()) outcome = OutputView.SUCCESS;
    if (!bridgeGame.isSuccess()) outcome = OutputView.FAILURE;
    Console.print(MESSAGE.RESULT + `${outcome}`);
    Console.print(MESSAGE.TRIAL_COUNT + `${trial}`);
  },
};

module.exports = OutputView;

