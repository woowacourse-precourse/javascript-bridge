const { Console } = require("@woowacourse/mission-utils");
const { PRINT_MESSAGE } = require("./Utils/Message");
const { BRIDGE_INDEX } = require("./Utils/Constants");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printGameStart() {
    Console.print(PRINT_MESSAGE.GAME_START);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(currBridge) {
    const upBridge = currBridge[BRIDGE_INDEX.UP].join(" | ");
    const downBridge = currBridge[BRIDGE_INDEX.DOWN].join(" | ");
    Console.print("[ " + upBridge + " ]");
    Console.print("[ " + downBridge + " ]");
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(currBridge, gameResult, trial) {
    Console.print(PRINT_MESSAGE.GAME_RESULT_TITLE);
    this.printMap(currBridge);
    let result;
    if (gameResult) {
      result = PRINT_MESSAGE.GAME_WIN;
    }
    if (!gameResult) {
      result = PRINT_MESSAGE.GAME_LOSE;
    }
    Console.print(`${PRINT_MESSAGE.GAME_RESULT} ${result}`);
    Console.print(`${PRINT_MESSAGE.GAME_TRIAL} ${trial}`);
  },
};

module.exports = OutputView;
