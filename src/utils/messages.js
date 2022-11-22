const INFO_MESSAGES = Object.freeze({
  GAME_START: "다리 건너기 게임을 시작합니다.\n",
  BRIDGE_SIZE: "다리의 길이를 입력해주세요.\n",
  MOVING: "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  RETRY: "\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
  RESULT_TITLE: "\n최종 게임 결과\n",
  SUCCESS_TITLE: "\n게임 성공 여부: ",
  TRY_TITLE: "\n총 시도한 횟수: ",
});

const ERROR_MESSAGES = Object.freeze({
  WRONG_BRIDGE_SIZE:
    "[ERROR] 다리 길이는 3 ~ 20 사이의 숫자로 입력해야 합니다.\n",
  WRONG_MOVEMENT: '[ERROR] 이동할 칸은 "U" 또는 "D"로 입력해야 합니다.',
  WRONG_WHETHER_TO_RETRY:
    '[ERROR] 재시도 여부는 "R" 또는 "Q"로 입력해야 합니다.',
});

module.exports = { INFO_MESSAGES, ERROR_MESSAGES };
