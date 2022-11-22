class BridgeGame {
  /**
   * @param {string[]} bridge 다리 모양
   * @param {boolean[]} isSuccessArray 사용자의 입력과 다리 모양 일치 여부 배열
   * @param {string} moveDirection 현재 사용자가 입력한 이동 방향
   * @return {boolean[]} 사용자가 입력한 이동방향과 다리 모양을 기반으로 현재 선택 성공/실패 여부를 반영해 반환
   */
  move(bridge, isSuccessArray, moveDirection) {
    let currLocation = isSuccessArray.length;
    if(bridge[currLocation] === moveDirection) isSuccessArray.push(true);
    if(bridge[currLocation] !== moveDirection) isSuccessArray.push(false);
    return isSuccessArray;    
  }

  /**
   * @return {boolean[]} 게임을 재시작하며 선택 기록을 초기화한다
   */
  retry() {
    return [];
  }
}

module.exports = BridgeGame;
