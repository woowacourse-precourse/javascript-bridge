const BridgeMap = require('./BridgeMap');
const { ERROR } = require('./Constants');
const { readGameCommand, readMoving } = require('./InputView');
const { printResult, printMap, printError } = require('./OutputView');
const {
  checkUserMove,
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

  constructor(bridge) {
    this.#bridge = bridge;
    this.#userMove = [];
    this.#playCount = 0;
    this.#isSuccess = false;
  }

  initialize() {
    this.#userMove = [];
  }

  move(step) {
    this.#userMove.push(step);
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
      return this.getUserMove();
    }
    return this.getUserCommand();
  }

  #setUserMove(step) {
    this.move(step);
    BridgeMap.generate(this.#bridge, this.#userMove);
    printMap();
    this.checkResult();
  }

  getUserMove() {
    readMoving((step) => {
      try {
        checkUserMove(step);
        return this.#setUserMove(step);
      } catch (error) {
        printError(error);
        return this.getUserMove();
      }
    });
  }

  start() {
    console.log(this.#bridge);
    this.#playCount += 1;
    this.initialize();
    this.getUserMove();
  }
}

module.exports = BridgeGame;
