const OUTPUT = {
  START: "다리 건너기 게임을 시작합니다.",
  RESULT: "최종 게임 결과",
  SUCCESS: (result) => `게임 성공 여부: ${result}`,
  ATTEMPTS: (attempts) => `총 시도한 횟수: ${attempts}`,
  LINE: "\n",
  BLANK: " ",
};

const INPUT = {
  SIZE: "다리의 길이를 입력해주세요.",
  MOVING: "이동할 칸을 선택해주세요. (위: U, 아래: D)",
  COMMAND: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
};

const ERROR = {
  NUMBER: "[ERROR] 다리 길이는 숫자여야 합니다.",
  RANGE: "[ERROR] 다리 길이는 3 이상 20 이하인 숫자여야 합니다.",
  MOVING: "[ERROR] 이동할 칸은 U과 P만 입력할 수 있습니다.",
  COMMAND: "[ERROR] 게임 진행 옵션은 R과 Q만 입력할 수 있습니다.",
};

module.exports = { OUTPUT, INPUT, ERROR };
