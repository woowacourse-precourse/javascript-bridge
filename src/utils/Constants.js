const GAME_MESSAGE = {
  success: "성공",
  fail: "실패",
  start: "다리 건너기 게임을 시작합니다.",
  result: "최종 게임 결과",
  is_success: "\n게임 성공 여부:",
  round: "총 시도한 횟수:",
  input_bridge_size: "\n다리의 길이를 입력해주세요.\n",
  input_moving: "\n이동할 칸을 선택해주세요.(위: U, 아래: D)\n",
  input_command:
    "\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
};

const ERROR_MESSAGE = {
  bridge_size_type: "[ERROR] 다리 길이는 숫자여야 합니다.",
  bridge_range: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
  bridge_size_number: "[ERROR] 다리 길이는 자연수여야 합니다.",
  moving_type: "[ERROR] 이동할 칸은 알파벳을 입력해야 합니다.",
  moving_length: "[ERROR 이동할 칸은 한 개의 문자열을 입력해야 합니다.",
  moving_string_case: "[ERROR] 이동할 칸은 대문자로 입력해야 합니다.",
  moving_valid: "[ERROR] 이동할 칸은 U 또는 D를 입력해야 합니다.",
  command_type: "[ERROR] 게임 명령어은 알파벳을 입력해야 합니다.",
  command_length: "[ERROR 게임 명령어은 한 개의 문자열을 입력해야 합니다.",
  command_string_case: "[ERROR] 게임 명령어은 대문자로 입력해야 합니다.",
  command_valid: "[ERROR] 게임 명령어은 R 또는 Q를 입력해야 합니다.",
};

const BRIDGE_MAP = {
  up_moving: "U",
  down_moving: "D",
  up_space: 1,
  down_space: 0,
  pass: " O ",
  fail: " X ",
  empty: "   ",
};

const PLAYER_CHOICE = {
  retry: "R",
  exit: "Q",
};

module.exports = {
  GAME_MESSAGE,
  ERROR_MESSAGE,
  BRIDGE_MAP,
  PLAYER_CHOICE,
};
