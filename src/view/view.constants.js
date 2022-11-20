const MESSAGE = Object.freeze({
  INPUT:{
    BRIDGE_LENGTH: '다리의 길이를 입력해주세요.',
    SELECT_DIRECTION: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
    RESTART_OR_EXIT: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
  },
  GMAE_START: '다리 건너기 게임을 시작합니다.',
  GAME_RESULT:{
    TITLE: '최종 게임 결과',
    RESULT: '게임 성공 여부:',
    SUCCESS: '성공',
    FAILURE: '실패',
    COUNT: '총 시도한 횟수:'
  },
  LINE_SPACE: ''
})


module.exports = MESSAGE;