const MESSAGE = {
  START: "다리 건너기 게임을 시작합니다.",
  INPUT_LENGTH: "다리의 길이를 입력해주세요.",
  INPUT_MOVE: "이동할 칸을 선택해주세요.",
  RESTART_OR_TERMINATE:
    "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
  RESULT_SUCCESS: "게임 성공 여부: 성공",
  RESULT_FAIL: "게임 성공 여부: 실패",
  RESULT_TRIAL: "총 시도한 횟수: ",
};

const ERROR = {
  BIRDGE_LENGTH: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
};

const BRIDGE = {
  SIZE_MAX: 20,
  SIZE_MIN: 3,
};

module.exports = {
  MESSAGE,
  ERROR,
  BRIDGE,
};
