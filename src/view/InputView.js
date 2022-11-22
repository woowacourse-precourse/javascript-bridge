const { Console } = require("@woowacourse/mission-utils");
const { ERROR_MESSAGE, INPUT_MESSAGE } = require("../model/component");
const BridgeMaker = require("../BridgeMaker");
const BridgeGame = require("../controller/BridgeGame");
const { generate } = require("../BridgeRandomNumberGenerator");
const { printMap, printResult } = require("../view/OutputView");
const InputView = {
  startCount: 1,
  count: 0,
  computer: null,
  result: null,
  lengthInput: null,
  restart: null,
  cellInput: null,

  readBridgeSize() {
    console.log(INPUT_MESSAGE.START_MESSAGE);
    Console.readLine(INPUT_MESSAGE.BRIDGE_MESSAGE, (input) => {
      this.lengthInput = input;
      this.errorLength();
      this.computer = BridgeMaker.makeBridge(this.lengthInput, generate);
      this.readMoving();
    });
  },

  errorLength() {
    try {
      if (!(this.lengthInput >= 3 && this.lengthInput <= 20)) {
        throw ERROR_MESSAGE.LENGTH_ERROR;
      }
    } catch (e) {
      Console.print(e);
      this.readBridgeSize();
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(INPUT_MESSAGE.CELL_MESSAGE, (input) => {
      this.cellInput = input;
      this.errorCell();
      this.choiceRetry();
      printMap(this.result);
      this.tryLength();
    });
  },

  errorCell() {
    try {
      if (!(this.cellInput === "U" || this.cellInput === "D")) {
        throw ERROR_MESSAGE.CELL_ERROR_MESSAGE;
      }
    } catch (e) {
      Console.print(e);
      this.readMoving();
    }
  },

  tryLength() {
    this.count += 1;
    this.moving();
    this.failMoving();
    this.finishMoving();
  },

  moving() {
    if (this.count < this.computer.length && /X/g.test(this.result) === false) {
      this.readMoving();
    }
  },

  failMoving() {
    if (this.count <= this.computer.length && /X/g.test(this.result) === true) {
      this.readGameCommand();
    }
  },

  finishMoving() {
    if (
      /X/g.test(this.result) === false &&
      this.count === this.computer.length
    ) {
      this.result[2] = "성공";
      this.result[3] = this.startCount;
      printResult(this.result);
    }
  },
  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(INPUT_MESSAGE.RESTART_MESSAGE, (input) => {
      this.restart = input;
      this.errorRestart();
      this.choiceRestart();
      this.choiceEnd();
    });
  },

  errorRestart() {
    try {
      if (!(this.restart === "R" || this.restart === "Q")) {
        throw ERROR_MESSAGE.RESTART_ERROR_MESSAGE;
      }
    } catch (e) {
      Console.print(e);
      this.readGameCommand();
    }
  },

  choiceRestart() {
    if (this.restart === "R") {
      this.startCount += 1;
      this.readMoving();
    }
  },

  choiceEnd() {
    if (this.restart === "Q") {
      this.result[2] = "실패";
      this.result[3] = this.startCount;
      printResult(this.result);
    }
  },

  choiceRetry() {
    const birdgeGame = new BridgeGame();
    if (this.restart !== "R") {
      this.result = birdgeGame.move(this.cellInput, this.computer, this.count);
    }
    if (this.restart === "R") {
      this.count = 0;
      this.result = birdgeGame.retry(this.cellInput, this.computer, this.count);
      this.restart = null;
    }
  },
};

module.exports = InputView;
