const OutputView = require("./OutputView");
const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constants");
const Validation = require("./Validation");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");
const Controller = require("./Controller");

let callMove = 0;

const validation = new Validation();
const brigeGame = new BridgeGame();

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    // 입력받고 난 다음 할 내용들 다 입출력하고

    Console.readLine(MESSAGE.INPUT_BRIDGE_LENGTH_MESSAGE, (bridgeLength) => {
      try {
        validation.validateBridgeLength(bridgeLength);
        const bridge = BridgeMaker.makeBridge(
          bridgeLength,
          BridgeRandomNumberGenerator.generate
        );

        console.log(bridge);
        this.readMoving(bridge);
      } catch (error) {
        Console.print(error);
        this.readBridgeSize();
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge) {
    Console.readLine(MESSAGE.INPUT_MOVE_MESSAGE, (inputMove) => {
      try {
        validation.validateMove(inputMove);
        [callMove, moveResult, inputMoves] = brigeGame.move(
          inputMove,
          callMove,
          bridge
        );
        console.log(callMove, moveResult);
        OutputView.printMap(inputMoves, callMove, moveResult);
        this.checkMove(callMove, moveResult, bridge);
      } catch (error) {
        Console.print(error);
        this.readMoving(bridge);
      }
    });
  },

  checkMove(callMove, moveResult, bridge) {
    if (callMove === bridge.length) {
      OutputView.printResult();
    }
    if (moveResult[callMove - 1] === "X") {
      this.readGameCommand();
    }
    if (moveResult[callMove - 1] === "O" && callMove < bridge.length) {
      this.readMoving(bridge);
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(MESSAGE.INPUT_RESTART_MESSAGE, (input) => {
    });
  },
};

module.exports = InputView;
