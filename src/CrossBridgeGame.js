const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const InputView = require('./views/InputView');
const OutputView = require('./views/OutputView');
const { GAME } = require('./utils/Constants');
const Validator = require('./utils/Validator');

class CrossBrigeGame {
  gameStart() {
    OutputView.printGameStart();
    this.askBridgeSize();
  }

  askBridgeSize() {
    InputView.readBridgeSize(this.checkBridgeSizeInput.bind(this));
  }

  checkBridgeSizeInput(size) {
    try {
      Validator.isValidBridgeSize(size);
      this.setBridge(size);
    } catch (error) {
      OutputView.printExceptionMessage(error);
      this.askBridgeSize();
    }
  }

  setBridge(size) {
    const generateRandomNumber = () => BridgeRandomNumberGenerator.generate();
    const bridge = BridgeMaker.makeBridge(size, generateRandomNumber);
    this.bridgeGame = new BridgeGame(bridge);
    this.askMoving();
  }

  askMoving() {
    InputView.readMoving(this.checkMovingInput.bind(this));
  }

  checkMovingInput(moving) {
    try {
      Validator.isValidMoving(moving);
      this.makeMoving(moving);
    } catch (error) {
      OutputView.printExceptionMessage(error);
      this.askMoving();
    }
  }

  makeMoving(moving) {
    const gameStatus = this.bridgeGame.isMoveSuccess(moving);
    const gameResult = this.bridgeGame.move(moving);
    OutputView.printMap(gameStatus, gameResult);
    return this.checkStatus(gameStatus);
  }

  checkStatus(gameStatus) {
    if (gameStatus === false) {
      return this.askRetry();
    }
    if (this.bridgeGame.isEnd()) {
      return this.makeEndGame();
    }
    return this.askMoving();
  }

  askRetry() {
    InputView.readGameCommand(this.checkRetryInput.bind(this));
  }

  checkRetryInput(input) {
    try {
      Validator.isValidInput(input);
      this.makeRetry(input);
    } catch (error) {
      OutputView.printExceptionMessage(error);
      this.askRetry();
    }
  }

  makeRetry(input) {
    if (input === GAME.RETRY) {
      return this.makeNewGame(input);
    }
    return this.makeEndGame();
  }

  makeNewGame() {
    this.bridgeGame.retry();
    this.askMoving();
  }

  makeEndGame() {
    const [moveResult, gameSuccess, gameCount] = this.bridgeGame.quit();
    OutputView.printResult();
    OutputView.printMap(gameSuccess, moveResult);
    OutputView.printSucessOrFail(gameSuccess);
    OutputView.printTryCount(gameCount);
    Console.close();
  }
}

module.exports = CrossBrigeGame;
