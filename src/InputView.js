const { Console } = require('@woowacourse/mission-utils');
const { GAME_BOOLEAN, GAME_MESSAGE, SHORT_CUT } = require('./constants');
const { printMap, printResult } = require('./OutputView');
const { readLine } = require('./Utils');
const {
  sizeValdation,
  moveValidation,
  retryValidation,
} = require('./Validations');
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
    sizeValdation(size);
    bridgeGame.setBridge(size);
    this.readMoving(bridgeGame);
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
    moveValidation(userInput);
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
    retryValidation(userInput);
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
};

module.exports = InputView;
