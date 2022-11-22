const MissionUtils = require("@woowacourse/mission-utils");
const { PRINT_MESSAGE } = require("../constants/Message");

const BridgeRandomNumberGenerator = require("../utils/BridgeRandomNumberGenerator");
const BridgeMaker = require("../BridgeMaker");
const Validate = require("../utils/Validate");
const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");

const BridgeGame = require("../model/BridgeGame");

class GameController {
  #bridgeGame = new BridgeGame();
  #bridgeSize;
  #bridge;
  #moving = [];
  #totalTry = 1;

  startGame() {
    MissionUtils.Console.print(PRINT_MESSAGE.GAME_START);
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    InputView.readBridgeSize((size) => {
      MissionUtils.Console.print("");
      this.validateSize(size);
    });
  }

  validateSize(size) {
    try {
      Validate.validateSize(size);
      this.#bridgeSize = Number(size);
      this.makeBridge();
    } catch (error) {
      MissionUtils.Console.print(error);
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
      MissionUtils.Console.print(error);
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
      MissionUtils.Console.print(error);
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

module.exports = GameController;
