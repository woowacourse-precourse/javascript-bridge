const REGEX = Object.freeze({
  bridgeLength: /^[3-9]{1}$|^1{1}[0-9]{1}$|^20$/,
  upDownKey: /^U$|^D$/,
  restartExitKey: /^Q$|^R$/,
});

const ERROR_MESSAGE = Object.freeze({
  bridgeLength: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  upDownKey: '[ERROR] U 또는 D 문자만 입력 가능합니다.',
  restartExitKey: '[ERROR] Q 또는 R 문자만 입력 가능합니다.',
  singleton: '[ERROR] Only one instance is allowed',
});

const MODEL_KEY = Object.freeze({
  randomBridge: 'RANDOM_BRIDGE_MODEL_KEY',
  userBridge: 'USER_BRIDGE_MODEL_KEY',
  tryCount: 'TRY_COUNT_BRIDGE_MODEL_KEY',
});

const BRIDGE_DIRECTION = Object.freeze({
  up: 'U',
  down: 'D',
});

const GAME_RESULT_STATE = Object.freeze({
  success: '성공',
  try: '시도',
  fail: '실패',
});

const GAME_QUESTION = Object.freeze({
  bridgeLength: '\n다리의 길이를 입력해주세요.\n',
  move: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  gameCommand:
    '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
});

const GAME_MESSAGE = Object.freeze({
  final: '최종 게임 결과',
  startCommand: '다리 건너기 게임을 시작합니다.',
});

const BRIDGE_CHECK = Object.freeze({
  right: 'O',
  wrong: 'X',
  blank: ' ',
});

const GAMEOVER_COMMAND = Object.freeze({
  restart: 'R',
  exit: 'Q',
});

module.exports = {
  REGEX,
  ERROR_MESSAGE,
  MODEL_KEY,
  BRIDGE_DIRECTION,
  GAME_RESULT_STATE,
  GAME_QUESTION,
  GAME_MESSAGE,
  BRIDGE_CHECK,
  GAMEOVER_COMMAND,
};
