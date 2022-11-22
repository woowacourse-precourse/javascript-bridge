const { Console } = require("@woowacourse/mission-utils");
const Validation = require("./Validation");
const OutputView = require("./OutputView");
const { INPUT, RESULT } = require("./constant/constantValue");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridgeGame) {
    Console.readLine(`${INPUT.LENGTH}\n`, (length) => {
      const isBridgeLengthCorrect = Validation.checkBridgeLength(length);
      if (isBridgeLengthCorrect) return this.readBridgeSize(bridgeGame);

      bridgeGame.make(length);
      this.readMoving(bridgeGame, length);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame, length) {
    Console.readLine(`\n${INPUT.MOVING}\n`, (moving) => {
      const isMovingValueCorrect = Validation.checkMovingValue(moving);
      if (isMovingValueCorrect) return this.readMoving(bridgeGame, length);
      const direction = bridgeGame.move(moving, length);
      const outputBridge = OutputView.printMap(direction);
      if (!direction[2]) this.readGameCommand(bridgeGame, outputBridge, length);
      if (direction[3] < length) this.readMoving(bridgeGame, length);
      else
        OutputView.printResult(bridgeGame.turn(), RESULT.SUCCESS, outputBridge);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame, outputBridge, length) {
    Console.readLine(`\n${INPUT.SELECT}\n`, (select) => {
      const isSelectValueCorrect = Validation.checkingSelectValue(select);
      if (isSelectValueCorrect) return this.readGameCommand(bridgeGame);

      const selectResult = bridgeGame.retry(select);
      if (!selectResult)
        OutputView.printResult(bridgeGame.turn(), RESULT.FAILURE, outputBridge);
      this.readMoving(bridgeGame, length);
    });
  },
};

module.exports = InputView;
