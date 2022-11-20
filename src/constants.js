const MESSAGE = Object.freeze({
  START_GAME: '다리 건너기 게임을 시작합니다.',
  ENTER_BRIDGE_SIZE: '다리의 길이를 입력해주세요.',
  SELECT_MOVING: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
  ENTER_GAME_COMMAND:
    '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
  RESULT: {
    FINAL_GAME_RESULT: '최종 게임 결과',
    GAME_SUCCESS_OR_FAILURE: '게임 성공 여부: ',
    TOTAL_ATTEMPTS: '총 시도한 횟수: ',
    SUCCESS: '성공',
    FAIL: '실패',
  },
});

const MAP = Object.freeze({
  BEGINNING_OF_THE_BRIDGE: '[ ',
  END_OF_THE_BRIDGE: ' ]',
  DIVISION_OF_THE_BRIDGE: ' | ',
  MOVABLE: 'O',
  UNMOVABLE: 'X',
  UNSELECTED: ' ',
});

const MOVING = Object.freeze({
  UP: 'U',
  DOWN: 'D',
});

const MOVABLE = Object.freeze({
  UP: 'U',
  DOWN: 'D',
});

const REGEX = Object.freeze({
  BRIDGE_SIZE: /^([3-9]{1}|[1]{1}[0-9]{1}|[2]{1}[0]{1}){1}$/,
  MOVING: /^(U|D){1}$/,
  GAME_COMMAND: /^(R|Q){1}$/,
});

const ERROR = Object.freeze({
  ENTER_VALID_BRIDGE_SIZE:
    '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  SELECT_VALID_MOVING:
    '[ERROR] U(위 칸)와 D(아래 칸) 중 하나의 문자를 입력하세요.',
  ENTER_VALID_GAME_COMMAND:
    '[ERROR] R(재시작)과 Q(종료) 중 하나의 문자를 입력하세요.',
});
