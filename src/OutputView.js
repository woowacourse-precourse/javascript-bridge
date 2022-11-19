const { Console } = require("@woowacourse/mission-utils");
const { OUTPUT } = require("./data/Constants");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */

const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  lineBreak() {
    Console.print(``);
  },

  bridgeGameStart() {
    Console.print(OUTPUT.SEND_GAME_START);
  },

  convertToStandard(arr) {
    return arr.join(` | `).split(`,`);
  },

  printMap(bridgeGameResult) {
    Console.print(`[ ${this.convertToStandard(bridgeGameResult[0])} ]`);
    Console.print(`[ ${this.convertToStandard(bridgeGameResult[1])} ]\n`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridgeGameResult, successOrFail, tryCount) {
    Console.print(OUTPUT.SEND_GAME_RESULT);

    this.printMap(bridgeGameResult);

    Console.print(`${OUTPUT.SEND_GAME_SUCCESS_FAIL}${successOrFail}`);
    Console.print(`${OUTPUT.SEND_GAME_TRY_COUNT}${tryCount}\n`);
    Console.close();
    return;
  },
};

module.exports = OutputView;
