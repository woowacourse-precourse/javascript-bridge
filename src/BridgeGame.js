const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");
const Bridge = require("./domain/Bridge");
const { MOVE_VALUE } = require("./constants/index");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #round;
  #up;
  #down;

  constructor() {
    this.#round = 0;
    this.#up = [];
    this.#down = [];
  }

  /**
   * 다리를 만들 때 사용하는 메서드
   * <p>
   */
  createBridge(length) {
    this.#bridge = new Bridge(
      length,
      BridgeMaker.makeBridge(length, BridgeRandomNumberGenerator.generate)
    );
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    let gameStatus = [...this.getGameStatus(), this.#up, this.#down];
    this.#round += 1;
    return gameStatus;
  }

  /**
   * 게임에서 다리의 지도, 현재 라운드를 리턴하는 메서드
   * <p>
   */
  getGameStatus() {
    return [this.#bridge.getMap(), this.#round];
  }

  /**
   * 지도에 그려질 위쪽 방향의 목록을 더하는 메서드
   * <p>
   */
  addUp() {
    this.#up.push(MOVE_VALUE.UP);
    this.#down.push(" ");
  }

  /**
   * 지도에 그려질 아래쪽 방향의 목록을 더하는 메서드
   * <p>
   */
  addDown() {
    this.#down.push(MOVE_VALUE.DOWN);
    this.#up.push(" ");
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
