module.exports = {
  MESSAGES : Object.freeze({
    GAMESTART : '다리 건너기 게임을 시작합니다.',
    ASKBRIDGELENTH : '\n다리의 길이를 입력해주세요.\n',
  }),
  DIRECTION : Object.freeze({
    'U': 0,
    'D': 1,
    '0': 'D',
    '1': 'U',
  }),
  TYPE : Object.freeze({
    SIZE : 'SIZE',
    STEP : 'STEP',
    RETRY : 'RETRY',
  }),
  ERROR : Object.freeze({
    SIZE: '3이상 20이하 숫자만 입력 가능합니다.',
    STEP: '대문자로 "U(위)" 혹은 "D(아래)" 만 입력 가능합니다.',
    RETRY: '대문자로 "R(재시도)" 혹은 "Q(종료)" 만 입력 가능합니다.',
    PREFIX: '[ERROR]',
  })
}

