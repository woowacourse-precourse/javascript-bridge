const BridgeGame = require("./controller/BridgeGame.js");
const BridgeGameService = require("./service/BridgeGameService.js");
const BridgeGameModel = require("./model/BridgeGameModel.js");
const InputView = require("./view/InputView.js");
const OutputView = require("./view/OutputView.js");

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
