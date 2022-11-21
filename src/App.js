const { Console, Random } = require("@woowacourse/mission-utils");
const { GUIDE_MESSAGE, ERROR_MESSAGE } = require("./Constant");
const outputView = require("./OutputView");
const inputView = require("./InputView");
const bridgeMaker = require("./BridgeMaker");
const bridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { vaildSizeInput } = require("./InputView");
const BridgeGame = require("./BridgeGame");
// const bridgeGame = require("./BridgeGame");

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


    const movingInput = await this.inputMoving(bridgeArr);
    console.log('###movingInput:', movingInput);
  

    const bridgeGame = new BridgeGame(bridgeArr, size);
    const comparisonResult = bridgeGame.move(movingInput);
    // console.log('###'comparisonResult);

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

  /**4-1. 이동할 칸 movingInput에 받음 수정중 */
   async inputMoving(bridgeArr) {
    let movingInput;
    await inputView.readMoving()
    .then(value => {
      movingInput = value;
    })
    return movingInput;
  }


  // /** 4-1. 이동할 칸 입력 및 입력값 */
  // async move(bridgeArr) {
  //   const movingInput = [];
  //   for(let i = 0; i < bridgeArr.length; i++) {
  //     await inputView.readMoving()
  //       .then(value => {
  //         //중간결과 출력
  //         movingInput.push(value);
  //       }).catch(error => {
  //         Console.print(error.message);
  //         --i;
  //       });
  //   }
  //   console.log('###movingInputArr:', movingInput);
  //   return movingInput;
  // }

}

const app = new App();
app.play();

module.exports = App;
