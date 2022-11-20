const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE, BRIDGE } = require('../utils/constants');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStart() {
    Console.print(OUTPUT_MESSAGE.gameStart);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridgeMap) {
    const upBridgeMap = `[ ${[...bridgeMap[BRIDGE.up]].join(' | ')} ]`;
    const downBridgeMap = `[ ${[...bridgeMap[BRIDGE.down]].join(' | ')} ]`;
    Console.print(upBridgeMap);
    Console.print(downBridgeMap);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult({ bridgeMap, isSuccess, tryCount }) {
    Console.print(OUTPUT_MESSAGE.gameQuit);
    this.printMap(bridgeMap);
    if (isSuccess) Console.print(OUTPUT_MESSAGE.gameSuccess);
    if (!isSuccess) Console.print(OUTPUT_MESSAGE.gameFail);
    Console.print(OUTPUT_MESSAGE.gameTryCount(tryCount));
  },

  printError(errorMessage) {
    Console.print(errorMessage);
  },
};

module.exports = OutputView;
