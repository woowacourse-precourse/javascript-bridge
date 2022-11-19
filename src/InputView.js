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
      InputView.sizeHandler(handler, userInput);
    });
  },
  sizeHandler(callBack, userInput) {
    try {
      checkBridgeSize(userInput);
      callBack(userInput);
    } catch (error) {
      MissionUtils.Console.print(error);
      this.readBridgeSize(callBack);
    }
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(handler) {
    MissionUtils.Console.readLine(MESSAGES_INPUT.MOVE, (userInput) => {
      InputView.moveHandler(handler, userInput);
    });
  },
  moveHandler(callBack, userInput) {
    try {
      checkMoves(userInput);
      callBack(userInput);
    } catch (error) {
      MissionUtils.Console.print(error);
      this.readMoving(callBack);
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(handler) {
    MissionUtils.Console.readLine(MESSAGES_INPUT.COMMAND, (userInput) => {
      InputView.commandHandler(handler, userInput);
    });
  },
  commandHandler(callBack, userInput) {
    try {
      checkGameCommand(userInput);
      callBack(userInput);
    } catch (error) {
      MissionUtils.Console.print(error);
      this.readGameCommand(callBack);
    }
  },
};

module.exports = InputView;
