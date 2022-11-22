const { Console, Random } = require("@woowacourse/mission-utils");
const { GUIDE_MESSAGE, ERROR_MESSAGE } = require("./Constant");
const outputView = require("./OutputView");
const inputView = require("./InputView");
const bridgeMaker = require("./BridgeMaker");
const bridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { vaildSizeInput } = require("./InputView");
const BridgeGame = require("./BridgeGame");



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
    console.log('###bridgeArr:', bridgeArr);


    // const movingInput = await inputView.inputMoving(bridgeArr);
    // console.log('###movingInput:', movingInput);

  
    const bridgeGame = new BridgeGame(bridgeArr, size);
    bridgeGame.move();

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

}

const app = new App();
app.play();

module.exports = App;