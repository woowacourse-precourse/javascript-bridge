const READ_TYPE = {
  BRIDGE_SIZE: 'BridgeSize',
  MOVING: 'Moving',
  GAME_COMMAND: 'GameCommand',
};

const MOVING_TYPE = {
  UP: 'U',
  DOWN: 'D',
};

const GAME_COMMAND = {
  RETRY: 'R',
  QUIT: 'Q',
};

const BRIDGE_RANGE = {
  LOWER_INCLUSIVE: 3,
  UPPER_INCLUSIVE: 20,
};

const START_MESSAGE = '다리 건너기 게임을 시작합니다.\n';

const QUESTION_MESSAGE = {
  BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  MOVING: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  GAME_COMMAND: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
};

const ERROR_MESSAGE = {
  HEADING: '[ERROR]',
  NULL: '값을 입력해야 합니다.',
  BRIDGE_SIZE: {
    NOT_NUMBER: '다리 길이는 숫자여야 합니다.',
    NOT_IN_RANGE: '다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  },

  MOVING: {
    MUTLIPLE_VALUE: 'U(위 칸) 또는 D(아래 칸)를 하나만 입력해야 합니다.',
    NOT_U_OR_D: 'U(위 칸) 또는 D(아래 칸)만 입력해야 합니다.',
  },

  GAME_COMMAND: {
    MUTLIPLE_VALUE: 'R(재시도) 또는 Q(종료)를 하나만 입력해야 합니다.',
    NOT_R_OR_Q: 'R(재시도) 또는 Q(종료)만 입력해야 합니다.',
  },
};

const OUTPUT_CONSTANTS = {
  NULL: '',

  MARK: {
    SUCCESS: 'O',
    FAIL: 'X',
    BLANK: ' ',
  },

  BRIDGE: {
    START: '[ ',
    END: ' ]',
    DELIMITER: ' | ',
  },

  GAME_RESULT: {
    INTRO_MESSAGE: '최종 게임 결과',
    SUCCESS_OR_NOT_MESSAGE: '게임 성공 여부: ',
    TRY_COUNT_MESSAGE: '총 시도한 횟수: ',
    SUCCESS: '성공',
    FAIL: '실패',
  },
};

exports.OUTPUT_CONSTANTS = OUTPUT_CONSTANTS;
exports.START_MESSAGE = START_MESSAGE;
exports.BRIDGE_RANGE = BRIDGE_RANGE;
exports.MOVING_TYPE = MOVING_TYPE;
exports.READ_TYPE = READ_TYPE;
exports.QUESTION_MESSAGE = QUESTION_MESSAGE;
exports.GAME_COMMAND = GAME_COMMAND;
exports.ERROR_MESSAGE = ERROR_MESSAGE;
