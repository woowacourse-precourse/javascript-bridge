const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("../BridgeGame");
const ExceptionCheck = require("../ExceptionCheck");
const OutputView = require("./OutputView");
const BridgeMaker = require("../BridgeMaker");
const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");

const InputView = {
  BRIDGE_GAME: new BridgeGame(),
  IDX: 0,
  TRY: 1,

  readBridgeSize() {
    MissionUtils.Console.readLine(
      "다리의 길이를 입력해주세요.",
      (bridgeSize) => {
        try {
          ExceptionCheck.checkBridgeSize(Number(bridgeSize));

          OutputView.printBridgeSize(bridgeSize);
          const bridge = BridgeMaker.makeBridge(
            Number(bridgeSize),
            BridgeRandomNumberGenerator.generate
          );
          this.readMoving(bridge);
        } catch (err) {
          MissionUtils.Console.print(err);
          this.readBridgeSize();
        }
      }
    );
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge) {
    if (this.IDX === bridge.length) return;
    MissionUtils.Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)",
      (moveSpace) => {
        try {
          this.checkMove(moveSpace);
          OutputView.printSpace(moveSpace);

          const { up, down, compareResult, idx } = this.BRIDGE_GAME.move(
            bridge,
            moveSpace
          );
          this.IDX = idx;
          OutputView.printMap(up, down);
          if (compareResult === "O") {
            this.readMoving(bridge);
            if (idx === bridge.length)
              OutputView.printResult({ up, down }, this.TRY, compareResult);
          } else {
            this.readGameCommand(bridge, [up], [down]);
          }
        } catch (err) {
          console.log(err);
          this.readMoving(bridge);
        }
      }
    );
  },
  checkMove(playerMove) {
    if (playerMove === "U" || playerMove === "D") return;
    else throw new Error("player이동은 U 또는 D만 입력해야 합니다.");
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridge, up, down) {
    MissionUtils.Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
      (string) => {
        if (string === "R") {
          this.TRY = this.TRY + 1;
          this.BRIDGE_GAME.retry(bridge);
        } else {
          OutputView.printResult({ up, down }, this.TRY, compareResult);
        }
      }
    );
  },
};

module.exports = InputView;
