const BRIDGE_LENGTH_LIMIT = {
  BRIDGE_LENGTH_MAXIMUM: 20,
  BRIDGE_LENGTH_MINIMUM: 1,
}

const SPACE_TO_MOVE = {
  MOVE_UP: "U",
  MOVE_DOWN: "D",
}

const GAME_CHOICE = {
  GAME_RETRY: "R",
  GAME_END: "Q",
}

const GAME_RESULT = {
  SUCCESS: "성공",
  FAILURE: "실패",
}

const ERROR_MESSAGE = {
  BRIDGE_LENGTH_NOT_PIXED_NUMBER: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
  CHOICE_SPACE_NOT_PIXED_VALUE: "[ERROR] 이동할 칸은 U와 D 중에 선택해야 합니다.",
  CHOICE_GAME_NOT_PIXED_VALUE: "[ERROR] 게임 재시작 여부는 R과 Q 중에 선택해야 합니다.",
}

const INPUT_MESSAGE =  {
  INPUT_BRIDGE_LENGTH: "다리의 길이를 입력해주세요.",
  CHOICE_SPACE_TO_MOVE: "이동할 칸을 선택해주세요. (위: U, 아래:D)",
  INPUT_CHOICE_RETRY_OR_END: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
}

const OUTPUT_MESSAGE = {
  BRIDGE_GAME_START: "다리 건너기 게임을 시작합니다.",
  STARTING_POINT: "[",
  END_POINT: "]",
  MOVE_SUCCESS: " O ",
  MOVE_FAILURE: " X ",
  BRIDGE_EMPTY: "   ",
  BRIDGE_BETWEEN: "|",
  WHETHER_GAME_SUCCESS: "게임 성공 여부: ",
  TOTAL_TRY_COUNT: "총 시도한 횟수: ",
}