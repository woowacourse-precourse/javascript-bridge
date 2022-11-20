const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeGame = require('./BridgeGame');
const { EITHER, MOVE_RESULT } = require('./constants/bridge');

class App {
  constructor() {
    this.bridgeModel = new BridgeGame();
    this.upCounter = [];
    this.downCounter = [];
  }

  play() {
    OutputView.printStart();
    InputView.readBridgeSize(this.gameRoutine.bind(this));
  }

  gameRoutine(bridgeSize) {
    this.bridgeModel.setBridge(bridgeSize);
    InputView.readMoving(this.attempt.bind(this));
  }

  attempt(input) {
    const result = this.bridgeModel.move(input);
    this.setCounter(input, result);
    OutputView.printMap(this.upCounter, this.downCounter);

    if (result === MOVE_RESULT.INCORRECT) InputView.readGameCommand(this.failRoutine.bind(this));
  }

  setCounter(userInput, result) {
    if (userInput === EITHER.UP) {
      if (result === MOVE_RESULT.CORRECT) this.upCounter.push(MOVE_RESULT.CORRECT);
      if (result === MOVE_RESULT.INCORRECT) this.upCounter.push(MOVE_RESULT.INCORRECT);
      this.downCounter.push(MOVE_RESULT.BLACK);
    }
    if (userInput === EITHER.DOWN) {
      if (result === MOVE_RESULT.CORRECT) this.downCounter.push(MOVE_RESULT.CORRECT);
      if (result === MOVE_RESULT.INCORRECT) this.downCounter.push(MOVE_RESULT.INCORRECT);
      this.upCounter.push(MOVE_RESULT.BLACK);
    }
  }

  failRoutine(command) {}
}

const app = new App();
app.play();

module.exports = App;
