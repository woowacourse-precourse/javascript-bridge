const { BLOCK } = require('./value');

const MESSAGE = {
  START: '다리 건너기 게임을 시작합니다.',
  SIZE_INPUT: '\n다리의 길이를 입력해주세요.\n',
  DIRECTION_INPUT: `이동할 칸을 선택해주세요. (위: ${BLOCK.UPPER}, 아래: ${BLOCK.LOWER})\n`,
};

const ERROR = {
  SCOPE: '[ERROR] 3 이상 20 이하의 숫자를 입력해주세요.',
  TYPE: '[ERROR] 숫자만 입력해주세요.',
  DIRECTION: '[ERROR] 대문자 U 또는 대문자 D만 입력해주세요.',
};

module.exports = { MESSAGE, ERROR };

