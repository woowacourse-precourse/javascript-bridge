const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const { BRIDGE, GAME_RESULT } = require('./constant/constant');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  #bridge;

  #tryCount;

  #gameResult;

  constructor() {
    this.bridgeGame = new BridgeGame();
    this.#tryCount = 1;
    this.#gameResult = GAME_RESULT.FAIL;
  }

  play() {
    OutputView.printStart();
    this.initBridge();
  }

  initBridge() {
      if (!InputView.sizeValidate(length)) return this.initBridge();
    InputView.readBridgeSize((size) => {

      this.#bridge = BridgeMaker.makeBridge(parseInt(size, 10), generate);
      OutputView.printEnter();
      return this.movingBridge();
    });
  }

  movingBridge() {
    InputView.readMoving((moving) => {
      if (!InputView.moveValidate(moving)) return this.movingBridge();

      this.bridgeGame.move(this.#bridge, moving);
      OutputView.printMap(this.bridgeGame.getMoving());

      if (this.bridgeGame.isFail(this.#bridge, moving)) return this.askGameCommand();

      if (this.bridgeGame.getIndex() !== this.#bridge.length) return this.movingBridge();

      this.#gameResult = GAME_RESULT.SUCCESS;
      return this.quitGame();
    });
  }

  askGameCommand() {
    InputView.readGameCommand((command) => {
      if (!InputView.commandValidate(command)) return this.askGameCommand();

      if (command === BRIDGE.RESTART) {
        this.bridgeGame.retry();
        this.#tryCount += 1;
        return this.movingBridge();
      }

      return this.quitGame();
    });
  }

  quitGame() {
    OutputView.printResult(this.bridgeGame.getMoving(), this.#gameResult, this.#tryCount);
  }
}

const app = new App();
app.play();

module.exports = App;
