const { OutputView } = require("./OutputView");
const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constants");
const Validation = require("./Validation");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
let callMove = 0;
const validation = new Validation();
const brigeGame = new BridgeGame();

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    // 입력받고 난 다음 할 내용들 다 입출력하고

    Console.readLine(MESSAGE.INPUT_BRIDGE_LENGTH_MESSAGE, (bridgeLength) => {
      try {
        validation.validateBridgeLength(bridgeLength);
        this.readMoving(bridgeLength);
      } catch (error) {
        Console.print(error);
        this.readBridgeSize();
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeLength) {
    const bridge = BridgeMaker.makeBridge(
      bridgeLength,
      BridgeRandomNumberGenerator.generate
    );
    Console.readLine(MESSAGE.INPUT_MOVE_MESSAGE, (inputMove) => {
      try {
        validation.validateMove(inputMove);
        [callMove, moveResult] = brigeGame.move(inputMove, callMove, bridge);
        moveResult === "X"
          ? this.readGameCommand()
          : callMove === bridgeLength
          ? OutputView.printResult()
          : this.readMoving(bridgeLength);
      } catch (error) {
        Console.print(error);
        this.readMoving(bridgeLength);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
