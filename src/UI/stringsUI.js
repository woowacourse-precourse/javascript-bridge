const INPUT = {
  START: "다리 건너기 게임을 시작합니다.",
  GET_SIZE: "다리의 길이를 입력해주세요.",
  GET_MOVING: "이동할 칸을 선택해주세요. (위: U, 아래: D)",
  GET_RETRY: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
};

const OUTPUT = {
  RESULT: "최종 게임 결과",
  printSuccessResult(result) {
    const resultString = result ? "성공" : "실패";
    return `게임 성공 여부: ${resultString}`;
  },
  printTrialResult(trial) {
    return `총 시도한 횟수: ${trial}`;
  },
};

const BRIDGE = {
  SIZE_MIN: 3,
  SIZE_MAX: 20,
};
const MOVING = {
  UP: "U",
  DOWN: "D",
  PASS: "O",
  FAIL: "X",
};

module.exports = {
  INPUT,
  OUTPUT,
  BRIDGE,
  MOVING,
};
