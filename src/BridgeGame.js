const outputView = require("./OutputView");
const inputView = require("./InputView");
const BridgeResult = require("./BridgeRsult");




/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridgeArr;
  #size;
  #currentBridgeIndex;
  #tryCount;
  #upBridgeReultArr;
  #downBridgeReultArr;
  #gameResult;

  constructor(bridgeArr, size) {
    this.#bridgeArr = bridgeArr;
    this.#size = size;
    this.#currentBridgeIndex = 0;
    this.#tryCount = 1;
    this.#upBridgeReultArr = [];
    this.#downBridgeReultArr = [];
  }

  async runGame() {
    while(this.#currentBridgeIndex < this.#size) {
      const result = await this.move();
      if(result === 'X') {
        await this.retry();
      }
    }
    this.#gameResult = '성공';
    outputView.printResult(this.makeBridgeResult());
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
  async move() {
    const movingInput = await inputView.inputMoving(this.#bridgeArr);

    let result = "X";
    if(this.#bridgeArr[this.#currentBridgeIndex] === movingInput) {
      result = "O";
      this.#currentBridgeIndex++;
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
    outputView.printMap(this.#upBridgeReultArr, this.#downBridgeReultArr);

    return result;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  async retry() {
    const retryInput = await inputView.inputRetry();

    if(retryInput === 'R') {
      this.#upBridgeReultArr.pop();
      this.#downBridgeReultArr.pop();
      // console.log('###up:', this.#upBridgeReultArr);
      // console.log('###dw:', this.#downBridgeReultArr);

      this.#tryCount++;
    } else if(retryInput === 'Q') {
      this.#gameResult = '실패';
      outputView.printResult(this.makeBridgeResult());
    }
    return retryInput;
  }
}

module.exports = BridgeGame;
