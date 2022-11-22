const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./utils/BridgeRandomNumberGenerator");
const errorController = require("./utils/ErrorController");
const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");
const Validation = require("./utils/Validation");
const { RETRY_GAME, GAME_RESULT } = require("./constants/messages");

class GameController {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }
  play() {
    this.startMessage();
  }
  startMessage() {
    OutputView.printGameStart();
    this.inputBridgeSize();
  }
  inputBridgeSize() {
    InputView.readBridgeSize((input) => {
      errorController(this.createBridge.bind(this, input), this.inputBridgeSize.bind(this));
    });
  }
  createBridge(input) {
    Validation.bridgeInput(Number(input));
    const bridge = BridgeMaker.makeBridge(input, BridgeRandomNumberGenerator.generate);
    this.bridgeGame.setBridge(bridge);
    this.inputStep();
  }
  inputStep() {
    InputView.readMoving((input) => {
      errorController(this.compareStep.bind(this, input), this.inputStep.bind(this));
    });
  }
  compareStep(input) {
    const result = this.bridgeGame.compareBridge(input);
    Validation.stepInput(input);
    if (result) {
      this.bridgeGame.addCorrect();
    } else {
      this.bridgeGame.addWrong();
    }
    this.showBridgeResult(result);
  }
  showBridgeResult(result) {
    const [upString, downString] = this.bridgeGame.getBridgeString();
    OutputView.printMap(upString, downString);
    if (result) {
      this.checkContinueGame();
    } else {
      this.inputRetry();
    }
  }
  checkContinueGame() {
    if (this.bridgeGame.checkLast()) {
      this.showGameResult(GAME_RESULT.SUCCESS);
    } else {
      this.inputStep();
    }
  }
  inputRetry() {
    InputView.readGameCommand((input) => {
      errorController(this.chooseRetryGame.bind(this, input), this.inputRetry.bind(this));
    });
  }
  chooseRetryGame(input) {
    Validation.restartInput(input);
    if (input === RETRY_GAME.RETRY) {
      this.bridgeGame.retry();
      this.inputStep();
    } else if (input === RETRY_GAME.QUIT) {
      this.showGameResult(GAME_RESULT.FAIL);
    }
  }
  showGameResult(result) {
    const [upString, downString] = this.bridgeGame.getBridgeString();
    const tryCount = this.bridgeGame.getTryCount();
    const gameResult = {
      upString,
      downString,
    };
    OutputView.printResult(gameResult, result, tryCount);
  }
}

module.exports = GameController;
