const InputView = require("../Bridge.Input/InputView");
const BridgeGame = require("./BridgeGame");
const Player = require("./Player");

class BridgeInteractPlayer {
  #player;
  #bridgeGame;

  constructor() {
    this.#player = new Player();
  }

  playerInputBridgeSize(size) {
    this.#bridgeGame = new BridgeGame(size);
    this.#bridgeGame.start();
    InputView.readMoving(this.playerInputBridgeDirection);
  }

  playerInputBridgeDirection(direction) {
    console.log(direction);
  }

  playerInputCommandBridgeRetry() {}
}

const bi = new BridgeInteractPlayer();
//start
InputView.readBridgeSize(bi.playerInputBridgeSize.bind(bi));

module.exports = BridgeInteractPlayer;
