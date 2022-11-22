const { Console } = require('@woowacourse/mission-utils');
const {GAME_MESSAGES, BRIDGE} = require('./utils/Constants');
const InputView = require('./InputView');
const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');
const OutputView = require('./OutputView');

class App {
  async play() {
    Console.print(GAME_MESSAGES.START);
    const bridgeSize = await InputView.readBridgeSize();
    const bridge = makeBridge(Number(bridgeSize), generate);
    this.startCrossing(Number(bridgeSize), bridge);
  }

  async startCrossing(bridgeSize, bridge) {
    let gameResult = [[], []];
    for(let i = 0; i < bridgeSize; i++){
      const moving = await InputView.readMoving();
      const bridgeGame = new BridgeGame;
      const moveResult = bridgeGame.move(moving, bridge[i]);
      await this.recordCross(moving, moveResult, gameResult);
      OutputView.printMap(gameResult, moving)
    }
  }

  recordCross(moving, moveResult, gameResult) {
    if(moving == BRIDGE.UP) {
      gameResult[0].push(moveResult);
      gameResult[1].push(' ');
      return gameResult
    }
    gameResult[1].push(moveResult);
    gameResult[0].push(' ');
    return gameResult
  }
}

const app = new App;
app.play();
module.exports = App;
