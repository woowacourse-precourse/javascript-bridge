const { Console } = require('@woowacourse/mission-utils');
const { START_GAME } = require('./Constants');
const { validateBridgeSize, checkMoveString } = require('./Validate');
const { generate } = require('./BridgeRandomNumberGenerator');
const { readBridgeSize, readMoving } = require('./InputView');
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
      this.moveBridge();
    });
  }

  moveBridge() {
    readMoving((userInput) => {
      const move = this.bridgeGame.move(this.bridge, userInput);
      const upBridge = this.bridgeGame.getupBridge();
      const downBridge = this.bridgeGame.getDownBridge();
      checkMoveString(userInput);
      move;
      printMap(upBridge, downBridge);
      this.checkContinue(move);
    });
  }

  checkContinue(move) {
    if (move === true) this.moveBridge();
    if (move === false) this.failAnswer();
  }

  failAnswer() {
    console.log('틀렸습니다.');
  }
}

const app = new App();
app.play();
module.exports = App;
