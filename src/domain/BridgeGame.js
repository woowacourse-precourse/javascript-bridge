const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const User = require('../model/User');
const GameMap = require('./GameMap');

class BridgeGame {
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

  checkGameSuccess() {
    return this.gameMap.isGameSuccess(this.getUserLocation());
  }

  getUserGameMap() {
    return this.gameMap.currentUserBridgeMap(this.getUserLocation());
  }

  getUserLocation() {
    return this.user.getLocation();
  }

  getUserTryCount() {
    return this.user.getTryCount();
  }

  getBridgeGameMap() {
    return this.gameMap.getBridgeGameMap();
  }

  checkGameOver() {
    return this.gameMap.isGameOver();
  }

  move() {
    this.user.increaseLocation();
  }

  retry() {
    this.gameMap.initBridge();
    this.gameMap.setRetryGame();
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
