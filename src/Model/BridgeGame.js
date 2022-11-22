
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor(){
    this.gameCount = 0;
    this.upList = [];
    this.downList = [];
    this.GO = "O";
    this.STOP = "X";


  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  move(moveInput,answer) {
    if(this.gameCount === answer.length-1){
      this.ingMove(this.GO,moveInput);
      return false;
    }
    if(moveInput === answer[this.gameCount]){
      this.ingMove(this.GO,moveInput);
      this.gameCount++;
      return true;
    } 
    if(moveInput !== answer[this.gameCount]){
      this.ingMove(this.STOP,moveInput)
      return false
    } 
  }
  
  ingMove(goOrStop,moveInput){
    if(moveInput === "U"){
      this.upList.push(` ${goOrStop} `);
      this.downList.push('   ')
    }
    if(moveInput === "D"){
      this.downList.push(` ${goOrStop} `);
      this.upList.push('   ')
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
