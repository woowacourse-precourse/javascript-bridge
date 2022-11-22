const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./utils/BridgeRandomNumberGenerator");
const errorController = require("./utils/ErrorController");
const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");
const Validation = require("./utils/Validation");

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
      this.askStopGame();
    }
  }
  checkContinueGame() {
    if (this.bridgeGame.checkLast()) {
      this.showGameResult("성공");
    } else {
      this.inputStep();
    }
  }
  askStopGame() {
    InputView.readGameCommand((input) => {
      errorController(this.chooseRetryGame.bind(this, input), this.askStopGame.bind(this));
    });
  }
  chooseRetryGame(input) {
    Validation.restartInput(input);
    if (input === "R") {
      this.bridgeGame.retry();
      this.inputStep();
    } else if (input === "Q") {
      this.showGameResult("실패");
    }
  }
  showGameResult(result) {
    const [upString, downString] = this.bridgeGame.getBridgeString();
    const gameResult = {
      upString,
      downString,
    };
    const tryCount = this.bridgeGame.getTryCount();
    OutputView.printResult(gameResult, result, tryCount);
  }
}

module.exports = GameController;
