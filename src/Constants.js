const ERROR = {
  NOT_NUMBER: '[ERROR] 숫자를 입력해야 합니다.',
  NOT_THREE_TO_TWENTY: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  NOT_U_OR_D: '[ERROR] 이동할 칸은 U나 D만 입력할 수 있습니다.',
  NOT_UPPERCASE: '[ERROR] 대문자로 입력해주세요.',
}

const LETTER_SIGN = {
  RIGHT: 'O',
  WRONG: 'X',
  BLANK: ' ',
}

const DIRECTION = {
  UP: 'U',
  DOWN: 'D',
}

module.exports = {ERROR, LETTER_SIGN, DIRECTION};