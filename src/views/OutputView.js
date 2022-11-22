const { Console } = require('@woowacourse/mission-utils');
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
    let [upperSide, lowerSide] = trials.reduce(this.handleMakingBridgeMap, ['[', '[']);

    return [upperSide.slice(0, -1) + ']', lowerSide.slice(0, -1) + ']', ''].join('\n');
  },

  //TODO: 깔끔하게 작성할 수 있는 방법
  handleMakingBridgeMap(bridgeMap, trial) {
    let [upperSide, lowerSide] = bridgeMap;

    if (trial.direction === 'U') {
      upperSide += ` ${trial.result} |`;
      lowerSide += '   |';
    } else if (trial.direction === 'D') {
      upperSide += `   |`;
      lowerSide += ` ${trial.result} |`;
    }

    return [upperSide, lowerSide];
  },

  newLine() {
    Console.print('');
  },

  printError(error) {
    Console.print(error.message);
    Console.close();
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
