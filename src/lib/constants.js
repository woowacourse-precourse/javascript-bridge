const MESSAGE = {
  PRINT_MISSION_START: '다리 건너기 게임을 시작합니다.\n',
  INPUT_BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  INPUT_BRIDGE_MOVE: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  INPUT_BRIDGE_RESTART: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  OUTPUT_TEXT: '최종 게임 결과',
};

const ERROR = {
  BRIDGE_SIZE_ERROR: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  BRIDGE_MOVE_ERROR: '[ERROR] 이동할 칸은 U 또는 D를 입력해야 합니다.',
  BRIDGE_RETRY_ERROR: '[ERROR] 게임 재시작은 R 또는 Q를 입력해야 합니다.',
};

const BRIDGE_SIZE_REGEX = /^[3-9]{1}$|^[1]{1}[0-9]{1}$|^2{1}[0]{1}$/;
const BRIDGE_RETRY_ASK_REGEX = /[RQ]/;
const INPUT_BRIDGE_REGEX = /[UD]/;

module.exports = {
  MESSAGE,
  ERROR,
  BRIDGE_SIZE_REGEX,
  BRIDGE_RETRY_ASK_REGEX,
  INPUT_BRIDGE_REGEX,
};
