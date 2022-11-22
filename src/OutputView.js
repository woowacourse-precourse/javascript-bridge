const MissionUtils = require('@woowacourse/mission-utils');
const { Console } = MissionUtils;
const ConstValue = require('./ConstValue');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
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

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
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

    let uppereBridge = [];
    for (let i = 0; i < tryCount; i++) {
      let result = bridge[i] === 'U' ? ConstValue.APPEND_BRIDGE.CORRECT : ConstValue.APPEND_BRIDGE.NONE;
      uppereBridge.push(result);
    }

    return uppereBridge;
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
