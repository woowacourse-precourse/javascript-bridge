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
    });

  }

}

const app = new App();
app.play();

module.exports = App;
