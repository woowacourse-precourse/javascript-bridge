const MissionUtils = require("@woowacourse/mission-utils");
const InputHandler = require('./InputView');
const OutputHandler = require('./OutputView');
const BridgeMaker = require('./BridgeMaker');
const MakeRandomValue = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');

class App{
  play() {
    let bridge = this.buildBridge();
    const bridgeHandler = new BridgeGame();
    bridge.forEach((item, index) => {
      if(!bridgeHandler.move(item))  {
        bridgeHandler.retry();
        index = 0;
      }
    })
    OutputHandler.printResult("성공", bridgeHandler.getCount());
    MissionUtils.Console.close();
  }

  buildBridge() {
    let inputBridgeSize = InputHandler.readBridgeSize();
    let bridge = BridgeMaker.makeBridge(inputBridgeSize, MakeRandomValue.generate);

    return bridge;
  }
}

// const app = new App();
// app.play();

module.exports = App;
