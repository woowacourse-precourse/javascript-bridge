const ErrorMsg = Object.freeze({
  INVALID_INPUT_NOT_NUM: '[ERROR] 입력은 숫자여야 합니다.',
  INVALID_INPUT_BRIDGE_SIZE_RANGE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  INVALID_INPUT_MOVING: '[ERROR] 입력은 U 혹은 D여야 합니다.',
  INVALID_INPUT_GAME_COMMAND: '[ERROR] 입력은 R 혹은 Q여야 합니다.',
  INVALID_INPUT_NULL: '[ERROR] 입력값이 없습니다.',
});

const GameState = Object.freeze({
  PLAYING: 1,
  GAME_OVER: 2,
  VICTORY: 3,
});

const Query = Object.freeze({
  BRIDGE_SIZE: '다리의 길이를 입력해주세요.',
  MOVING: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
  GAME_COMMAND: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
});

module.exports = { ErrorMsg, GameState, Query };
