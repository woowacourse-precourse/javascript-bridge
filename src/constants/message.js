const INPUT_MESSAGE = Object.freeze({
  BRIDGE_LENGTH: "다리의 길이를 입력해주세요.\n",
  MOVE: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  RETRY: "게임을 다시 시도할지 여부를 입력해주세요.(재시도: R, 종료: Q)\n",
});

const OUTPUT_MESSAGE = Object.freeze({
  START: "다리 건너기 게임을 시작합니다.\n",
  FINAL_RESULT: (result) => `최종 게임 결과\n${result}`,
  SUCCESS_RESULT: (result) => `게임 성공 여부: ${result}`,
  ATTEMPT_COUNT: (count) => `총 시도한 횟수: ${count}`,
});

const ERROR_MESSAGE = Object.freeze({});
