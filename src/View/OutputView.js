const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGE } = require("../Utils/constant");
const BridgeGame = require("../BridgeGame");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  isSucces: "성공",
  count: 1,
  printStart() {
    MissionUtils.Console.print(MESSAGE.GAME_START);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridge, size, move) {
    const bridgeGame = new BridgeGame(bridge, size, move);
    const array = bridgeGame.realBridge;
    array.map((x) => MissionUtils.Console.print(`[ ${x.join("\n")} ]`));
    return this.checkBridge(bridgeGame, array, bridge, size);
  },

  checkBridge(bridgeGame, array, bridge, size) {
    if (this.count === size) {
      return this.printResult();
    }
    if (array[0][array[0].length - 1] === "O") {
      // 성공
      this.count += 1;
      let move = "";
      MissionUtils.Console.readLine(MESSAGE.INPUT_MOVE, (answer) => {
        move = answer;
        bridgeGame.moveIsU(move);
        bridgeGame.realBridge.map((x) =>
          MissionUtils.Console.print(`[ ${x.join(" | ")} ]`)
        );
        this.checkBridge(bridgeGame, bridgeGame.realBridge, bridge, size);
      });
    }
    if (array[0][array[0].length - 1] === "X") {
      this.isSucces = "실패";
      this.printResult();
    }
    if (array[1][array[1].length - 1] === "O") {
      this.count += 1;
      let move = "";
      MissionUtils.Console.readLine(MESSAGE.INPUT_MOVE, (answer) => {
        move = answer;
        bridgeGame.moveIsU(move);
        bridgeGame.realBridge.map((x) =>
          MissionUtils.Console.print(`[ ${x.join(" | ")} ]`)
        );
        this.checkBridge(bridgeGame, bridgeGame.realBridge, bridge, size);
      });
    }
    if (array[1][array[1].length - 1] === "X") {
      this.isSucces = "실패";
      this.printResult();
    }
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {
    MissionUtils.Console.print(`게임 성공 여부: ${this.isSucces}`);
    MissionUtils.Console.print(`총 시도한 횟수: ${this.count}`);
    MissionUtils.Console.close();
  },
};

module.exports = OutputView;
