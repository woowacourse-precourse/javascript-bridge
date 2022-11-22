const { Console } = require('@woowacourse/mission-utils');
const { GAME_SIGNATURE, MAP_SIGNATURE } = require('../utils/constant');
const GAME_MESSAGE = require('../utils/message');

const OutputView = {
  printStartMessage() {
    Console.print(GAME_MESSAGE.start);
  },

  printMap(trials) {
    const bridgeMap = this.getBridgeMap(trials);
    Console.print(bridgeMap);
  },

  getBridgeMap(trials) {
    const [upperSide, lowerSide] = trials.reduce(this.handleMakingBridgeMap, [[], []]);
    const upperMap =
      MAP_SIGNATURE.opening + upperSide.join(MAP_SIGNATURE.partition) + MAP_SIGNATURE.closed;
    const lowerMap =
      MAP_SIGNATURE.opening + lowerSide.join(MAP_SIGNATURE.partition) + MAP_SIGNATURE.closed;
    return `${upperMap}\n${lowerMap}\n`;
  },

  handleMakingBridgeMap([upper, lower], { direction: moving, result: movingResult }) {
    if (moving === GAME_SIGNATURE.up) {
      return new Array([...upper, movingResult], [...lower, MAP_SIGNATURE.notSelected]);
    }

    if (moving === GAME_SIGNATURE.down) {
      return new Array([...upper, MAP_SIGNATURE.notSelected], [...lower, movingResult]);
    }
  },

  newLine() {
    Console.print('');
  },

  printError(error) {
    Console.print(error.message);
  },

  printResult(bridgeGame) {
    const bridgeMap = this.getBridgeMap(bridgeGame.trials);
    const trialCount = bridgeGame.trialCount;
    const status = bridgeGame.status;
    Console.print(this.getTemplate({ bridgeMap, trialCount, status }));
    Console.close();
  },

  getTemplate({ bridgeMap, status, trialCount }) {
    return `최종 게임 결과
${bridgeMap}
게임 성공 여부: ${status}
총 시도한 횟수: ${trialCount}`;
  },
};

module.exports = OutputView;
