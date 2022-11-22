/**
 * 다리 건너기 게임을 관리하는 클래스
 */

const UserBridge = require('../model/UserBridge');
const { USER_MOVEMENT, VALID_MOVEMENT } = require('../constants/game.constants');
const { GAME_RESULT } = require('../constants/message.constants');

class BridgeGame {
  // gameCount: 총 게임 시도 횟수를 저장할 변수
  gameCount;
  // moveCount: 총 이동 횟수를 저장할 변수
  moveCount;
  // bridge: 생성된 다리를 저장하는 객체
  bridge;
  // userBridge: 플레이어의 다리 위 이동 경로를 저장하는 객체
  userBridge;
  // failOrSuccess: 플레이어의 현재 게임 성공 여부를 저장하는 변수
  failOrSuccess;

  constructor(bridge) {
    this.gameCount = 0;
    this.moveCount = 0;
    this.bridge = bridge;
    this.userBridge = new UserBridge();
    this.failOrSuccess = false;
  }

  // 총 시도 횟수 +1만큼 증가시키는 메서드
  addGameCount() {
    this.gameCount += 1;
  }

  /**
   * 다리 길이만큼 다리를 생성하는 메서드
   * @param {number} bridgeSize 다리 길이
   */
  buildBridge(bridgeSize) {
    this.addGameCount();
    this.bridge.setBridge(bridgeSize);
  }

  /**
   * 플레이어가 칸을 이동할 때 사용하는 메서드
   * @param {string} movement 플레이어가 이동할 칸 (U 또는 D)
   */
  move(movement) {
    if (movement === this.bridge.condition[this.moveCount]) {
      this.userBridge.addMovement(VALID_MOVEMENT.SUCCESS);
    } else {
      this.userBridge.addMovement(VALID_MOVEMENT.FAIL);
    }
    this.addMoveCount();
  }

  // 플레이어의 총 이동 횟수를 +1만큼 증가시키는 메서드
  addMoveCount() {
    this.moveCount += 1;
  }

  /**
   * 윗쪽과 아랫쪽 다리를 건넜는지 탐색하여 현황을 반환하는 메서드
   * @returns {string[][]} 플레이어 입력에 따른 현재 윗쪽 다리와 아랫쪽 다리 모양.
   */
  comparisonOperator() {
    let up = [];
    let down = [];
    for (let i = 0; i < this.userBridge.condition.length; i++) {
      const currentResult = this.getCurrentMap(this.bridge.condition[i], this.userBridge.condition[i]);
      up.push(currentResult[0]);
      down.push(currentResult[1]);
    }
    return [up, down];
  }

  /**
   * 현재 위치의 다리 칸에서 건넌 여부를 반환한다.
   * @param {string} coordinate 생성된 다리 모양의 현재 탐색 칸의 좌표. U 또는 D가 저장돼있다.
   * @param {string} valid 생성된 다리에서 플레이어가 건넜는지에 대한 여부. O 또는 X가 저장돼있다.
   * @returns 해당 다리 칸을 건넜는지에 대한 여부를 다리 모양에 맞게 배열로 반환한다.
   */
  getCurrentMap(coordinate, valid) {
    if (coordinate === USER_MOVEMENT.UP && valid === VALID_MOVEMENT.SUCCESS)
      return [VALID_MOVEMENT.SUCCESS, VALID_MOVEMENT.VACANT];
    else if (coordinate === USER_MOVEMENT.DOWN && valid === VALID_MOVEMENT.SUCCESS)
      return [VALID_MOVEMENT.VACANT, VALID_MOVEMENT.SUCCESS];
    else if (coordinate === USER_MOVEMENT.UP && valid === VALID_MOVEMENT.FAIL)
      return [VALID_MOVEMENT.VACANT, VALID_MOVEMENT.FAIL];
    else if (coordinate === USER_MOVEMENT.DOWN && valid === VALID_MOVEMENT.FAIL)
      return [VALID_MOVEMENT.FAIL, VALID_MOVEMENT.VACANT];
  }

  /**
   * 게임 재시작 및 종료를 위해 플레이어가 건너지 못하였는지 여부를 판단하는 메서드
   * @param {string[][]} currentMap 현재 플레이어가 건넌 다리 상황을 저장한 [윗쪽 다리, 아랫쪽 다리] 배열
   * @returns {boolean} 플레이어가 건넌 여부에 따라 게임 재시작 및 종료 여부 판단을 위해 참 또는 거짓을 반환한다.
   */
  checkGameSet(currentMap) {
    const up = currentMap[0];
    const down = currentMap[1];
    if (up.includes(VALID_MOVEMENT.FAIL) || down.includes(VALID_MOVEMENT.FAIL)) return true;
    else if (this.userBridge.condition.length === this.bridge.condition.length) {
      this.failOrSuccess = true;
      return true;
    }
    return false;
  }

  // 사용자가 게임을 다시 시도할 때 사용하는 메서드로 사용자 입력에 따른 현재 다리 모양을 초기화한다.
  retry() {
    this.addGameCount();
    this.moveCount = 0;
    this.userBridge.refreshCondition();
  }

  /**
   * 성공 및 실패를 메시지를 전달하는 메서드
   * @returns {string} failOrSuccess 값에 따라 성공 및 실패 메시지를 반환한다.
   */
  getGameResult() {
    let gameResult;
    if (this.failOrSuccess) {
      gameResult = GAME_RESULT.SUCCESS;
    } else {
      gameResult = GAME_RESULT.FAIL;
    }
    return gameResult;
  }
}

module.exports = BridgeGame;
