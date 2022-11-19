const REGEX = Object.freeze({
  bridgeLength: /^[3-9]{1}$|^1{1}[0-9]{1}$|^20$/,
  upDownKey: /^U$|^D$/,
  restartExitKey: /^Q$|^R$/
});

const ERROR_MESSAGE = Object.freeze({
  bridgeLength: '[ERROR] 3 ~ 20 이하의 다리 길이를 입력하세요',
  upDownKey: '[ERROR] U 또는 D 문자만 입력 가능합니다.',
  restartExitKey: '[ERROR] Q 또는 R 문자만 입력 가능합니다.'
});

const MODEL_KEY = Object.freeze({
  randomBridge: 'RANDOM_BRIDGE_MODEL_KEY',
  userBridge: 'USER_BRIDGE_MODEL_KEY',
  tryCount: 'TRY_COUNT_BRIDGE_MODEL_KEY'
});

const UPDOWN_INDEX = Object.freeze({
  U: 0,
  D: 1
});

const GAME_RESULT_STATE = Object.freeze({
  success: '성공',
  try: '시도',
  fail: '실패'
});

const GAME_QUESTION = Object.freeze({
  bridgeLength: '\n다리의 길이를 입력해주세요.\n',
  move: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  gameCommand:
    '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n'
});

module.exports = {
  REGEX,
  ERROR_MESSAGE,
  MODEL_KEY,
  UPDOWN_INDEX,
  GAME_RESULT_STATE,
  GAME_QUESTION
};
