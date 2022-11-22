class gameOutputMessage {
  static START_GAME = '다리 건너기 게임을 시작합니다.\n';
  static RESULT_GAME = '\n최종 게임 결과';
  static SUCCESS_OR_FAILURE = '\n게임 성공 여부: ';
  static ATTEMPT_TIMES = '총 시도한 횟수: ';
  static SUCCESS = '성공';
  static FAILURE = '실패';
  static CIRCLE_MARK = 'O';
  static X_MARK = 'X';
  static BLANK = ' ';
  static MOVING_UP_SUCCESS = 'movingUpSuccess';
  static MOVING_DOWN_SUCCESS = 'movingDownSuccess';
  static MOVING_UP_FAILED = 'movingUpFailed';
  static MOVING_DOWN_FAILED = 'movingDownFailed';
}

module.exports = Object.freeze(gameOutputMessage);
