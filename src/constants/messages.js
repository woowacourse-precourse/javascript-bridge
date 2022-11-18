const MESSAGE_GAME = Object.freeze({
  START: '다리 건너기 게임을 시작합니다.\n',
});

const MESSAGE_QUESTION = Object.freeze({
  BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  PLAYER_MOVING: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  RESTART_OR_QUIT: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
});

const ERROR = '[ERROR]';
const MESSAGE_ERROR = Object.freeze({
  INVALID_VALUE: `${ERROR} 잘못된 값의 입력입니다.`,
  INVALID_TYPE: `${ERROR} 잘못된 타입의 입력입니다.`,
  INVALID_FORMAT: `${ERROR} 잘못된 포맷의 입력입니다.`,
  INVALID_RANGE: `${ERROR} 잘못된 밤위의 입력입니다.`,
  INVALID_SIZE: `${ERROR} 잘못된 길이의 다리입니다.`,
});

const MESSAGE_RESULT = Object({
  SUCCESS: '성공',
  FAILURE: '실패',
  HEAD: '최종 게임 결과',
  SUCCESS_OR_FAILURE: '게임 성공 여부:',
  TRY_COUNT: '총 시도한 횟수:',
});

module.exports = {
  MESSAGE_GAME,
  MESSAGE_QUESTION,
  MESSAGE_ERROR,
  MESSAGE_RESULT,
};
