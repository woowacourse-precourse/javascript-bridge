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
    this.validataSize(size);
    this.#size = Number(size);
    this.#moving = [];
    MissionUtils.Console.print("");

    this.getBridge();
    this.selectMoving();
  }

  validataSize(size) {
    if (isNaN(size)) {
      throw "[ERROR]";
    } else if (size < 3 || size > 20) {
      throw "[ERROR]";
    }
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
    let response = bridgeGame.move(this.#moving, this.#bridge);
    this.checkResponse(response, bridgeGame);
  }
  checkResponse(response, bridgeGame) {
    if (response == "Done") {
      this.responseDone();
    } else if (response == "Correct") {
      this.responseCorrect();
    } else if (response == "Incorrect") {
      this.responseIncorrect(bridgeGame);
    }
  }
  responseDone() {
    OutputView.printMap(this.#moving, true);
    this.printResult(true);
  }
  responseCorrect() {
    OutputView.printMap(this.#moving, true);
    this.selectMoving();
  }
  responseIncorrect(bridgeGame) {
    OutputView.printMap(this.#moving, false);
    InputView.readGameCommand((command) =>
      bridgeGame.retry(
        command,
        this.retry.bind(this),
        this.printResult.bind(this)
      )
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
