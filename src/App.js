const MissionUtils = require("@woowacourse/mission-utils");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { PRINT_MESSAGE } = require("./constants/Message");
const InputView = require("./InputView");
const BridgeMaker = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");
const Validate = require("./utils/Validate");

class App {
  #print = MissionUtils.Console.print;
  #bridgeGame = new BridgeGame();
  #bridgeSize;
  #bridge;
  #moving = [];
  #totalTry = 1;

  play() {
    this.#print(PRINT_MESSAGE.GAME_START);
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    InputView.readBridgeSize((size) => {
      this.#print("");
      this.validateSize(size);
    });
  }

  validateSize(size) {
    try {
      Validate.validateSize(size);
      this.#bridgeSize = Number(size);
      this.makeBridge();
    } catch (error) {
      this.#print(error);
      this.inputBridgeSize();
    }
  }

  makeBridge() {
    this.#bridge = BridgeMaker.makeBridge(
      this.#bridgeSize,
      BridgeRandomNumberGenerator.generate
    );

    this.inputMoving();
  }

  inputMoving() {
    InputView.readMoving((moving) => this.validateMoving(moving));
  }

  validateMoving(moving) {
    try {
      Validate.validateMoving(moving);
      this.#moving.push(moving);

      this.checkResponse(this.#bridgeGame.move(this.#moving, this.#bridge));
    } catch (error) {
      this.#print(error);
      this.inputMoving();
    }
  }

  checkResponse(response) {
    if (response == "Finish") {
      this.responseFinish();
    } else if (response == "Continue") {
      this.responseContinue();
    } else if (response == "Retry") {
      this.responseRetry();
    }
  }
  responseFinish() {
    OutputView.printMap(this.#moving, true);
    this.printResult(true);
  }
  responseContinue() {
    OutputView.printMap(this.#moving, true);
    this.inputMoving();
  }
  responseRetry() {
    OutputView.printMap(this.#moving, false);
    this.inputGameCommand();
  }

  inputGameCommand() {
    InputView.readGameCommand((command) => {
      this.validateCommand(command);
    });
  }

  validateCommand(command) {
    try {
      Validate.validateCommand(command);
      this.commandReact(command);
    } catch (error) {
      this.#print(error);
      this.inputGameCommand();
    }
  }

  commandReact(command) {
    let response = this.#bridgeGame.retry(command);
    response ? this.retryGame() : this.printResult();
  }

  retryGame() {
    this.#totalTry += 1;
    this.#moving = [];
    this.inputMoving();
  }

  printResult(success) {
    OutputView.printResult(this.#moving, this.#totalTry, success);
  }
}

module.exports = App;

const app = new App();
app.play();
