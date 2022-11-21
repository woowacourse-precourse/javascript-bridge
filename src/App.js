const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./Model/BridgeGame');
const InputView = require('./View/InputView');
const { MESSAGE } = require('./Constant/message');
const OutputView = require('./View/OutputView');
const Validator = require('./Validation/Validator');

class App {
  #bridgeGame;

  constructor() {
    this.#bridgeGame = new BridgeGame();
  }

  play() {
    Console.print(MESSAGE.START);
    this.requestBridgeSize();
  }

  requestBridgeSize() {
    InputView.readBridgeSize((userInput) => {
      const userInputNumber = Number(userInput);
      try {
        Validator.bridgeSize(userInputNumber);
      } catch (error) {
        Console.print(error.message);
        return this.requestBridgeSize();
      }
      this.#bridgeGame.setBridge(userInputNumber);
      this.requestDirection();
    });
  }

  requestDirection() {
    InputView.readMoving((userDirection) => {
      try {
        Validator.direction(userDirection);
      } catch (error) {
        Console.print(error.message);
        return this.requestDirection();
      }
      this.#bridgeGame.move(userDirection);
      this.printBridge(userDirection);
    });
  }

  printBridge(direction) {
    OutputView.printMap(this.#bridgeGame);
  }
}

module.exports = App;

const app = new App();
app.play();

