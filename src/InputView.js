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
      const error = Check.hasCorrectSize(size);
      if (error) return this.readBridgeSize(bridgeGame);

      bridgeGame.ready(size);
      this.readMoving(bridgeGame);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    Console.readLine(`${INPUT.MOVING}${OUTPUT.LINE}`, (moving) => {
      const error = Check.hasMoving(moving);
      if (error) return this.readMoving(bridgeGame);

      bridgeGame.move(moving);
      if (bridgeGame.hasWrong()) return this.readGameCommand(bridgeGame);
      if (bridgeGame.hasAll()) return bridgeGame.finish(RESULT.SUCCESS);
      return this.readMoving(bridgeGame);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame) {
    Console.readLine(`${INPUT.COMMAND}${OUTPUT.LINE}`, (command) => {
      const error = Check.hasCommand(command);
      if (error) return this.readGameCommand(bridgeGame);

      if (command === COMMAND.END) return bridgeGame.finish(RESULT.FAIL);

      bridgeGame.retry();
      return this.readMoving(bridgeGame);
    });
  },
};

module.exports = InputView;
