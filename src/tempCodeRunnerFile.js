const BridgeGame = require("./BridgeGame");
const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const OutputView = require("./OutputView");

class App {
  async play() {
    OutputView.printStart();
    const bridgeSize = await InputView.readBridgeSize();
    const bridge = makeBridge(bridgeSize, generate);
    //

    const bridgeGame = new BridgeGame();

    bridge.forEach(async (result) => {
      const moving = await InputView.readMoving();
      const movingResult = bridgeGame.move(result, moving)
      console.log(movingResult)
      
    })


    // 인덱스, 입력받기
    
  }
}

const app = new App();
app.play();

module.exports = App;
