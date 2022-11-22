const MESSAGES = Object.freeze({
  START: '다리 건너기 게임을 시작합니다.\n',
  INPUT_BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  INPUT_MOVE_BLOCK: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  INPUT_RETRY: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  RESULT: {
    TITLE: '최종 게임 결과',
    SCORE: (result) => `게임 성공 여부: ${result ? '성공' : '실패'}`,
    TRY_COUNT: (count) => `총 시도한 횟수: ${count}`,
  },
});

const ERROR_MESSAGES = Object.freeze({
  BRIDGE_SIZE: {
    EMPTY: '[ERROR] 다리 길이를 입력해주세요.',
    RANGE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  },
  BLOCK: {
    EMPTY: '[ERROR] 이동할 칸을 입력해주세요.',
    VALUE: '[ERROR] U(위 칸)와 D(아래 칸) 중 하나의 문자를 입력할 수 있습니다.',
  },
  COMMAND: {
    EMPTY: '[ERROR] 게임을 다시 시도할지 여부를 입력해주세요.',
    VALUE: '[ERROR] R(재시도)와 Q(종료) 중 하나의 문자를 입력할 수 있습니다.',
  },
});

module.exports = { MESSAGES, ERROR_MESSAGES };
