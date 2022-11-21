const WRONG = 'X';
const RIGHT = 'O';

const MOVE = {
  up: 'U',
  down: 'D',
};

const MOVE_INDEX = {
  [MOVE.up]: 0,
  [MOVE.down]: 1,
};

const INPUT = {
  bridgeSize: '다리의 길이를 입력해주세요.\n',
  moving: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  gameCommand:
    '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
};

const ERROR = {
  prefix: '[ERROR] ',
  bridgeSizeException: '다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  movingException: 'U(위 칸)만 D(아래 칸)만 입력해 주세요.',
  gameCommandException: 'R(재시도)과 Q(종료)만 입력해 주세요.',
};

const GAME = {
  start: '다리 건너기 게임을 시작합니다.',
  end: '최종 게임 결과',
  success: '게임 성공 여부: 성공',
  fail: '게임 성공 여부: 실패',
  try: '총 시도한 횟수: ',
};

module.exports = {
  WRONG,
  RIGHT,
  MOVE,
  MOVE_INDEX,
  INPUT,
  ERROR,
  GAME,
};
