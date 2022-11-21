const BRIDGE = {
  MIN: 3,
  MAX: 20,
  UP_CHAR: 'U',
  DOWN_CHAR: 'D',
};

const QUERY = {
  START: '다리 건너기 게임을 시작합니다.\n',
  SIZE: '다리의 길이를 입력해주세요.\n',
  MOVE: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  RETRY: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  END: '최종 게임 결과\n',
  RESULT: '성공',
  TRY: '총 시도한 횟수:',
};

module.exports = {
  BRIDGE,
  QUERY,
};
