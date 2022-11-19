const InputView = require("../GameIO/InputView");
const Bridge = require("./Bridge.js");
const BridgeGame = require("../Controller/BridgeGame");

class Game {
  #bridge;
  #playCount;
  #bridgeLength;
  #bridgeStatus;
  constructor() {
    this.setPlayCount();
    this.initializeBridgeLength();
    this.#bridge = new Bridge(bridgeLength);
    this.#bridgeStatus = this.#bridge.getBridgeStatus;
    this.bridgeGame = new BridgeGame(this.#bridgeStatus);
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

  gameAlgorithms() {
    // 이미 게임이 시작되어 bridge 객체가 만들어짐
    const BRIDGE_LENGTH = this.#bridgeLength;
    for (let moveCount = 0; moveCount < BRIDGE_LENGTH; moveCount++) {
      const NEXT_DIRECTION = InputView.readMoving();
      if (this.bridgeGame.move(NEXT_DIRECTION)) {
        break; //
      }
    }
  }

  gameStartPoint() {
    const bridgeLength = this.#bridgeLength;
    this.createBridge(bridgeLength);
  }
}

module.exports = Game;
