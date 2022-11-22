class userInputMessage {
  static ENTER_BRIDGE_LENGTH = '다리의 길이를 입력해주세요.\n';
  static ENTER_MOVE_DIRECTION = '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n';
  static ENTER_RESTART = '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n';
  static UPSIDE = 'U';
  static DOWNSIDE = 'D';
  static RETRY = 'R';
  static QUIT = 'Q';
}

module.exports = Object.freeze(userInputMessage);
