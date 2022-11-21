const { Console } = require('@woowacourse/mission-utils');
const { readBridgeSize, readMoving, readGameCommand } = require('./InputView');
const { MESSAGE } = require('./constants');
const BridgeGame = require('./BridgeGame');
const { generate } = require('./BridgeRandomNumberGenerator');
const { makeBridge } = require('./BridgeMaker');
const { printMap, printResult } = require('./OutputView');

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
    Console.print(bridge); //지워
    this.step(bridgeGame, 0);
  }

  step(bridgeGame, step) {
    readMoving(bridgeGame, step, this);
  }

  printResult(bridgeGame, step, isMovable) {
    Console.print(`\n${MESSAGE.RESULT.FINAL_GAME_RESULT}`);
    printMap(bridgeGame, step, isMovable);
    printResult(bridgeGame, isMovable);
    Console.close();
  }

  readGameCommand(bridgeGame, step) {
    readGameCommand(bridgeGame, step, app);
  }
}

const app = new App();
app.play();

module.exports = App;
