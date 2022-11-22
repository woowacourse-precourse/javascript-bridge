const START_GAME = '다리 건너기 게임을 시작합니다.\n';
const USER_INPUT = {
  ENTER_LENGTH: '다리의 길이를 입력해주세요.\n',
  ENTER_MOVEMENT: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
}
const RETRY = '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n';
const END_GAME = {
  RESULT: '\n최종 게임 결과',
  IS_SUCCESS: '\n게임 성공 여부: ',
  TOTAL_RETRY: '총 시도한 횟수: ',
  SUCCESSED: '성공',
  FAILED: '실패',
}
const ERROR = {
  BRIDGE_SIZE_LENGTH_ERROR: '\n[ERROR] 다리 길이는 3 부터 20 사이의 숫자여야 합니다.',
  BRIDGE_TYPE_ERROR: '\n[ERROR] 다리 길이는 숫자 한 개만 입력 가능합니다.',
  BRIDGE_MOVE_INPUT_ERROR: '\n[ERROR] 이동 칸 선택은 (U), (D) 중에서만 가능합니다.',
  BRIDGE_MOVE_INPUT_LENGTH_ERROR: '\n[ERROR] 이동 칸은 (U), (D) 중 한 개만 입력해야 합니다.',
  GAME_COMMAND_INPUT_ERROR: '\n[ERROR] 재시작/종료 명령어는 (R), (Q) 중에서만 가능합니다.',
  GAME_COMMAND_INPUT_LENGTH_ERROR: '\n[ERROR] 재시작/종료 명령어는 (R), (Q) 중 한 개만 입력해야 합니다.',
}
module.exports = {START_GAME, USER_INPUT, RETRY, END_GAME, ERROR};