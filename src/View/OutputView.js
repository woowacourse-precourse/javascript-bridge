const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGE, ERROR } = require("../Utils/constant");
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
    if (
      (bridgeGame.realBridge[0].length === size &&
        bridgeGame.realBridge[0][bridgeGame.realBridge[0].length - 1] ===
          "O") ||
      (bridgeGame.realBridge[0].length === size &&
        bridgeGame.realBridge[1][bridgeGame.realBridge[1].length - 1] === "O")
    ) {
      return this.printResult();
    }
    if (array[0][array[0].length - 1] === "O") {
      this.isSucces = "성공";
      let move = "";
      MissionUtils.Console.readLine(MESSAGE.INPUT_MOVE, (answer) => {
        this.count += 1;
        move = answer;
        bridgeGame.moveIsU(move);
        bridgeGame.realBridge.map((x) =>
          MissionUtils.Console.print(`[ ${x.join(" | ")} ]`)
        );
        this.checkBridge(bridgeGame, bridgeGame.realBridge, bridge, size);
      });
    }

    if (array[1][array[1].length - 1] === "O") {
      this.isSucces = "성공";
      let move = "";
      MissionUtils.Console.readLine(MESSAGE.INPUT_MOVE, (answer) => {
        this.count += 1;
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
      MissionUtils.Console.readLine(MESSAGE.INPUT_RETRY_OR_QUIT, (answer) => {
        this.retryOrQuitValidate(answer);
        if (answer === "R") {
          let move = "";
          MissionUtils.Console.readLine(MESSAGE.INPUT_MOVE, (answer) => {
            this.count += 1;
            move = answer;
            bridgeGame.retry(move);
            bridgeGame.realBridge.map((x) => {
              MissionUtils.Console.print(`[ ${x.join(" | ")} ]`);
            });
            this.checkBridge(bridgeGame, bridgeGame.realBridge, bridge, size);
          });
        }
        if (answer === "Q") {
          this.printResult();
        }
      });
    }

    if (array[1][array[1].length - 1] === "X") {
      this.isSucces = "실패";
      MissionUtils.Console.readLine(MESSAGE.INPUT_RETRY_OR_QUIT, (answer) => {
        this.retryOrQuitValidate(answer);
        if (answer === "R") {
          let move = "";
          MissionUtils.Console.readLine(MESSAGE.INPUT_MOVE, (answer) => {
            this.count += 1;
            move = answer;
            bridgeGame.retry(move);
            bridgeGame.realBridge[0].pop();
            bridgeGame.realBridge[1].pop();
            bridgeGame.realBridge.map((x) => {
              MissionUtils.Console.print(`[ ${x.join(" | ")} ]`);
            });
            this.checkBridge(bridgeGame, bridgeGame.realBridge, bridge, size);
          });
        }
        if (answer === "Q") {
          this.printResult();
        }
      });
    }
  },

  retryOrQuitValidate(answer) {
    if (answer !== "R" && answer !== "Q") {
      throw new Error(ERROR.RETRY_OR_QUIT);
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
