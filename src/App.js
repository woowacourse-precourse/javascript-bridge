const { Console } = require('@woowacourse/mission-utils');
const { START_GAME } = require('./Constants');
const { validateBridgeSize, checkMoveString } = require('./Validate');
const { generate } = require('./BridgeRandomNumberGenerator');
const { readBridgeSize, readMoving } = require('./InputView');
const { makeBridge } = require('./BridgeMaker');

class App {
  play() {
    Console.print(START_GAME);
    this.createBridge();
  }

  createBridge() {
    readBridgeSize((size) => {
      const generateRandomNumber = generate;
      validateBridgeSize(size);
      this.bridge = makeBridge(size, generateRandomNumber);
      this.moveBride();
    });
  }

  moveBride() {
    readMoving((userInput) => {
      checkMoveString(userInput);
    });
  }
}

const app = new App();
app.play();
module.exports = App;
