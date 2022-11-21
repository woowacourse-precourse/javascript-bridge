const GO = {
  up: "U",
  down: "D",
};

const COMMAND = {
  retry: "R",
  quit: "Q",
};

const SIGN = {
  success: "O",
  fail: "X",
  blank: " ",
  separator: " | ",
};

const IS_SUCCESS = {
  nailedIt: "성공",
  failedIt: "실패",
};

const MESSAGE = {
  gameStart: "다리 건너기 게임을 시작합니다.",
  inputLength: "\n다리의 길이를 입력해주세요.\n",
  inputMove: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n", 
  inputCommand:
    "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
  result: "최종 게임 결과",
  checkResult: `게임 성공 여부: `, 
  countTry: `총 시도한 횟수: `, 
};

const ERROR_MESSAGE = {
  isNumber: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
  inputRange: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
  choose_UorD: "[ERROR] U과 D중 하나를 입력해 주세요.",
  choose_RorQ: "[ERROR] R과 Q중 하나를 입력해 주세요.",
};

module.exports = { GO, COMMAND, SIGN, IS_SUCCESS, MESSAGE, ERROR_MESSAGE };
