const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE } = require("../model/component");
const LengthError = require("../error/LengthError");
const CellError = require("../error/CellError");
const RestartError = require("../error/RestartError");
const BridgeMaker = require("../BridgeMaker");
const BridgeGame = require("../controller/BridgeGame");
const { generate } = require("../BridgeRandomNumberGenerator");
const { printMap, printResult } = require("../view/OutputView");
const InputView = {
  startCount: 1,
  count: 0,
  computerNum: null,
  result: null,
  lengthInput: null,
  restart: null,
  cellInput: null,

  readBridgeSize() {
    console.log(INPUT_MESSAGE.START_MESSAGE);
    Console.readLine(INPUT_MESSAGE.BRIDGE_MESSAGE, (input) => {
      new LengthError(input);
      this.lengthInput = input;
      this.computerNum = BridgeMaker.makeBridge(this.lengthInput, generate);
      this.readMoving();
    });
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(INPUT_MESSAGE.CELL_MESSAGE, (input) => {
      new CellError(input);
      this.cellInput = input;
      this.choiceRetry();
      printMap(this.result);
      this.tryLength();
    });
  },

  choiceRetry() {
    const birdgeGame = new BridgeGame();
    if (this.restart !== "R") {
      this.result = birdgeGame.move(
        this.cellInput,
        this.computerNum,
        this.count
      );
    }
    if (this.restart === "R") {
      this.count = 0;
      this.result = birdgeGame.retry(
        this.cellInput,
        this.computerNum,
        this.count
      );
      this.restart = null;
    }
  },

  tryLength() {
    this.count += 1;
    this.moving();
    this.failMoving();
    this.finishMoving();
  },

  moving() {
    if (
      this.count < this.computerNum.length &&
      /X/g.test(this.result) === false
    ) {
      this.readMoving();
    }
  },

  failMoving() {
    if (
      this.count <= this.computerNum.length &&
      /X/g.test(this.result) === true
    ) {
      this.readGameCommand();
    }
  },

  finishMoving() {
    if (
      /X/g.test(this.result) === false &&
      this.count === this.computerNum.length
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
      new RestartError(input);
      this.restart = input;
      this.choiceRestart();
      this.choiceEnd();
    });
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
};

module.exports = InputView;
