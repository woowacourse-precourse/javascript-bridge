const { Console } = require("@woowacourse/mission-utils");
const { OPTION_MESSAGE } = require("../util/Messages.js");
const Validation = require("../util/Validation.js");
const OutputView = require("../view/OutputView.js");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  measureLength() {
    Console.readLine(OPTION_MESSAGE.LENGTH, (length) => {
      try {
        Validation.checkLength(Number(length));
        return Number(length);
      } catch (error) {
        OutputView.printError(error);
        this.measureLength();
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(OPTION_MESSAGE.MOVE, (move) => {
      try {
        Validation.checkMove(move);
        return move;
      } catch (error) {
        OutputView.printError(error);
        this.readMoving();
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(REQUEST_MESSAGE.RESTART, (input) => {
      try {
        Validation.checkRestart(input);
        return input;
      } catch (error) {
        OutputView.printError(error);
        this.readGameCommand();
      }
    });
  },
};

module.exports = InputView;
