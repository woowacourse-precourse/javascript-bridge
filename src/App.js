const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./Model/BridgeGame');
const InputView = require('./View/InputView');
const { MESSAGE } = require('./Constant/message');
const OutputView = require('./View/OutputView');
const Validator = require('./Validation/Validator');
const { COMMAND } = require('./Constant/value');

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
      this.printBridgeTrack(userDirection);
    });
  }

  printBridgeTrack(direction) {
    OutputView.printMap(this.#bridgeGame);
    this.showNextStep();
  }

  showNextStep() {
    if (this.#bridgeGame.checkWrongPath()) return this.requestRetry();
    if (this.#bridgeGame.checkSuccess()) return this.getResult();
    this.requestDirection();
  }

  requestRetry() {
    InputView.readGameCommand((userCommand) => {
      try {
        Validator.command(userCommand);
      } catch (error) {
        Console.print(error.message);
        return this.requestRetry();
      }
      this.runCommand(userCommand);
    });
  }

  runCommand(command) {
    if (command === COMMAND.RETRY) {
      this.#bridgeGame.retry();
      this.requestDirection();
    }
    if (command === COMMAND.QUIT) {
      this.getResult();
    }
  }

  getResult() {
    Console.print(MESSAGE.END);
    OutputView.printMap(this.#bridgeGame);
    OutputView.printResult(this.#bridgeGame);
    Console.close();
  }
}

module.exports = App;

const app = new App();
app.play();

