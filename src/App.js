const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Validator = require('./Validator');
const BridgeGame = require('./BridgeGame');
const { Console } = require('@woowacourse/mission-utils');

class App {
  #bridgeGame;

  play() {
    OutputView.printGameStart();
    InputView.readBridgeSize(this.settingBridge.bind(this));
  }
  
  settingBridge(size) {
    Validator.checkBridgeSize(size);
    this.#bridgeGame = new BridgeGame(size);
    // this.playingBridge();
  }
  
  playingBridge() {
    InputView.readMoving(this.movingSteps.bind(this));
  }
  
  movingSteps(step) {
    Validator.checkMoving(move);
    if (this.#bridgeGame.move(step) === true) {
      OutputView.printMap(this.#bridgeGame, true);
      if (this.#bridgeGame.isDone() == true) {
        OutputView.printResult(this.#bridgeGame);
      }
      else {
        this.playingBridge();
      }
    }
    if (this.#bridgeGame.move(step) === false) {
      OutputView.printMap(this.#bridgeGame, false);
      InputView.readGameCommand(this.endingBridge.bind(this));
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

module.exports = App;

const app = new App();
app.play();