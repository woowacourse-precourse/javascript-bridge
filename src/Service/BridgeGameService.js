const { generate } = require("../BridgeRandomNumberGenerator.js");
const { makeBridge } = require("../BridgeMaker.js");

const BridgeGameService = class {
  #inputView;
  #outputView;
  #bridgeGameModel;
  constructor(inputView, outputView, bridgeGameModel) {
    this.#inputView = inputView;
    this.#outputView = outputView;
    this.#bridgeGameModel = bridgeGameModel;
  }

  startGame(task) {
    const callback = (size) => {
      const bridge = makeBridge(size, generate);
      this.#bridgeGameModel.checkBridge(bridge);
      this.#bridgeGameModel.try(bridge);
      task();
    };

    this.#outputView.printStart();
    this.#inputView.readBridgeSize(callback);
  }

  retryGame() {}

  endGame() {}

  moveUser() {}
};

module.exports = BridgeGameService;
