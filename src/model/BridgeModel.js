class BridgeModel {
  #bridge;

  constructor() {
    this.#bridge = [];
  }

  // 다리를 반환한다.
  getBridge() {
    return this.#bridge;
  }

  /**
   * 다리의 상태(모습) 을 변경한다.
   * @param newBridge [새로운 다리]
   */
  setBridge(newBridge) {
    this.#bridge = newBridge;
  }

  /**
   * 유저가 성공적으로 움직였는지 여부를 반환한다.
   * @param userMoving {string[]} [유저 움직임]
   * @return {boolean} [움직임 성공 여부]
   */
  isSuccessMoving(userMoving) {
    const indexToCompare = userMoving.length - 1;
    return this.#bridge[indexToCompare] === userMoving[indexToCompare];
  }

  /**
   * 유저가 더 움직일 수 있는 칸이 없는지 여부를 반환한다.
   * @param userMoving {string[]} [유저 움직임]
   * @return {boolean} [움직임 불가능 여부]
   */
  isFinished(userMoving) {
    return this.#bridge.length === userMoving.length;
  }
}

module.exports = BridgeModel;
