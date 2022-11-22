const MissionUtils = require('@woowacourse/mission-utils');
const { Console } = MissionUtils;
const ConstValue = require('./ConstValue');

const OutputView = {
  printMap(bridgeGame, lastTrySuccess) {
    let upperBridge = this.makeUpperBridge(bridgeGame);
    let underBridge = this.makeUnderBridge(bridgeGame);

    if (!lastTrySuccess) {
      upperBridge.push(this.pushUpperFailResult(bridgeGame));
      underBridge.push(this.pushUnderFailResult(bridgeGame));
    }

    Console.print(this.makePrintFormat(upperBridge));
    Console.print(this.makePrintFormat(underBridge));
  },

  printResult(isSuccess, gameCount, bridgeGame) {
    Console.print(ConstValue.GAME_END_MESSAGE);
    this.printMap(bridgeGame, isSuccess);

    if (bridgeGame.tryCountGetter() === bridgeGame.bridgeGetter().length) {
      Console.print(ConstValue.GAME_ISSUCCESS.SUCCESS);
    } else {
      Console.print(ConstValue.GAME_ISSUCCESS.FAIL);
    }

    Console.print(`${ConstValue.TOTAL_PLAY_COUNT_MESSAGE}${gameCount}`);
  },

  printStartMessage() {
    Console.print(ConstValue.START_MESSAGE);
  },

  makeUpperBridge(bridgeGame) {
    const bridge = bridgeGame.bridgeGetter();
    const tryCount = bridgeGame.tryCountGetter();

    let upperBridge = [];
    for (let i = 0; i < tryCount; i++) {
      let result = bridge[i] === 'U' ? ConstValue.APPEND_BRIDGE.CORRECT : ConstValue.APPEND_BRIDGE.NONE;
      upperBridge.push(result);
    }

    return upperBridge;
  },

  makeUnderBridge(bridgeGame) {
    const bridge = bridgeGame.bridgeGetter();
    const tryCount = bridgeGame.tryCountGetter();

    let underBridge = [];
    for (let i = 0; i < tryCount; i++) {
      let result = bridge[i] === 'D' ? ConstValue.APPEND_BRIDGE.CORRECT : ConstValue.APPEND_BRIDGE.NONE;
      underBridge.push(result);
    }

    return underBridge;
  },

  pushUpperFailResult(bridgeGame) {
    const bridge = bridgeGame.bridgeGetter();
    const tryCount = bridgeGame.tryCountGetter();

    let failResult = bridge[tryCount + 1] === 'D' ? ConstValue.APPEND_BRIDGE.WRONG : ConstValue.APPEND_BRIDGE.NONE;

    return failResult;
  },

  pushUnderFailResult(bridgeGame) {
    const bridge = bridgeGame.bridgeGetter();
    const tryCount = bridgeGame.tryCountGetter();

    let failResult = bridge[tryCount + 1] === 'U' ? ConstValue.APPEND_BRIDGE.WRONG : ConstValue.APPEND_BRIDGE.NONE;

    return failResult;
  },

  makePrintFormat(bridge) {
    const bridgeOutput = ['['];
    let middleBridge = bridge.join('|').split('');
    for (let i = 0; i < middleBridge.length; i++) {
      bridgeOutput.push(middleBridge[i]);
    }
    bridgeOutput.push(']');
    const bridgeStrOutput = bridgeOutput.join(' ');

    return bridgeStrOutput;
  },
};

module.exports = OutputView;
