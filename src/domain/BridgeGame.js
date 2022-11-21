const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const User = require('../model/User');
const GameMap = require('./GameMap');

class BridgeGame {
  #isGameOver = false;

  constructor() {
    this.user = new User();
    this.gameMap = new GameMap();
  }

  makeBridgeMap(size) {
    const { makeBridge } = BridgeMaker;
    const { generate } = BridgeRandomNumberGenerator;
    return makeBridge(size, generate);
  }

  setupGameMap(size) {
    const bridgeGameMap = this.makeBridgeMap(size);
    this.gameMap.setBridgeGameMap(bridgeGameMap);
  }

  drawBridgeMap(moveCommand) {
    return this.gameMap.drawOX(moveCommand, this.getUserLocation());
  }

  checkGameStatus() {
    if (this.#isGameOver) {
      return true;
    }
    return false;
  }

  isSuccess() {
    if (!this.gameMap.isCorrectLocation()) {
      this.changeStateIntoFailure();
      return false;
    }
    return this.checkGameArrived();
  }

  changeStateIntoFailure() {
    this.#isGameOver = true;
  }

  checkGameArrived() {
    if (this.isArrival()) {
      return true;
    }
    return false;
  }

  isArrival() {
    return this.user.isSameLocation(this.gameMap.getMapLength());
  }

  getUserBridgeMap() {
    return this.gameMap.getUserBridgeMap(this.getUserLocation());
  }

  getUserLocation() {
    return this.user.getLocation();
  }

  getUserTryCount() {
    return this.user.getTryCount();
  }

  move() {
    this.user.increaseLocation();
  }

  retry() {
    this.#isGameOver = false;
    this.gameMap.initBridge();
    this.#increaseTryCount();
    this.#initUserLocation();
  }

  #increaseTryCount() {
    this.user.increaseCount();
  }

  #initUserLocation() {
    this.user.initLocation();
  }
}

module.exports = BridgeGame;
