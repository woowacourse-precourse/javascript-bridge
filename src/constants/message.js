const STATE = Object.freeze({
  NOT_VALID: {
    symbol: " X ",
  },
  VALID: {
    symbol: " O ",
  },
  NOT_VISITED: {
    symbol: "   ",
  },
});
const STATUS = Object.freeze({
  HOPE_RESTART: "R",
  HOPE_QUIT: "Q",
});

const ERROR_MESSAGE = Object.freeze({
  BRIDGE_LENGTH: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
  NOT_INTEGER: "[ERROR] 정수인 숫자만 입력해주세요.",
  NOT_VALID_DIRECTION: "[ERROR] 방향은 U와 D만 입력할 수 있습니다.",
  NOT_VALID_REGAME_COMMAND: "[ERROR] 재시작 여부엔 R과 Q만 입력할 수 있습니다.",
});

const QUESTION = Object.freeze({
  BRIDGE_LENGTH: "다리의 길이를 입력해주세요.\n",
  DIRECTION_TO_MOVE: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  RESTART_OR_NOT: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
});

const OUTPUT = Object.freeze({
  NOTIFY_START: "다리 건너기 게임을 시작합니다.",
  NOTIFY_RESULT: "\n최종 게임 결과",
  NOTIFY_GAME_CLEAR_OR_NOT: (isGameClear) => `\n게임 성공 여부: ${isGameClear ? "성공" : "실패"}`,
  NOTIFY_TOTAL_TRIAL: (attempts) => `총 시도한 횟수: ${attempts}`,
});
module.exports = { STATE, ERROR_MESSAGE, QUESTION, OUTPUT, STATUS };
