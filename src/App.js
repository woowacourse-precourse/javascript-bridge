const Validator = require('./Utils/Validator');
const InputView = require('./View/InputView');
const OutputView = require('./View/OutputView');
const BridgeGame = require('./BridgeGame');
const { Console } = require('@woowacourse/mission-utils');
const { RESULT } = require('./Utils/constants');

class App {
  #bridgeGame;

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
    let result = this.#bridgeGame.move(move);
    OutputView.printMap (this.#bridgeGame);
    this.checkingStep(result);
  }
  
  checkingStep(result) {
    if (result == RESULT.BAD) {
      InputView.readGameCommand(this.endingBridge.bind(this));
    }
    if (result == RESULT.GOOD) {
      this.playingBridge();     
    }
    if (result == RESULT.FINISH) {
      OutputView.printResult(this.#bridgeGame);
    }
  }

  endingBridge(command) {
    Validator.checkGameCommand(command);
    if (command === 'R') {
      this.#bridgeGame.retry(this.playingBridge.bind(this));
    }
    if (command === 'Q') {
      OutputView.printResult(this.#bridgeGame);
    }
  }
}

module.exports = App;

const app = new App();
app.play();