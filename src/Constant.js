const OUTPUT_MESSAGE = Object.freeze({
  START: '다리 건너기 게임을 시작합니다.',
  BRIDGE_SIZE: '\n다리의 길이를 입력해주세요.\n',
  MOVING: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  RESTART: `\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n`,
});

const ERROR_MESSAGE = Object.freeze({
  BRIDGE_SIZE: `[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.`,
  MOVING: `[ERROR] 이동할 칸은 U(위 칸)와 D(아래 칸) 중 하나의 문자여야 합니다.`,
  COMMAND: `[ERROR] 입력 가능한 명령어는 (재시도: R, 종료: Q) 중 하나의 문자여야 합니다.`,
});

const RESULT_MESSAGE = Object.freeze({
  GAME_RESULT: `\n최종 게임 결과`,
  IS_SUCCESS: `\n게임 성공 여부: `,
  TOTAL_TRY: `총 시도한 횟수: `,
});

const KEY = Object.freeze({
  UP: 'U',
  DOWN: 'D',
  RESTART: 'R',
  QUIT: 'Q',
});

const RESULT_SYMBOL = Object.freeze({
  CORRECT: 'O',
  WRONG: 'X',
  SPACE: ' ',
  SEPERATOR: ' | ',
});

const BRIDGE_RANGE = Object.freeze({
  MAX: 20,
  MIN: 3,
});
module.exports = { OUTPUT_MESSAGE, ERROR_MESSAGE, RESULT_MESSAGE, KEY, RESULT_SYMBOL, BRIDGE_RANGE };
