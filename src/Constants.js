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

module.exports = {
  MOVE,
  MOVE_INDEX,
  INPUT,
};
