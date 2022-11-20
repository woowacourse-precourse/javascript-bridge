const MissionUtils = require("@woowacourse/mission-utils");

const OutputView = require("./OutputView");
const { checkBridgeSize, checkMovement, checkRestart } = require("./validate");

const InputView = {
  readBridgeSize(bridge, bridgeGame) {
    MissionUtils.Console.readLine("다리의 길이를 입력해주세요.\n", (size) => {
      if (checkBridgeSize(size)) return this.readBridgeSize(bridge, bridgeGame);

      bridge.setBridge(size);
      console.log(bridge.getBridge());
      this.readMoving(bridge, bridgeGame);

      this.readGameCommand();
    });
  },

  readMoving(bridge, bridgeGame) {
    MissionUtils.Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
      (movement) => {
        if (checkMovement(movement)) return this.readMoving(bridge, bridgeGame);

        bridgeGame.move(movement, bridge);
        OutputView.printMap(
          bridgeGame.getUpResult(),
          bridgeGame.getDownResult()
        );

        if (bridgeGame.getCross()) {
          if (bridgeGame.getSuccess()) {
            OutputView.printResult(bridgeGame);
          } else {
            this.readMoving(bridge, bridgeGame);
          }
        } else {
          this.readGameCommand(bridge, bridgeGame);
        }
      }
    );
  },

  readGameCommand(bridge, bridgeGame) {
    MissionUtils.Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
      (restart) => {
        if (checkRestart(restart)) this.readGameCommand(bridge, bridgeGame);

        if (restart === "R") {
          bridgeGame.retry(restart);
          this.readMoving(bridge, bridgeGame);
        } else if (restart === "Q") {
          OutputView.printResult(bridgeGame);
        }
      }
    );
  },
};

module.exports = InputView;
