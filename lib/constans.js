const GAME_QUESTION = Object.freeze({
  size: '\n다리의 길이를 입력해주세요.\n',
  moving: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n'
});

const MOVING = Object.freeze({
  up: 'U',
  down: 'D'
});

module.exports = {
  MOVING,
  GAME_QUESTION
};
