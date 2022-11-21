const GAME = Object.freeze({
  START: '다리 건너기 게임을 시작합니다.',
  LENGTH: '다리의 길이를 입력해주세요.',
  MOVE: '이동할 칸을 선택해주세요.',
  RETRY: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
  END_RESULT: '최종 게임 결과',
  SUCCESS_OR_NOT: '게임 성공 여부: ',
  SUCCESS: '성공',
  FAIL: '실패',
  ATTEMPT: '총 시도한 횟수: ',
});

const ERROR = Object.freeze({
  LENGTH: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  MOVE: '[ERROR] 이동은 U와 D를 사용할 수 있습니다.',
  RETRY: '[ERROR] 재시도는 R, 종료는 Q 입니다.',
});
