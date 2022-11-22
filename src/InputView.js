const MissionUtils = require("@woowacourse/mission-utils");
const message = require("./constants/message.js");
const term = require("./constants/term.js");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  bridgeCount: 0,
  numberArray: [],
  inputChar: "",

  readBridgeSize() {
    MissionUtils.Console.readLine(message.ASK_BRIDGE_LENGTH, (answer) => {
      const number = this.exceptionInputNumberCheck(answer);
      this.bridgeCount = number;
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    MissionUtils.Console.readLine(message.MOVE_MESSAGE, (answer) => {
      this.inputChar = this.exceptionMovingCheck(answer);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    MissionUtils.Console.readLine(
      message.RESTART_END_GAME_MESSAGE,
      (answer) => {
        this.command = this.exceptionCommandCheck(answer);
      }
    );
  },
};

module.exports = InputView;
