const GAME_NUMBER = Object.freeze({
  min: 3,
  max: 20,
})

const INPUT_QUESTION = Object.freeze({
  bridgeLen: '다리의 길이를 입력해주세요.\n',
  move: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  retry: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
});

const PRINT_MESSAGE = Object.freeze({
  enter: '\n',
  start: `다리 건너기 게임을 시작합니다.\n`,
  finish: `최종 게임 결과`,
  result: (result) => `게임 성공 여부: ${result}`,
  count: (count) => `총 시도한 횟수: ${count}`,
});

const ERROR_MESSAGE = Object.freeze({
  form: '[ERROR] 잘못된 입력값 입니다.',
  notNumber: '[ERROR] 숫자가 아닌 값을 입력하였습니다. 3 이상 25 이하의 숫자를 입력해주세요.',
  range: '[ERROR] 범위에 없는 값 입니다. 3 이상 20 이하의 숫자를 입력해주세요.',
  upDown: '[ERROR] 잘못된 입력 값입니다. U 또는 D 를 입력해주세요.',
  retryQuit: '[ERROR] 잘못된 입력 값입니다. R 또는 Q 를 입력해주세요.',
});

const BRIDGE_ROW = Object.freeze({
  open: '[ ',
  close: ' ]',
  partition: ' | ',
});

const BRIDGE_CHECK = Object.freeze({
  correct: 'O',
  wrong: 'X',
  blank: ' ',
});

const GAME_RESULT = Object.freeze({
  success: '성공',
  fail: '실패',
});

const GAME_COMMAND = Object.freeze({
  up: 'U',
  down: 'D',
  retry: 'R',
  quit: 'Q',
});

module.exports = {
  INPUT_QUESTION,
  ERROR_MESSAGE,
  GAME_NUMBER,
  BRIDGE_ROW,
  BRIDGE_CHECK,
  GAME_RESULT,
  GAME_COMMAND,
  PRINT_MESSAGE,
}
