const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
const { MESSAGE } = require('../Utils/Constant');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridge, game) {
    Console.readLine(MESSAGE.READ_BRIDGE_SIZE, (input) => {
      bridge.setBridge(input);
      this.readMoving(bridge, game);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge, game) {
    Console.readLine(MESSAGE.READ_MOVE_LEVEL, (input) => {
      game.move(input);
      OutputView.printMap(bridge, game);
      if (this.isReMoving(bridge, game)) return this.readMoving(bridge, game);
      OutputView.printResult(bridge, game);
      return InputView.readGameCommand(bridge, game);
    });
  },

  isReMoving(bridge, game) {
    return game.isWin(bridge) && bridge.length !== game.levelCnt;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridge, game) {
    Console.readLine(MESSAGE.GAME_RETRY, (input) => {
      game.retry(input, bridge, game);
    });
  },
};

module.exports = InputView;
