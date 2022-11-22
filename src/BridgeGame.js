const BridgeCompare = require('./BridgeCompare');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor(SIZE, BridgeStatus){
    this.SIZE = SIZE;
    this.BridgeStatus = BridgeStatus; 
    this.gameResult = false;
    this.BridgeIndex = 0;
    this.BridgeResultArray = [[], []];
    this.count = 1;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(userInput){
    const NowBridgeValue = this.BridgeStatus[this.BridgeIndex];
    const CompareResult = BridgeCompare.isSameBridge(userInput, NowBridgeValue);
    this.BridgeResultArray = BridgeCompare.makeBridgeResultArray(userInput, CompareResult, this.BridgeResultArray);
    this.BridgeIndex += 1; 
    if(CompareResult && BridgeCompare.isCompleteBridge(this.SIZE, this.BridgeIndex)){
      this.gameResult = true;
      return "종료";
    }  
    if(!CompareResult) return "재시작";
    return "재귀";
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.BridgeResultArray = [[], []];
    this.BridgeIndex = 0;
    this.count += 1;
  }
}

module.exports = BridgeGame;
