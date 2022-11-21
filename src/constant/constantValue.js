const OUTPUT = {
  START: "다리 건너기 게임을 시작합니다.",
  RESULT: "최종 게임 결과",
};

const INPUT = {
  LENGTH: "다리의 길이를 입력해주세요.",
  MOVING: "이동할 칸을 선택해주세요. (위: U, 아래: D)",
  SELECT: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
};

const ERROR = {
  NUMBER: "[ERROR] 다리 길이는 숫자로 입력해야 합니다.",
  RANGE: "[ERROR] 다리 길이는 3 이상 20 이하의 숫자를 입력해야 합니다.",
  MOVING: "[ERROR] 이동할 칸은 U와 D 중 하나를 입력해야 합니다.",
  SELECT: "[ERROR]  R(재시작)과 Q(종료) 중 하나를 입력해야 합니다.",
};

module.exports = { OUTPUT, INPUT, ERROR };
