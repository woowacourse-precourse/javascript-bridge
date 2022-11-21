const InputView = require("../View/InputView");
const OutputView = require("../View/OutputView");

const { makeBridge } = require("../Model/BridgeMaker");
const BridgeGame = require("../Model/BridgeGame");
const { generate } = require("../Model/BridgeRandomNumberGenerator");
const Validate = require("../Model/Validate");

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
      const [isValid, errorMsg] = this.validate.checkBridgeSize(bridgeSize);
      if (!isValid) {
        OutputView.printMsg(errorMsg);
        return this.requestBridgeSize();
      }

      this.createBridgeGame(bridgeSize);
      this.requestMoving();
    });
  }

  createBridgeGame(bridgeSize) {
    const bridge = makeBridge(bridgeSize, generate);
    this.bridgeGame = new BridgeGame(bridge);
  }

  requestMoving() {
    InputView.readMoving((direction) => {
      const [isValid, errorMsg] = this.validate.checkMovingDirection(direction);
      if (!isValid) {
        OutputView.printMsg(errorMsg);
        return this.requestMoving();
      }

      const [canCross, playerUpperBridgeState, playerLowerBridgeState] =
        this.bridgeGame.move(direction);

      // 현재까지 이동한 다리 상태
      this.printCurrBridgeState(playerUpperBridgeState, playerLowerBridgeState);

      this.bridgeGame.isLastPosition(playerUpperBridgeState.length) && canCross
        ? this.quit()
        : canCross
        ? this.requestMoving()
        : this.requestGameCommand();
    });
  }

  printCurrBridgeState(playerUpperBridgeState, playerLowerBridgeState) {
    OutputView.printMap(playerUpperBridgeState, playerLowerBridgeState);
  }

  requestGameCommand() {
    InputView.readGameCommand((command) => {
      const [isValid, errorMsg] = this.validate.checkGameCommand(command);
      if (!isValid) {
        OutputView.printMsg(errorMsg);
        return this.requestGameCommand();
      }

      if (command === GAME_OPTION.REPLAY) {
        this.bridgeGame.retry();
        this.requestMoving();

        return;
      }

      // Q
      this.quit();
    });
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
