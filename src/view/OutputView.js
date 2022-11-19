const { Console } = require('@woowacourse/mission-utils');
const { SENTENCE, BRIDGE, RESULT } = require('../constants/Constants');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStart() {
    Console.print(SENTENCE.START);
  },

  printMap(partialBridgeMap, lastMoving) {
    const partialBridgeLength = partialBridgeMap.length;
    const printMap = this.initPrintBridgeMap(partialBridgeLength); // ' '로 초기화된 다리 배열
    const lastDirection = partialBridgeMap[partialBridgeLength - 1];

    partialBridgeMap.reduce(this.checkDirection, printMap);

    if (!lastMoving)
      this.amendLastBridge(printMap, lastDirection, partialBridgeLength);

    const { openBracket, closeBracket } = RESULT;

    printMap.forEach((direction) =>
      Console.print(
        `${openBracket} ${direction.join(RESULT.divider)} ${closeBracket}`
      )
    );
  },

  checkDirection(printMap, side, i) {
    const [up, down] = printMap;
    if (side === BRIDGE.up) up[i] = RESULT.correct;
    if (side === BRIDGE.down) down[i] = RESULT.correct;
    return printMap;
  },

  amendLastBridge([up, down], lastSide, partialBridgeLength) {
    if (lastSide === BRIDGE.up) {
      up[partialBridgeLength - 1] = RESULT.blank;
      down[partialBridgeLength - 1] = RESULT.incorrect;
    }
    if (lastSide === BRIDGE.down) {
      down[partialBridgeLength - 1] = RESULT.blank;
      up[partialBridgeLength - 1] = RESULT.incorrect;
    }
  },

  initPrintBridgeMap(partialBridgeLength) {
    return Array.from(Array(BRIDGE.width), () =>
      Array(partialBridgeLength).fill(RESULT.blank)
    );
  },
  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

module.exports = OutputView;
