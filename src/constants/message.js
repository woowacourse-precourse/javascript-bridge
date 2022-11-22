const START = "다리 건너기 게임을 시작합니다.\n";
const SUCCESS = "\n게임 성공 여부: 성공";
const FAIL = "\n게임 성공 여부: 실패";
const RESULT = "\n최종 게임 결과";
const BLANK = " ";
const ATTEMP = (attemptNumber) => `총 시도한 횟수: ${attemptNumber}`;
const BOUNDARY = " | ";
const BRIDGE_CONDITION = (log) => `[ ${log} ]`;

const LENGTH = "다리의 길이를 입력해주세요.\n";
const MOVE = "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n";
const RESTART =
  "\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n";

const NUMBER = "[ERROR] 숫자만 입력할 수 있습니다.";
const RANGE = "[ERROR] 다리 길이의 입력은 3부터 20 사이의 숫자여야 합니다.";
const MOVE_INPUT = "[ERROR] 이동 입력은 대문자 U와 D만 입력할 수 있습니다.";
const COMMAND = "[ERROR] 커맨드는 대문자 R과 Q만 입력할 수 있습니다.";

const OUTPUT_MESSAGE = {
  START,
  SUCCESS,
  FAIL,
  RESULT,
  BLANK,
  ATTEMP,
  BOUNDARY,
  BRIDGE_CONDITION,
};

const INPUT_MESSAGE = {
  LENGTH,
  MOVE,
  RESTART,
};

const ERROR_MESSAGE = {
  NUMBER,
  RANGE,
  MOVE_INPUT,
  COMMAND,
};
module.exports = { OUTPUT_MESSAGE, INPUT_MESSAGE, ERROR_MESSAGE };
