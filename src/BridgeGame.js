const { readGameCommand } = require('./InputView');
const { printResult, printError } = require('./OutputView');
const {
  checkUserCommand,
  isCurrentLastIndexValueSame,
  isLengthSame,
} = require('./Validation');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #userMove;
  #playCount;
  #isSuccess;
  #model;
  #controller;

  constructor(model, controller) {
    this.#model = model;
    this.#controller = controller;
  }

  initialize() {
    this.#userMove = [];
  }

  move() {
    this.#controller.renderMap();
    this.checkResult();
  }

  retry() {
    this.start();
  }

  end() {
    printResult(this.#isSuccess, this.#playCount);
  }

  getUserCommand() {
    readGameCommand((command) => {
      try {
        checkUserCommand(command);
        if (command === 'R') return this.retry();
        return this.end();
      } catch (error) {
        printError(error);
        return this.getUserCommand();
      }
    });
  }

  checkResult() {
    if (isCurrentLastIndexValueSame(this.#bridge, this.#userMove)) {
      if (isLengthSame(this.#bridge, this.#userMove)) {
        this.#isSuccess = true;
        return this.end();
      }
      return this.#controller.readUserMoving(() => this.move());
    }
    return this.getUserCommand();
  }

  start() {
    console.log(this.#model.getBridge());
    this.#playCount += 1;
    this.initialize();
    this.#controller.readUserMoving(() => this.move());
  }
}

module.exports = BridgeGame;
