const INPUT_MESSAGE = {
  BRIDGE_SIZE: "다리의 길이를 입력해주세요.\n",
  BRIDGE_USERCHOICE: "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  BRIDGE_RESTART:
    "\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
};

const PRINT_MESSAGE = {
  GAME_START: "다리 건너기 게임을 시작합니다.\n",
  GAME_RESULT_TITLE: "\n최종 게임 결과",
  GAME_WIN: "성공",
  GAME_LOSE: "실패",
  GAME_RESULT: "\n게임 성공 여부:",
  GAME_TRIAL: "총 시도한 횟수:",
};

const ERROR_MESSAGE_BRIDGE_SIZE = {
  NUM: "[ERROR] 다리 길이는 숫자여야 합니다.\n",
  VALUE: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.\n",
  INT: "[ERROR] 다리 길이는 정수여야 합니다.\n",
};

const ERROR_MESSAGE_USERCHOICE = {
  LENGTH: "[ERROR] 다리를 선택하는 커맨드는 한 글자여야 합니다.",
  VALUE: "[ERROR] 다리 선택 커맨드는 U 또는 D 여야 합니다.",
};

const ERROR_MESSAGE_GAMERESTART = {
  LENGTH: "[ERROR] 게임 재시작 및 종료 커맨드는 한 글자여야 합니다.",
  VALUE: "[ERROR] 게임 재시작 커맨드는 R 또는 Q 여야 합니다.",
};

module.exports = {
  INPUT_MESSAGE,
  PRINT_MESSAGE,
  ERROR_MESSAGE_BRIDGE_SIZE,
  ERROR_MESSAGE_USERCHOICE,
  ERROR_MESSAGE_GAMERESTART,
};
