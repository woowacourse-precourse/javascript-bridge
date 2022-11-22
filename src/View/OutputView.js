const MissionUtils = require("@woowacourse/mission-utils");
const Message = require("../Message");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  upBridge: [],
  downBridge: [],

  clearBridge() {
    this.upBridge = [];
    this.downBridge = [];
  },

  updateBridge(upBridge, downBridge) {
    this.upBridge.push(upBridge);
    this.downBridge.push(downBridge);
    this.printMap();
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap() {
    MissionUtils.Console.print(`[ ${this.upBridge.join(" | ")} ]\n[ ${this.downBridge.join(" | ")} ]\n`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(gameTry, result) {
    MissionUtils.Console.print(Message.GAME_END);
    this.printMap();
    MissionUtils.Console.print(`${Message.GAME_END_RESULT}${result}`);
    MissionUtils.Console.print(`${Message.GAME_END_TRY}${gameTry}`);
    MissionUtils.Console.close();
  },

  printGameStart(message) {
    MissionUtils.Console.print(message);
  },
};

module.exports = OutputView;
