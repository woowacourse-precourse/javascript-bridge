const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constants/index");
const { generateUpMap, generateDownMap } = require("./BridgeMapGenerator");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printIntro() {
    Console.print(MESSAGE.START_GAME);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   */
  printMap({ isSafe, bridge, location }) {
    const upMap = generateUpMap(isSafe, bridge, location);
    const downMap = generateDownMap(isSafe, bridge, location);

    Console.print(upMap);
    Console.print(downMap);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   */
  printResult({ isSuccess, current, tryCount }, printMap) {
    Console.print(MESSAGE.GAME_RESULT);
    printMap(current);

    Console.print(isSuccess ? MESSAGE.GAME_SUCCESS : MESSAGE.GAME_FAIL);
    Console.print(MESSAGE.GAME_TRY + tryCount);
  },

  printError(message) {
    Console.print(message);
  },
};

module.exports = OutputView;
