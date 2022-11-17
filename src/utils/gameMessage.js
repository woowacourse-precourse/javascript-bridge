const GAME_MESSAGE = {
  GAME_START: '다리 건너기 게임을 시작합니다.',
  GAME_RESULT: '최종 게임 결과',
  GAME_STATUS: '게임 성공 여부: ',
  GAME_ATTEMPTS: '총 시도한 횟수: ',
};

const INPUT_MESSAGE = {
  GET_BRIDGE_LENGTH: '다리의 길이를 입력해주세요.',
  SELECT_MOVE: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
  SELECT_RETRY:
    '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
};

const BRIDGE_COMPONENT = {
  BEGIN: '[ ',
  DIVIDER: ' | ',
  END: ' ]',
};

module.exports = { GAME_MESSAGE, INPUT_MESSAGE, BRIDGE_COMPONENT };
