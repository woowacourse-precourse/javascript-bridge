class InfoMessages {
  static OPENING_REMARKS = "다리 건너기 게임을 시작합니다.\n";
  static ENTER_BRIDGE_SIZE = "다리의 길이를 입력해주세요.\n";
  static ENTER_MOVEMENT_DIRECTION = "이동할 칸을 선택해주세요. (위: U, 아래: D)\n";
  static RESTART_OR_QUIT = "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n";

  static GAME_RESULTS = "최종 게임 결과";
  static GAME_FAILED = "게임 성공 여부: 실패";
  static GAME_SUCCESS = "게임 성공 여부: 성공";
  static TOTAL_ATTEMPTS = "총 시도한 횟수: ";
}

module.exports = Object.freeze(InfoMessages);
