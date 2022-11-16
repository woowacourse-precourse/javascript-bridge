const GUIDE_MSG = {
  START_MSG: "다리 건너기 게임을 시작합니다.\n\n다리의 길이를 입력해주세요.\n",
  PROGRESS_MSG: "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
};

const ERROR_MSG = {
  INPUT_ERROR: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
  INPUT_MOVING_ERROR: "[ERROR] 이동할 칸은 U 혹은 D로 입력해주세요.",
};

module.exports = {
  GUIDE_MSG,
  ERROR_MSG,
};
