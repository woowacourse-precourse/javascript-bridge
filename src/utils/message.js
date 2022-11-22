const command = Object.freeze({
  START: '다리 건너기 게임을 시작합니다.\n',
  GET_BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  MOVE: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  RETRY: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  RESULT: '\n최종 게임 결과',
  IS_SUCCESS: (success) => `\n게임 성공 여부: ${success}`,
  TRY_NUM: (tryNum) => `총 시도한 횟수: ${tryNum}`,

  SUCCESS: '성공',
  FAIL: '실패',
});

const error = Object.freeze({
  SIZE: '[ERROR] 다리 길이는 3 이상 20 이하의 숫자여야 합니다.',
  MOVE: '[ERROR] 위로 이동 시 U, 아래로 이동 시 D를 입력해주세요.',
  RETRY: '[ERROR] 재시도 시 R, 종료 시 Q를 입력해주세요.',
});

module.exports = { command, error };
