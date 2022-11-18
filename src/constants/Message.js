const NOTICE = {
  GAME_START: '다리 건너기 게임을 시작합니다.\n',
  FINAL_RESULT: '최종 게임 결과\n',
  GAME_SUCCESS: '게임 성공 여부: \n',
  TOTAL_ATTEMPT: '총 시도한 횟수: \n',
};

const REQUEST = {
  BRIDGE_LENGTH: '다리의 길이를 입력해주세요.\n',
  MOVE_SPACE: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  GAME_RETRY:
    '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
};

const ERROR = {
  INVALID_LENGTH: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.\n',
  INVALID_MOVE: '[ERROR] 이동할 칸은 U 또는 D 중 하나의 문자로 입력해주세요.\n',
  INVALID_RESTART:
    '[ERROR] 재시작 여부는 R 또는 Q 중 하나의 문자로 입력해주세요.\n',
};

module.exports = { NOTICE, REQUEST, ERROR };
