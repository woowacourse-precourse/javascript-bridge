const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE, ERROR } = require("./constants/constants");
const Validate = require("./utils/Validate");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridgeGame) {
    Console.readLine(MESSAGE.INPUT_LENGTH, (userInput) => {
      try {
        if (!Validate.validateBridgeLength(userInput))
          throw new Error(ERROR.BIRDGE_LENGTH);
        bridgeGame.initGame(userInput);
        this.readMoving(bridgeGame);
      } catch (e) {
        Console.print(e); //테스트 시에도 필요한지?? 필요 없으면 지우기
        this.readBridgeSize(bridgeGame);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    Console.readLine(MESSAGE.INPUT_MOVE, (userInput) => {
      try {
        if (!Validate.validateMove(userInput))
          throw new Error(ERROR.MOVE_COMMAND);
      } catch (e) {
        Console.print(e); //테스트 시에도 필요한지?? 필요 없으면 지우기
        this.readMoving(bridgeGame);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
