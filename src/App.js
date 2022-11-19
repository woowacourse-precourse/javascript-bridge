const { Console } = require('@woowacourse/mission-utils');
const { START_GAME } = require('./Constants');
const {
  validateBridgeSize,
  checkMoveString,
  checkRetryString,
} = require('./Validate');
const { generate } = require('./BridgeRandomNumberGenerator');
const { readBridgeSize, readMoving, readGameCommand } = require('./InputView');
const { makeBridge } = require('./BridgeMaker');
const { printMap } = require('./OutputView');
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
    const upBridge = this.bridgeGame.getupBridge();
    const downBridge = this.bridgeGame.getDownBridge();

    move;
    printMap(upBridge, downBridge);
    this.checkContinue(move);
  }

  checkContinue(move) {
    if (move === true) this.getUserMoving();
    if (move === false) this.getUserRetry();
  }

  getUserRetry() {
    readGameCommand((userRetry) => {
      checkRetryString(userRetry);
      this.checkRetry(userRetry);
    });
  }

  checkRetry(userRetry) {
    const retry = this.bridgeGame.retry(userRetry);

    if (retry === true) this.retryGame();
    if (retry === false) this.quitGame();
  }

  retryGame() {
    console.log('재시작');
  }

  quitGame() {
    console.log('종료');
  }
}

const app = new App();
app.play();
module.exports = App;
