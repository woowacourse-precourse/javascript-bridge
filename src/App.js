const { Console } = require("@woowacourse/mission-utils");
const { GUIDE_MESSAGE, ERROR_MESSAGE } = require("./Constant");
const outputView = require("./OutputView");
const inputView = require("./InputView");
const bridgeMaker = require("./BridgeMaker");
const bridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");

class App {
  #bridgeGame;
  #bridgeArr;
  #currentBridgeIndex;
  #gameResult;
  #size;
  #moveCount;

  constructor() {
    this.#currentBridgeIndex = 0;
    this.#moveCount = 0;
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
        this.#size = size;

        console.log('### size ', this.#size);
        this.#bridgeArr = bridgeMaker.makeBridge(this.#size, bridgeRandomNumberGenerator.generate);
        console.log('#### ', this.#bridgeArr);

      } catch(e) {
        Console.print(e.message);
        this.startGame();
      }
    });
  }

  /** 8. 다리 선택 실패시 재시작 기능 */
  inputRetry() {
    const retryInput = inputView.inputRetry();
    const retryResult = this.#bridgeGame.retry(retryInput);
    if(retryResult === 'Q') {
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

}

const app = new App();
app.play();

module.exports = App;
