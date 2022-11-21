const { InputView } = require('./InputView');
const { OutputView } = require('./OutputView');
const { Validator } = require('./Validator');
const { BridgeGame}  = require('./BridgeGame');
const { Console } = require('@woowacourse/mission-utils');
const { RESULT } = require('./constants');

class App {
  #bridgeGame;
  #currentSteps;

  constructor() {
    this.#currentSteps = [];
  }

  play() {
    OutputView.printGameStart();
    InputView.readBridgeSize(this.settingBridge.bind(this));
  }
  
  settingBridge(size) {
    Validator.checkBridgeSize(size);
    this.#bridgeGame = new BridgeGame(size);
    this.playingBridge();
  }
  
  playingBridge() {
    InputView.readMoving(this.movingSteps.bind(this));
  }
  
  movingSteps(move) {
    Validator.checkMoving(move);
    this.#currentSteps.push(move);

    let result = OutputView.printMap(this.#currentSteps, this.#bridgeGame);
    this.checkingStep(result);
  }
  
  checkingStep(result) {
    if (result == RESULT.FAIL) {
      InputView.readGameCommand(this.endingBridge.bind(this));
    }
    if (result == RESULT.SUCCESS) {
      this.playingBridge();     
    }
    if (result == RESULT.FINISH) {
      OutputView.printResult(this.#bridgeGame);
    }
  }

  endingBridge(command) {
    Validator.checkGameCommand(command);
    if (command === 'R') {
      this.#bridgeGame.retry();
      this.playingBridge();
    }
    if (command === 'Q') {
      OutputView.printResult(this.#bridgeGame);
      Console.close();
    }
  }
}

module.exports = {
  App,
};

const app = new App();
app.play();