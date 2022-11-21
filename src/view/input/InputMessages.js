const { UP, DOWN, RETRY, QUIT } = require('../../contants/Options');

module.exports = {
  ASK_BRIDGE_SIZE: '다리의 길이를 입력해주세요.',
  ASK_MOVE: `이동할 칸을 선택해주세요. (위: ${UP}, 아래: ${DOWN})`,
  ASK_RETRY: `게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${RETRY}, 종료: ${QUIT})`,
};
