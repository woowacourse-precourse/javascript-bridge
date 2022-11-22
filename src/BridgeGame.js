const GameManager = require('./GameManager');
const gameManager = new GameManager();
const Bridge = require('./Bridge');
const bridge = new Bridge();
const { GAME, RESULT } = require('./constants/constants');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  start() {
    gameManager.askBridgeSize(this.makeBridge);
  }

  makeBridge(size) {
    bridge.make(size);
    gameManager.askWhereToGo(BridgeGame.move);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  static move(userPosition) {
    if (BridgeGame.isBridgeLeft()) {
      return BridgeGame.keepGoing(userPosition);
    }
    return BridgeGame.stopGoing(userPosition);
  }

  static isBridgeLeft() {
    return bridge.isBridgeLeft();
  }

  static keepGoing(userPosition) {
    if (BridgeGame.isUserCanGo(userPosition)) {
      bridge.drawNowMap(GAME.GO);
      return gameManager.askWhereToGo(BridgeGame.move);
    }
    bridge.drawNowMap(GAME.FALL);
    return gameManager.askRetry(BridgeGame.retry);
  }

  static stopGoing(userPosition) {
    if (BridgeGame.isUserCanGo(userPosition)) {
      bridge.drawNowMap(GAME.GO);
      return bridge.drawResultMap(GAME.GO, RESULT.SUCCESS);
    }
    bridge.drawNowMap(GAME.FALL);
    return gameManager.askRetry(BridgeGame.retry);
  }

  static isUserCanGo(userPosition) {
    return bridge.askUserCanGo(userPosition);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  static retry(answer) {
    if (answer === GAME.QUIT) {
      bridge.drawResultMap(GAME.FALL, RESULT.FAIL);
    }
    if (answer === GAME.RETRY) {
      bridge.resetStep();
      bridge.addRetrys();
      gameManager.askWhereToGo(BridgeGame.move);
    }
  }
}

module.exports = BridgeGame;
