const { Console } = require("@woowacourse/mission-utils");
const { OUTPUT } = require("./constants/messages");
const { INPUT_VALUE } = require("./constants/values");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  printMap(currentBridge) {
    const bridgeMap = this.createBridgeMap(currentBridge);
    this.transformBridgeMap(bridgeMap);

    Console.print(bridgeMap[0]);
    Console.print(bridgeMap[1]);
  },

  createBridgeMap(currentBridge) {
    let bridgeMap = ["[", "["];
    for (let i = 0; i < currentBridge.length; i++) {
      this.createSinglBridge(currentBridge, bridgeMap, i);
    }
    return bridgeMap;
  },

  createSinglBridge(currentBridge, bridgeMap, index) {
    if (currentBridge[index][0] === INPUT_VALUE.UP) {
      bridgeMap[0] += ` ${currentBridge[index][1]} |`;
      bridgeMap[1] += "   |";
    }
    if (currentBridge[index][0] === INPUT_VALUE.DOWN) {
      bridgeMap[0] += "   |";
      bridgeMap[1] += ` ${currentBridge[index][1]} |`;
    }
  },

  sliceLastString(targetStr) {
    return targetStr.substring(0, targetStr.length - 1);
  },

  addLastCloseMark(targetStr) {
    return (targetStr += "]");
  },

  transformBridgeMap(bridgeMap) {
    bridgeMap[0] = this.sliceLastString(bridgeMap[0]);
    bridgeMap[1] = this.sliceLastString(bridgeMap[1]);
    bridgeMap[0] = this.addLastCloseMark(bridgeMap[0]);
    bridgeMap[1] = this.addLastCloseMark(bridgeMap[1]);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(state, bridgeGame) {
    this.printFianlResult(bridgeGame);
    this.printGameSummury(state, bridgeGame);
  },

  printFianlResult(bridgeGame) {
    Console.print(OUTPUT.FINAL_RESULT);
    this.printMap(bridgeGame.getCurrentBridge());
  },

  printGameSummury(state, bridgeGame) {
    Console.print(`${OUTPUT.WHETHER_SUCCESS_OR_FALI}: ${state}`);
    Console.print(`${OUTPUT.TOTAL_ROUND}: ${bridgeGame.getRound()}`);
  },
};

module.exports = OutputView;
