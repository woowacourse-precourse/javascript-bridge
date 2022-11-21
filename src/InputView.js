const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { COMMAND } = require("./constants/data");
const { INPUT_MESSAGE, OUTPUT_MESSAGE } = require("./constants/message");
const OutputView = require("./OutputView");
const Validation = require("./Validation");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridgeGame) {
    Console.readLine(INPUT_MESSAGE.LENGTH, (length) => {
      const error = Validation.checkBridgeLength(length);
      if (error) return this.readBridgeSize();
      bridgeGame.makeBridge(length);
      this.readMoving(bridgeGame);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    Console.readLine(INPUT_MESSAGE.MOVE, (userInput) => {
      const error = Validation.checkUserMoveInput(userInput);
      if (error) return this.readMoving(bridgeGame);
      bridgeGame.move(userInput);
      if (bridgeGame.isWrongZone()) return this.readGameCommand(bridgeGame);
      if (bridgeGame.isReached())
        this.summaryResult(bridgeGame, OUTPUT_MESSAGE.SUCCESS);
      return this.readMoving(bridgeGame);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame) {
    Console.readLine(INPUT_MESSAGE.RESTART, (commandInput) => {
      const error = Validation.checkCommandInput(commandInput);
      if (error) return this.readGameCommand(bridgeGame);
      if (commandInput === COMMAND.RESTART) {
        bridgeGame.retry();
        return this.readMoving(bridgeGame);
      }
      return this.summaryResult(bridgeGame, OUTPUT_MESSAGE.FAIL);
    });
  },

  summaryResult(bridgeGame, message) {
    OutputView.printResult(
      message,
      bridgeGame.getLog(),
      bridgeGame.getAttmeptNumber()
    );
  },
};

module.exports = InputView;
