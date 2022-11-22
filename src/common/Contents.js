
const NUMBER = {
  SIZE_MIN: 3,
  SIZE_MAX: 20
}

const STRING = {
  FAIL: 'X',
  SUCCESS: 'O',
  BLANK: ' ',
  TOP_BRIDGE: 'U',
  BOTTOM_BRIDGE: 'D',
  RESTART: 'R',
  QUIT: 'Q'
}

const INPUT = {
  BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  MOVE_CELL: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  RETRY: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
}

const OUTPUT = {
  START: '다리 건너기 게임을 시작합니다.\n',
  GAME_RESULT: '\n최종 게임 결과',
  SUCCESS: '\n게임 성공 여부: 성공',
  FAIL: '\n게임 성공 여부: 실패',
  FULL_COUNT: '총 시도한 횟수: '
}

const ERROR = {
  ONLY_R_AND_Q: '[ERROR] R 또는 Q 입력만 가능합니다.',
  ONLY_D_AND_U: '[ERROR] D 또는 U 입력만 가능합니다.',
  BRIDGE_RANGE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  ONLY_INTEGER: '[ERROR] 다리 길이는 3부터 20 사이의 정수여야 합니다.'
}

module.exports = {NUMBER, STRING, INPUT, OUTPUT, ERROR}
