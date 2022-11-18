const { generate } = require("../BridgeRandomNumberGenerator.js");
const { makeBridge } = require("../BridgeMaker.js");
const { KEYWORD } = require("../constants/index.js");

const BridgeGameService = class {
  #inputView;
  #outputView;
  #bridgeGameModel;
  constructor(inputView, outputView, bridgeGameModel) {
    this.#inputView = inputView;
    this.#outputView = outputView;
    this.#bridgeGameModel = bridgeGameModel;
  }

  startGame() {}

  retryGame() {}

  endGame() {}

  moveUser() {}
};

module.exports = BridgeGameService;
