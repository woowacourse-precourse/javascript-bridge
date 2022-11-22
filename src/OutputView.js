const { Console } = require("@woowacourse/mission-utils");
const { OUTPUT } = require("./constants/messages");
const { INPUT_VALUE, DIRECTION_INDEX, STATES } = require("./constants/values");

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

    Console.print(bridgeMap[DIRECTION_INDEX.UPSIDE]);
    Console.print(bridgeMap[DIRECTION_INDEX.DOWNSIDE]);
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
      bridgeMap[DIRECTION_INDEX.UPSIDE] += ` ${currentBridge[index][1]} |`;
      bridgeMap[DIRECTION_INDEX.DOWNSIDE] += "   |";
    }
    if (currentBridge[index][0] === INPUT_VALUE.DOWN) {
      bridgeMap[DIRECTION_INDEX.UPSIDE] += "   |";
      bridgeMap[DIRECTION_INDEX.DOWNSIDE] += ` ${currentBridge[index][1]} |`;
    }
  },

  sliceLastString(targetStr) {
    return targetStr.substring(0, targetStr.length - 1);
  },

  addLastCloseMark(targetStr) {
    return (targetStr += "]");
  },

  transformBridgeMap(bridgeMap) {
    bridgeMap[DIRECTION_INDEX.UPSIDE] = this.sliceLastString(bridgeMap[0]);
    bridgeMap[DIRECTION_INDEX.DOWNSIDE] = this.sliceLastString(bridgeMap[1]);
    bridgeMap[DIRECTION_INDEX.UPSIDE] = this.addLastCloseMark(bridgeMap[0]);
    bridgeMap[DIRECTION_INDEX.DOWNSIDE] = this.addLastCloseMark(bridgeMap[1]);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(state, bridgeGame) {
    if (state === STATES.SUCCESS) {
      this.printBlank();
    }
    this.printFianlResult(bridgeGame);
    this.printBlank();
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

  printBlank() {
    Console.print("");
  },
};

module.exports = OutputView;
