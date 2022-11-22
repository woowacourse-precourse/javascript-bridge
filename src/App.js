const InputView = require("./View/InputView");
const OutputView = require("./View/OutputView");

const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./Model/BridgeRandomNumberGenerator");
const Validate = require("./Model/Validate");
const BridgeGame = require("./Model/BridgeGame");

const { GAME_OPTION, GAME_MESSAGE } = require("./Utils/Constants");

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
      if (!this.checkBridgeSize(bridgeSize)) return this.requestBridgeSize();

      this.createBridgeGame(bridgeSize);
      this.requestMoving();
    });
  }

  checkBridgeSize(bridgeSize) {
    const errorMsg = this.validate.checkBridgeSize(bridgeSize);

    if (errorMsg !== null) {
      OutputView.printMsg(errorMsg);

      return false;
    }
    return true;
  }

  createBridgeGame(bridgeSize) {
    const directions = makeBridge(bridgeSize, generate);
    this.bridgeGame = new BridgeGame(directions);
  }

  requestMoving() {
    InputView.readMoving((direction) => {
      if (!this.checkMovingDirection(direction)) return this.requestMoving();

      this.moving(direction);
    });
  }

  checkMovingDirection(direction) {
    const errorMsg = this.validate.checkMovingDirection(direction);
    if (errorMsg !== null) {
      OutputView.printMsg(errorMsg);

      return false;
    }
    return true;
  }

  moving(direction) {
    const [canCross, playerUpperState, playerLowerState] =
      this.bridgeGame.move(direction);

    this.printCurrBridgeState(playerUpperState, playerLowerState);
    this.calculateNextStep(canCross, playerUpperState);
  }

  printCurrBridgeState(playerUpperBridgeState, playerLowerBridgeState) {
    OutputView.printMap(playerUpperBridgeState, playerLowerBridgeState);
  }

  calculateNextStep(canCross, playerBridgeState) {
    this.bridgeGame.isQuit(canCross)
      ? this.quit()
      : canCross
      ? this.requestMoving()
      : this.requestGameCommand();
  }

  requestGameCommand() {
    InputView.readGameCommand((command) => {
      if (!this.checkGameCommand(command)) return this.requestGameCommand();

      command === GAME_OPTION.REPLAY ? this.retry() : this.quit();
    });
  }

  checkGameCommand(command) {
    const errorMsg = this.validate.checkGameCommand(command);
    if (errorMsg !== null) {
      OutputView.printMsg(errorMsg);

      return false;
    }
    return true;
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
