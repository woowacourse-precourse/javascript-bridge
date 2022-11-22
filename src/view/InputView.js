const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("../model/BridgeGame");
const { makeBridge } = require("../BridgeMaker");
const { generate } = require("../BridgeRandomNumberGenerator");
const validator = require("../utils/validator");
const { INFO_MESSAGES } = require("../utils/messages");
const { INPUT, IS_SUCCESS } = require("../utils/constants");
const errorHandler = require("../utils/errorHandler");

const InputView = {
  readBridgeSize() {
    Console.readLine(INFO_MESSAGES.BRIDGE_SIZE, (userInput) => {
      try {
        validator.bridgeSize(+userInput);

        this.saveBridgeGameState(+userInput);

        this.readMoving();
      } catch ({ message }) {
        errorHandler(message, this.readBridgeSize.bind(this));
      }
    });
  },

  saveBridgeGameState(userInput) {
    BridgeGame.bridge = makeBridge(userInput, generate);
    BridgeGame.tryCount += 1;
  },

  readMoving() {
    Console.readLine(INFO_MESSAGES.MOVING, (userInput) => {
      try {
        validator.moving(userInput);

        BridgeGame.move(userInput, this.createReadFuncs());
      } catch ({ message }) {
        errorHandler(message, this.readMoving.bind(this));
      }
    });
  },

  createReadFuncs() {
    return {
      readMoving: this.readMoving.bind(this),
      readGameCommand: this.readGameCommand.bind(this),
    };
  },

  readGameCommand(map, printResult) {
    Console.readLine(INFO_MESSAGES.RETRY, (userInput) => {
      try {
        validator.retry(userInput);

        this.processCommand(userInput, map, printResult);
      } catch ({ message }) {
        errorHandler(message, this.readGameCommand.bind(this));
      }
    });
  },

  processCommand(userInput, map, printResult) {
    const { RETRY, END } = INPUT;

    if (userInput === RETRY) BridgeGame.retry(this.readMoving.bind(this));
    if (userInput === END)
      printResult(map, IS_SUCCESS.FALSE, BridgeGame.tryCount);
  },
};

module.exports = InputView;
