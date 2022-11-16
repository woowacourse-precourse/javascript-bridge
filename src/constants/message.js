const { GAME_RULE } = require('./rule');

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
  BRIDGE_LENGTH: '다리의 길이를 입력해주세요.',
  MOVE: `이동할 칸을 선택해주세요. (위: ${GAME_RULE.UPSIDE}, 아래: ${GAME_RULE.DOWNSIDE})`,
  RETRY_OPTION: `게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${GAME_RULE.RETRY}, 종료: ${GAME_RULE.QUIT})`,
  RESULT_TITLE: '최종 게임 결과',
  SUCCESS_OPTION: '게임 성공 여부: ',
  SUCCESS: '성공',
  FAIL: '실패',
  TRY_COUNT: '총 시도한 횟수: ',
});

module.exports = { BRIDGE_MESSAGE, GAME_MESSAGE };
