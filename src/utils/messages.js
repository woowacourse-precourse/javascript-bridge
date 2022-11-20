const INFO_MESSAGES = {
  BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  MOVING: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
};

const ERROR_MESSAGES = {
  WRONG_BRIDGE_SIZE:
    '[ERROR] 다리 길이는 3 ~ 20 사이의 숫자로 입력해야 합니다.',
  WRONG_MOVEMENT: '[ERROR] 이동할 칸은 "U" 혹은 "D"로 입력해야 합니다.',
};

module.exports = { INFO_MESSAGES, ERROR_MESSAGES };
