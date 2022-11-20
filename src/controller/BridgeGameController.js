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

  startGame() {
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    OutputView.printStart();

    InputView.readBridgeSize((size) => {
      InputValidator.checkBridgeSize(size);

      this.handleBridgeMaking(size);

      this.inputPositionUntilBridgeEnds();
    });
  }

  inputPositionUntilBridgeEnds() {
    InputView.readMoving((input) => {
      InputValidator.checkMove(input);

      this.handleMoveOrStop(input);
    });
  }

  handleBridgeMaking(size) {
    this.#bridgeGame = new BridgeGame(
      BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate)
    );
  }

  handleMoveOrStop(input) {
    const isNextDirectionCorrect =
      this.#bridgeGame.getCorrectDirection() === input;

    if (isNextDirectionCorrect) return this.movePosition();
    return this.stopPosition();
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

    this.inputPositionUntilBridgeEnds();
  }

  handleQuit() {
    OutputView.printResult(
      this.#bridgeGame.getCrossState("failed"),
      Guide.FAIL,
      this.#bridgeGame.totalTrial
    );

    Console.close();
  }

  movePosition() {
    this.#bridgeGame.move();

    if (this.#bridgeGame.getIsLastPosition()) {
      return this.handleGameSuccess();
    }

    OutputView.printMap(this.#bridgeGame.getCrossState("success"));

    this.inputPositionUntilBridgeEnds();
  }

  stopPosition() {
    OutputView.printMap(this.#bridgeGame.getCrossState("failed"));

    InputView.readGameCommand((input) => {
      if (input === "R") {
        return this.handleRestart();
      }
      if (input === "Q") {
        return this.handleQuit();
      }
    });
  }
}

module.exports = BridgeGameController;
