module.exports = {
  MESSAGES: Object.freeze({
    GAMESTART: '다리 건너기 게임을 시작합니다.',
    ASKBRIDGELENTH: '\n다리의 길이를 입력해주세요.\n',
    ASKMOVEDIR: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
    ASKRETRY: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
    RESULT: '\n최종 게임 결과',
    GAMEDONE(result, times) {
      return `\n게임 성공 여부: ${result ? '성공' : '실패'}\n총 시도한 횟수: ${times}`;
    },
  }),
  DIRECTION: Object.freeze({
    U: 0,
    D: 1,
    0: 'D',
    1: 'U',
    UP: 'U',
    DOWN: 'D',
  }),
  TYPE: Object.freeze({
    SIZE: 'SIZE',
    STEP: 'STEP',
    RETRY: 'RETRY',
  }),
  ERROR: Object.freeze({
    SIZE: '3이상 20이하 숫자만 입력 가능합니다.',
    STEP: '대문자로 "U(위)" 혹은 "D(아래)" 만 입력 가능합니다.',
    RETRY: '대문자로 "R(재시도)" 혹은 "Q(종료)" 만 입력 가능합니다.',
    PREFIX: '[ERROR]',
  }),
};
