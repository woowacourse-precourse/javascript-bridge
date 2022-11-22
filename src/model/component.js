const INPUT_MESSAGE = Object.freeze({
  START_MESSAGE: "다리 건너기 게임을 시작합니다.\n",
  BRIDGE_MESSAGE: "다리의 길이를 입력해주세요.\n",
  CELL_MESSAGE: "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  RESTART_MESSAGE:
    "\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
});

const OUTPUT_MESSAGE = Object.freeze({
  GAME_MESSAGE: "\n최종 게임 결과",
  RESULT_MESSAGE: "\n게임 성공 여부: ",
  COUNT_MESSAGE: "총 시도한 횟수: ",
});

const ERROR_MESSAGE = Object.freeze({
  LENGTH_ERROR: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
  CELL_ERROR_MESSAGE: "[ERROR] 위는 U, 아래는 D를 입력해야 합니다.",
  RESTART_ERROR_MESSAGE: "[ERROR] 재시도는 R, 종료는 Q를 입력해야 합니다.",
});
const CELL = Object.freeze({
  START: "[",
  MIDDLE: "|",
  END: "]",
  ZERO: "X",
  ONE: "O",
});

const CELL_NUMBER = 2;
module.exports = {
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  ERROR_MESSAGE,
  CELL,
  CELL_NUMBER,
};
