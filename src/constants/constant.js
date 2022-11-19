const MESSAGE = {
  BRIDGE_GAME_START: "다리 건너기 게임을 시작합니다.",
  INPUT_BRIDGE_LENGTH: "다리의 길이를 입력해주세요.",
  CHOOSE_MOVE_SPACE: "이동할 칸을 선택해주세요. (위: U, 아래: D)",
  SELECT_RETRY:
    "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
};

const ERR_MESSAGE = {
  ERR_BRIDGE_LENGTH: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
};

module.exports = { MESSAGE, ERR_MESSAGE };
