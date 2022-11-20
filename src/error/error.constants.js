const ERROR_PREFIX = '[ERROR]';

const ERORR_MESSAGE = Object.freeze({
  INVALID_BRIGE_SIZE: `${ERROR_PREFIX} 다리길이는 3부터 20사이의 숫자여야합니다`,
  INVALID_GAME_COMMAND: `${ERROR_PREFIX} 게임 명령어는 R,Q만 가능합니다`,
  INVALID_USER_MOVE: `${ERROR_PREFIX} 사용자의 이동은 U,D만 가능합니다`,
});

module.exports = ERORR_MESSAGE;
