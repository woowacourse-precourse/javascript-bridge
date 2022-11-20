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
    console.log(this.gameMap.getBridgeGameMap(), '\n'); // 게임 맵 디버깅용
  }

  drawBridgeMap(moveCommand) {
    return this.gameMap.drawOX(moveCommand, this.getUserLocation());
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
    this.setupRetryGame();
  }

  setupRetryGame() {
    this.gameMap.initBridge();
    this.gameMap.setRetryGame();
    this.increaseTryCount();
    this.initUserLocation();
  }

  checkGameSuccess() {
    return this.gameMap.isGameSuccess(this.getUserLocation());
  }

  increaseTryCount() {
    this.user.increaseCount();
  }

  initUserLocation() {
    this.user.initLocation();
  }

  getUserGameMap() {
    return this.gameMap.currentUserBridgeMap(this.getUserLocation());
  }
}

module.exports = BridgeGame;
