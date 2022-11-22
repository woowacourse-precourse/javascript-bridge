const INFO_MESSAGE = Object.freeze({
  start: `다리 건너기 게임을 시작합니다.\n`,
});

const INPUT_MESSAGE = Object.freeze({
  bridgeLength: `\n다리의 길이를 입력해주세요.\n`,
  selectNextPosition: `\n이동할 칸을 선택해주세요.`,
  retryOrEnd: `\n게임을 다시 시도할지 여부를 입력해주세요.`,

  UpDown: `(위: U, 아래: D)\n`,
  retryEnd: `(재시도: R, 종료: Q)\n`,
});

const STATE_CONSTANT = Object.freeze({
  up: "U",
  down: "D",
  retry: "R",
  end: "Q",
  canMovePlace: "O",
  emptyPlace: " ",
  cantMovePlace: "X",

  BridgeMinLength: 3,
  BridgeMaxLength: 20,
});

const RESULT_MESSAGE = Object.freeze({
  resultMessage: `\n최종 게임 결과\n`,
  successInfo: `\n게임 성공 여부: `,
  tryCount: `\n총 시도한 횟수 : `,

  isSuccess: `성공`,
  isFail: `실패`,
});

const ERROR_MESSAGE = Object.freeze({
  error: "[ERROR]",

  onlyNumber: `${this.error} 숫자만 입력할 수 있습니다.`,
  betweenRange: `${this.error} 다리 길이는 3부터 20 사이의 숫자여야 합니다.`,
  onlyRetryOrEnd: `${this.error} R 혹은 Q만 입력할 수 있습니다.`,
});

module.exports = {
  INFO_MESSAGE,
  INPUT_MESSAGE,
  STATE_CONSTANT,
  RESULT_MESSAGE,
  ERROR_MESSAGE,
};
