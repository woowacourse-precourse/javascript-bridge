const { Console } = require('@woowacourse/mission-utils');
const { SENTENCE, BRIDGE, RESULT, GAME } = require('../constants/Constants');
const { openBracket, closeBracket, divider } = RESULT;

const OutputView = {
  printStart() {
    Console.print(`${SENTENCE.start}${SENTENCE.newLine}`);
  },

  printMap(partialBridgeMap, lastMoving) {
    const partialBridgeLength = partialBridgeMap.length;
    const resultPrintMap = this.initPrintBridgeMap(partialBridgeLength); // ' '로 초기화된 다리 배열
    const lastDirection = partialBridgeMap[partialBridgeLength - 1];
    partialBridgeMap.reduce(this.checkDirection, resultPrintMap);
    if (!lastMoving)
      this.amendLastBridge(resultPrintMap, lastDirection, partialBridgeLength); // 다리의 끝을 건넌 결과에 따라 O, X로 변경
    resultPrintMap.forEach((direction) =>
      Console.print(`${openBracket} ${direction.join(divider)} ${closeBracket}`)
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

  printResult(partialBridgeMap, result, totalMovingCount) {
    Console.print(RESULT.final);
    this.printMap(partialBridgeMap, result);
    Console.print(`${RESULT.isClear}${result ? GAME.clear : GAME.fail}`);
    Console.print(`${RESULT.tryCount}${totalMovingCount}`);
  },

  printError(errorMessage) {
    Console.print(errorMessage);
  },

  printNewLine() {
    Console.print(SENTENCE.newLine);
  },
};

module.exports = OutputView;
