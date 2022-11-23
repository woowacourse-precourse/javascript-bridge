const USER_INPUT_MESSAGE = {
  BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  BRIDGE_MOVE: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  BRIDGE_GAME_RETRY: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
};

const GAME_START_MESSAGE = '다리 건너기 게임을 시작합니다.\n';

const END_MESSAGE = {
  RESULT: '최종 게임 결과',
  SUCCESS: '게임 성공 여부: 성공',
  FAIL: '게임 성공 여부: 실패',
  COUNT_TRY: '총 시도한 횟수: ',
};

const ERROR_MESSAGE = {
  CHECK_NUM_ERROR: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  CHECK_MOVE_ERROR: '[ERROR] 이동할 칸은 U 또는 D여야 합니다.',
  CHECK_RERTY_ERROR: '[ERROR] 게임 재시작 여부는 R 또는 Q여야 합니다.',
};

module.exports = {
  USER_INPUT_MESSAGE,
  GAME_START_MESSAGE,
  END_MESSAGE,
  ERROR_MESSAGE,
};