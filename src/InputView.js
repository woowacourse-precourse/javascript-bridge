/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const { Console } = require("@woowacourse/mission-utils");
const Constant = require("./utils/Constant");
const Validate = require("./utils/Validate");
const BridgeMaker = require("./BridgeMaker");
const randomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(Constant.INPUT.BRIDGE_SIZE, (bridgeSize) => {
      let numberBridgeSize = Number(bridgeSize) ?? NaN;
      if (Validate.validateBridgeSize(numberBridgeSize)) {
        this.bridge = BridgeMaker.makeBridge(
          numberBridgeSize,
          randomNumberGenerator.generate
        );
        this.readMoving();
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(Constant.INPUT.NEXT_STEP, (inputUpOrDown) => {
      if (Validate.validateUserInputMove(inputUpOrDown)) {
        this.bridgeGame = new BridgeGame();
        const bridgeLength = this.bridge.length;
        let result = this.bridgeGame.move(inputUpOrDown, this.bridge);
        if (BridgeGame._userInputCount === this.bridge.length) {
          OutputView.printMap(result, inputUpOrDown, bridgeLength);
          OutputView.printResult(result);
          return;
        }
        if (result) {
          OutputView.printMap(result, inputUpOrDown, bridgeLength);
          this.readMoving();
          return;
        }
        OutputView.printMap(result, inputUpOrDown, bridgeLength);
        this.readGameCommand();
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(Constant.INPUT.GAME_RETRY, (userInputRetry) => {
      if (Validate.validateUserInputRetry(userInputRetry)) {
        if (userInputRetry === "R") {
          this.bridgeGame.retry();
          InputView.readMoving();
          return;
        }
        OutputView.printResult();
      }
    });
  },
};

module.exports = InputView;
