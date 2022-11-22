const GAME_MESSAGE = {
  START_MESSAGE: '다리 건너기 게임을 시작합니다.',
  RE_START_MESSAGE:
    '게임을 다시 시도할지 여부를 입력해주세요. (재시도:R, 종료: Q)',
  MOVE_MESSAGE: '이동한 칸을 선택해주세요. (위: U, 아래: D)',
  END_MESSAGE: '최종 게임 결과',
  END_SUCCESS_MESSAGE: '게임 성공 여부: 성공',
  END_FAIL_MESSAGE: '게임 성공 여부: 실패',
  GAME_COUNT_MESSAGE: '총 시도한 횟수: ',
};

Object.freeze(GAME_MESSAGE);
module.exports = GAME_MESSAGE;
