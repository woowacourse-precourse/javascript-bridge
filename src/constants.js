const MESSAGE = {
  ENTRY: '다리 건너기 게임을 시작합니다.\n',
  INPUT_BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  INPUT_MOVING_DIRECTION: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  INPUT_GAME_COMMAND: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  FINAL: '\n최종 게임 결과',
  RESULT: '\n게임 성공 여부: ',
  SUCCESS: '성공',
  FAIL: '실패',
  TRY_COUNT: '총 시도한 횟수: ',
};

const ERROR = {
  INPUT_BRIDGE_SIZE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  INPUT_MOVING_DIRECTION: '[ERROR] U(위 칸)와 D(아래 칸) 중 하나의 문자만 입력해야 합니다.',
  INPUT_GAME_COMMAND: '[ERROR] R(재시작)과 Q(종료) 중 하나의 문자만 입력해야 합니다.',
};

const INPUT_FORMAT = {
  UPSIDE: 'U',
  DOWNSIDE: 'D',
  UPSIDE_INDEX: '1',
  DOWNSIDE_INDEX: '0',
  RETRY: 'R',
  TERMINATE: 'Q',
};

const OUTPUT_FORMAT = {
  MATCH: 'O',
  UNMATCH: 'X',
  NOT_SELECTED: ' ',
  START: '[',
  END: ']',
  SEPERATOR: '|',
};

module.exports = { MESSAGE, ERROR, INPUT_FORMAT, OUTPUT_FORMAT };
