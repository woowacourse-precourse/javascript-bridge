const BRIDGE_SIZE_ERROR = Object.freeze({
  NOT_INTEGER: '[ERROR] 다리의 길이는 정수만 입력이 가능합니다.',
  OUT_OF_RANGE: '[ERROR] 다리의 길이는 3 이상 20 이하의 숫자만 입력이 가능합니다.',
});

const MOVEMENT_ERROR = Object.freeze({
  NOT_AVAILABLE: '[ERROR] 이동할 칸은 U 또는 D만 입력이 가능합니다.',
});

const GAME_COMMAND_ERROR = Object.freeze({
  NOT_AVAILABLE: '[ERROR] 게임 재시작 명령은 R 또는 Q만 입력이 가능합니다.',
});

module.exports = {
  BRIDGE_SIZE_ERROR,
  MOVEMENT_ERROR,
  GAME_COMMAND_ERROR,
};
