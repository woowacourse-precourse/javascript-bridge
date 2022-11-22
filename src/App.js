const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./Model/BridgeGame');
const InputView = require('./View/InputView');
const OutputView = require('./View/OutputView');
const Validator = require('./Model/Validator');
const { COMMAND, MESSAGE } = require('./Constants');

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
      try {
        Validator.bridgeSize(Number(userInput));
      } catch (error) {
        Console.print(error.message);
        return this.requestBridgeSize();
      }
      this.#bridgeGame.setBridge(Number(userInput));
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
      this.printBridgeTrack();
    });
  }

  printBridgeTrack() {
    OutputView.printMap(this.#bridgeGame);
    this.showNextStep();
  }

  showNextStep() {
    if (this.#bridgeGame.isWrongPath()) return this.requestRetry();
    if (this.#bridgeGame.isSuccess()) return this.getResult();
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

