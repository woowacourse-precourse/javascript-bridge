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
      console.log(bridgeArr);  

      this.move(bridgeArr);    
    });
  }

  /** 4-1. 이동할 칸 입력 및 입력값 */
  async move(bridgeArr) {
    const movingInputArr = [];
    for(let i = 0; i < bridgeArr.length; i++) {
      await inputView.readMoving()
        .then(value => {
          movingInputArr.push(value);
        }).catch(error => {
          Console.print(error.message);
          --i;
        });
    }
  }
}

const app = new App();
app.play();

module.exports = App;
