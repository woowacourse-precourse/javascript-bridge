const gameConst = {
  process: {
    START_MESSAGE: "다리 건너기 게임을 시작합니다.",
    INPUT_LENGTH_MESSAGE: "다리의 길이를 입력해주세요.",
    INPUT_CHOOSE_MESSAGE: "이동할 칸을 선택해주세요. (위: U, 아래: D)",
    INPUT_RESART_MESSAGE:
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
  },
  result: {
    message: {
      RESULT_MESSAGE: "최종 게임 결과",
      SUCCESS_MESSAGE: "게임 성공 여부:",
      TRIAL_MESSAGE: "총 시도한 횟수:",
    },
    value: {
      FAIL: "실패",
      SUCCESS: "성공",
    },
  },
};
module.exports = gameConst;
