/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #userInputArray
  #bridgeInfoArray
  #tries

  constructor(userIunputArray, bridgeInfoArray, tries){
    this.#userInputArray = userIunputArray;
    this.#bridgeInfoArray = bridgeInfoArray;
    this.#tries = tries;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moveInput) {
    if(moveInput === 'U'){
      this.#userInputArray.push(1);
    }
    if(moveInput === 'D'){
      this.#userInputArray.push(0);
    }
  }

  getUserInputArray() {
    return this.#userInputArray;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#userInputArray = [];
  }
  
  countTries(){
    this.#tries += 1;
  }

  getTryCount(){
    return this.#tries;
  }

  getGameResult(){
    const INDEX = this.getUserInputArray().length - 1;
    if (this.#userInputArray[INDEX] === this.#bridgeInfoArray[INDEX]){
      return this.isUserWin();
    }
    if (this.#userInputArray[INDEX] !== this.#bridgeInfoArray[INDEX]){
      return this.isUserLose();
    }
  }

  isUserWin(){
    return true;
  }

  isUserLose(){
    return false;
  } 
}

module.exports = BridgeGame;
