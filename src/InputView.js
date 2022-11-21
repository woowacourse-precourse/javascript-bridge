const { Console } = require('@woowacourse/mission-utils');
const Validator = require('./Validator');
const BridgeGame = require('./BridgeGame');
const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const { INFO_MESSAGES } = require('./utils/messages');
const { INPUT, IS_SUCCESS } = require('./utils/constants');
const errorHandler = require('./utils/errorHandler');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(INFO_MESSAGES.BRIDGE_SIZE, (userInput) => {
      try {
        Validator.bridgeSize(+userInput);

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

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(INFO_MESSAGES.MOVING, (userInput) => {
      try {
        Validator.moving(userInput);

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

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(map, printResult) {
    Console.readLine(INFO_MESSAGES.RETRY, (userInput) => {
      try {
        Validator.retry(userInput);

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
