/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #num;
  #upList;
  #downList;

  constructor() {
    this.#num = 0;
    this.#upList = [];
    this.#downList = [];
  }
  /**
    * 사용자 입력값 - O, X 판단
    */
  isUserInputRightOrWrong(bridgeList, userUpOrDown) {
    return (bridgeList[this.#num] === userUpOrDown);
  }

/**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(bridgeList, userUpOrDown) {
    this.addResultToList(bridgeList, userUpOrDown);
    this.#num += 1;
    return [[this.#upList, this.#downList], this.#num];
  }

  addResultToList(bridgeList, userUpOrDown) {
    if(userUpOrDown === 'U') {
      this.addUserUp(bridgeList);
    }
    else if(userUpOrDown === 'D') {
      this.addUserDown(bridgeList);
    }
  }

  addUserUp(bridgeList) {
    if(bridgeList[this.#num] === 'U') {
      this.#upList.push('O');
    } 
    else {
      this.#upList.push('X');
    }
    this.#downList.push(' ');
  }

  addUserDown(bridgeList) {
    if(bridgeList[this.#num] === 'D') {
      this.#downList.push('O');
    } 
    else {
      this.#downList.push('X');
    }
    this.#upList.push(' ');
  }
 

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#num = 0;
    this.#upList = [];
    this.#downList = [];
  }
}
module.exports = BridgeGame;
