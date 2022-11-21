const MESSAGE = Object.freeze({
  startGame: '다리 건너기 게임을 시작합니다.\n',
  inputBridgeSize: '다리의 길이를 입력해주세요.\n',
  inputDirectionToMove: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  inputGameCommand:
    '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  totalGameResult: '최종 게임 결과',
});

const SHOW_GAME_RESULT = (GAME_RESULT) => `게임 성공 여부: ${GAME_RESULT}`;
const SHOW_RETRY_COUNT = (RETRY_COUNT) => `총 시도한 횟수: ${RETRY_COUNT}`;

const ERROR = Object.freeze({
  mustBeNumber: '[ERROR] 문자와 특수기호를 제외한 숫자를 입력해주세요.',
  mustBeInRange: '[ERROR] 다리의 길이는 3 이상 20 이하만 가능합니다.',
  mustBeString: '[ERROR] 숫자를 제외한 문자를 입력해주세요.',
  mustBeValidDirection:
    '[ERROR] U (위칸) 와 D (아래칸) 중에서만 이동할 칸을 정해 입력해주세요.',
  mustBeUpperCase: '[ERROR] 소문자가 아닌 대문자를 입력해주세요.',
  mustNotBeBlank: '[ERROR] 공백을 입력할 수 없습니다. 값을 입력해주세요.',
  mustBeValidCommand: '[ERROR] R (재시도) 와 Q (종료) 중에서만 입력해주세요.',
});

const LINE_BREAK = '';
const RETRY = 'R';
const QUIT = 'Q';
const LOWERCASE_RETRY = 'r';
const LOWERCASE_QUIT = 'q';
const UP = 'U';
const DOWN = 'D';
const LOWERCASE_UP = 'u';
const LOWERCASE_DOWN = 'd';
const SUCCESS = '성공';
const FAIL = '실패';
const ONE_TIME = 1;
const STARTING_POINT = '[ ';
const FINISHING_POINT = ' ]';
const EDGE = ' | ';
const CROSSED = 'O';
const BLOCKED = 'X';
const BLANK = ' ';
const NUMBER_TO_MOVE_UP = 1;
const MIN_SIZE = 3;
const MAX_SIZE = 20;
const ZERO = 0;

module.exports = {
  MESSAGE,
  ERROR,
  LINE_BREAK,
  RETRY,
  QUIT,
  UP,
  DOWN,
  LOWERCASE_RETRY,
  LOWERCASE_QUIT,
  LOWERCASE_UP,
  LOWERCASE_DOWN,
  SUCCESS,
  FAIL,
  ONE_TIME,
  SHOW_GAME_RESULT,
  SHOW_RETRY_COUNT,
  STARTING_POINT,
  FINISHING_POINT,
  EDGE,
  CROSSED,
  BLOCKED,
  BLANK,
  NUMBER_TO_MOVE_UP,
  MIN_SIZE,
  MAX_SIZE,
  ZERO,
};
