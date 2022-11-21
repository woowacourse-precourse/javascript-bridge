/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
      let result = 0;
      MissionUtils.Console.readLine(Const.MESSAGE.GAME_START, (input) => {
        if (!validation.validateBridgeLength(input)) throw new Error(Const.ERROR_MESSAGE.ERROR_SIZE);
        result = input;
      });
      return result;
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let result = null;
    MissionUtils.Console.readLine(Const.MESSAGE.MOVE, (input) => {
      if (!validation.validationMove(input)) throw new Error(Const.ERROR_MESSAGE.ERROR_MOVE);
      result = input;
    });
    return result;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
