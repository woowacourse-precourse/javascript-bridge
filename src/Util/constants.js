const GUIDE_MSG = {
  START_MSG: "다리 건너기 게임을 시작합니다.\n\n다리의 길이를 입력해주세요.\n",
  PROGRESS_MSG: "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  RETRY_MSG:
    "\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
};

const ERROR_MSG = {
  INPUT_SIZE_ERROR: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.\n",
  INPUT_MOVING_ERROR: "[ERROR] 이동할 칸은 U 혹은 D로 입력해주세요.\n",
  INPUT_CMD_ERROR: "[ERROR] 재시작하려면 R, 종료하려면 Q를 입력해주세요.\n",
};

const PRINT_FINISH_MSG = "\n최종 게임 결과";

const SUCCESS = "성공";
const FAIL = "실패";

module.exports = {
  GUIDE_MSG,
  ERROR_MSG,
  PRINT_FINISH_MSG,
  SUCCESS,
  FAIL,
};
