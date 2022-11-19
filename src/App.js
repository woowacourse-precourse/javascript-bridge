const { Console, Random } = require("@woowacourse/mission-utils");
const { GUIDE_MESSAGE, ERROR_MESSAGE } = require("./Constant");
const outputView = require("./OutputView");
const inputView = require("./InputView");
const bridgeMaker = require("./BridgeMaker");
const bridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

class App {
  play() {
    outputView.printStart();
    inputView.readBridgeSize((size) => {
      if(size < 2 || size > 20) {
        throw new Error(ERROR_MESSAGE.LENGTH);
      }
      const bridgeArr = bridgeMaker.makeBridge(size, bridgeRandomNumberGenerator.generate);

      this.move();
    });
  }

  /** 4-1. 이동할 칸 입력 및 입력값 */
  move() {
    inputView.readMoving((movingInput) => {
      this.validMovingInput(movingInput);
    });
  }
  /** 4-2. 이동할 칸 입력값 유효성 및 에러시 입력 재시작 */
  validMovingInput(movingInput) {
    if(movingInput !== "U" && movingInput !== "D") {
      try {
        throw new Error(ERROR_MESSAGE.MOVE);
      } catch(e) {
        Console.print(e.message);
        this.move();
      }
    }
  }

}

const app = new App();
app.play();

module.exports = App;
