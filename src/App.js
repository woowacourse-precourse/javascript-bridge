const BridgeGame = require('./BridgeGame');
const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const { RETRY } = require('./constant/constants');
const { readMoving, readBridgeSize, readGameCommand } = require('./ui/InputView');
const { printMap, printResult, printStart } = require('./ui/OutputView');

class App {
  play() {
    const brideGame = new BridgeGame();
    brideGame.start();
  }
}

module.exports = App;

const app = new App();
app.play();
