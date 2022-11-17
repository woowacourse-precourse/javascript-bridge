const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../constant/index');
const GameController = require('../controllers/GameController');
const PlayerController = require('../controllers/PlayerController');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  gameCtrl: new GameController(),
  playerCtrl: new PlayerController(),
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(MESSAGE.ASK_BRIDGE_SIZE, (size) => {
      this.gameCtrl.makeBridge(size);
      // this.readMoving();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(MESSAGE.ASK_SELECT_MOVE_POINT, (movePoint) => {});
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(MESSAGE.ASK_RETRY, (decision) => {});
  },
};

module.exports = InputView;
