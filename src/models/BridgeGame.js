const Bridge = require('./Bridge');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const BridgeGameStatus = require('./BridgeGameStatus');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;

  #status;

  start() {
    this.#status = new BridgeGameStatus();
    this.#status.increaseTryCount();
  }

  setBridge(sizeCommand) {
    const size = sizeCommand.getSizeNumber();
    const bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.#bridge = new Bridge(bridge);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(movingCommand) {
    this.#status.increaseLocation();
    this.#bridge.addMap(movingCommand, this.#status.getLocation());

    return this.#bridge.current(this.#status.getLocation());
  }

  getMap() {
    return this.#bridge.getMap();
  }

  isWin(isCrossed) {
    return this.#bridge.isLastLocation(this.#status.getLocation()) && isCrossed;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#bridge.resetMap();
    this.#status.resetLocation();
    this.#status.increaseTryCount();
  }

  quit(isCrossed) {
    const bridgeMap = this.getMap();
    const isWin = this.isWin(isCrossed);
    const tryCount = this.#status.getTryCount();

    return { bridgeMap, isWin, tryCount };
  }
}

module.exports = BridgeGame;
