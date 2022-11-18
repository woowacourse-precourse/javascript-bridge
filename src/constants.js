const MESSAGE = Object.freeze({
  START_MESSAGE: "다리 건너기 게임을 시작합니다.",
  INPUT_BRIDGE_LENGTH_MESSAGE: "다리의 길이를 입력해주세요.\n",
  INPUT_MOVE_MESSAGE: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  INPUT_RESTART_MESSAGE:
    "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
  RESULT_MESSAGE: "최종 게임 결과",
  SUCCESS_CHECK_MESSAGE: "게임 성공 여부: ",
  TRY_COUNT_MESSAGE: "총 시도한 횟수: ",
});

const ERROR_MESSAGE = Object.freeze({
  BRIDGELENGTH_ERROR: "[ERROR] 다리 길이는 3이상 20이하의 숫자이어야 합니다.",
  MOVE_ERROR: "이동할 칸은 U 혹은 D중 하나의 문자를 입력할 수 있습니다.",
  RESTART_ERROR: "다시 시도 여부는 R 혹은 Q중 하나의 문자를 입력할 수 있습니다.",

});

module.exports = { MESSAGE, ERROR_MESSAGE };
