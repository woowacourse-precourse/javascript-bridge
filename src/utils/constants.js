const MESSAGE = Object.freeze({
  GAME_START: '다리 건너기 게임을 시작합니다.\n',
  READ_BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  READ_MOVING: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  READ_GAME_COMMAND: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  RESULT_INFO: '최종 게임 결과',
  WIN: '게임 성공 여부: 성공',
  FAIL: '게임 성공 여부: 실패',
  TRY: '총 시도한 횟수: ',
});

const MOVING = Object.freeze({
  UP: 'U',
  DOWN: 'D',
});

const MOVING_RESULT = Object.freeze({
  SUCCESS_MARK: 'O',
  FAIL_MARK: 'X',
  BLANK_MARK: ' ',
});

const COMMAND = Object.freeze({
  RESTART: 'R',
  QUIT: 'Q',
});

const BRIDGE = Object.freeze({
  START_POSITION: 0,
  POSITION_UNIT: 1,
  MIN_SIZE: 3,
  MAX_SIZE: 20,
});

const GAME_STATUS = Object.freeze({
  WIN: 'WIN',
  FAIL: 'FAIL',
  PLAYING: 'PLAYING',
});

const ERROR = Object.freeze({
  INVALID_BRIDGE_SIZE_ERROR: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.\n',
  INVALID_MOVING_ERROR: '[ERROR] 이동할 칸은 U 또는 D로 입력해야 합니다.\n',
  INVALID_COMMAND_ERROR: '[ERROR] 게임을 재시도하려면 R, 종료하려면 Q로 입력해야 합니다.\n',
});

const RESULT = Object.freeze({
  INITIAL_TRY: 1,
  TRY_UNIT: 1,
});

module.exports = {
  MESSAGE,
  MOVING,
  MOVING_RESULT,
  COMMAND,
  BRIDGE,
  GAME_STATUS,
  ERROR,
  RESULT,
};
