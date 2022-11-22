const { GAME_RULE, BRIDGE_RULE } = require('./rule');

const BRIDGE_MESSAGE = Object.freeze({
  START: '[ ',
  END: ' ]',
  SEPARATOR: ' | ',
  CROSSABLE: 'O',
  UNCROSSABLE: 'X',
  NOT_SELECTED: ' ',
});

const GAME_MESSAGE = Object.freeze({
  START: '다리 건너기 게임을 시작합니다.',
  BRIDGE_LENGTH: '다리의 길이를 입력해주세요.\n',
  MOVE: `이동할 칸을 선택해주세요. (위: ${GAME_RULE.UPSIDE}, 아래: ${GAME_RULE.DOWNSIDE})\n`,
  RETRY_OPTION: `게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${GAME_RULE.RETRY}, 종료: ${GAME_RULE.QUIT})\n`,
  RESULT_TITLE: '최종 게임 결과',
  WIN_OPTION: '게임 성공 여부: ',
  WIN: '성공',
  FAIL: '실패',
  TRY_COUNT: '총 시도한 횟수: ',
});

const ERROR_MESSAGE = Object.freeze({
  EMPTY: '빈 값을 입력하였습니다.',
  SPACE: '앞 또는 뒤에 공백을 포함해 입력하였습니다.',
  NOT_NUMBER: '입력 값은 숫자여야 합니다.',
  RULE_SIZE: `다리의 길이는 ${BRIDGE_RULE.LENGTH_MIN}이상 ${BRIDGE_RULE.LENGTH_MAX}이하의 숫자여야 합니다.`,
  RULE_MOVING_COMMAND: `이동할 칸 입력 값은 ${GAME_RULE.UPSIDE} 또는 ${GAME_RULE.DOWNSIDE}여야 합니다.`,
  RULE_GAME_COMMAND: `재시도 여부 입력값은 ${GAME_RULE.RETRY} 또는 ${GAME_RULE.QUIT}여야 합니다.`,
});

module.exports = { BRIDGE_MESSAGE, GAME_MESSAGE, ERROR_MESSAGE };
