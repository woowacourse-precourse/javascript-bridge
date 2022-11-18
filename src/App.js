const MissionUtils = require("@woowacourse/mission-utils");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { PRINT_MESSAGE } = require("./constant/Constant");
const InputView = require("./InputView");
const BridgeMaker = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");

class App {
  #bridgeSize;
  #bridge;
  #moving;
  #totalTry;

  constructor() {
    this.#totalTry = 1;
    this.#moving = [];
    this.bridgeGame = new BridgeGame();
  }

  play() {
    MissionUtils.Console.print(PRINT_MESSAGE.GAME_START);

    InputView.readBridgeSize((size) => this.getBridgeSize(size));
  }

  getBridgeSize(size) {
    MissionUtils.Console.print("");

    this.validateSize(size);
    this.getBridge();
    this.selectMoving();
  }

  validateSize(size) {
    if (isNaN(size)) {
      throw "[ERROR]";
    } else if (size < 3 || size > 20) {
      throw "[ERROR]";
    }
    this.#bridgeSize = Number(size);
  }
  getBridge() {
    this.#bridge = BridgeMaker.makeBridge(
      this.#bridgeSize,
      BridgeRandomNumberGenerator
    );
  }
  selectMoving() {
    InputView.readMoving((moving) => this.getMoving(moving));
  }

  getMoving(moving) {
    this.#moving.push(moving);

    let response = this.bridgeGame.move(this.#moving, this.#bridge);
    this.checkResponse(response);
  }
  checkResponse(response) {
    if (response == "Done") {
      this.responseDone();
    } else if (response == "Correct") {
      this.responseCorrect();
    } else if (response == "Incorrect") {
      this.responseIncorrect(this.bridgeGame);
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
