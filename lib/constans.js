const GAME_QUESTION = Object.freeze({
  size: '\n다리의 길이를 입력해주세요.\n',
  moving: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  retry: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n'
});

const GAME_COMMAND = Object.freeze({
  up: 'U',
  down: 'D',
  retry: 'R',
  quit: 'Q'
});

module.exports = {
  GAME_QUESTION,
  GAME_COMMAND
};
