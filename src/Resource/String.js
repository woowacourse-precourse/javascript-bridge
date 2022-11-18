const INPUT = {
  BRIDGE_LENGTH: '다리의 길이를 입력해주세요.',
  BRIDGE_NEXT: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
};

const ERROR = {
  IS_BRIDGE_UP_DOWN: '[ERROR] bridge는 U, D만 있어야 합니다.',
  IS_NUMBER: '[ERROR] 숫자가 아닙니다',
  OUT_OF_BOUNDARY: '[ERROR] 숫자가 다음의 범위에 없습니다.',
  IS_ARRAY: '[ERROR] 배열이 아닙니다.',
  IS_MAX_POSITON: '[ERROR] 마지막 배열입니다.',
};

Object.freeze(INPUT);
Object.freeze(ERROR);

module.exports = { INPUT, ERROR };
