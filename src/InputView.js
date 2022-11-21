const { Console } = require('@woowacourse/mission-utils');
const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');

/**
 * 입력받은 다리의 길이를 검증한다.
 * @param {number} bridgeSize 다리의 길이
 * @throws {Error} 3 이상 20 이하의 숫자가 아닌 경우
 */
function checkBridgeSize(bridgeSize) {
  if (!Number.isInteger(bridgeSize) || bridgeSize < 3 || bridgeSize > 20) {
    throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
  }
}

/**
 * 입력받은 이동할 칸을 검증한다.
 * @param {string} moving 이동할 칸
 * @throws {Error} U, D 이외의 문자가 입력된 경우
 */
function checkMoving(moving) {
  if (moving !== 'U' && moving !== 'D') {
    throw new Error('[ERROR] 이동할 칸은 U또는 D여야 합니다.');
  }
}

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   * @param {Function} setBridge 생성한 다리를 저장하는 함수
   */
  readBridgeSize(setBridge) {
    Console.readLine('다리의 길이를 입력해주세요.\n', (input) => {
      const bridgeSize = Number(input);
      checkBridgeSize(bridgeSize);
      const bridge = makeBridge(bridgeSize, generate);
      setBridge(bridge);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(
      '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
      (input) => {
        checkMoving(input);
      },
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
