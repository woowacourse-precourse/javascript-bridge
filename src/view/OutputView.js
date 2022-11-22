const { Console } = require("@woowacourse/mission-utils");
const { GAME_MESSAGE } = require("../utils/Constants");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printGameStartPhrase() {
    Console.print(GAME_MESSAGE.start);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   */
  printMap(upsideBridge, downsideBridge) {
    Console.print(`[${upsideBridge.join("|")}]`);
    Console.print(`[${downsideBridge.join("|")}]`);
  },

  /**
   * 게임의 최종 결과를 출력한다.
   */
  printResult(upsideBridge, downsideBridge, gameState) {
    Console.print(GAME_MESSAGE.result);
    this.printMap(upsideBridge, downsideBridge);
    Console.print(`${GAME_MESSAGE.is_success} ${gameState.result}`);
    Console.print(`${GAME_MESSAGE.round} ${gameState.round}`);
  },
};

module.exports = OutputView;
