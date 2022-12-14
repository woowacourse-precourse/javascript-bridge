class ServiceMessages {
  static START = '다리 건너기 게임을 시작합니다.\n';
  static GET_BRIDGE_LENGTH = '\n다리의 길이를 입력해주세요.\n';
  static SELECT_SPACE = '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n';
  static RETRY =
    '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n';
  static FINAL_RESULT = '최종 게임 결과';
  static IS_SUCCESS = '게임 성공 여부';
  static TOTAL_COUNT = '총 시도한 횟수';
  static SUCCESS = '성공';
  static FAIL = '실패';
}
module.exports = ServiceMessages;
