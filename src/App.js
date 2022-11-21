const BridgeGame = require("./Controller/BridgeGame.js");
const BridgeGameService = require("./Service/BridgeGameService.js");
const BridgeGameModel = require("./Model/BridgeGameModel.js");
const InputView = require("./View/InputView.js");
const OutputView = require("./View/OutputView.js");

class App {
  #bridgeGameService;
  #bridgeGameController;
  constructor() {
    this.#bridgeGameService = new BridgeGameService(
      InputView,
      OutputView,
      new BridgeGameModel()
    );

    this.#bridgeGameController = new BridgeGame(this.#bridgeGameService);
  }

  play() {
    this.#bridgeGameController.start();
  }
}

module.exports = App;
