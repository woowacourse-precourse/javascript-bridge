/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const { MOVEMENT, COMMAND, BRIDGE_SIZE, ERROR_MESSAGE } = require('./constructor.js');
const { input, handleError } = require('./utill.js');

const InputView = {
  async readBridgeSize() {
    const answer = await input(`다리의 길이를 입력해주세요. (${BRIDGE_SIZE.MIN}~${BRIDGE_SIZE.MAX} 사이)\n`);
    try {
      if (isNaN(answer)) throw Error(ERROR_MESSAGE.NOT_NUMBER);
      const bridgeSize = parseInt(answer);
      if (bridgeSize < BRIDGE_SIZE.MIN || bridgeSize > BRIDGE_SIZE.MAX) {
        throw Error(ERROR_MESSAGE.OUT_OF_RANGE);
      }
      return bridgeSize;
    } catch (e) {
      handleError(e.message, this.readBridgeSize);
    }
  },

  async readMoving() {
    const answer = await input('이동할 칸을 선택해주세요. (위: U, 아래: D)\n');
    try {
      if (answer !== MOVEMENT.UP && answer !== MOVEMENT.DOWN) {
        throw Error(ERROR_MESSAGE.WRONG_INPUT);
      }
      return answer;
    } catch (e) {
      handleError(e.message, this.readMoving);
    }
  },

  async readGameCommand() {
    const answer = await input('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n');
    try {
      if (answer !== COMMAND.RETRY && answer !== COMMAND.QUIT) {
        throw Error(ERROR_MESSAGE.WRONG_INPUT);
      }
      return answer;
    } catch (e) {
      handleError(e.message, this.readGameCommand);
    }
  },
};

module.exports = InputView;