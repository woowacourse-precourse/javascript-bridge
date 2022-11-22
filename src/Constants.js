const PATH = {
  RIGHT: 'O',
  WRONG: 'X',
  NOT_CHOSEN: ' ',
};

const BLOCK = {
  UPPER: 'U',
  LOWER: 'D',
};

const COMMAND = {
  RETRY: 'R',
  QUIT: 'Q',
};

const MESSAGE = {
  START: '다리 건너기 게임을 시작합니다.',
  SIZE_INPUT: '\n다리의 길이를 입력해주세요.\n',
  DIRECTION_INPUT: `\n이동할 칸을 선택해주세요. (위: ${BLOCK.UPPER}, 아래: ${BLOCK.LOWER})\n`,
  COMMAND_INPUT: `\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${COMMAND.RETRY}, 종료: ${COMMAND.QUIT})\n`,
  END: '\n최종 게임 결과',
  RESULT: '\n게임 성공 여부: ',
  TRIAL_COUNT: '총 시도한 횟수: ',
};

const ERROR = {
  SCOPE: '[ERROR] 3 이상 20 이하의 숫자를 입력해주세요.',
  TYPE: '[ERROR] 숫자만 입력해주세요.',
  DIRECTION: '[ERROR] 대문자 U 또는 대문자 D만 입력해주세요.',
  COMMAND: '[ERROR] 대문자 R 또는 대문자 Q만 입력해주세요.',
};

module.exports = { BLOCK, COMMAND, ERROR, MESSAGE, PATH };

