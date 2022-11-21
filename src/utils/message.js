const command = Object.freeze({
  START: '다리 건너기 게임을 시작합니다.\n',
  GET_BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  MOVE: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  RETRY: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  RESULT: '\n최종 게임 결과',
  IS_SUCCESS: (success) => `\n게임 성공 여부: ${success}`,
  TRY_NUM: (tryNum) => `총 시도한 횟수: ${tryNum}`,
});

module.exports = command;
