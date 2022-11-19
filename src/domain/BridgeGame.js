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
    const createGameMap = makeBridge(size, generate);
    this.setupGameMap(createGameMap);
  }

  setupGameMap(gameMap) {
    this.gameMap.setCorretBridge(gameMap);
    console.log(this.gameMap.getCorretBridge(), '\n'); // 게임 맵 디버깅용
  }

  drawBridgeMap(moveCommand) {
    return this.gameMap.drawBridge(moveCommand, this.getUserLocation());
  }

  getUserLocation() {
    return this.user.getLocation();
  }

  getUserTryCount() {
    return this.user.getTryCount();
  }

  getCorrectGameMap() {
    return this.gameMap.getCorretGameMap();
  }

  getGameState() {
    return this.gameMap.isGameOver();
  }

  move() {
    this.user.setLocation();
  }

  retry() {
    this.setupRetryGame();
  }

  setupRetryGame() {
    // 리트라이 할 때 세팅 다시하는 곳
    this.gameMap.setPrevBridge();
    this.gameMap.setRetryGame();
    this.increaseTryCount();
    this.decreaseUserLocation();
  }

  increaseTryCount() {
    this.user.increaseCount();
  }
  decreaseUserLocation() {
    this.user.decreaseLocation();
  }
}

module.exports = BridgeGame;
