const InputView = require("./View/InputView");
const OutputView = require("./View/OutputView");
const { makeBridge } = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");
const { generate } = require("./BridgeRandomNumberGenerator");
const { GAME, MESSAGE } = require("./Constants");

class App {
  constructor() {
    this.bridgeGame = null;
    this.bridgeSize = 0;
  }

  play() {
    OutputView.printMsg(MESSAGE.GAME_START);
    this.requestBridgeSize();
  }

  requestBridgeSize() {
    InputView.readBridgeSize((bridgeSize) => {
      this.bridgeSize = bridgeSize;
      const bridge = makeBridge(bridgeSize, generate);
      this.bridgeGame = new BridgeGame(bridge);

      this.requestMoving();
    });
  }

  requestMoving() {
    InputView.readMoving((direction) => {
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
    return playerBridge.length >= this.bridgeSize;
  }

  printCurrBridgeState(upperBridge, lowerBridge) {
    OutputView.printMap(upperBridge, lowerBridge);
  }

  requestGameCommand() {
    InputView.readGameCommand((input) => {
      if (input === GAME.REPLAY) {
        this.bridgeGame.retry();
        this.requestMoving();
        
        return;
      }

      // Q
      this.quit();
    });
  }

  quit() {}
}

const app = new App();
app.play();

module.exports = App;
