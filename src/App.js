const OutputView = require('./OutputView');
const InputView = require('./InputView');
const BridgeGame = require('./BridgeGame');

class App {
  #bridge;
  #userInput = [];

  play() {
    OutputView.printInit();
    InputView.readBridgeSize(this);
  }

  initGame(bridgeLength) {
    this.#bridge = new BridgeGame(bridgeLength);
    this.getMove();
  }

  getMove(){
    InputView.readMoving(this);
  }

  proceedGame(input) {
    this.#userInput.push(input);
    const printResult = this.#bridge.makeBridgeString(this.#userInput);
    OutputView.printMap(printResult);
    
  }
}

const app = new App();
app.play();

module.exports = App;
