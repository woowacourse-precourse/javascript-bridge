const UP_DOWN = {
  up: 'U',
  down: 'D',
};

const MESSAGE = {
  gameStart: '다리 건너기 게임을 시작합니다.\n',
  bridgeSize: '다리의 길이를 입력해주세요.\n',
  chooseUpDown: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  chooseRetry: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  finalMessage: '최종 게임 결과',
  failOrSuccess: '게임 성공 여부: ',
  tryCount: '총 시도한 횟수: ',
};

const ERROR = {
  sizeWord: '[ERROR] 숫자 이외의 문자를 입력하면 안됩니다. (소수점 표현도 안됩니다.)\n',
  sizeRange: '[ERROR] 3~20 사이의 정수를 입력해야 합니다.\n',
  upDownWord: '[ERROR] U 또는 D만 입력 가능합니다.\n',
  upDownLength: '[ERROR] U 또는 D 한 글자만 입력해야 합니다.\n',
  retryWord: '[ERROR] Q 또는 R만 입력 가능합니다.\n',
  retryLength: '[ERROR] Q 또는 R 한 글자만 입력해야 합니다.\n',
};

const ANSWER = {
  ok: 'O',
  no: 'X',
  blank: ' ',
  success: '성공',
  fail: '실패',
}

module.exports = {
  UP_DOWN,
  MESSAGE,
  ERROR,
  ANSWER,
};
