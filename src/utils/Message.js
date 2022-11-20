const Message = {
  GREETING: "다리 건너기 게임을 시작합니다.\n",
  ASK_BRIDGE_SIZE: "다리의 길이를 입력해주세요.\n",
  ASK_UPDOWN: "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  ASK_REPLAY_CLOSE: "\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
  RESULT: "최종 게임 결과",

  returnResultMessage(bool, count) {
    if (bool) {
      return [`게임 성공 여부 : 실패`, `총 시도한 횟수 : ${count}`];
    }
    return [`게임 성공 여부 : 성공`, `총 시도한 횟수 : ${count}`];
  },
};

module.exports = Message;
