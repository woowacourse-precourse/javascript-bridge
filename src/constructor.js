const MOVEMENT = {
  UP: 'U',
  DOWN: 'D',
}

const COMMAND = {
  RETRY: 'R',
  QUIT: 'Q',
}

const BRIDGE_SIZE = {
  MIN: 3,
  MAX: 20,
}

const BRIDGE_POSITION = {
  UP: 1,
  DOWN: 0,
}

const ERROR_MESSAGE = {
  NOT_NUMBER: '숫자를 입력해주세요.',
  OUT_OF_RANGE: `${BRIDGE_SIZE.MIN}~${BRIDGE_SIZE.MAX}까지 수를 입력해주세요.`,
  WRONG_INPUT: '잘못된 입력입니다. 지정된 문자만 입력해주세요.',
}

const MARK = {
  CORRECT: 'O',
  WRONG: 'X',
  EMPTY: ' ',
}

module.exports = {
  MOVEMENT,
  COMMAND,
  BRIDGE_SIZE,
  BRIDGE_POSITION,
  ERROR_MESSAGE,
  MARK,
}