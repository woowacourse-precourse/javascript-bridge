const { Console } = require("@woowacourse/mission-utils");
const { ERROR_MESSAGE } = require("./Constant");
const outputView = require("./OutputView");
const inputView = require("./InputView");
const bridgeMaker = require("./BridgeMaker");
const bridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");

class App {
  #bridgeGame;
  #bridgeArr;
  #currentBridgeIndex;
  #size;

  constructor() {
    this.#currentBridgeIndex = 0;
    this.#bridgeGame = new BridgeGame();
  }

  play() {
    outputView.printStart();
    this.startGame();
  }

  /** 2~3. 다리 길이 입력 및 길이 만큼 생성(유효성 검사) */
  startGame() {
    inputView.readBridgeSize((size) => {
      try {
        this.vaildSizeInput(size);
        this.#size = Number(size);
        this.#bridgeArr = bridgeMaker.makeBridge(this.#size, bridgeRandomNumberGenerator.generate);
        this.repeatMovingInput();
      } catch(e) {
        Console.print(e.message);
        this.startGame();
      }
    });
  }

  /** 4~5 이동할 칸 입력 및 사용자 입력값과 답 비교한 결과 출력 */
  repeatMovingInput() {
    inputView.readMoving((input) => {
      try { 
        this.validMovingInput(input);
        this.handleResultOfMoving(input);
      } catch(e) {
        Console.print(e.message);
        this.repeatMovingInput();
      }
    })
  }

  /** 입력받은 이동할 칸의 결과를 넣어주는 기능 */
   handleResultOfMoving(input) {
    const movingResult = this.#bridgeGame.move(this.#bridgeArr[this.#currentBridgeIndex], input);
    outputView.printMap(this.#bridgeGame.upBridgeReultArr, this.#bridgeGame.downBridgeReultArr);
    if(movingResult === 'O') {
      this.successProgress();
    } else if (movingResult === 'X') {
      this.retry();
    }
  }

  /** 게임완료까지 이동할 칸 받는 기능 */
  successProgress() {
    this.#currentBridgeIndex++;
    if (this.#currentBridgeIndex === this.#size) {
      this.#bridgeGame.gameResult = '성공';
      outputView.printResult(this.#bridgeGame.makeBridgeResult());
      return;
    } else if (this.#currentBridgeIndex < this.#size) {
      this.repeatMovingInput();
    }
  }
 

  /** 8. X가 나올 경우 재시작 여부 묻기 */
  retry() {
    inputView.readGameCommand((input) => {
      try {
        this.validRetryInput(input);
        const retryResult = this.#bridgeGame.retry(input);
        this.handleRetryResult(retryResult);
      } catch(e) {
        Console.print(e.message);
        this.retry();
      }
    })
  }

  /** retry 값이 ture이면 재시작, false이면 종료*/
  handleRetryResult(retryResult) {
    if(retryResult) {
      this.repeatMovingInput();
    } else {
      outputView.printResult(this.#bridgeGame.makeBridgeResult());
    }
  }


  /** 2-2. 다리 길이 입력값 유효성 및 에러시 입력 재시작 */
  vaildSizeInput(input) {
    if (isNaN(input)) {
      throw new Error(ERROR_MESSAGE.LENGTH);
    }
    if(Number(input) < 2 || Number(input) > 20) {
      throw new Error(ERROR_MESSAGE.LENGTH);
    }
    return true;
  }

  /** 4-2. 이동할 칸 입력값 유효성 및 에러시 입력 재시작 */
  validMovingInput(input) {
    if(input !== "U" && input !== "D") {
      return false;
    }
    return true;
  }

   /** 8-2. reTry 입력값 유효성 및 에러시 입력 재시작 */
   validRetryInput(input) {
    if(input !== "R" && input !== "Q") {
      throw new Error(ERROR_MESSAGE.RE_TRY);
    }
    return true;
  }

}

const app = new App();
app.play();

module.exports = App;
