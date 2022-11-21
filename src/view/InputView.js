const { Console } = require("@woowacourse/mission-utils");
const INPUT = require("../constants/input.constants");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callbackArr) {
    const [createGame, ...rest] = callbackArr;
    Console.readLine(INPUT.BRIDGE_SIZE, (input) => {
      createGame.call(this, input);
      InputView.readMoving.call(this, rest);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callbackArr) {
    const [movePlayer, ...rest] = callbackArr;
    Console.readLine(INPUT.MOVE, (input) => {
      movePlayer.call(this, input);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},

  close() {
    Console.close();
  },
};

module.exports = InputView;
