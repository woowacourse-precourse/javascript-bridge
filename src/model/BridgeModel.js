class BridgeModel {
  #bridge;

  constructor() {
    this.#bridge = [];
  }

  /**
   * 다리의 상태(모습) 을 변경한다.
   * @param newBridge {string[]} [새로운 다리]
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

  /**
   * 현재까지의 유저의 움직임 성공유무들을 반환한다.
   * @param userMoving {string[]} [유저 움직임]
   * @return {boolean[]} [성공유무]
   */
  getMovingRecords(userMoving) {
    const movingRecords = [];
    for (let index = 0; index < userMoving.length; index++) {
      movingRecords.push(userMoving[index] === this.#bridge[index]);
    }

    return movingRecords;
  }

  /**
   * 각 움직임에 대해 성공여부를 참고하여 사인을 반환한다.
   * @param userMoving {string[]} [유저 이동 기록]
   * @param index {number} [움직임 순서]
   * @param type {string} [up / down 기준]
   * @return {string} [성공여부에 대한 사인]
   */
  getSignFromMove(userMoving, index, type) {
    // up 다리인지, down 다리인지 type 을 통해 판별한다.
    const standard = type === "up" ? "U" : "D";
    const movingRecords = this.getMovingRecords(userMoving);

    if (userMoving[index] === standard && movingRecords[index]) return "O";
    if (userMoving[index] === standard && !movingRecords[index]) return "X";
    return " ";
  }

  /**
   * 유저 이동 기록과 다리를 대조하여 다리별 움직임에 대한 성공여부를 반환한다.
   * @param userMoving {string[]} [유저 이동 기록]
   * @return {{up: string[], down: string[]}} [다리별 움직임 성공여부]
   */
  getMovingStatus(userMoving) {
    const movingStatus = { up: [], down: [] };
    for (let index = 0; index < userMoving.length; index++) {
      movingStatus.up.push(this.getSignFromMove(userMoving, index, "up"));
      movingStatus.down.push(this.getSignFromMove(userMoving, index, "down"));
    }
    return movingStatus;
  }
}

module.exports = BridgeModel;
