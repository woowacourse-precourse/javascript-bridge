/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #playerUp;
  #playerDown;
  #playerMoveResult;
  #indexValue;
  #totalTryNumber;

  constructor(bridge){
    this.#bridge=bridge;
    this.#playerDown = [];
    this.#playerUp = [];
    this.#totalTryNumber=1;
    }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(playerMoveList, bridgeSize) {
    this.initialization();
    playerMoveList.map((move)=>{
      this.moveCompareUpDown(move)
      this.#indexValue++;
    })
    this.#playerMoveResult=this.makeMoveResult()
    return this.#playerMoveResult
  }

  initialization(){
    this.#playerDown = [];
    this.#playerUp = [];
    this.#indexValue=0;
  }

  makeMoveResult(){
    return "[ "+this.#playerUp.join(' | ')+" ]\n"+"[ "+this.#playerDown.join(' | ')+" ]"
  }

  moveCompareUpDown(move){
    if(move==='U'){
      this.moveUp(move);
    }
    if(move==='D'){
      this.moveDown(move);
    }
  }

  moveUp(move){
    if(this.#bridge[this.#indexValue] === move) this.#playerUp.push('O')
    else this.#playerUp.push('X');
    this.#playerDown.push(" ");
  }

  moveDown(move){
    if(this.#bridge[this.#indexValue] === move) this.#playerDown.push('O')
    else this.#playerDown.push('X');
    this.#playerUp.push(" ");
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#totalTryNumber++;
  }

  getTotalTry(){
    return this.#totalTryNumber
  }
}

module.exports = BridgeGame;