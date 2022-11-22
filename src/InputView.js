const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const { CONSOLE_MESSAGE } = require("./constants/Message");
const OutputView = require("./OutputView");
const Validator = require("./utils/Validation");

const InputView = {
  wrappingInput(message, callback) {
    Console.readLine(
      message,
      this.catchError(callback, () => this.wrappingInput(message, callback))
    );
  },

  catchError(logicFunc, errorFunc) {
    return (input) => {
      try {
        logicFunc(input);
      } catch (e) {
        Console.print(e.message);
        errorFunc(e);
      }
    };
  },

  readBridgeSize(bridgeGame) {
    this.wrappingInput(CONSOLE_MESSAGE.INPUT_BRIDGE_LENGTH, (size) => {
      const bridgeGame = new BridgeGame(size);
      Validator.validateBridgeSize(size);
      this.readMoving(bridgeGame);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    this.wrappingInput(CONSOLE_MESSAGE.INPUT_MOVE, (direction) => {
      Validator.validateMove(direction);
      bridgeGame.pushResult(direction);
      OutputView.printMap(bridgeGame);
      if (!bridgeGame.isRight()) this.readGameCommand(bridgeGame);
      if (bridgeGame.isEnd()) return OutputView.printResult(bridgeGame);
      bridgeGame.move();
      this.readMoving(bridgeGame);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame) {
    this.wrappingInput(CONSOLE_MESSAGE.RESTART, (input) => {
      Validator.validateRestartOrQuit(input);
      if (input === "R") {
        bridgeGame.retry();
        return this.readMoving(bridgeGame);
      }
      if (input === "Q") {
        return OutputView.printResult(bridgeGame);
      }
    });
  },
};

module.exports = InputView;
