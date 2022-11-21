const QUESTION = Object.freeze({
    BRIDGE_LENGTH: '다리의 길이를 입력해주세요.',
    NEXT_MOVE: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
    RETRY: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
  });
  
  const ERROR = Object.freeze({
    BRIDGE_LENGTH_BOUNDARY: '[ERROR] 다리 길이는 3과 20 사이의 정수여야 합니다',
    NUMBER: '[ERROR] 숫자만 입력 가능합니다',
    EMPTY: '[ERROR] 입력값이 존재하지 않습니다',
    NEXT_MOVE: '[ERROR] U , D 의 값만 입력 가능합니다',
    RETRY: '[ERROR] R , Q 의 값만 입력 가능합니다',
  });
  
  const RESULT = Object.freeze({
    GAME_RESULT: '최종 게임 결과',
  });
  
  module.exports = { QUESTION, ERROR, RESULT };