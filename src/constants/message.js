const INPUT_MESSAGE = Object.freeze({
  BRIDGE_LENGTH: "다리의 길이를 입력해주세요.\n",
  MOVE: "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  RETRY: "\n게임을 다시 시도할지 여부를 입력해주세요.(재시도: R, 종료: Q)\n",
});

const OUTPUT_MESSAGE = Object.freeze({
  START: "다리 건너기 게임을 시작합니다.\n",
  MOVING_RESULT: (result) => `${result}`,
  FINAL_RESULT: (result) => `\n최종 게임 결과\n${result}`,
  SUCCESS_RESULT: (result) => `\n게임 성공 여부: ${result}`,
  ATTEMPT_COUNT: (count) => `총 시도한 횟수: ${count}`,
});

module.exports = { INPUT_MESSAGE, OUTPUT_MESSAGE };
