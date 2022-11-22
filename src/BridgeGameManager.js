const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeGame = require("./BridgeGame");
const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const Validation = require("./Validation");
const { GAME_STATE } = require("./Constants");

class BridgeGameManager {
  #bridgeGame;
  #bridge;

  constructor() {
    this.#bridgeGame = new BridgeGame();
  }

  game() {
    OutputView.printStartMessage();
    InputView.readBridgeSize(this.manageBridge.bind(this));
  }

  manageBridge(size) {
    Validation.checkBridgeSize(size);
    this.#bridge = makeBridge(size, generate);
    return InputView.readMoving(this.manageMoving.bind(this));
  }

  manageMoving(direction) {
    Validation.checkDirection(direction);

    const gameState = this.#bridgeGame.move(this.#bridge, direction);
    OutputView.printMap(this.#bridgeGame.getCurrentState().bridgeState);
    if (gameState === GAME_STATE.PASS)
      return InputView.readMoving(this.manageMoving.bind(this));
    if (gameState === GAME_STATE.FAIL)
      return InputView.readGameCommand(this.manageRetry.bind(this));
    if (gameState === GAME_STATE.SUCCESS)
      return OutputView.printResult(this.#bridgeGame.getCurrentState());
  }

  manageRetry(command) {
    Validation.checkGameCommand(command);
    if (command === "R") {
      this.#bridgeGame.retry();
      InputView.readMoving(this.manageMoving.bind(this));
    }
    if (command === "Q")
      return OutputView.printResult(this.#bridgeGame.getCurrentState());
  }

  makeBridgeState() {}
}

module.exports = BridgeGameManager;
