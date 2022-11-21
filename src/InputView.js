/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const { BRIDGE_SIZE } = require('./constructor.js');
const { input, handleError } = require('./utill.js');
const { validBridgeSize, validMoving, validCommand } = require('./Validation.js');

const InputView = {  
  async readBridgeSize() {
    while(true) {
      try {
        const answer = await input(`다리의 길이를 입력해주세요. (${BRIDGE_SIZE.MIN}~${BRIDGE_SIZE.MAX} 사이)\n`);
        validBridgeSize(answer);
        return parseInt(answer);
      } catch (e) {
        handleError(e.message);
      }
    }
  },

  async readMoving() {
    const answer = await input('이동할 칸을 선택해주세요. (위: U, 아래: D)\n');
    while(true) {
      try {
        validMoving(answer);
        return answer;
      } catch (e) {
        handleError(e.message);
      }
    }
  },

  async readGameCommand() {
    while (true) {
      const answer = await input('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n');
      try {
        validCommand(answer);
        return answer;
      } catch (e) {
        handleError(e.message);
      }
    }
  },
};

module.exports = InputView;