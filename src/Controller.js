const BridgeGame = require("./BridgeGame");
const { readBridgeSize } = require("./InputView");

class Controller {
  #bridgeGame;

  constructor() {
    this.init();
  }
  init() {
    readBridgeSize((bridgeSize)=>{
      this.#bridgeGame = new BridgeGame(Number(bridgeSize));
    });
  }
}

module.exports = Controller;