const MissionUtils = require("@woowacourse/mission-utils");
const Error = require("./ControlError");
const BridgeMaker = require("./BridgeMaker");
const RandomNumber = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");
const WordToPrint = require("./WordToPrint");
let bridgeGame;

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  readBridgeSize() {
    MissionUtils.Console.readLine(WordToPrint.bridgeSize, (bridgeSize) => {
      try {
        Error.readBridgeSizeError(bridgeSize);
        const bridge = BridgeMaker.makeBridge(
          bridgeSize,
          RandomNumber.generate
        );
        console.log(bridge, "생성된 다리");
        bridgeGame = new BridgeGame(bridge);
        this.readMoving(0, bridge);
      } catch (e) {
        MissionUtils.Console.print(e);
        this.readBridgeSize();
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(nth, bridge) {
    MissionUtils.Console.readLine(WordToPrint.moving, (moveLocation) => {
      try {
        Error.readMoving(moveLocation);
        const result = bridgeGame.move(nth, moveLocation);

        OutputView.printMap(result);
        if (result[result.length - 1][1] === "X") {
          this.readGameCommand(bridge, result);
          return;
        }
        // 건널 수 있는 칸 입력시,
        if (nth < bridge.length - 1) this.readMoving(nth + 1, bridge);
        // 다리를 모두 건넜을 때
        if (nth === bridge.length - 1)
          OutputView.printResult(result, bridgeGame.returnCountGame(), "성공");
      } catch (e) {
        MissionUtils.Console.print(e);
        this.readMoving(nth, bridge);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridge, result) {
    MissionUtils.Console.readLine(WordToPrint.gameCommand, (retryOrNot) => {
      try {
        Error.readGameCommand(retryOrNot);
        if (bridgeGame.retry(retryOrNot)) this.readMoving(0, bridge);
        else
          OutputView.printResult(result, bridgeGame.returnCountGame(), "실패");
      } catch (e) {
        MissionUtils.Console.print(e);
        this.readGameCommand(bridge, result);
      }
    });
  },
};

module.exports = InputView;
