const BRIDGE_POSITION = {
  UP: 1,
  DOWN: 0,
}

const BRIDGE_SIZE = {
  MIN: 3,
  MAX: 20,
}

const COMMAND = {
  RETRY: 'R',
  QUIT: 'Q',
}

const MARK = {
  CORRECT: 'O',
  WRONG: 'X',
  EMPTY: ' ',
}

const MOVEMENT = {
  UP: 'U',
  DOWN: 'D',
}

const INPUT_MESSAGE = {
  BRIDGE_SIZE: `다리의 길이를 입력해주세요. (${BRIDGE_SIZE.MIN}~${BRIDGE_SIZE.MAX} 사이)\n`,
  MOVEMENT: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  COMMAND: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
}

const ERROR_MESSAGE = {
  NOT_NUMBER: '숫자를 입력해주세요.',
  OUT_OF_RANGE: `${BRIDGE_SIZE.MIN}~${BRIDGE_SIZE.MAX}까지 수를 입력해주세요.`,
  WRONG_INPUT: '잘못된 입력입니다. 지정된 문자만 입력해주세요.',
}

module.exports = {
  BRIDGE_POSITION,
  BRIDGE_SIZE,
  COMMAND,
  MARK,
  MOVEMENT,
  INPUT_MESSAGE,
  ERROR_MESSAGE,
}