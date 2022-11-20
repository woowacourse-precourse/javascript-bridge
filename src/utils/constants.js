const MESSAGE = Object.freeze({
  GAME_START: '다리 건너기 게임을 시작합니다.\n',
  READ_BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  READ_MOVING: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  READ_GAME_COMMAND: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  INFO: '최종 게임 결과',
  WIN_GAME: '게임 성공 여부: 성공',
  LOSE_GAME: '게임 성공 여부: 실패',
  TRY: tryCount => `총 시도한 횟수: ${tryCount}`,
});

const COMMAND = Object.freeze({
  restart: 'R',
  quit: 'Q',
});

const BRIDGE = Object.freeze({
  start_position: 0,
  position_unit: 1,
  min_size: 3,
  max_size: 20,
});

const ERROR = Object.freeze({
  bridge_size_error: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.\n',
  read_moving_error: '[ERROR] 이동할 칸은 U 또는 D로 입력해야 합니다.\n',
  read_command_error: '[ERROR] 게임을 재시도하려면 R, 종료하려면 Q로 입력해야 합니다.\n',
});

const RESULT = Object.freeze({
  INITIAL_TRY: 1,
  TRY_UNIT: 1,
  INITIAL_RESULT: false,
});

module.exports = {
  MESSAGE,
  COMMAND,
  BRIDGE,
  ERROR,
  RESULT,
};
