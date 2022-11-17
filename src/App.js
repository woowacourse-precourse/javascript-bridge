const MissionUtils = require("@woowacourse/mission-utils");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { PRINT_MESSAGE } = require("./constant/Constant");
const InputView = require("./InputView");
const BridgeMaker = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");

class App {
  #size;
  #bridge;
  #moving;
  #totalTry;

  constructor() {
    this.#totalTry = 1;
  }

  play() {
    MissionUtils.Console.print(PRINT_MESSAGE.GAME_START);

    InputView.readBridgeSize((size) => this.getBridgeSize(size));
  }

  getBridgeSize(size) {
    this.#size = Number(size);
    this.#moving = [];
    MissionUtils.Console.print("");

    this.getBridge();
    this.selectMoving();
  }

  getBridge() {
    this.#bridge = BridgeMaker.makeBridge(
      this.#size,
      BridgeRandomNumberGenerator
    );
  }

  selectMoving() {
    InputView.readMoving((moving) => this.getMoving(moving));
  }

  getMoving(moving) {
    this.#moving.push(moving);

    const bridgeGame = new BridgeGame();
    bridgeGame.move(
      this.#moving,
      this.#bridge,
      this.selectMoving.bind(this),
      this.retry.bind(this),
      this.printResult.bind(this)
    );
  }

  retry() {
    this.#totalTry += 1;
    this.#moving = [];
    this.selectMoving();
  }

  printResult(success) {
    OutputView.printResult(this.#moving, this.#totalTry, success);
  }
}

module.exports = App;

const app = new App();
app.play();
