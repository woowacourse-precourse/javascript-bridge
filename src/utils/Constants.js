const DEFAULTS = Object.freeze({
  START_RANGE_cnt : 3, END_RANGE_cnt : 20,
  UP : 'U', DOWN : 'D',
  UP_cnt : 1, DOWN_cnt : 0,
  CAN_MOVE : 'O', CANT_MOVE : 'X',
  SEPARATOR : '|',
  SPACE : ' ',
  RESTART : 'R', QUIT : 'Q',
});

const CONSOLELINE = Object.freeze({
  START_GAME : '다리 건너기 게임을 시작합니다.\n',
  BRIDGE_LENGTH_INPUT : '다리의 길이를 입력해주세요.\n',
  MOVE_INPUT : '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  RESTART_CHECK : '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  FIN_RESULT_LOG : '최종 게임 결과',
  SUCCESS_RESULT : '게임 성공 여부: 성공',
  FAIL_RESULT : '게임 성공 여부: 실패',
});

const RESULTLINE = {
  COUNT : cnt => `총 시도한 횟수: ${String(cnt)}`,
  LOG : arr => `[ ${arr.join(' ')} ]`,
}

const ERRORLINE = Object.freeze({
  BRIDGE_LENGTH_ERROR : '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  MOVE_ERROR : '[ERROR] 이동할 칸은 U 나 D 만 입력해주세요.',
  RESTART_ERROR : '[ERROR] 재시작/종료 여부는 R 이나 Q 만 입력해주세요',
})

module.exports = {DEFAULTS, CONSOLELINE, RESULTLINE, ERRORLINE};