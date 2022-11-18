const ErrorMsg = Object.freeze({
  INVALID_INPUT_NOT_NUM: '[ERROR] 입력은 숫자여야 합니다.',
  INVALID_INPUT_BRIDGE_SIZE_RANGE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  INVALID_INPUT_MOVING: '[ERROR] 입력은 U 혹은 D여야 합니다.',
});

const GameState = Object.freeze({
  IDLE: 0,
  PLAYING: 1,
  GAME_OVER: 2,
  VICTORY: 3,
});

module.exports = { ErrorMsg, GameState };
