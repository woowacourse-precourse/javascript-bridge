const { Console } = require('@woowacourse/mission-utils');
const {GAME_MESSAGES} = require('./utils/Constants');
const InputView = require('./InputView');
const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');

class App {
  async play() {
    Console.print(GAME_MESSAGES.START);
    const bridgeSize = await InputView.readBridgeSize();
    const bridge = makeBridge(Number(bridgeSize), generate);
    this.startCrossing(Number(bridgeSize), bridge);
  }

  startCrossing(bridgeSize, bridge) {
    for(let i = 0; i < bridgeSize; i++){
      const moving = InputView.readMoving();

    }
    
  }
}

const app = new App;
app.play();
module.exports = App;
