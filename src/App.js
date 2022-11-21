const { Console, Random } = require("@woowacourse/mission-utils");
const { GUIDE_MESSAGE, ERROR_MESSAGE } = require("./Constant");
const outputView = require("./OutputView");
const inputView = require("./InputView");
const bridgeMaker = require("./BridgeMaker");
const bridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { vaildSizeInput } = require("./InputView");


class App {
  async play() {
    outputView.printStart();

    let size = 0;
    while(size===0) {
      try {
        size = await this.inputSize();
      } catch(e) {
        Console.print(e.message);
      }
    }

    const bridgeArr = bridgeMaker.makeBridge(size, bridgeRandomNumberGenerator.generate);

    const movingInput = await this.inputMoving(bridgeArr);
  
    const bridgeGame = new BridgeGame(bridgeArr, size);

  }

  /** 2-1. 다리 길이 입력 받아 size에 담기  */
  async inputSize() {
    let size = 0;
    await inputView.readBridgeSize()
    .then(value => {
      size = Number(value);
    }).catch(error => {
      throw error;
    });
    return size;
  }

  /**4-1. 이동할 칸 movingInput에 받기*/
   async inputMoving(bridgeArr) {
    let movingInput;
    await inputView.readMoving()
    .then(value => {
      movingInput = value;
    }).catch(error => Console.print(error.message));
    return movingInput;
  }

}

const app = new App();
app.play();

module.exports = App;
