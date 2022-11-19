const BridgeGame = require("../BridgeGame");
const Bridge = require("../Bridge");
const OutputView = require("../view/OutputView");
const InputView = require("../view/InputView");
const BridgeMaker = require("../BridgeMaker");
const BridgeRandomNumberGenerator = require("../utils/BridgeRandomNumberGenerator");
const Validate = require("../utils/Validate");
const { Console } = require("@woowacourse/mission-utils");
const { Guide } = require("../constants/Constant");

class BridgeGameController {
  #bridge;
  bridgeGame = new BridgeGame();

  startGame() {
    this.InputBridgeSize();
  }

  InputBridgeSize() {
    OutputView.printStart();
    InputView.readBridgeSize(this.getBridgeSize.bind(this));
  }

  InputPositionUntilBridgeEnds() {
    InputView.readMoving(this.getNextDirectionFromUser.bind(this));
  }

  getBridgeSize(size) {
    Validate.bridgeSize(size);

    this.handleBridgeMaking(size);

    this.InputPositionUntilBridgeEnds();
  }

  getNextDirectionFromUser(input) {
    Validate.move(input);

    this.handleMoveOrStop(input);
  }

  getIsUserWantRestart(input) {
    if (input === "R") {
      return this.handleRestart();
    }
    if (input === "Q") {
      return this.handleQuit();
    }
  }

  handleBridgeMaking(size) {
    this.#bridge = new Bridge(
      BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate)
    );
  }

  handleMoveOrStop(input) {
    const isNextDirectionCorrect = this.bridgeGame.move(
      this.#bridge.getCorrectDirection(),
      input
    );

    if (isNextDirectionCorrect) return this.movePosition();
    return this.stopPosition();
  }

  handleGameSuccess() {
    OutputView.printMap(this.#bridge.getCrossState("success"));

    OutputView.printResult(
      this.#bridge.getCrossState("success"),
      Guide.SUCCESS,
      this.bridgeGame.totalTrial
    );
  }

  handleRestart() {
    this.bridgeGame.retry(this.#bridge.resetCurrentPosition.bind(this.#bridge));

    this.InputPositionUntilBridgeEnds();
  }

  handleQuit() {
    OutputView.printResult(
      this.#bridge.getCrossState("failed"),
      Guide.FAIL,
      this.bridgeGame.totalTrial
    );

    Console.close();
  }

  movePosition() {
    this.#bridge.moveCurrentPosition();

    if (this.#bridge.getIsLastPosition()) {
      return this.handleGameSuccess();
    }

    OutputView.printMap(this.#bridge.getCrossState("success"));

    this.InputPositionUntilBridgeEnds();
  }

  stopPosition() {
    OutputView.printMap(this.#bridge.getCrossState("failed"));

    InputView.readGameCommand(this.getIsUserWantRestart.bind(this));
  }
}

module.exports = BridgeGameController;
