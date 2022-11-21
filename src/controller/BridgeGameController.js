const BridgeGame = require("../BridgeGame");
const OutputView = require("../view/OutputView");
const InputView = require("../view/InputView");
const BridgeMaker = require("../BridgeMaker");
const BridgeRandomNumberGenerator = require("../utils/BridgeRandomNumberGenerator");
const InputValidator = require("../utils/InputValidator");
const { Console } = require("@woowacourse/mission-utils");
const { Guide } = require("../constants/Constant");

class BridgeGameController {
  #bridgeGame;

  constructor() {}

  start() {
    OutputView.printStart();

    this.inputBridgeSize();
  }

  inputBridgeSize() {
    InputView.readBridgeSize((size) => {
      InputValidator.checkBridgeSize(size);

      this.handleMakeBridge(size);

      this.inputMoveDirection();
    });
  }

  inputMoveDirection() {
    InputView.readMoving((input) => {
      InputValidator.checkMove(input);

      this.handleMoveOrStop(input);
    });
  }

  inputRestartCommand() {
    InputView.readGameCommand((input) => {
      InputValidator.checkRestart(input);

      if (input === "R") return this.handleRestart();
      if (input === "Q") return this.handleQuit();
    });
  }

  handleMakeBridge(size) {
    this.#bridgeGame = new BridgeGame(
      BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate)
    );
  }

  handleMoveOrStop(input) {
    const isNextDirectionCorrect =
      this.#bridgeGame.getCorrectDirection() === input;

    if (isNextDirectionCorrect) return this.handleMove();

    OutputView.printMap(this.#bridgeGame.getCrossState("failed"));

    return this.inputRestartCommand();
  }

  handleGameSuccess() {
    OutputView.printMap(this.#bridgeGame.getCrossState("success"));

    OutputView.printResult(
      this.#bridgeGame.getCrossState("success"),
      Guide.SUCCESS,
      this.#bridgeGame.totalTrial
    );
  }

  handleRestart() {
    this.#bridgeGame.retry();

    return this.inputMoveDirection();
  }

  handleQuit() {
    OutputView.printResult(
      this.#bridgeGame.getCrossState("failed"),
      Guide.FAIL,
      this.#bridgeGame.totalTrial
    );

    return Console.close();
  }

  handleMove() {
    this.#bridgeGame.move();

    if (this.#bridgeGame.getIsLastPosition()) {
      return this.handleGameSuccess();
    }

    OutputView.printMap(this.#bridgeGame.getCrossState("success"));

    return this.inputMoveDirection();
  }
}

module.exports = BridgeGameController;
