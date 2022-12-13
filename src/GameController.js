const MissionUtils = require("@woowacourse/mission-utils");
const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const { FLAG } = require("./lib/constants");
const OutputView = require("./OutputView");

class GameController {
  #game;

  constructor({ game }) {
    this.#game = game;
  }

  play() {
    OutputView.printIntro();

    this.setUpBridge();
  }

  setUpBridge() {
    InputView.readBridgeSize((size) => {
      const bridge = makeBridge(size, generate);

      this.#game.setBridge(bridge);
      this.crossBridge();
    });
  }

  crossBridge() {
    InputView.readMoving((direction) => {
      const moved = this.#game.move(direction);
      const arrived = this.#game.isArrived();

      OutputView.printMap(this.#game.getFormattedMap());

      if (moved) arrived ? this.quit() : this.crossBridge();
      if (!moved) this.checkRetry();
    });
  }

  checkRetry() {
    InputView.readGameCommand((command) => {
      if (command === FLAG.RETRY) this.#game.retry(this.crossBridge.bind(this));
      if (command === FLAG.QUIT) this.quit();
    });
  }

  quit() {
    OutputView.printResult(this.#game);
    MissionUtils.Console.close();
  }
}

module.exports = GameController;
