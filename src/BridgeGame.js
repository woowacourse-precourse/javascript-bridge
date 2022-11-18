const { ERROR } = require('./Messages');
const MissionUtils = require('@woowacourse/mission-utils');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge
  #position
  #moveHistory
  #isSuccess
  #tryCount

  constructor() {
    this.#position = -1;
    this.#bridge = null;
    this.#moveHistory = [];
    this.#isSuccess = "실패";
    this.#tryCount = 1;
  }

  getBridge() {
    return this.#bridge.getBridge();
  }

  setBridge(bridge) {
    this.#bridge = bridge;
  }

  getPosition() {
    return this.#position;
  }

  setPosition(amount) {
    this.#position += amount;
  }

  getMoveHistory() {
    return this.#moveHistory;
  }

  setMoveHistory(moveType) {
    this.#moveHistory.push(moveType);
  }

  getIsSuccess() {
    return this.#isSuccess;
  }

  setIsSuccess(type) {
    this.#isSuccess = type;
  }

  getTryCount() {
    return this.#tryCount;
  }

  setTryCount(amount) {
    this.#tryCount = amount;
  }

  getUpDownHistory() {
    let [upHistory, downHistory] = new Array(2).fill(0).map(() => new Array(this.#position + 1).fill(" "));
    let bridge = this.#bridge.getBridge();

    for (let position = 0; position <= this.#position; position++) {
      if (this.#moveHistory[position] === bridge[position])
        this.changeUpDownHistory(upHistory, downHistory, position, "O");
      if (this.#moveHistory[position] !== bridge[position])
        this.changeUpDownHistory(upHistory, downHistory, position, "X");
    }
    return [upHistory, downHistory];
  }

  changeUpDownHistory(upHistory, downHistory, position, type) {
    if (this.#moveHistory[position] === "U")
      upHistory[position] = type;
    if (this.#moveHistory[position] === "D")
      downHistory[position] = type;
  }

  validateMoveType(moveType) {
    if (moveType !== "U" && moveType !== "D")
      throw new Error(ERROR.INVALID_MOVE_TYPE);

  }

  validateCommand(command) {
    if (command !== "R" && command !== "Q")
      throw new Error(ERROR.INVALID_COMMAND);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moveType) {
    this.validateMoveType(moveType);
    this.setPosition(1);
    this.setMoveHistory(moveType);
    this.isFailMove(this.getUpDownHistory());
  }

  isFailMove([upHistory, downHistory]) {
    if ([...upHistory, ...downHistory].includes("X"))
      throw new Error(ERROR.FAIL_MOVE);
  }

  isEndPosition() {
    let maxPosition = this.getBridge().length - 1;
    let position = this.getPosition();

    if (maxPosition === position) {
      this.setIsSuccess("성공");
      return true;
    }
    return false;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#position = -1;
    this.#moveHistory = [];
    this.setTryCount(this.getTryCount() + 1);
  }

  exit() {
    MissionUtils.Console.close();
  }
}

module.exports = BridgeGame;
