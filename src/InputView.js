const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const OutputView = require("./OutputView");
const Validator = require("./Validation/Validator");

const { Console } = require("@woowacourse/mission-utils");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine("다리의 길이를 입력해주세요.\n", (bridgeSize) => {
      if (Validator.checkBetweenThreeToTwenty(bridgeSize))
        return this.readBridgeSize();

      const bridge = BridgeMaker.makeBridge(
        bridgeSize,
        BridgeRandomNumberGenerator.generate
      );

      const bridgeGame = new BridgeGame(bridge);

      return this.readMoving(bridge, bridgeGame);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge, bridgeGame) {
    Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
      (selectedBlock) => {
        if (Validator.checkUpOrDown(selectedBlock))
          return this.readMoving(bridge, bridgeGame);

        const moveRoute = bridgeGame.move(selectedBlock);
        OutputView.printMap(moveRoute);

        return this.readMoving(bridge, bridgeGame);
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
      (answer) => {
        if (Validator.checkRetryOrQuit(answer)) return this.readGameCommand();

        return;
      }
    );
  },
};

module.exports = InputView;
