const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./lib/constants");
const {
  changeSizeType,
  printBridgeSizeError,
  sizeRegexTest,
} = require("./lib/bridgeSizeInputUtils");
const BridgeMaker = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");
const { printRetryError, checkRetry } = require("./lib/bridgeRetryInputUtils");
const OutputView = require("./OutputView");

const InputView = {
  readBridgeSize() {
    Console.readLine(MESSAGE.INPUT_BRIDGE_SIZE, (size) => {
      try {
        this.bridgeSizeErrorCheck(size, this.bridgeSizeGo);
      } catch (error) {
        this.bridgeSizeRetry(error);
      }
    });
  },

  readMoving() {
    Console.readLine(MESSAGE.INPUT_BRIDGE_MOVE, (move) => {
      try {
        this.bridgeMoveGo(move, this.bridgeMoveOneMore);
      } catch (error) {
        this.bridgeMoveRetry(error);
      }
    });
  },

  readGameCommand() {
    Console.readLine(MESSAGE.INPUT_BRIDGE_RESTART, (ask) => {
      try {
        this.bridgeReadCommandGo(ask);
      } catch (error) {
        this.bridgeReadCommandRetry(error);
      }
    });
  },

  bridgeSizeErrorCheck(size, callback) {
    printBridgeSizeError(sizeRegexTest(changeSizeType(size)));
    callback.call(InputView, changeSizeType(size));
  },

  bridgeSizeGo(size) {
    this.bridgeGame = new BridgeGame(BridgeMaker.makeBridge(size, generate));
    this.readMoving();
  },

  bridgeSizeRetry(error) {
    Console.print(error);
    this.readBridgeSize();
  },

  bridgeMoveGo(move, callback) {
    this.bridgeGame.move(move);
    OutputView.printMap(this.bridgeGame.returnUpDownArray());
    if (!this.bridgeGame.checkX()) {
      this.readGameCommand();
      return;
    }
    callback.call(InputView);
  },

  bridgeMoveOneMore() {
    if (!this.bridgeGame.lengthCompare()) {
      this.readMoving();
      return;
    }
    OutputView.printResult(this.bridgeGame.returnUpDownTryCountArray());
  },

  bridgeMoveRetry(error) {
    Console.print(error);
    this.readMoving();
  },

  bridgeReadCommandGo(ask) {
    printRetryError(checkRetry(ask));
    if (this.bridgeGame.retry(ask)) {
      this.readMoving();
      return;
    }
    OutputView.printResult(this.bridgeGame.returnUpDownTryCountArray());
  },

  bridgeReadCommandRetry(error) {
    Console.print(error);
    this.readGameCommand();
  },
};

module.exports = InputView;
