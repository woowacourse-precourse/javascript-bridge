const INPUT = {
  BRIDGE_LENGTH: '다리의 길이를 입력해주세요.',
  BRIDGE_NEXT: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
  BRIDGE_COMMAND:
    '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
};

const OUTPUT = {
  GAME_END: '최종 게임 결과',
  GAME_RESULT: '게임 성공 여부: ',
  GAME_TRY: '총 시도한 횟수: ',
};

const ERROR = {
  IS_BRIDGE_UP_DOWN: '[ERROR] bridge는 U, D만 있어야 합니다.',
  IS_NUMBER: '[ERROR] 숫자가 아닙니다',
  OUT_OF_BOUNDARY: '[ERROR] 숫자가 다음의 범위에 없습니다.',
  IS_ARRAY: '[ERROR] 배열이 아닙니다.',
  IS_MAX_POSITON: '[ERROR] 마지막 배열입니다.',
  IS_GAME_RESART_QUIT:
    '[ERROR] 게임을 재시작 하려면 R, 끄려면 Q를 입력해야함니다.',
};

Object.freeze(INPUT);
Object.freeze(OUTPUT);
Object.freeze(ERROR);

module.exports = { INPUT, ERROR, OUTPUT };
