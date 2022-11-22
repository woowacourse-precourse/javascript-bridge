const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const { BRIDGE_INFO } = require("./constants/constants");
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

  readBridgeSize() {
    this.wrappingInput(CONSOLE_MESSAGE.INPUT_BRIDGE_LENGTH, (size) => {
      const sizeNumber = Number(size);
      const bridgeGame = new BridgeGame(sizeNumber);
      Validator.validateBridgeSize(sizeNumber);
      this.readMoving(bridgeGame);
    });
  },

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

  readGameCommand(bridgeGame) {
    this.wrappingInput(CONSOLE_MESSAGE.RESTART, (input) => {
      Validator.validateRestartOrQuit(input);
      if (input === BRIDGE_INFO.RETRY) {
        bridgeGame.retry();
        return this.readMoving(bridgeGame);
      }
      if (input === BRIDGE_INFO.QUIT) {
        return OutputView.printResult(bridgeGame);
      }
    });
  },
};

module.exports = InputView;
