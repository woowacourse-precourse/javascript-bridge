const { Console } = require('@woowacourse/mission-utils');
const {GAME_MESSAGES} = require('./utils/Constants');
const InputView = require('./InputView');
const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');

class App {
  play() {
    Console.print(GAME_MESSAGES.START);
    const bridgeSize = InputView.readBridgeSize();
    const bridge = makeBridge(Number(bridgeSize), generate);
    const moving = InputView.readMoving();
  }
}

const app = new App;
app.play();
module.exports = App;
