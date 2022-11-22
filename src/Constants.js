const MESSAGE = Object.freeze({
  BRIDGE_SIZE: '다리의 길이를 입력해주세요. ',
  UPORDOWN: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
  RETRYORQUIT: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
});

const INPUT = Object.freeze({
  UP: 'U',
  DOWN: 'D',
  RESTART: 'R',
  QUIT: 'Q',
});

const BRIDGE = Object.freeze({
  SUCESS: ' O |',
  FAIL: ' X |',
  NOTHING: '   |',
});

const ERROR = Object.freeze({
  SIZE: '[ERROR] 3~20 사이 숫자만 입력 가능합니다.',
  MOVE: '[ERROR] 대문자 U나 D만 입력 가능합니다.',
  RETRY: '[ERROR] 대문자 R이나 Q만 입력 가능합니다.',
  INTERFACE: {
    INSTANCE: '인터페이스 클래스로 인스턴스를 생성하였습니다.',
    METHOD: '인터페이스 클래스입니다. 메서드 구현이 필요합니다.',
  },
});

const SIZE_RANGE = Object.freeze({
  MIN: 3,
  MAX: 20,
});

const RESULT = Object.freeze({
  TITLE: '최종 게임 결과 \n',
  CHART: {
    SUCESS_OR_FAIL: (userLife) =>
      `\n 게임 성공 여부: ${userLife ? '성공' : '실패'}`,
    ATTEMPT: (attemptNumber) => `총 시도한 횟수: ${attemptNumber}`,
  },
});

module.exports = { MESSAGE, INPUT, BRIDGE, ERROR, SIZE_RANGE, RESULT };
