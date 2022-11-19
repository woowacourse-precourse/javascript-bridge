const { ERROR } = require('../Error');
const MissionUtils = require('@woowacourse/mission-utils');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge
  #moveHistory
  #isSuccess
  #tryCount

  constructor() {
    this.#bridge = null;
    this.#moveHistory = [];
    this.#isSuccess = "실패";
    this.#tryCount = 1;
  }

  /**
   * 다리 데이터를 반환하는 메서드
   * @returns {string[]} 다리 데이터, 위로 갈수 있으면 U, 아래로 갈 수 있으면 D
   */
  getBridge() {
    return this.#bridge.getBridge();
  }

  /**
   * 다리 데이터를 재할당하는 메서드
   * @param {Bridge} bridge 다리 인스턴스
   */
  setBridge(bridge) {
    this.#bridge = bridge;
  }

  /**
   * 현재까지의 이동 경로를 반환하는 메서드
   * @returns {string[]} 이동 경로
   */
  getMoveHistory() {
    return this.#moveHistory;
  }

  /**
   * 이동 경로를 추가하는 메서드
   * @param {string} moveType 이동 타입
   */
  setMoveHistory(moveType) {
    this.#moveHistory.push(moveType);
  }

  /**
   * 게임 성공 여부를 반환하는 메서드
   * @returns {string} '성공' 혹은 '실패'
   */
  getIsSuccess() {
    return this.#isSuccess;
  }

  /**
   * 게임 성공 여부를 재할당하는 메서드
   * @param {string} type 
   */
  setIsSuccess(type) {
    this.#isSuccess = type;
  }

  /**
   * 시도 횟수를 반환하는 메서드
   * @returns {number} 시도 횟수
   */
  getTryCount() {
    return this.#tryCount;
  }

  /**
   * 시도 횟수를 재할당하는 메서드
   * @param {number} amount 
   */
  setTryCount(amount) {
    this.#tryCount = amount;
  }

  /**
 * 현재 위치를 반환하는 메서드
 * @returns {number} 현재 위치, 처음 위치는 0 이다.
 */
  getPosition() {
    return this.#moveHistory.length - 1;
  }

  /**
   * 다리의 끝 위치를 반환하는 메서드
   * @returns 
   */
  getEndPosition() {
    return this.getBridge().length - 1;
  }

  /**
   * 이동 경로 데이터로 위, 이동 진행 상황 배열을 반환하는 메서드
   * <p>
   * 이동에 성공하면 O, 실패하면 X
   * @returns {[string[], string[]]} 위 다리 이동 경로, 아래 다리 이동 경로
   */
  getUpDownHistory() {
    let upDownHistory = new Array(2).fill(0).map(() => new Array(this.#moveHistory.length).fill(" "));
    let bridge = this.#bridge.getBridge();

    for (let position = 0; position < this.#moveHistory.length; position++) {
      if (this.#moveHistory[position] === bridge[position])
        this.changeUpDownHistory(upDownHistory, position, "O");
      if (this.#moveHistory[position] !== bridge[position])
        this.changeUpDownHistory(upDownHistory, position, "X");
    }
    return [upDownHistory[0], upDownHistory[1]];
  }

  /**
   * 
   * @param {string[2][]} upDownHistory 위 다리의 이동 경로는 upDownHistory[0], 아래 다리의 이동경로는 upDownHistory[1] 
   * @param {number} position 현재 위치
   * @param {*} type 성공적으로 지났으면 O, 실패했으면 X
   */
  changeUpDownHistory(upDownHistory, position, type) {
    if (this.#moveHistory[position] === "U")
      upDownHistory[0][position] = type;
    if (this.#moveHistory[position] === "D")
      upDownHistory[1][position] = type;
  }

  /**
   * 사용자가 입력한 이동 타입 값의 유효성을 검사하는 메서드
   * @param {string} moveType 사용자가 입력한 값
   */
  validateMoveType(moveType) {
    if (moveType !== "U" && moveType !== "D")
      throw new Error(ERROR.INVALID_MOVE_TYPE);
  }

  /**
   * 사용자가 입력한 재시작 혹은 종료 타입의 값의 유효성을 검사하는 메서드
   * @param {string} command 사용자가 입력한 값
   */
  validateCommand(command) {
    if (command !== "R" && command !== "Q")
      throw new Error(ERROR.INVALID_COMMAND);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * @param {string} moveType 
   */
  move(moveType) {
    this.validateMoveType(moveType);
    this.setMoveHistory(moveType);
    this.isFailMove(this.getUpDownHistory());
  }

  /**
   * 건너는데 실패했는지 확인하는 메서드
   * @param {[string[], string[]]} 위 이동 경로, 아래 이동 경로
   */
  isFailMove([upHistory, downHistory]) {
    if ([...upHistory, ...downHistory].includes("X"))
      throw new Error(ERROR.FAIL_MOVE);
  }

  /**
   * 다리 끝까지 도달했는지 확인하는 메서드
   * @returns {boolean} 성공 시 true, 실패 시 false
   */
  isEndPosition() {
    if (this.getPosition() === this.getEndPosition()) {
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
    this.#moveHistory = [];
    this.setTryCount(this.getTryCount() + 1);
  }

  /**
   * 게임을 종료하기 위한 메서드
   */
  exit() {
    MissionUtils.Console.close();
  }
}

module.exports = BridgeGame;
