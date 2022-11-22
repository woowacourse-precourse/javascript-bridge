const InputView = require('../Views/InputView');
const OutputView = require('../Views/OutputView');
const BridgeGame = require('../Models/BridgeGame');
const ProgressMap = require('../Models/ProgressMap');
const { OPTION } = require('../utils/constants');
const {
  validateBridgeSize,
  validateMovingInput,
  validateContinue,
} = require('../utils/validations');

class GameController {
  #inputView;
  #outputView;
  #bridgeGame;
  #progressMap;

  constructor() {
    this.#inputView = InputView;
    this.#outputView = OutputView;
    this.#bridgeGame = new BridgeGame();
  }

  startGame() {
    this.#outputView.printStart();
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    this.#inputView.readBridgeSize((userInput) => {
      this.checkValidSize(userInput);
    });
  }

  checkValidSize(userInput) {
    try {
      validateBridgeSize(userInput);
      this.makeBridge(userInput);
    } catch (error) {
      this.#outputView.printError(error);
      this.inputBridgeSize();
    }
  }

  makeBridge(userInput) {
    const size = Number(userInput);
    this.#bridgeGame.createBridge(size);
    this.selectMoving();
  }

  selectMoving() {
    this.#inputView.readMoving((userInput) => {
      this.checkValidMoving(userInput);
    });
  }

  checkValidMoving(userInput) {
    try {
      validateMovingInput(userInput);
      this.moving(userInput);
    } catch (error) {
      this.#outputView.printError(error);
      this.selectMoving();
    }
  }

  moving(userInput) {
    this.#bridgeGame.move(userInput);
    this.checkResult();
  }

  checkResult() {
    const { gameProgress } = this.#bridgeGame.getResultData();
    const currentProgressMap = this.makeMap(gameProgress);

    this.#outputView.printMap(currentProgressMap);
    this.checkGameBranch();
  }

  makeMap(progressData) {
    this.#progressMap = new ProgressMap(progressData);
    const currentProgressMap = this.#progressMap.createMap(progressData);

    return currentProgressMap;
  }

  checkGameBranch() {
    const alive = this.#bridgeGame.getAlive();
    if (!alive) return this.askRetry();

    const end = this.#bridgeGame.checkGameEnd();
    if (end) return this.win();

    return this.selectMoving();
  }

  askRetry() {
    this.#inputView.readGameCommand((userInput) => {
      this.checkRetryValidation(userInput);
    });
  }

  checkRetryValidation(userInput) {
    try {
      validateContinue(userInput);
      this.retryBranch(userInput);
    } catch (error) {
      this.#outputView.printError(error);
      this.askRetry();
    }
  }

  retryBranch(userInput) {
    if (userInput === OPTION.RETRY) return this.replay();

    return this.defeat();
  }

  replay() {
    this.#bridgeGame.retry();
    this.selectMoving();
  }

  getResult() {
    const gameResultData = this.#bridgeGame.getResultData();
    const currentProgressMap = this.#progressMap.createMap(gameResultData.gameProgress);
    this.#outputView.printResult(currentProgressMap, gameResultData);
  }

  win() {
    this.#bridgeGame.win();
    this.getResult();
  }

  defeat() {
    this.#bridgeGame.defeat();
    this.getResult();
  }
}

module.exports = GameController;
