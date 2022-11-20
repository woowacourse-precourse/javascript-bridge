const LINE_BREAK = '\n';

const GAME_MESSAGE = Object.freeze({
  start: '다리 건너기 게임을 시작합니다.',
  bridge_size: '다리의 길이를 입력해주세요.',
  bridge_move: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
  again_or_quit: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
  game_result: '최종 게임 결과',
  success: (isSuccess) => `게임 성공 여부: ${isSuccess ? '성공' : '실패'}`,
  attempts: (count) => `총 시도한 횟수: ${count}`,
});

const MOVE_UP_DOWN = Object.freeze({
  U: 1,
  D: 0,
  1: 'U',
  0: 'D',
});

const GAME_COMMAND = Object.freeze({
  R: true,
  Q: false,
});

module.exports = {
  LINE_BREAK,
  GAME_MESSAGE,
  MOVE_UP_DOWN,
  GAME_COMMAND,
};
