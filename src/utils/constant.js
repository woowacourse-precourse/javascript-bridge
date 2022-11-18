const GAME_MESSAGE = Object.freeze({
  START: '다리 건너기 게임을 시작합니다.',
  RESULT_BRIDGE: '최종 게임 결과',
  RESULT_STATUS: '게임 성공 여부: ',
  SUCCESS: '성공',
  FAIL: '실패',
  ROUND: '총 시도한 횟수: ',
});

const INPUT_MESSAGE = Object.freeze({
  BRIDGE_LENGTH: '다리의 길이를 입력해주세요.',
  MOVING: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
  RETRY: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
});

const BRIDGE_INFO = Object.freeze({
  BEGIN: '[',
  END: ']',
  WALL: ' | ',
  MIN_LENGTH: 3,
  MAX_LENGTH: 20,
});

const BRIDGE_MESSAGE = Object.freeze({
  PASSABLE: 'O',
  UNPASSABLE: 'X',
  UP_SIGN: 'U',
  DOWN_SIGN: 'D',
  RETRY_SIGN: 'R',
  QUIT_SIGN: 'Q',
});

const PREFIX = '[ERROR]';

const ERROR_MESSAGE = Object.freeze({
  BRIDGE_LENGTH: `${PREFIX} 다리 길이는 3부터 20 사이의 숫자여야 합니다.`,
  MOVING: `${PREFIX} 이동할 칸은 U와 D 중 하나의 문자여야 합니다.`,
  RETRY: `${PREFIX} 재시작/종료 여부는 R과 Q 중 하나의 문자여야 합니다.`,
});

module.exports = {
  GAME_MESSAGE,
  INPUT_MESSAGE,
  BRIDGE_INFO,
  BRIDGE_MESSAGE,
  ERROR_MESSAGE,
};
