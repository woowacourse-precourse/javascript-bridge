const OutputView = require("./OutputView");
const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constants");
const Validation = require("./Validation");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");

let callMove = 0;
let tryCount = 1;

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
        [callMove, moveResult, moves] = brigeGame.move(inputMove, callMove, bridge);
        OutputView.printMap(moves, moveResult);
        this.checkMove(moves, moveResult, bridge);
      } catch (error) {
        Console.print(error);
        this.readMoving(bridge);
      }
    });
  },

  checkMove(moves, moveResult, bridge) {
    if (
      moves.length === bridge.length &&
      moveResult[moves.length - 1] === "O"
    ) {
      OutputView.printResult(moves, moveResult, tryCount);
    }
    if (moveResult[moves.length - 1] === "X") {
      this.readGameCommand(moves, moveResult, bridge);
    }
    if (moveResult[moves.length - 1] === "O" && moves.length < bridge.length) {
      this.readMoving(bridge);
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(moves, moveResult, bridge) {
    Console.readLine(MESSAGE.INPUT_RESTART_MESSAGE, (input) => {
      try {
        validation.validateRestart(input);
        if (input === "R") {
          callMove = 0;
          tryCount++;
          brigeGame.retry();
          this.readMoving(bridge);
        }
        if (input === "Q") {
          OutputView.printResult(moves, moveResult, tryCount);
        }
      } catch (error) {
        Console.print(error);
        this.readGameCommand(bridge);
      }
    });
  },
};

module.exports = InputView;
