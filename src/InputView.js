const { Console } = require('@woowacourse/mission-utils');
const {
  GAME_MESSAGE,
  BRIDGE_RANGE,
  ERROR_BRIDGE_MESSAGE,
  SHORT_CUT,
  ERROR_PLAYING_MESSAGE,
  ERROR_RETRY_MESSAGE,
  GAME_BOOLEAN,
} = require('./constants');
const { printMap, printResult } = require('./OutputView');
const { readLine } = require('./Utils');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridgeGame) {
    readLine(GAME_MESSAGE.inputLength, (userInput) => {
      try {
        this.bridgeSize(userInput, bridgeGame);
      } catch (error) {
        Console.print(error.message);
        this.readBridgeSize(bridgeGame);
      }
    });
  },

  bridgeSize(userInput, bridgeGame) {
    const size = Number(userInput);
    this.sizeValdation(size);
    bridgeGame.setBridge(size);
    this.readMoving(bridgeGame);
  },

  checkBridgeInteger(bridgeSize) {
    if (!Number.isInteger(bridgeSize)) {
      throw new Error(ERROR_BRIDGE_MESSAGE.integer);
    }
  },
  checkBridgeNumber(bridgeSize) {
    if (Number.isNaN(bridgeSize)) {
      throw new Error(ERROR_BRIDGE_MESSAGE.number);
    }
  },
  checkBridgeRange(bridgeSize) {
    if (bridgeSize < BRIDGE_RANGE.start || bridgeSize > BRIDGE_RANGE.end) {
      throw new Error(ERROR_BRIDGE_MESSAGE.range);
    }
  },

  sizeValdation(bridgeSize) {
    this.checkBridgeNumber(bridgeSize);
    this.checkBridgeInteger(bridgeSize);
    this.checkBridgeRange(bridgeSize);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    readLine(GAME_MESSAGE.move, (userInput) => {
      try {
        this.getMoving(userInput, bridgeGame);
      } catch (error) {
        Console.print(error.message);
        this.readMoving(bridgeGame);
      }
    });
  },

  getMoving(userInput, bridgeGame) {
    this.moveValidation(userInput);
    bridgeGame.move(userInput);
    const bridgeResult = bridgeGame.getMap();
    printMap(bridgeResult);
    this.getMoveNext(bridgeGame);
  },

  getMoveNext(bridgeGame) {
    const isFinish = bridgeGame.isFinish();
    if (isFinish) {
      this.getGameFinish(bridgeGame);
      return;
    }
    this.getGameNext(bridgeGame);
  },
  getGameFinish(bridgeGame) {
    const bridgeResult = bridgeGame.getMap();
    const numberAttempts = bridgeGame.getAttempts();
    printResult(bridgeResult, GAME_BOOLEAN.success, numberAttempts);
    Console.close();
  },
  getGameNext(bridgeGame) {
    const isAnswer = bridgeGame.isAnswer();
    if (isAnswer) {
      return this.readMoving(bridgeGame);
    }
    return this.readGameCommand(bridgeGame);
  },

  moveValidation(shortCut) {
    this.checkMoveLowercase(shortCut);
    this.checkMoveWrong(shortCut);
  },
  checkMoveLowercase(shortCut) {
    const lowerCaseUp = SHORT_CUT.up.toLowerCase();
    const lowerCaseDown = SHORT_CUT.down.toLowerCase();
    if (shortCut === lowerCaseUp || shortCut === lowerCaseDown) {
      throw new Error(ERROR_PLAYING_MESSAGE.lowercase);
    }
  },
  checkMoveWrong(shortCut) {
    if (shortCut !== SHORT_CUT.up && shortCut !== SHORT_CUT.down) {
      throw new Error(ERROR_PLAYING_MESSAGE.wrong);
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame) {
    readLine(GAME_MESSAGE.retry, (userInput) => {
      try {
        this.getRetry(userInput, bridgeGame);
      } catch (error) {
        Console.print(error.message);
        this.readGameCommand(bridgeGame);
      }
    });
  },

  getRetry(userInput, bridgeGame) {
    this.retryValidation(userInput);
    if (userInput === SHORT_CUT.retry) {
      this.showReStart(bridgeGame);
    }
    if (userInput === SHORT_CUT.quit) {
      this.showQuit(bridgeGame);
    }
  },
  showReStart(bridgeGame) {
    bridgeGame.retry();
    this.readMoving(bridgeGame);
  },
  showQuit(bridgeGame) {
    const bridgeResult = bridgeGame.getMap();
    const numberAttempts = bridgeGame.getAttempts();
    printResult(bridgeResult, GAME_BOOLEAN.fail, numberAttempts);
    Console.close();
  },
  retryValidation(userInput) {
    this.checkRetryLowercase(userInput);
    this.checkRetryWrong(userInput);
  },

  checkRetryLowercase(userInput) {
    const lowerCaseRetry = SHORT_CUT.retry.toLowerCase();
    const lowerCaseQuit = SHORT_CUT.quit.toLowerCase();
    if (userInput === lowerCaseRetry || userInput === lowerCaseQuit) {
      throw new Error(ERROR_RETRY_MESSAGE.lowercase);
    }
  },
  checkRetryWrong(userInput) {
    if (userInput !== SHORT_CUT.retry && userInput !== SHORT_CUT.quit) {
      throw new Error(ERROR_RETRY_MESSAGE.wrong);
    }
  },
};

module.exports = InputView;
