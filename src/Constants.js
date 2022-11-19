const ERROR = Object.freeze({
  BRIDGE_GENERATOR_RANGE: '[ERROR] 건널 수 있는 칸은 0과 1 중 하나여야 합니다',
  BRIDGE_LENGTH_RANGE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  BRIDGE_LENGTH_NAN: '[ERROR] 다리 길이는 숫자여야 합니다.',
  BRIDGE_LENGTH_NOT_INTEGER: '[ERROR] 다리 길이는 정수여야 합니다.',
  MOVING_CMD_NOT_UD: '[ERROR] 이동 명령어는 U, D만 가능합니다.',
  RETRY_CMD_NOT_RQ: '[ERROR] 재시작 명령어는 R, Q만 가능합니다.',
});

const MESSAGES = Object.freeze({
  GAME_START: '다리 건너기 게임을 시작합니다.',
  INPUT_BRIGDE_LENGTH: '다리의 길이를 입력해주세요.',
  INPUT_MOVE: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
  INPUT_RETRY: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
  FINAL_RESULT: '최종 게임 결과',
  GAME_RESULT: '게임 성공 여부: ',
  GAME_SUCCESS: '성공',
  GAME_FAIL: '실패',
  TOTAL_TRY: '총 시도한 횟수: ',
});

module.exports = {
  ERROR,
  MESSAGES,
};
