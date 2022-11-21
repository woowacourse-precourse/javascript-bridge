const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeGame = require("./BridgeGame");
const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const Validation = require("./Validation");
const { GAME_STATE } = require("./Constants");
const bridgeGame = new BridgeGame();

class BridgeGameManager {
  #bridgeSize;
  #bridge;

  game() {
    OutputView.printStartMessage();
    InputView.readBridgeSize(this.manageBridge.bind(this));
  }

  manageBridge(size) {
    Validation.checkBridgeSize(size);
    this.#bridgeSize = size;
    this.#bridge = makeBridge(size, generate);
    console.log(this.#bridge);
    return InputView.readMoving(this.manageMoving.bind(this));
  }

  manageMoving(direction) {
    Validation.checkDirection(direction);
    const gameState = bridgeGame.move(this.#bridge, direction);
    if (gameState === GAME_STATE.SUCCESS) return OutputView.printResult();
    OutputView.printMap(bridgeGame.getCurrentState());
    if (gameState === GAME_STATE.PASS)
      return InputView.readMoving(this.manageMoving.bind(this));
    if (gameState === GAME_STATE.FAIL)
      return InputView.readGameCommand(this.manageRetry.bind(this));
  }

  manageRetry(command) {
    Validation.checkGameCommand(command);
    if (command === "R") bridgeGame.retry();
  }
}

module.exports = BridgeGameManager;
