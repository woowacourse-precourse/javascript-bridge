const BridgeMap = require('./BridgeMap');
const { readGameCommand, readMoving } = require('./InputView');
const { printResult, printMap, printError } = require('./OutputView');
const {
  isRightUserMove,
  isRightUserCommand,
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
      if (!isRightUserCommand(command)) {
        printError('R과 Q만 입력해 주세요.');
        return this.getUserCommand();
      }
      if (command === 'R') return this.retry();
      if (command === 'Q') return this.end();
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
      if (!isRightUserMove(step)) {
        printError('U와 D만 입력해 주세요.');
        return this.getUserMove();
      }

      return this.#setUserMove(step);
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
