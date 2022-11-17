/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const BridgeGame = require('../domain/BridgeGame');
const inputException = require('./InputException');
const { Console } = require('@woowacourse/mission-utils');
const { parseNumber } = require('../../lib/utils');

const bridgeGame = new BridgeGame();

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine('\n다리의 길이를 입력해주세요.\n', (inputValue) => {
      try {
        const bridgeSize = parseNumber(inputValue);
        inputException.handleBridgeSizeException(bridgeSize);
        bridgeGame.create(bridgeSize);
        this.readMoving();
      } catch (err) {
        console.log(err);
        this.readBridgeSize();
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine('\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (inputValue) => {
      try {
        inputException.handleMovingException(inputValue);
      } catch (err) {
        console.log(err);
        this.readMoving();
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {}
};

module.exports = InputView;
