const OutputView = require('./OutputView');
const InputView = require('./InputView');
const BridgeGame = require('./BridgeGame');
const { REQUIREMENT, MOVERESULT, GAMERESULT } = require('./constant/Constant');

class App {
  #bridge;
  #attemptsCnt;

  play() {
    OutputView.printInit();
    InputView.readBridgeSize(this);
  }

  initGame(bridgeLength) {
    this.#bridge = new BridgeGame(bridgeLength);
    this.#attemptsCnt = 1;
    InputView.readMoving(this);
  }
  
  proceedGame(input) {
    this.#bridge.updateUserInput(input);
    this.printBridge();
    this.calcBridge();
  }

  printBridge() {
    const result = this.#bridge.makeBridgeString();
    OutputView.printMap(result);
  }

  calcBridge() {
    const result = this.#bridge.move();

    if (result === MOVERESULT.WRONGBLOCK) {
      InputView.readGameCommand(this);
    } else if (result === MOVERESULT.RIGHTBLOCK) {
      InputView.readMoving(this);
    } else if (result === MOVERESULT.GAMECLEAR) {
      this.gameOver(GAMERESULT.CLEAR);
    }
  }
  
  retryOrTerminate(input) {
    if (input === REQUIREMENT.RETRY) {
      this.#bridge.retry();
      this.#attemptsCnt += 1;
      InputView.readMoving(this);
    } else {
      this.gameOver(GAMERESULT.NOTCLEAR);
    }
  }

  gameOver(clear) { 
    const result = this.#bridge.makeBridgeString();
    OutputView.printResult(this.#attemptsCnt, result, clear);
  }
}

const app = new App();
app.play();

module.exports = App;
