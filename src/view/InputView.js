const { INPUT_MESSAGES } = require('../constants/messages');
const { readLine } = require('../utils/missionUtil');
const BridgeGame = require('../domain/BridgeGame');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    const { bridgeSize } = INPUT_MESSAGES;
    const getUserInput = (answer) => {
      const bridgeGame = new BridgeGame(answer);
      this.readMoving(bridgeGame);
    };
    readLine(bridgeSize, getUserInput);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    const { moveSpace } = INPUT_MESSAGES;
    const getUserInput = (answer) => {
      bridgeGame.move(answer);
    };
    readLine(moveSpace, getUserInput);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
