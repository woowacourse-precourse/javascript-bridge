const InputView = require("../View/InputView");
const OutputView = require("../view/OutputView");
const BridgeMaker = require("../BridgeMaker");
const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");
const BridgeGame = require("../Model/BridgeGame");
const Bridge = require("../Model/Bridge");
const { BRIDGE_DIRECTION } = require("../util/Constants");

class BridgeGameController {
  #bridge_length;
  #bridgegame = new BridgeGame();
  start() {
    OutputView.printStart();
    this.makeBridge(InputView.measureLength());
  }

  addBridge(length) {
    const randBridge = BridgeMaker.makeBridge(
      length,
      BridgeRandomNumberGenerator.generate
    );
    this.#bridgegame.setBridge(randBridge);
    this.moveDirection();
  }

  moveDirection() {
    const direction = InputView.readMoving();
    //this.move(direction);
  }

  move(step, movement) {
    BridgeGame.move(step, movement);
    OutputView.printMap();
    this.moveDirection();
  }

  move(step) {
    const isSuccess = this.#bridgegame.move(step);
    const map = this.#BridgeGame.currentMap();
    OutputView.printMap(map[0], map[1]);
    if (!isSuccess) {
      const step = InputView.readGameCommand();
      if (step === "R") {
      }
      if (step === "Q") {
      }
    }
    if (isSuccess) {
      this.moveDirection();
    }
  }
}

module.exports = BridgeGameController;
