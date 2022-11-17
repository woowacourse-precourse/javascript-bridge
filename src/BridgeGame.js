const { ERROR } = require('./Messages');
const InputView = require('./InputView');
const MissionUtils = require('@woowacourse/mission-utils');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge
  #position
  #moveHistory

  constructor() {
    this.#position = -1;
    this.#bridge = null;
    this.#moveHistory = [];
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

  getUpDownHistory() {
    let upHistory = new Array(this.#position + 1).fill(" ");
    let downHistory = new Array(this.#position + 1).fill(" ");
    let bridge = this.#bridge.getBridge();

    for (let position = 0; position <= this.#position; position++)
      this.#moveHistory[position] === bridge[position]
        ? this.changeUpDownHistory(upHistory, downHistory, position, "O")
        : this.changeUpDownHistory(upHistory, downHistory, position, "X");

    return [upHistory, downHistory];
  }

  changeUpDownHistory(upHistory, downHistory, position, type) {
    if (this.#moveHistory[position] === "U")
      upHistory[position] = type;
    if (this.#moveHistory[position] === "D")
      downHistory[position] = type;
  }

  validateMoveType(moveType) {
    try {
      if (moveType !== "U" && moveType !== "D")
        throw new Error(ERROR.INVALID_MOVE_TYPE);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return false;
    }

    return true;
  }

  vaildateBridgeSize(size) {
    try {
      if (isNaN(size))
        throw new Error(ERROR.BRIDGE_SIZE_NOT_NUMBER);
      if (size < 3 || size > 20)
        throw new Error(ERROR.BRIDGE_SIZE_OUT_BOUNDARY);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return false;
    }

    return true;
  }

  validateCommand(command) {
    try {
      if (command !== "R" && command !== "Q")
        throw new Error(ERROR.INVALID_COMMAND);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return false;
    }
    return true;
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
  }

  isFailMove([upHistory, downHistory]) {
    return [...upHistory, ...downHistory].includes("X");
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#position = -1;
    this.#moveHistory = [];
  }

  exit() {
    MissionUtils.Console.close();
  }
}

module.exports = BridgeGame;
