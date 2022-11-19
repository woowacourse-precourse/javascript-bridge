const InputView = require("../GameIO/InputView");
const Bridge = require("./Bridge.js");
const BridgeGame = require("../Controller/BridgeGame");

class Game {
  #bridge;
  #playCount;
  #bridgeLength;
  constructor() {
    this.setPlayCount();
    this.initializeBridgeLength();
    this.bridgeGame = new BridgeGame();
  }

  initializeBridgeLength() {
    const BRIDGE_LENGTH = InputView.readBridgeSize();
    this.#bridgeLength = BRIDGE_LENGTH;
  }

  setPlayCount() {
    this.#playCount = 0;
  }

  getPlayCount() {
    return this.#playCount;
  }

  increasePlayCount() {
    this.#playCount += 1;
  }

  createBridge(bridgeLength) {
    this.#bridge = new Bridge(bridgeLength);
  }

  gameAlgorithms() {
    // 이미 게임이 시작되어 bridge 객체가 만들어짐
    const BRIDGE_LENGTH = this.#bridge.getBridgeLength();
    for (let moveCount = 0; moveCount < BRIDGE_LENGTH; moveCount++) {
      InputView.readMoving();
    }
  }

  gameStartPoint() {
    const bridgeLength = this.#Bridge.getBridgeLength();
    this.createBridge(bridgeLength);
  }
}

module.exports = Game;
