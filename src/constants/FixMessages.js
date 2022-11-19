const OUTPUT = {
  START: "다리 건너기 게임을 시작합니다.",
  RESULT: "최종 게임 결과",
  SUCCESS: (result) => `게임 성공 여부: ${result}`,
  CHALLENGE: (challenge) => `총 시도한 횟수: ${challenge}`,
};

const INPUT = {
  SIZE: "다리의 길이를 입력해주세요.",
  MOVING: "이동할 칸을 선택해주세요. (위: U, 아래: D)",
  RETRY: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
};

const ERROR = {
  INPUT_BRIDGE_SIZE: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
  INPUT_MOVING: "[ERROR] 입력은 U 또는 P 여야 합니다.",
  INPUT_RETRY: "[ERROR] 입력은 R 또는 Q 여야 합니다.",
};

module.exports = { OUTPUT, INPUT, ERROR };