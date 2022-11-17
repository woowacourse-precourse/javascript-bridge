const GAME_PROGRESS_MESSAGES = Object.freeze({
  RETRY: '게임을 다시 시도할지 여부를 입력해주세요.',
  MOVE: '이동할 칸을 선택해주세요.',
  START: '다리 건너기 게임을 시작합니다.',
  BRIDGE: '다리의 길이를 입력해주세요.',
});

const GAME_RESULTS_MESSAGES = Object.freeze({
  SUCCESS: '성공',
  FAIL: '실패',
  TRY: '총 시도한 횟수',
});

const GAME_OPTION = {
  RETRY: 'R',
  QUIT: 'Q',
};

const BRINDGE_DIRECTION = Object.freeze({
  UP: 'U',
  DOWN: 'D',
});

const VIEW_FIGURE = Object.freeze({
  O: 'O',
  X: 'X',
});

module.exports = {
  VIEW_FIGURE,
  BRINDGE_DIRECTION,
  GAME_PROGRESS_MESSAGES,
  BRIDGE_RANGE,
  GAME_OPTION,
  GAME_RESULTS_MESSAGES,
};
