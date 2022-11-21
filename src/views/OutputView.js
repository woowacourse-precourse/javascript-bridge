const { Console } = require('@woowacourse/mission-utils');
const GAME_MESSAGE = require('../utils/message');

const OutputView = {
  printStartMessage() {
    Console.print(GAME_MESSAGE.start);
  },

  printMap(trials) {
    const [upperSide, lowerSide] = this.getBridgeMap(trials);
    Console.print(`${upperSide}\n${lowerSide}\n`);
  },

  getBridgeMap(trials) {
    let [upperSide, lowerSide] = trials.reduce(this.handleMakingBridgeMap, ['[', '[']);

    return [upperSide.slice(0, -1) + ']', lowerSide.slice(0, -1) + ']', '\n'];
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

  //TODO: 템플릿을 뺄 것
  printResult(bridgeGame) {
    const [bridgeUpperSide, bridgeLowerSide] = this.getBridgeMap(bridgeGame.trials);
    const trialCount = bridgeGame.trialCount;
    const status = bridgeGame.status;
    Console.print(
      `최종 게임 결과
${bridgeUpperSide}
${bridgeLowerSide}

게임 성공 여부: ${status}
총 시도한 횟수: ${trialCount}`
    );
    Console.close();
  },
};

module.exports = OutputView;
