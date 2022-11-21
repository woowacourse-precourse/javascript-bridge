const { printResult } = require('./OutputView');
const { isCurrentLastIndexValueSame } = require('./Validation');

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

  // FIXME: change the function
  move() {
    this.#controller.renderMap();
    this.#controller.setCurrentResult();
    this.checkCurrentResult();
  }

  retry() {
    this.start();
  }

  end() {
    printResult(this.#isSuccess, this.#playCount);
  }

  fail() {
    this.#controller.readUserCommand(() => this.checkCommand());
  }

  checkCommand() {
    const command = this.#model.getCommand();
    if (command === 'R') this.retry();
    if (command === 'Q') this.end();
  }

  checkCurrentResult() {
    const bridge = this.#model.getBridge();
    const userMove = this.#model.getUserMove();
    const isSuccess = this.#model.getIsSuccess();
    if (isCurrentLastIndexValueSame(bridge, userMove)) {
      if (isSuccess) return this.end();
      return this.#controller.readUserMoving(() => this.move());
    }
    return this.#controller.readUserCommand(() => this.checkCommand());
  }

  start() {
    console.log(this.#model.getBridge());
    this.#playCount += 1;
    this.initialize();
    this.#controller.readUserMoving(() => this.move());
  }
}

module.exports = BridgeGame;
