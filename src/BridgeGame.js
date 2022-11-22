const BridgeResult = require("./BridgeRsult");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #upBridgeReultArr;
  #downBridgeReultArr;
  #gameResult;
  #tryCount;

  constructor() {
    this.#tryCount = 1;
    this.#upBridgeReultArr = [];
    this.#downBridgeReultArr = [];
  }

  get upBridgeReultArr() {
    return this.#upBridgeReultArr;
  }

  get downBridgeReultArr() {
    return this.#downBridgeReultArr;
  }

  set gameResult(gameResult) {
    this.#gameResult = gameResult;
  }

  makeBridgeResult() {
    return new BridgeResult(this.#upBridgeReultArr, this.#downBridgeReultArr,this.#gameResult, this.#tryCount);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  /** 5. 사용자 입력값 대비 건널 수 있는지 여부 비교해서 배열에 결과 값 넣어주기 */
  move(currentBridge, movingInput) {
    let result = "X";
    if(currentBridge === movingInput) {
      result = "O";
    }

    switch(movingInput) {
      case 'U':
        this.#upBridgeReultArr.push(result);
        this.#downBridgeReultArr.push(' ');
        break;
      case 'D':
        this.#downBridgeReultArr.push(result);
        this.#upBridgeReultArr.push(' ');
        break;
    }
    return result;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(input) {
    if(input === 'R') {
      this.#upBridgeReultArr.pop();
      this.#downBridgeReultArr.pop();
      this.#tryCount++;
      return true;
    } else if(input === 'Q') {
      this.#gameResult = '실패';
    }
    return false;
  }

  
}

module.exports = BridgeGame;