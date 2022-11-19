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

  getMove() {
    InputView.readMoving(this);
  }

  // getCommand() {
  //   InputView.readGameCommand(this);
  // }
  
  proceedGame(input) {
    this.#userInput.push(input);
    this.printBridge();
    this.calcBridge();
  }

  printBridge() {
    const result = this.#bridge.makeBridgeString(this.#userInput);
    OutputView.printMap(result);
  }

  calcBridge() {
    const result = this.#bridge.move(this.#userInput);
    if (result) {
      this.getMove();
    } else {
      console.log('Game Over');
      // this.#userInput = [];
      // this.getCommand();
    }
  }
  
}

const app = new App();
app.play();

module.exports = App;
