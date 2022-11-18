const InputView = require("../View/InputView.js");
const OutputView = require("../View/OutputView.js");
const BridgeGameModel = require("../Model/BridgeGameModel.js");
const { generate } = require("../BridgeRandomNumberGenerator.js");
const { makeBridge } = require("../BridgeMaker.js");
const { KEYWORD } = require("../constants/index.js");

const BridgeGameService = class {
  #inputView;
  #outputView;
  #bridgeGameModel;
  constructor() {
    this.#inputView = InputView;
    this.#outputView = OutputView;
    this.#bridgeGameModel = new BridgeGameModel();
  }

  startGame() {}

  retryGame() {}

  endGame() {}

  moveUser() {}
};

module.exports = BridgeGameService;
