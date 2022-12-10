const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../constants/game.constants');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize (handleBridgeLength) {
    Console.readLine(GAME_MESSAGE.LENGTH_INPUT, handleBridgeLength);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving (handleMoveBridge) {
    Console.readLine(GAME_MESSAGE.UPDOWN_INPUT, handleMoveBridge);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand (handleAskRetry) {
    Console.readLine(GAME_MESSAGE.RETRY_INPUT, handleAskRetry);
  },
};

module.exports = InputView;
