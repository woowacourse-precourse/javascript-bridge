/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = MissionUtils;
const {
  bridgeLengthValidate,
  userMoveInput,
  gameRestartInput,
} = require("./utils/inputValidate");
const { GameStatus } = require("./GameStatus.js");
const { INPUT_MESSAGE, COMMAND } = require("./Constant");
const OutputView = require("./OutputView");
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */

  readBridgeSize() {
    Console.readLine(INPUT_MESSAGE.bridge, (input) => {
      if (bridgeLengthValidate(input)) return this.readBridgeSize();

      this.readMoving();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(INPUT_MESSAGE.moving, (input) => {
      if (userMoveInput(input)) return this.readMoving();

      this.readGameCommand();
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(INPUT_MESSAGE.restart, (input) => {
      if (gameRestartInput(input)) return this.readGameCommand();

      if (input === COMMAND.restart) {
        return this.readMoving();
      }

      if (input === COMMAND.end) {
        OutputView.printResult();
      }
    });
  },
};

module.exports = InputView;
