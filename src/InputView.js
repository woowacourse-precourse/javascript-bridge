const MissionUtils = require("@woowacourse/mission-utils");
const Message = require("./utils/Message");
const Validate = require("./utils/Validate");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine(
        Message.ALERT.INPUT_BRIDGESIZE,
        (answer) => {
          resolve(answer);
        }
      );
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine(Message.ALERT.INPUT_MOVE, (answer) => {
        resolve(answer);
      });
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine(Message.ALERT.GAME_OVER, (answer) => {
        Validate.resumeGameValidate(answer);

        resolve(answer);
      });
    });
  },
};

module.exports = InputView;
