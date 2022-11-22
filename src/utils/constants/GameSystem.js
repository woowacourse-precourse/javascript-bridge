const { deepFreeze } = require("../services/system");

const LINE_BREAK = '\n';

const GAME_MESSAGE = deepFreeze({
  start: '다리 건너기 게임을 시작합니다.',
  bridge_size: '다리의 길이를 입력해주세요.',
  bridge_move: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
  again_or_quit: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
  game_result: '최종 게임 결과',
  success: (isSuccess) => `게임 성공 여부: ${isSuccess ? '성공' : '실패'}`,
  attempts: (count) => `총 시도한 횟수: ${count}`,
});

const MAP_ROW_MESSAGE = deepFreeze({
  open: '[',
  join: ' | ',
  close: ']'
})

const DIRECTION = deepFreeze({
  1: 'U',
  0: 'D',
});

const STEP_TYPE = deepFreeze({
  correct: 'O',
  wrong: 'X',
  none: ' '
})

const GAME_COMMAND = deepFreeze({
  R: true,
  Q: false,
});

const MIN_SIZE = 3;
const MAX_SIZE =  20;

module.exports = {
  LINE_BREAK,
  GAME_MESSAGE,
  DIRECTION,
  STEP_TYPE,
  GAME_COMMAND,
  MIN_SIZE,
  MAX_SIZE,
  MAP_ROW_MESSAGE
};
