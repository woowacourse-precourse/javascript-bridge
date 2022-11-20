const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
const { MESSAGE, RETRY_MESSAGE } = require('../Utils/Constant');
const Validator = require('../Utils/Validator');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(game, bridge) {
    Console.readLine(MESSAGE.READ_BRIDGE_SIZE, (input) => {
      game.createBridge(input, bridge);
      this.readMoving(game);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(game) {
    Console.readLine(MESSAGE.READ_MOVE_LEVEL, (input) => {
      game.move(input);
      OutputView.printMap(game);
      if (this.isReMoving(game)) return this.readMoving(game);
      OutputView.printResult(input, game);
      return InputView.readGameCommand(game);
    });
  },

  isReMoving(game) {
    return game.isWin() && game.totalLevel !== game.levelCnt;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(game) {
    Console.readLine(MESSAGE.GAME_RETRY, (input) => {
      Validator.isRightRetryString(input);
      if (input === RETRY_MESSAGE.RETRY) {
        game.retry();
        return this.readMoving(game);
      }
      return OutputView.printResult(input, game);
    });
  },
};

module.exports = InputView;
