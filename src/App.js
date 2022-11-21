const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, COMMAND } = require('./constant/Bridge');
const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Validator = require('./Validator');

class App {
  #game;

  play() {
    Console.print(MESSAGE.START);
    InputView.readBridgeSize(this.proceedStepOne.bind(this));
  }

  proceedStepOne(input) {
    try {
      Validator.validateBridgeSize(input);
    } catch (e) {
      Console.print(e.message);
      InputView.readBridgeSize(this.proceedStepOne.bind(this));
      return;
    }
    const game = new BridgeGame(input);
    this.#game = game;
    InputView.readMoving(this.proceedStepTwo.bind(this));
  }

  proceedStepTwo(input) {
    try {
      Validator.validateSpace(input);
    } catch (e) {
      Console.print(e.message);
      InputView.readMoving(this.proceedStepTwo.bind(this));
      return;
    }
    this.#game.move(input);
    const map = this.#game.getMap();
    OutputView.printMap(map);
    this.checkGameProgress();
  }

  proceedStepThree(input) {}

  checkGameProgress() {
    //game over
    if (!this.#game.isPass()) {
      InputView.readGameCommand(this.proceedStepThree.bind(this));
      return;
    }
    //game clear
    if (this.#game.isClear()) {
      const map = this.#game.getMap();
      const tryCount = this.#game.getTryCount();
      OutputView.printResult(map, MESSAGE.SUCCESS, tryCount);
      Console.close();
      return;
    }
    InputView.readMoving(this.proceedStepTwo.bind(this));
  }
}

const app = new App();
app.play();

module.exports = App;
