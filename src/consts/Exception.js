const GAME = require('./Game');
const MESSAGE = Object.freeze({
  BRIDGE_SIZE: {
    INTEGER: '다리 길이는 정수여야 합니다.',
    RANGE: `다리 길이는 ${GAME.BRIDGE_SIZE_START}에서 ${GAME.BRIDGE_SIZE_END} 사이의 수여야 합니다.`,
  },
  MOVING: {
    CHARACTER: `이동은 ${GAME.UP} 또는 ${GAME.DOWN}만 가능합니다.`,
  },
});

module.exports = MESSAGE;
