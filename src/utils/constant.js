const GAME = Object.freeze({
  START: '다리 건너기 게임을 시작합니다.',
  END: '최종 게임 결과',
  GAME_SUCCESS: '게임 성공 여부 : ',
  GAME_TRY_COUNT: '총 시도한 횟수 : ',
});

const ERROR = Object.freeze({
  BRIDGE_SIZE_TYPE: '[ERROR] 숫자를 입력해주세요.',
  BRIDGE_SIZE_RANGE: '[ERROR] 범위 내의 숫자를 입력해주세요. (3~30)',
  MOVING_DIRECTION_TYPE: '[ERROR] U 또는 D를 입력해주세요.',
  GAME_COMMAND_TYPE: '[ERROR] R 또는 Q를 입력해주세요.',
});

const INPUT = Object.freeze({
  GET_BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  GET_MOVING_DIRECTION: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  GET_GAME_COMMAND:
    '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
});

module.exports = { GAME, ERROR, INPUT };
