const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const User = require('../model/User');
const GameMap = require('../model/GameMap');
const BridgeMapPainter = require('./BridgeMapPainter');

class BridgeGame {
  #isGameOver = false;

  constructor() {
    this.user = new User();
    this.gameMap = new GameMap();
    this.bridgeMapPainter = new BridgeMapPainter();
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
    return this.bridgeMapPainter.drawOX(moveCommand, this.getUserLocation(), this.getGameMap());
  }

  checkGameStatus() {
    if (this.#isGameOver) {
      return true;
    }
    return false;
  }

  isSuccess() {
    if (!this.bridgeMapPainter.isCorrectLocation()) {
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
    return this.bridgeMapPainter.getUserBridgeMap(this.getUserLocation());
  }

  getUserLocation() {
    return this.user.getLocation();
  }

  getUserTryCount() {
    return this.user.getTryCount();
  }

  getGameMap() {
    return this.gameMap.getGameMap();
  }

  move() {
    this.user.increaseLocation();
  }

  retry() {
    this.#isGameOver = false;
    this.bridgeMapPainter.initBridge();
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
