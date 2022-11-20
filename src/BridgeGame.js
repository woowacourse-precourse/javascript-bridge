/**
 * 다리 건너기 게임을 관리하는 클래스
 */
 class BridgeGame {
  #cumulativeCount
  #bridgeSize
  #bridgeMap
  constructor(bridgeSize, bridgeMap){
    this.#cumulativeCount = 1;
    this.#moveCount = 0;
    this.#bridgeSize = bridgeSize;
    this.#bridgeMap = bridgeMap;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    for(let moveCount=0;moveCount<this.#bridgeSize;moveCount++){
      const moving = RecallUntilCorrect.recallReadMoving(true);
      if(moving===this.#bridgeMap[moveCount]){  //움직이려고 하는 곳이 이동할 수 있는 곳이면 O표시 후 맵을 보여주고 계속진행
        
      }else{  //움직이려고 하는 곳이 이동할 수 없는 곳이면 X표시 후 맵을 보여주고 재시작 여부를 묻는다.

      }
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
