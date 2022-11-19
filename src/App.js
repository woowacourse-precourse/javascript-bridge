const { Console } = require('@woowacourse/mission-utils');
const { START_GAME } = require('./Constants');
const { validateBridgeSize, checkMoveString } = require('./Validate');
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
    readMoving((userInput) => {
      checkMoveString(userInput);
      this.moveBridge(userInput);
    });
  }

  moveBridge(userInput) {
    const move = this.bridgeGame.move(this.bridge, userInput);
    const upBridge = this.bridgeGame.getupBridge();
    const downBridge = this.bridgeGame.getDownBridge();
    move;
    printMap(upBridge, downBridge);
    this.checkContinue(move);
  }

  checkContinue(move) {
    if (move === true) this.getUserMoving();
    if (move === false) this.failAnswer();
  }

  failAnswer() {
    console.log('틀렸습니다.');
  }
}

const app = new App();
app.play();
module.exports = App;
