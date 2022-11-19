const GAME_MESSAGE = {
  GAME_START: '다리 건너기 게임을 시작합니다.\n',
  GAME_RESULT: '최종 게임 결과\n',
  GAME_STATUS: '게임 성공 여부: ',
  GAME_ATTEMPTS: '총 시도한 횟수: ',
};

const INPUT_MESSAGE = {
  GET_BRIDGE_LENGTH: '다리의 길이를 입력해주세요.\n',
  SELECT_MOVE: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  SELECT_RETRY:
    '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
};

const BRIDGE_COMPONENT = {
  BEGIN: '[ ',
  DIVIDER: ' | ',
  END: ' ]',
};

module.exports = { GAME_MESSAGE, INPUT_MESSAGE, BRIDGE_COMPONENT };
