const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constants/Constant");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const Validate = require("./Validate");
const BridgeMaker = require("./BridgeMaker");
const OutputView = require("./OutputView");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridgeGame) {
    Console.readLine(MESSAGE.INPUT_BRIDGE_LENGTH, (inputBridgeSize) => {
      Validate.isNumber(inputBridgeSize);
      Validate.checkLength(inputBridgeSize);

      const bridge = BridgeMaker.makeBridge(
        inputBridgeSize,
        BridgeRandomNumberGenerator.generate
      );
      console.log(bridge);
      let userMoveArray = [];
      this.readMoving(bridgeGame, bridge, userMoveArray);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame, bridge, userMoveArray) {
    Console.readLine(MESSAGE.CHOOSE_MOVE_SPACE, (userInput) => {
      const moveKey = Validate.checkMovingKey(userInput);
      const userArray = bridgeGame.move(moveKey, userMoveArray);
      const keepGaming = bridgeGame.compareMove(bridge, userArray);

      if (keepGaming === 1) {
        this.readMoving(bridgeGame, bridge, userMoveArray);
      }
      if (keepGaming === 0) {
        OutputView.printResult();
      }
      if (keepGaming === 2) {
        console.log("틀렸음 다시할거임?");
        this.readGameCommand();
      }
    });
    return;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(MESSAGE.SELECT_RETRY, (userInput) => {
      const retryOrCloseKey = Validate.checkRetryOrCloseKey(userInput);
    });
  },
};

module.exports = InputView;
