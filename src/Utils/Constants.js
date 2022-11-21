const GAME_MESSAGE = {
  START: "다리 건너기 게임을 시작합니다.\n",
  BRIDGE_LENGTH: "다리의 길이를 입력해주세요.\n",
  MOVE: "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  END: "\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
  RESULT: "\n최종 게임 결과",
  IS_SUCCESS: (gameResult) => `\n게임 성공 여부: ${gameResult}`,
  SUCCESS: "성공",
  FAIL: "실패",
  TRY: (tries) => `총 시도한 횟수: ${tries}`,
};

const BRIDGE_LENGTH_LIMIT = Array.from({ length: 18 }, (_, index) => index + 3);

const ERROR_MESSAGE = {
  NOT_APPROPRIATE_LENGTH:
    "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
  WRONG_MOVEMENT:
    "[ERROR] U(위 칸)와 D(아래 칸) 중 하나의 문자를 입력해야 합니다.",
  WRONG_ENDING_COMMAND:
    "[ERROR] R(재시작)과 Q(종료) 중 하나의 문자를 입력해야 합니다.",
  BLANK: "[ERROR] 공백이 없어야 합니다.",
};

const LIMIT_NUMBER = {
  MIN_LENGTH: 3,
  MAX_LENGTH: 20,
};

const APPROPRIATE_INPUT = {
  UP: "U",
  DOWN: "D",
  RESTART: "R",
  QUIT: "Q",
};

const REPLACEMENT = {
  COMMA: ",",
  LINE: " | ",
};

const BRIDGE_SHAPE = (result) => `[ ${result} ]`;

const ANSWER = {
  RIGHT: "O",
  WRONG: "X",
  UNCHOSEN: " ",
};

module.exports = {
  GAME_MESSAGE,
  BRIDGE_LENGTH_LIMIT,
  ERROR_MESSAGE,
  LIMIT_NUMBER,
  APPROPRIATE_INPUT,
  REPLACEMENT,
  BRIDGE_SHAPE,
  ANSWER,
};
