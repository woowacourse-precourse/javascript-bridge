const MissionUtils = require("@woowacourse/mission-utils");
const { checkBridgeSize, checkGameCommand, checkMoves } = require("./InputChecker");
const { MESSAGES_INPUT } = require("./constants");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(handler) {
    MissionUtils.Console.readLine(MESSAGES_INPUT.BRIDGE_SIZE, (userInput) => {
      try {
        checkBridgeSize(userInput);
        handler(userInput);
      } catch (error) {
        MissionUtils.Console.print(error);
        InputView.readBridgeSize(handler);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(handler) {
    MissionUtils.Console.readLine(MESSAGES_INPUT.MOVE, (userInput) => {
      try {
        checkMoves(userInput);
        handler(userInput);
      } catch (error) {
        MissionUtils.Console.print(error);
        InputView.readMoving(handler);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(handler) {
    MissionUtils.Console.readLine(MESSAGES_INPUT.COMMAND, (userInput) => {
      try {
        checkGameCommand(userInput);
      } catch (error) {
        MissionUtils.Console.print(error);
        InputView.readGameCommand(handler);
      }
      handler(userInput);
    });
  },
};

module.exports = InputView;
