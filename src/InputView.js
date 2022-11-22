const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGE, WORD } = require("./Constants");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    MissionUtils.Console.readLine(MESSAGE.INPUT.BRIDGE_SIZE, (answer) => {
      try {
        console.log(answer); // 삭제 가능
        this.validateBridgeSize(answer);
        callback(answer);
      } catch (error) {
        MissionUtils.Console.print(error);
        this.readBridgeSize(callback);
      }
    });
  },
  validateBridgeSize(bridgeSize) {
    if (WORD.START_SIZE <= bridgeSize && bridgeSize <= WORD.END_SIZE) {
      return bridgeSize;
    }
    throw MESSAGE.ERROR.BRIDGE_SIZE;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    MissionUtils.Console.readLine(MESSAGE.INPUT.MOVING, (answer) => {
      try {
        console.log(answer.toUpperCase()); // 삭제 가능
        this.validateMoving(answer.toUpperCase());
        callback(answer.toUpperCase());
      } catch (error) {
        MissionUtils.Console.print(error);
        this.readMoving(callback);
      }
    });
  },
  validateMoving(moving) {
    if (moving === WORD.UP || moving === WORD.DOWN) return moving;
    throw MESSAGE.ERROR.MOVING;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    MissionUtils.Console.readLine(MESSAGE.INPUT.GAME_COMMAND, (answer) => {
      try {
        console.log(answer.toUpperCase()); // 삭제 가능
        this.validateGameCommand(answer.toUpperCase());
        callback(answer.toUpperCase());
      } catch (error) {
        MissionUtils.Console.print(error);
        this.readGameCommand(callback);
      }
    });
  },
  validateGameCommand(gameCommand) {
    if (gameCommand === WORD.RETRY || gameCommand === WORD.QUIT)
      return gameCommand;
    throw MESSAGE.ERROR.GAME_COMMAND;
  },
};

module.exports = InputView;
