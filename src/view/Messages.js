const Messages = {
  GAMESTART(){
    return "다리 건너기 게임을 시작합니다.\n";
  },
  GAMERESULT(){
    return "최종 게임 결과";
  },
  IS_SUCCESS(isSuccess){
    return `게임 성공 여부: ${isSuccess?"성공":"실패"}`;
  },
  GAME_ATTEMPTS(attempts){
    return `총 시도한 횟수: ${attempts}`;
  },
  BRIDGE_SIZE(){
    return "다리의 길이를 입력해주세요.\n";
  },
  MOVE_TO_WHERE(){
    return "이동할 칸을 선택해주세요. (위: U, 아래: D)\n";
  },
  GAME_QUIT_OR_RETRY(){
    return "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n";
  }
}

module.exports = Messages;