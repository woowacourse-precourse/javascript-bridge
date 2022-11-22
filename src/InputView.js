const { GAME_MESSAGE } = require('./Constants');
const { readLine } = require('./Utils');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridgeGame) {
    readLine(GAME_MESSAGE.inputLength, (userInput) => {
      bridgeGame(userInput);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    readLine(GAME_MESSAGE.move, (userInput) => {
      bridgeGame(userInput);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame) {
    readLine(GAME_MESSAGE.retry, (userInput) => {
      bridgeGame(userInput);
    });
  },
};

module.exports = InputView;
