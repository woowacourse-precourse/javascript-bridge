const InputView = require("../View/InputView");
const OutputView = require("../View/OutputView");

const { makeBridge } = require("../Model/BridgeMaker");
const { generate } = require("../Model/BridgeRandomNumberGenerator");
const Validate = require("../Model/Validate");
const BridgeGame = require("../Model/BridgeGame");

const { GAME_OPTION, GAME_MESSAGE } = require("../Utils/Constants");

class App {
  constructor() {
    this.validate = new Validate();
    this.bridgeGame = null;
  }

  play() {
    OutputView.printMsg(GAME_MESSAGE.START);
    this.requestBridgeSize();
  }

  requestBridgeSize() {
    InputView.readBridgeSize((bridgeSize) => {
      this.checkBridgeSize(bridgeSize);
      this.createBridgeGame(bridgeSize);
      this.requestMoving();
    });
  }

  checkBridgeSize(bridgeSize) {
    const [isValid, errorMsg] = this.validate.checkBridgeSize(bridgeSize);
    if (!isValid) {
      OutputView.printMsg(errorMsg);

      this.requestBridgeSize();
    }
  }

  createBridgeGame(bridgeSize) {
    const directions = makeBridge(bridgeSize, generate);
    this.bridgeGame = new BridgeGame(directions);
  }

  requestMoving() {
    InputView.readMoving((direction) => {
      this.checkMovingDirection(direction);

      const [canCross, playerUpperState, playerLowerState] =
        this.bridgeGame.move(direction);
      this.printCurrBridgeState(playerUpperState, playerLowerState);

      this.calculateNextStep(canCross, playerUpperState);
    });
  }

  checkMovingDirection(direction) {
    const [isValid, errorMsg] = this.validate.checkMovingDirection(direction);
    if (!isValid) {
      OutputView.printMsg(errorMsg);

      this.requestMoving();
    }
  }

  printCurrBridgeState(playerUpperBridgeState, playerLowerBridgeState) {
    OutputView.printMap(playerUpperBridgeState, playerLowerBridgeState);
  }

  calculateNextStep(canCross, playerBridgeState) {
    this.bridgeGame.isQuit()
      ? this.quit()
      : canCross
      ? this.requestMoving()
      : this.requestGameCommand();
  }

  requestGameCommand() {
    InputView.readGameCommand((command) => {
      this.checkGameCommand(command);
      command === GAME_OPTION.REPLAY ? this.retry() : this.quit();
    });
  }

  checkGameCommand(command) {
    const [isValid, errorMsg] = this.validate.checkGameCommand(command);
    if (!isValid) {
      OutputView.printMsg(errorMsg);

      this.requestGameCommand();
    }
  }

  retry() {
    this.bridgeGame.retry();
    this.requestMoving();
  }

  quit() {
    const [playerUpperBridgeState, playerLowerBridgeState, result] =
      this.bridgeGame.getResult();

    OutputView.printMsg(`\n${GAME_MESSAGE.TOTAL_RESULT}`);
    OutputView.printMap(playerUpperBridgeState, playerLowerBridgeState);
    OutputView.printResult(result);
    OutputView.end();
  }
}

const app = new App();
app.play();

module.exports = App;
