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
  printResult(bridgeArray, tryCount, isSuccess) {
    Console.print('최종 게임 결과\n' + bridgeArray[0] + '\n' + bridgeArray[1]);
    const successMessage = '';
    if (isSuccess) {
      successMessage = '성공';
    } else {
      successMessage = '실패';
    }
    Console.print('게임 성공 여부: ' + successMessage);
    Console.print('총 시도한 횟수: ' + tryCount);
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
    const bridgeOutput = ['[', bridge.join('|'), ']'].join(' ');

    return bridgeOutput;
  },
};

module.exports = OutputView;
