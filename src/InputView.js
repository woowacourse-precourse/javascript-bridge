const { Console } = require('@woowacourse/mission-utils');
const { GAME_STATUS, NEW_LINE } = require('./constants/BridgeGameSetting');
const MESSAGE = require('./constants/BridgeGameMessage');
const Validator = require('./utils/Validator');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.print(MESSAGE.PROCESS.GAME_START);
    Console.readLine(MESSAGE.PROCESS.ENTER_BRIDGE_LENGTH, (length) => {
      Validator.isCorrectLength(length);
      Console.print(NEW_LINE);
      this.readMoving();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(MESSAGE.PROCESS.SELECT_UP_DOWN, (select) => {
      Validator.isUpOrDown(select);
      Console.print(NEW_LINE);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(MESSAGE.PROCESS.SELECT_RESTART_OR_QUIT, (select) => {
      Validator.isRestartOrQuit(select);
      if (select === GAME_STATUS.GAME_RESTART) {
        this.readMoving();
      }
      if (select === GAME_STATUS.GAME_QUIT) {
        Console.print(MESSAGE.PROCESS.GAME_RESULT);
      }
    });
  },
};

Console.print(InputView.readGameCommand());

module.exports = InputView;
