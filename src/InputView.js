const { Console } = require("@woowacourse/mission-utils");
const Error = require("./ErrorChecking");
const OutputView = require("./OutputView");
const { COMMAND, RESULT } = require("./constants/values");
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
      if (Error.hasCorrectSize(size)) return this.readBridgeSize(bridgeGame);

      bridgeGame.ready(size);
      this.readMoving(bridgeGame);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    Console.readLine(`${INPUT.MOVING}${OUTPUT.LINE}`, (moving) => {
      if (Error.hasMoving(moving)) return this.readMoving(bridgeGame);

      const result = bridgeGame.move(moving);
      OutputView.printMap(result.movingList);
      if (bridgeGame.hasWrong()) return this.readGameCommand(bridgeGame, result);
      if (bridgeGame.hasAll()) return OutputView.printResult(result.movingList, RESULT.SUCCESS, result.attempts);
      return this.readMoving(bridgeGame);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame, result) {
    Console.readLine(`${INPUT.COMMAND}${OUTPUT.LINE}`, (command) => {
      if (Error.hasCommand(command)) return this.readGameCommand(bridgeGame, result);

      if (command === COMMAND.END) return OutputView.printResult(result.movingList, RESULT.FAIL, result.attempts);
      bridgeGame.retry();
      return this.readMoving(bridgeGame);
    });
  },
};

module.exports = InputView;
