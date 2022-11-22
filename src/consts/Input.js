const GAME = require('./Game');

const MESSAGE = Object.freeze({
  READ_BRIDGE_SIZE: '다리의 길이를 입력해주세요.',
  READ_MOVING: `이동할 칸을 선택해주세요. (위: ${GAME.UP}, 아래: ${GAME.DOWN})`,
  READ_GAME_COMMAND: `게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${GAME.RESTART}, 종료: ${GAME.QUIT})`,
});

module.exports = MESSAGE;
