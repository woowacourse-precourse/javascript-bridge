const { Console } = require('@woowacourse/mission-utils');
const { readBridgeSize, readMoving } = require('./InputView');
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

  printResult(bridgeGame, step, moving) {
    Console.print(`${MESSAGE.RESULT.FINAL_GAME_RESULT}`);
    printMap(bridgeGame, step, moving);
    const isSuccess = bridgeGame.move(step, moving);
    printResult(bridgeGame, isSuccess);
  }

  readGameCommand() {}
}

const app = new App();
app.play();

module.exports = App;
