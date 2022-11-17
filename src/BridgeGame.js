/**
 * 다리 건너기 게임을 관리하는 클래스
 */
 const attemptCount = 0;
 class BridgeGame {
  constructor(){
    this.userPickedArr = [];
    this.userPickedUpOrDown = [[], []];
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(createBridge, selectUpOrDown) {
    this.userPickedArr.push(selectUpOrDown);
    const compareLength = this.userPickedArr.length - 1;
    this.moveIsCorrect(createBridge[compareLength], this.userPickedArr[compareLength]);
    this.moveIsWrong(createBridge[compareLength], this.userPickedArr[compareLength]);
  }

  moveIsCorrect(createBridge, selectUpOrDown){
    if(createBridge == selectUpOrDown && selectUpOrDown == "U"){
      this.userPickedUpOrDown[0].push(" O ");
      this.userPickedUpOrDown[1].push(" ");
    }
    if(createBridge == selectUpOrDown && selectUpOrDown == "D"){
      this.userPickedUpOrDown[0].push(" ");
      this.userPickedUpOrDown[1].push(" O ")
    }
  }

  moveIsWrong(createBridge, selectUpOrDown){
    if(createBridge !== selectUpOrDown && selectUpOrDown == "U"){
      this.userPickedUpOrDown[0].push(" X ");
      this.userPickedUpOrDown[1].push(" ");
    }
    if(createBridge !== selectUpOrDown && selectUpOrDown == "D"){
      this.userPickedUpOrDown[0].push(" ");
      this.userPickedUpOrDown[1].push(" X ");
    }  
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
      attemptCount += 1;
    }
  }

module.exports = BridgeGame;