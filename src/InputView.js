const { Console } = require("@woowacourse/mission-utils");
const Check = require("./Check");
const { MOVING, COMMAND, RESULT } = require("./constants/values");
const { OUTPUT, INPUT } = require("./constants/messages");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridgeGame) {
    Console.readLine(`${INPUT.SIZE}${OUTPUT.LINE}`, (size) => {
      const error = Check.checkBridgeSize(size);
      if (error) return this.readBridgeSize();

      bridgeGame.ready(size);
      this.readMoving(bridgeGame, size);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame, size) {
    Console.readLine(
      `${OUTPUT.LINE}${INPUT.MOVING}${OUTPUT.LINE}`,
      (moving) => {
        const error = Check.checkMoving(moving);
        if (error) return this.readMoving(bridgeGame, size);

        const movingList = bridgeGame.move(moving);
        if (
          movingList[0].includes(MOVING.WRONG_ANSWER) ||
          movingList[1].includes(MOVING.WRONG_ANSWER)
        ) {
          return this.readGameCommand(bridgeGame, size);
        }
        if (movingList[0].length === parseInt(size, 10)) {
          return bridgeGame.finish(RESULT.SUCCESS);
        }
        return this.readMoving(bridgeGame, size);
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame, size) {
    Console.readLine(`${INPUT.COMMAND}${OUTPUT.LINE}`, (command) => {
      const error = Check.checkCommand(command);
      if (error) return this.readGameCommand(bridgeGame);

      if (command === COMMAND.RESTART) {
        bridgeGame.retry();
        return this.readMoving(bridgeGame, size);
      }
      if (command === COMMAND.END) {
        return bridgeGame.finish(RESULT.FAIL);
      }
    });
  },
};

module.exports = InputView;
