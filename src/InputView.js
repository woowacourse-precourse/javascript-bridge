/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const { MOVEMENT, COMMAND, BRIDGE_SIZE } = require('./constructor.js');
const { input, throwError } = require('./utill.js');

const InputView = {
  async readBridgeSize() {
    const answer = await input('다리의 길이를 입력해주세요\n');
    if (isNaN(answer)) {
      return throwError(`숫자를 입력해주세요.`);
    } 
    
    const bridgeSize = parseInt(answer);
    if (bridgeSize < BRIDGE_SIZE.MIN || bridgeSize > BRIDGE_SIZE.MAX) {
      return throwError(`${MIN_BRIDGE_SIZE} ~ ${MAX_BRIDGE_SIZE}까지 수를 입력해주세요.`);
    }
    return bridgeSize;
  },

  async readMoving() {
    const answer = await input('이동할 칸을 선택해주세요. (위: U, 아래: D)\n');
    if (answer !== MOVEMENT.UP && answer !== MOVEMENT.DOWN) {
      return throwError('잘못된 입력입니다.');
    }
    return answer;
  },

  async readGameCommand() {
    const answer = await input('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n');
    if (answer !== COMMAND.RETRY && answer !== COMMAND.QUIT) {
      return throwError('잘못된 입력입니다.')
    }
    return answer;
  },
};

module.exports = InputView;