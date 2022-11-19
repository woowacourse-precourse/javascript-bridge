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
    this.printBridge();
    
    // const calcResult = this.#bridge.move(this.#userInput);

  }

  printBridge() {
    const result = this.#bridge.makeBridgeString(this.#userInput);
    OutputView.printMap(result);
  }
}

const app = new App();
app.play();

module.exports = App;
