const { Console } = require("@woowacourse/mission-utils");
const { COMMAND, MESSAGE } = require("./constants/index");

const { checkBridgeSizeValid, checkMovingValid } = require("./Validator");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(make) {
    Console.readLine(MESSAGE.INPUT_SIZE, (size) => {
      checkBridgeSizeValid(size);

      make(size);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(move) {
    Console.readLine(MESSAGE.INPUT_MOVING, (moving) => {
      checkMovingValid(moving);

      move(moving);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(retry, result, current) {
    Console.readLine(MESSAGE.INPUT_COMMAND, (command) => {
      console.log(command);

      if (command === COMMAND.QUIT) result(false, current);
      if (command === COMMAND.RETRY) retry();
    });
  },
};

module.exports = InputView;
