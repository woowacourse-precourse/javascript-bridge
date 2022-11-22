const BridgeGame = require('../Models/BridgeGame');
const InputView = require('../Views/InputView');
const OutputView = require('../Views/OutputView');
const { OPTION } = require('../utils/constants');
const {
  validateBridgeSize,
  validateMovingInput,
  validateContinue,
} = require('../utils/validations');

class GameController {
  constructor() {
    this.inputView = InputView;
    this.outputView = OutputView;
    this.bridgeGame = new BridgeGame();
  }

  startGame() {
    this.outputView.printStart();
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    this.inputView.readBridgeSize((userInput) => {
      this.checkValidSize(userInput);
    });
  }

  checkValidSize(userInput) {
    try {
      validateBridgeSize(userInput);
      this.makeBridge(userInput);
    } catch (error) {
      this.outputView.printError(error);
      this.inputBridgeSize();
    }
  }

  makeBridge(userInput) {
    const size = this.inputView.getBridgeSize(userInput);
    this.bridgeGame.createBridge(size);
    this.selectMoving();
  }

  selectMoving() {
    this.inputView.readMoving((userInput) => {
      this.checkValidMoving(userInput);
    });
  }

  checkValidMoving(userInput) {
    try {
      validateMovingInput(userInput);
      this.moving(userInput);
    } catch (error) {
      this.outputView.printError(error);
      this.selectMoving();
    }
  }

  moving(userInput) {
    const select = this.inputView.getUserMoving(userInput);
    this.bridgeGame.move(select);
    this.checkResult();
  }

  checkResult() {
    const progressData = this.bridgeGame.getGameProgress();
    this.outputView.printMap(progressData);
    this.checkAlive();
    this.checkWin();
  }

  checkAlive() {
    const alive = this.bridgeGame.getAlive();
    if (!alive) return this.askRetry();

    return this.selectMoving();
  }

  checkWin() {
    const end = this.bridgeGame.checkGameEnd();
    if (end) return this.win();

    return this.selectMoving();
  }

  askRetry() {
    this.inputView.readGameCommand((userInput) => {
      this.checkRetryValidation(userInput);
    });
  }

  checkRetryValidation(userInput) {
    try {
      validateContinue(userInput);
      this.retryBranch(userInput);
    } catch (error) {
      this.outputView.printError(error);
      this.askRetry();
    }
  }

  retryBranch(userInput) {
    if (userInput === OPTION.RETRY) return this.replay();

    return this.defeat();
  }

  replay() {
    this.bridgeGame.retry();
    this.selectMoving();
  }

  win() {
    const progressData = this.bridgeGame.getGameProgress();
    const playCount = this.bridgeGame.getPlayCount();
    const gameResult = this.bridgeGame.getGameResult();
    this.outputView.printResult(progressData, playCount, gameResult);
  }

  defeat() {
    this.bridgeGame.defeat();
    const progressData = this.bridgeGame.getGameProgress();
    const playCount = this.bridgeGame.getPlayCount();
    const gameResult = this.bridgeGame.getGameResult();
    this.outputView.printResult(progressData, playCount, gameResult);
  }
}

module.exports = GameController;
