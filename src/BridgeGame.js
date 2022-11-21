/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #playerUp;
  #playerDown;
  #playerMoveResult;
  #i;
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
  move(playerMoveList) {
    this.#playerDown = [];
    this.#playerUp = [];
    this.#i=0;
    playerMoveList.map((move)=>{
      this.moveCompareUpDown(move)
      this.#i++;
    })
    this.#playerMoveResult="[ "+this.#playerUp.join(' | ')+" ]\n"+"[ "+this.#playerDown.join(' | ')+" ]";
    return this.#playerMoveResult
  }

  moveCompareUpDown(move){
    if(move==='U'){
      this.#bridge[this.#i] === move ? this.#playerUp.push('O') : this.#playerUp.push('X');
      this.#playerDown.push(" ");
    }else if(move==='D'){
      this.#bridge[this.#i] === move ? this.#playerDown.push('O') : this.#playerDown.push('X');
      this.#playerUp.push(" ");
    }
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
