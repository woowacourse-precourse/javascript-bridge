const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const { BRIDGE } = require('./constant/constant');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  #bridge;

  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  play() {
    OutputView.printStart();
    this.initBridge();
  }

  initBridge() {
    InputView.readBridgeSize((length) => {
      if (!InputView.sizeValidate(length)) {
        return this.initBridge();
      }

      this.#bridge = BridgeMaker.makeBridge(parseInt(length, 10), generate);
      this.movingBridge();
    });
  }

  movingBridge() {
    InputView.readMoving((moving) => {
      if (!InputView.moveValidate(moving)) return this.movingBridge();

      this.bridgeGame.move(this.#bridge, moving);
      OutputView.printMap(this.bridgeGame.getMoving());
      if (this.bridgeGame.getIndex() !== this.#bridge.length) return this.movingBridge();
    });
  }
    });
  }
}

const app = new App();
app.play();

module.exports = App;
