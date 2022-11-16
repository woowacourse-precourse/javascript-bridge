class gameOutputMessage {
  static START_GAME = '다리 건너기 게임을 시작합니다.\n';
  static RESULT_GAME = '최종 게임 결과\n';
  static SUCCESS_OR_FAILURE = '게임 성공 여부: ';
  static ATTEMPT_TIMES = '총 시도한 횟수: ';
  static SUCCESS = '성공\n';
  static FAILURE = '실패\n';
  static CIRCLE_MARK = 'O';
  static X_MARK = 'X';
  static OPEN_SQUARE_BRACKET = '[ ';
  static CLOSE_SQUARE_BRACKET = ' ]';
}

module.exports = Object.freeze(gameOutputMessage);
