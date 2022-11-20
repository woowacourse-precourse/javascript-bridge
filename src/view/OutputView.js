const { Console } = require('@woowacourse/mission-utils');
const { SENTENCE, BRIDGE, RESULT, GAME } = require('../constants/Constants');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStart() {
    Console.print(SENTENCE.start);
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

  printRetry() {
    Console.print();
  },

  printResult(partialBridgeMap, result, totalMovingCount) {
    Console.print(RESULT.final);
    this.printMap(partialBridgeMap, result);
    Console.print(`${RESULT.isClear}${result ? GAME.clear : GAME.fail}`);
    Console.print(`${RESULT.tryCount}${totalMovingCount}`);
  },

  printError(errorMessage) {
    Console.print(errorMessage);
  },
};

module.exports = OutputView;
