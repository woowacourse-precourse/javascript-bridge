const GAME_MESSAGES = Object.freeze({
  start: '다리 건너기 게임을 시작합니다.',
  result: '\n최종 게임 결과',
  success: '\n게임 성공 여부: 성공',
  failure: '\n게임 성공 여부: 실패',
  totalAttempts: '총 시도한 횟수: ',
});

const INPUT_MESSAGES = Object.freeze({
  bridgeSize: '\n다리의 길이를 입력해주세요.\n',
  moving: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  retry: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
});

const ERROR_MESSAGES_BRIDGE = Object.freeze({
  blank: '[ERROR] 공백은 입력되지 않습니다.',
  typeError: '[ERROR] 숫자만 입력해 주세요.',
  outOfSize: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  wrongMoving: '[ERROR] 이동은 U 또는 D만 가능합니다.',
  wrongCommand: '[ERROR] R 또는 Q만 입력 가능합니다.',
});

module.exports = { GAME_MESSAGES, INPUT_MESSAGES, ERROR_MESSAGES_BRIDGE };
