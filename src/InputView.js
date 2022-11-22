const { Console } = require('@woowacourse/mission-utils');
const { GAME_BOOLEAN, GAME_MESSAGE, SHORT_CUT } = require('./Constants');
const { printMap, printResult } = require('./OutputView');
const { readLine, showErrorMessage } = require('./Utils');
const {
  moveValidation,
  retryValidation,
  sizeValdation,
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
        sizeValdation(Number(userInput));
        this.bridgeSize(userInput, bridgeGame);
      } catch (error) {
        showErrorMessage(error.message, this.readBridgeSize, bridgeGame);
      }
    });
  },
  bridgeSize(userInput, bridgeGame) {
    const size = Number(userInput);
    bridgeGame.setBridge(size);
    this.readMoving(bridgeGame);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    readLine(GAME_MESSAGE.move, (userInput) => {
      try {
        moveValidation(userInput);
        this.moveBridge(userInput, bridgeGame);
      } catch (error) {
        showErrorMessage(error.message, this.readMoving, bridgeGame);
      }
    });
  },
  moveBridge(userInput, bridgeGame) {
    bridgeGame.setAnswer(userInput);
    bridgeGame.move();
    this.showMoveResult(bridgeGame);
    this.checkFinish(bridgeGame);
  },
  showMoveResult(bridgeGame) {
    const bridgeResult = bridgeGame.getMap();
    printMap(bridgeResult);
  },
  checkFinish(bridgeGame) {
    const isFinish = bridgeGame.isFinish();
    if (isFinish) {
      this.getGameFinish(bridgeGame);
      return;
    }
    this.checkMoveResult(bridgeGame);
  },
  getGameFinish(bridgeGame) {
    const bridgeResult = bridgeGame.getMap();
    const numberAttempts = bridgeGame.getAttempts();
    printResult(bridgeResult, GAME_BOOLEAN.success, numberAttempts);
    Console.close();
  },
  checkMoveResult(bridgeGame) {
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
        retryValidation(userInput);
        this.checkRetry(userInput, bridgeGame);
      } catch (error) {
        showErrorMessage(error.message, this.readGameCommand, bridgeGame);
      }
    });
  },
  checkRetry(userInput, bridgeGame) {
    if (userInput === SHORT_CUT.retry) {
      this.getReStart(bridgeGame);
    }
    if (userInput === SHORT_CUT.quit) {
      this.getQuit(bridgeGame);
    }
  },
  getReStart(bridgeGame) {
    bridgeGame.retry();
    this.readMoving(bridgeGame);
  },
  getQuit(bridgeGame) {
    const bridgeResult = bridgeGame.getMap();
    const numberAttempts = bridgeGame.getAttempts();
    printResult(bridgeResult, GAME_BOOLEAN.fail, numberAttempts);
    Console.close();
  },
};

module.exports = InputView;
