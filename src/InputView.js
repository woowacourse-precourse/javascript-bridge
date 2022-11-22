const { Console } = require('@woowacourse/mission-utils');
// const { RETRY, PHRASE } = require('./utils/config.js');
const { validateBridgeSize, validateMove, validateRestart } = require('./utils/validate.js');

const RETRY = {
  YES: 'R',
  NO: 'Q',
};

const PHRASE = {
  START: '다리 건너기 게임을 시작합니다.\n',
  BRIDGE_LEN: '다리의 길이를 입력해주세요.\n',
  SELECT: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  RESTART: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  RESULT: '\n최종 게임 결과',
  SUCCESS: '\n게임 성공 여부: 성공\n',
  FAIL: '게임 성공 여부: 실패\n',
  TOTAL_TRY: '총 시도한 횟수: ',
};

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
