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
    const bridges = this.bridgeGame.getBridges();

    printMap(bridges);
    this.checkComplete(move, bridges);
  }

  checkComplete(move, bridges) {
    const step = this.bridgeGame.getStep();

    if (move === true && this.bridge.length === step)
      this.successQuitGame(bridges);
    else this.checkContinue(move, bridges);
  }

  checkContinue(move, bridges) {
    if (move === true) this.getUserMoving();
    if (move === false) this.getUserRetry(bridges);
  }

  getUserRetry(bridges) {
    readGameCommand((userRetry) => {
      checkRetryString(userRetry);
      this.checkRetry(userRetry, bridges);
    });
  }

  checkRetry(userRetry, bridges) {
    const retry = this.bridgeGame.retry(userRetry);

    if (retry === true) this.retryGame();
    if (retry === false) this.failQuitGame(bridges);
  }

  retryGame() {
    this.bridgeGame.init();
    this.getUserMoving();
  }

  successQuitGame(bridges) {
    const tryCount = this.bridgeGame.getTryCount();
    printResult(bridges, SUCCESS, tryCount);
  }

  failQuitGame(bridges) {
    const tryCount = this.bridgeGame.getTryCount();
    printResult(bridges, FAIL, tryCount);
  }
}

const app = new App();
app.play();
module.exports = App;
