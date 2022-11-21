const { Console } = require('@woowacourse/mission-utils');
const {GAME_MESSAGES, BRIDGE} = require('./utils/Constants');
const InputView = require('./InputView');
const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const BridgeGame = require("./BridgeGame");

class App {
  async play() {
    Console.print(GAME_MESSAGES.START);
    const bridgeSize = await InputView.readBridgeSize();
    const bridge = makeBridge(Number(bridgeSize), generate);
    this.startCrossing(Number(bridgeSize), bridge);
  }

  async startCrossing(bridgeSize, bridge) {
    const gameResult = [[], []];
    for(let i = 0; i < bridgeSize; i++){
      const moving = await InputView.readMoving();
      const moveResult = BridgeGame.move(moving, bridge[i]);
      if(moving == BRIDGE.UP) gameResult[0].push(moveResult);
      if(moving == BRIDGE.DOWN) gameResult[1].push(moveResult);
    }
    return gameResult
  }
}

const app = new App;
app.play();
module.exports = App;
