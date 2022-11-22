const BridgeInteractPlayer = require("./BridgeInteractPlayer");
const InputView = require("../Bridge.Input/InputView");

class Game {
  #manage;
  constructor() {
    this.#manage = new BridgeInteractPlayer();
  }

  start() {
    this.#manage.playerInputBridgeSize();
  }
}
module.exports = Game;
