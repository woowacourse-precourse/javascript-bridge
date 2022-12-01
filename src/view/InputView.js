const { Console } = require("@woowacourse/mission-utils");
const { OPTION_MESSAGE } = require("../util/Messages.js");
const Validation = require("../util/Validation.js");
const OutputView = require("../view/OutputView.js");
/**
 * 사용자로부터 입력을 받는 역할
 */
const InputView = {
  /**
   * 다리의 길이를 입력
   */
  measureLength(makeBridge) {
    let input;
    Console.readLine(OPTION_MESSAGE.LENGTH, (length) => {
      try {
        Validation.checkLength(Number(length));
        makeBridge(Number(length));
      } catch (error) {
        OutputView.printError(error);
        this.measureLength();
      }
    });
    return input;
  },

  /**
   * 사용자가 이동할 칸 입력받기.
   */
  readMoving() {
    let input;
    Console.readLine(OPTION_MESSAGE.MOVE, (move) => {
      try {
        Validation.checkMove(move);
        input = move;
      } catch (error) {
        OutputView.printError(error);
        this.readMoving();
      }
    });
    return input;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받기
   */
  readGameCommand() {
    let input;
    Console.readLine(REQUEST_MESSAGE.RESTART, (option) => {
      try {
        Validation.checkRestart(option);
        input = option;
      } catch (error) {
        OutputView.printError(error);
        this.readGameCommand();
      }
    });
    return input;
  },
};

module.exports = InputView;
