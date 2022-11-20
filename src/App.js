const { Console } = require('@woowacourse/mission-utils');
const { START_GAME, SUCCESS, FAIL } = require('./Constants');
const {
  validateBridgeSize,
  checkMoveString,
  checkRetryString,
} = require('./Validate');
const { generate } = require('./BridgeRandomNumberGenerator');
const { readBridgeSize, readMoving, readGameCommand } = require('./InputView');
const { makeBridge } = require('./BridgeMaker');
const { printMap, printResult } = require('./OutputView');
const BridgeGame = require('./BridgeGame');

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  play() {
    Console.print(START_GAME);
    this.createBridge();
  }

  createBridge() {
    readBridgeSize((size) => {
      const generateRandomNumber = generate;

      validateBridgeSize(size);
      this.bridge = makeBridge(size, generateRandomNumber);
      this.getUserMoving();
    });
  }

  getUserMoving() {
    readMoving((userMove) => {
      checkMoveString(userMove);
      this.moveBridge(userMove);
    });
  }

  moveBridge(userMove) {
    const move = this.bridgeGame.move(this.bridge, userMove);
    const bridge = this.bridgeGame.getBridge();

    move;
    printMap(bridge);

    this.checkContinue(move, bridge);
  }

  checkContinue(move, bridge) {
    if (move === true) this.getUserMoving();
    if (move === false) this.getUserRetry(bridge);
  }

  getUserRetry(bridge) {
    readGameCommand((userRetry) => {
      checkRetryString(userRetry);
      this.checkRetry(userRetry, bridge);
    });
  }

  checkRetry(userRetry, bridge) {
    const retry = this.bridgeGame.retry(userRetry);

    if (retry === true) this.retryGame();
    if (retry === false) this.quitGame(bridge);
  }

  retryGame() {
    this.bridgeGame.init();
    this.getUserMoving();
  }

  quitGame(bridge) {
    const tryCount = this.bridgeGame.getTryCount();
    printResult(bridge, FAIL, tryCount);
  }
}

const app = new App();
app.play();
module.exports = App;
