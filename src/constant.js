const COMMAND = Object.freeze({
  START: "다리 건너기 게임을 시작합니다.",
  INPUT: "다리의 길이를 입력해주세요.",
  MOVE: "이동할 칸을 선택해주세요. (위: U, 아래: D)",
  RESTART: "게임을 다시 시도할지 여부를 입력해주세요.",
});

const FINAL = Object.freeze({
  RESULT_BRIDGE: "최종 게임 결과",
  RESULT: "게임 성공 여부:",
  TRY: "총 시도한 횟수:",
  SUCCESS: "성공",
  FAIL: "실패",
});

const BRIDGE = Object.freeze({
  UP: "U",
  DOWN: "D",
  LEFT: "[ ",
  RIGHT: " ]",
  DIVISION: " | ",
  PASS: "O",
  NOT_PASS: "X ",
});

const ERROR = Object.freeze({});

module.exports = {
  COMMAND,
  FINAL,
  BRIDGE,
  ERROR,
};
