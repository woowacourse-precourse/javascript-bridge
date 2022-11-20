const InputView = require("../View/InputView");
const OutputView = require("../View/OutputView");

const { makeBridge } = require("../Model/BridgeMaker");
const BridgeGame = require("../Model/BridgeGame");
const { generate } = require("../Model/BridgeRandomNumberGenerator");
const Validate = require("../Model/Validate");

const { GAME, MESSAGE } = require("../Utils/Constants");

class App {
  constructor() {
    this.validate = new Validate();
    this.bridgeGame = null;
  }

  play() {
    OutputView.printMsg(MESSAGE.GAME_START);
    this.requestBridgeSize();
  }

  requestBridgeSize() {
    InputView.readBridgeSize((bridgeSize) => {
      this.validate.checkBridgeSize(bridgeSize);

      this.bridgeSize = Number(bridgeSize);
      const bridge = makeBridge(bridgeSize, generate);
      this.bridgeGame = new BridgeGame(bridge);

      this.requestMoving();
    });
  }

  requestMoving() {
    InputView.readMoving((direction) => {
      this.validate.checkMovingDirection(direction);

      const [canCross, upperBridge, lowerBridge] =
        this.bridgeGame.move(direction);

      // 현재까지 이동한 다리 상태
      this.printCurrBridgeState(upperBridge, lowerBridge);

      if (canCross) {
        if (this.isLastPosition(upperBridge)) {
          this.quit();

          return;
        }

        this.requestMoving();
        return;
      }

      this.requestGameCommand();
    });
  }

  isLastPosition(playerBridge) {
    const bridgeSize = this.bridgeGame.getBridgeSize();

    return playerBridge.length >= bridgeSize;
  }

  printCurrBridgeState(upperBridge, lowerBridge) {
    OutputView.printMap(upperBridge, lowerBridge);
  }

  requestGameCommand() {
    InputView.readGameCommand((command) => {
      this.validate.checkGameCommand(command);

      if (command === GAME.REPLAY) {
        this.bridgeGame.retry();
        this.requestMoving();

        return;
      }

      // Q
      this.quit();
    });
  }

  quit() {
    const [playerUpperBridge, playerLowerBridge, isSuccess, attempsCount] =
      this.bridgeGame.getResult();

    OutputView.printMsg(MESSAGE.GAME_RESULT);
    OutputView.printMap(playerUpperBridge, playerLowerBridge);
    OutputView.printResult(isSuccess, attempsCount);
    OutputView.end();
  }
}

const app = new App();
app.play();

module.exports = App;
