const { Console } = require('@woowacourse/mission-utils');
const {GAME_MESSAGES, BRIDGE, RESTART} = require('./utils/Constants');
const InputView = require('./InputView');
const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');
const OutputView = require('./OutputView');

class App {
  trial = 1;

  async play() {
    Console.print(GAME_MESSAGES.START);
    const bridgeSize = await InputView.readBridgeSize();
    const bridge = makeBridge(Number(bridgeSize), generate);
    const gameResult = await this.startCrossing(Number(bridgeSize), bridge, this.trial);
    OutputView.printResult(gameResult, this.trial);
  }

  async startCrossing(bridgeSize, bridge, trial) {
    let gameResult = [[], []];
    for(let i = 0; i < bridgeSize; i++){
      const moving = await InputView.readMoving();
      const bridgeGame = new BridgeGame;
      const moveResult = bridgeGame.move(moving, bridge[i]);
      const matchOrNot = await this.processCrossing(moving, moveResult, gameResult);
      if(!matchOrNot) {
        this.restartOrNot(bridgeSize, bridge);
        return gameResult
      }
    }
    return gameResult
  }

  async processCrossing(moving, moveResult, gameResult) {
    const currentResult = await this.recordCross(moving, moveResult, gameResult);
    OutputView.printMap(currentResult, moving);
    if(moveResult === BRIDGE.UNMATCH) return false;
    return true;
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

  async restartOrNot(bridgeSize, bridge) {
    const decide = await InputView.readGameCommand();
    if(decide == RESTART.TRUE) {
      this.trial += 1;
      this.startCrossing(bridgeSize, bridge)
    }
  }
}

const app = new App;
app.play();
module.exports = App;
