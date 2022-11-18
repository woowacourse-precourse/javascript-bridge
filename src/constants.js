const MESSAGE = {
  START: "다리 건너기 게임을 시작합니다.\n",
  REQUEST_SIZE: "다리의 길이를 입력해주세요.\n",
  REQUEST_DIRECTION: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  REQUEST_GAME_COMMAND: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
  RESULT_INFO: "최종 게임 결과",
  RESULT_IS_SUCCESS: (isSuccess) => `\n게임 성공 여부: ${isSuccess}`,
  RESULT_TRY_COUNT: (tryCount) => `총 시도한 횟수: ${tryCount}`,
}

module.exports = { MESSAGE };
