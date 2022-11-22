const GAME_MESSAGE = {
  GET_BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  GET_MOVIING_INFO: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  ASK_RESTART_OR_END: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  
  GAME_START: '다리 건너기 게임을 시작합니다.\n',
  END_RESULT: '\n최종 게임 결과',
  SUCCESS_OR_FAILURE: '\n게임 성공 여부: ',
  TOTAL_COUNT: '총 시도한 횟수: '
};

const RESTART_OR_END = {
  RESTART: 'R',
  END: 'Q'
};

const UP_OR_DOWN = {
  UP: 'U',
  DOWN: 'D'
};

const PRINT_MAP = {
  CORRECT_MOVING: ' O ',
  INCORRECT_MOVING: ' X ',
  NONE_MOVING: '   ',
  DIVISION_LINE: '|'
}

const RESULT_KOREAN = {
  SUCCESS: '성공',
  FAIL: '실패'
}

const NEXT_STEP = {
  MAKE_BRIDGE: 'MAKE_BRIDGE',
  END: 'END',
  ONGOING: 'ONGOING',
  RESTART_OR_FAIL: 'RESTART_OR_FAIL'
}

const ERROR_MESSAGE = {
  BRIDGE_SIZE_NUMBER: '[ERROR] 다리 길이는 숫자여야 합니다.\n',
  BRIDGE_SIZE_RANGE: '[ERROR] 다리 길이는 3에서 20 사이입니다.\n',
  MOVING_INFO_LIMIT: '[ERROR] 이동 칸은 U와 D만 입력할 수 있습니다.\n',
  ANSWER_LIMIT: '[ERROR] 재시작 여부는 R과 Q만 입력할 수 있습니다.\n'
}

module.exports = {
  GAME_MESSAGE,
  RESTART_OR_END,
  UP_OR_DOWN,
  PRINT_MAP,
  RESULT_KOREAN,
  NEXT_STEP,
  ERROR_MESSAGE
}