const { Console } = require('@woowacourse/mission-utils');
const { readBridgeSize, readMoving } = require('./InputView');
const { MESSAGE } = require('./constants');
const BridgeGame = require('./BridgeGame');
const { generate } = require('./BridgeRandomNumberGenerator');
const { makeBridge } = require('./BridgeMaker');

class App {
  play() {
    this.init();
  }

  init() {
    Console.print(`${MESSAGE.START_GAME}`);
    readBridgeSize(this);
  }

  makeBridge(bridgeSize) {
    const bridge = makeBridge(bridgeSize, generate);
    this.cross(bridge);
  }

  cross(bridge) {
    const bridgeGame = new BridgeGame(bridge);
    const bridgeSize = bridge.length;
    for (let step = 0; step < bridgeSize; ++step) {
      readMoving(bridgeGame);
    }
  }
}

const app = new App();
app.play();

module.exports = App;
