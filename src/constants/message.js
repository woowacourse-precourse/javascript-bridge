const START = "다리 건너기 게임을 시작합니다.";
const LENGTH = "다리의 길이를 입력해주세요\n.";
const MOVE = "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n";
const NUMBER = "[ERROR] 숫자만 입력할 수 있습니다.";
const RANGE = "[ERROR] 다리 길이의 입력은 3부터 20 사이의 숫자여야 합니다.";
const MOVE_INPUT = "[ERROR] 이동 입력은 대문자 U와 P만 입력할 수 있습니다.";

const OUTPUT_MESSAGE = {
  START,
};

const INPUT_MESSAGE = {
  LENGTH,
  MOVE,
};

const ERROR_MESSAGE = {
  NUMBER,
  RANGE,
  MOVE_INPUT,
};
module.exports = { OUTPUT_MESSAGE, INPUT_MESSAGE, ERROR_MESSAGE };
