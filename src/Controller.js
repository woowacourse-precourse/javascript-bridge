const BridgeGame = require("./BridgeGame");
const { readBridgeSize, readMoving } = require("./InputView");

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
  play() {
    readMoving((moving) => {
      this.#bridgeGame.move(moving);
    })
  }
}

module.exports = Controller;