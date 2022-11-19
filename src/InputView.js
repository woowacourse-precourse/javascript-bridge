const { Console } = require('@woowacourse/mission-utils');
const { RETRY, PHRASE } = require('./config');
const { validateBridgeSize, validateMove, validateRestart } = require('./validate');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    Console.readLine(PHRASE.BRIDGE_LEN, (bridgeLength) => {
      try {
        validateBridgeSize(bridgeLength);
        callback(bridgeLength);
      } catch (e) {
        Console.print(e.message);
        this.readBridgeSize(callback);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    Console.readLine(PHRASE.SELECT, (move) => {
      try {
        validateMove(move);
        callback(move);
      } catch (e) {
        Console.print(e.message);
        this.readMoving(callback);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    Console.readLine(PHRASE.RESTART, (gameCommand) => {
      try {
        validateRestart(gameCommand);
        callback(gameCommand === RETRY.YES);
      } catch (e) {
        Console.print(e.message);
        this.readGameCommand(callback);
      }
    });
  },
};

module.exports = InputView;
