/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const { Console } = require("@woowacourse/mission-utils");
const ValidateInput = require("./ValidateInput");
const { printError } = require("./OutputView");

const InputView = {
  bridge: null,
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize: (bridgeGame) => {
    Console.readLine(`\n다리 길이를 입력해주세요.\n`, (input) => {
      try {
        ValidateInput.bridgeSize(input);
        bridgeGame.make(input);
        InputView.readMoving(bridgeGame);
      } catch (e) {
        printError(e);
        InputView.readBridgeSize();
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving: (bridgeGame) => {
    Console.readLine(
      `\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n`,
      (input) => {
        try {
          ValidateInput.moving(input);
          bridgeGame.move(input);
        } catch (e) {
          printError(e);
          InputView.readMoving();
        }
      }
    );
  },
};

module.exports = InputView;
