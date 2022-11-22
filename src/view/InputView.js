const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE } = require("../model/component");
const LengthError = require("../error/LengthError");
const BridgeMaker = require("../BridgeMaker");
const { generate } = require("../BridgeRandomNumberGenerator");
const { printMap, printResult } = require("../view/OutputView");

const InputView = {
  lengthInput: null,
  computerNum: null,
  /**
   * 다리의 길이를 입력받는다.
   */
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
      printMap(this.result);
      this.tryLength();
    });
  },

  tryLength() {
    this.count += 1;
    this.moving();
  },

  moving() {
    if (
      this.count < this.computerNum.length &&
      /X/g.test(this.result) === false
    ) {
      this.readMoving();
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    new RestartError(input);
    this.restart = input;
  },
};

module.exports = InputView;
