const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const User = require('../model/User');
const GameMap = require('../model/GameMap');

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

  getGameState() {
    return this.gameMap.isGameOver();
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    this.user.setLocation();
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    console.log('게임 오버');
  }
}

module.exports = BridgeGame;
