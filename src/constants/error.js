const ERROR = {
  BRIDGE_SIZE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  MOVING: '[ERROR] 위로 이동은 "U", 아래로 이동은 "D"를 입력해야 합니다.',
  GAME_COMMAND: '[ERROR] 게임 재시작은 "R", 종료는 "Q"를 입력해야 합니다.',
  BRIDGE: '[ERROR] 다리는 "U"와 "D"로 이루어져 있어야 합니다.',
  INVALID_ACCESS: '[ERROR] 잘못된 접근입니다.',
};

module.exports = Object.freeze(ERROR);
