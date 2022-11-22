const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGE_OUTPUT, CLAER, FAILURE } = require("../utils/messages");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  print(message) {
    MissionUtils.Console.print(message);
  },

  printOpening() {
    this.print(`${MESSAGE_OUTPUT.GAME_OPENING}\n`);
  },

  printErrorMessage(message) {
    this.print(message);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap({ upperBridgeMap, lowerBridgeMap }) {
    this.print(upperBridgeMap);
    this.print(lowerBridgeMap);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(map, isClaer, tryCount) {
    this.print(`${MESSAGE_OUTPUT.GAME_RESULT}`);
    this.printMap(map);
    this.print(`${MESSAGE_OUTPUT.IS_GAME_CLEAR} ${isClaer ? CLAER : FAILURE}`);
    this.print(`${MESSAGE_OUTPUT.TRY_COUNT} ${tryCount}`);
  },
};

module.exports = OutputView;
