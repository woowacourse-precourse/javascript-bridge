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
    return InputView.readMoving(this.manageMoving.bind(this));
  }

  manageMoving(direction) {
    Validation.checkDirection(direction);
    const state = bridgeGame.move(this.#bridge, direction);
    if (state === GAME_STATE.PASS)
      return InputView.readMoving(this.manageMoving.bind(this));
    if (state === GAME_STATE.FAIL) return InputView.readGameCommand();
    if (state === GAME_STATE.SUCCESS) return OutputView.printResult();
  }
}

module.exports = BridgeGameManager;
