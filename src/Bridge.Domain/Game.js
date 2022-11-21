const BridgeInteractPlayer = require("./BridgeInteractPlayer");
const InputView = require("../Bridge.Input/InputView");

class Game {
  #manage;
  constructor() {
    this.#manage = new BridgeInteractPlayer();
  }

  start() {
    InputView.readBridgeSize(
      this.#manage.playerInputBridgeSize.bind(this.#manage)
    );
  }
}

module.exports = Game;
