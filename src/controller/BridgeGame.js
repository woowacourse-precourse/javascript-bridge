/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  gameCount;
  bridge;
  userBridge;
  constructor(bridge, userBridge) {
    this.gameCount = 0;
    this.bridge = bridge;
    this.userBridge = userBridge;
  }

  /**
   * 총 시도 횟수 +1만큼 증가시키는 메서드
   */
  addGameCount() {
    this.gameCount += 1;
  }

  /**
   * 다리 길이만큼 다리를 생성하는 메서드
   * @param {number} bridgeSize 다리 길이
   */
  buildBridge(bridgeSize) {
    this.bridge.setBridge(bridgeSize);
  }

  /**
   * 플레이어가 칸을 이동할 때 사용하는 메서드
   * @param {string} movement 플레이어가 이동할 칸 (U 또는 D)
   * @param {number} moveCount 플레이어가 이번 게임에서 이동한 횟수
   */
  move(movement, moveCount) {
    if (movement === this.bridge.condition[moveCount]) {
      // const result = [this.bridge.condition[moveCount], 'O'];
      this.userBridge.condition.push('O');
    } else {
      // const result = [this.bridge.condition[moveCount], 'X'];
      this.userBridge.condition.push('X');
    }
  }

  /**
   * 윗쪽과 아랫쪽 다리를 건넜는지 탐색하여 현황을 반환하는 메서드
   * @returns {string[][]} 플레이어 입력에 따른 현재 윗쪽 다리와 아랫쪽 다리 모양.
   */
  comparisonOperator() {
    let up = [];
    let down = [];
    for (let i = 0; i < this.userBridge.condition.length; i++) {
      const currentResult = this.createCurrentMap(this.bridge.condition[i], this.userBridge.condition[i]);
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
  createCurrentMap(coordinate, valid) {
    if (coordinate === 'U' && valid === 'O') return ['O', ' '];
    else if (coordinate === 'D' && valid === 'O') return [' ', 'O'];
    else if (coordinate === 'U' && valid === 'X') return [' ', 'X'];
    else if (coordinate === 'D' && valid === 'X') return ['X', ' '];
  }

  /**
   * 게임 재시작 및 종료를 위해 플레이어가 건너지 못하였는지 여부를 판단하는 메서드
   * @param {string[]} up 윗쪽 다리에서 건넌 여부를 저장한 배열
   * @param {string[]} down 아랫쪽 다리에서 건넌 여부를 저장한 배열
   * @returns {boolean} 플레이어가 건너지 못하여 X를 저장한 배열이 존재하는 경우 게임 재시작 여부 판단을 위해 참 또는 거짓을 반환한다.
   */
  checkGameSet(up, down) {
    if (up.includes('X') || down.includes('X')) return true;
    return false;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
