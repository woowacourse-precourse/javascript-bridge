const { deepFreeze } = require('../utils/deepFreeze');

const GAME_MESSAGE = deepFreeze({
  start: '다리 건너기 게임을 시작합니다.\n',
  input_size: '다리의 길이를 입력해주세요.\n',
  choose_space: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  replay: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  result: '\n최종 게임 결과',
  is_success: '\n게임 성공 여부: ',
  try_count: '총 시도한 횟수: ',
  success: '성공',
  fail: '실패',
});

const ERROR_MESSAGE = deepFreeze({
  abstract_class: '추상 클래스로 인스턴스를 생성하였습니다.',
  interface_class: '메서드 구현이 필요합니다',
  size: '다리 길이는 3-20 사이의 숫자를 입력해주어야 합니다.',
  command: '플레이어가 이동할 칸은 대문자 U 또는 D중 하나만 입력할 수 있습니다.',
  replay: '게임 재시작 또는 종료를 하기 위해서는 각각 대문자 R, Q를 입력해주셔야 합니다.',
});

const REGEX = deepFreeze({
  IS_NUMBER: /^[1-9]\d*$/,
});

const RANGE = deepFreeze({
  min: 3,
  max: 20,
});

const SPACE = deepFreeze({
  0: 'D',
  1: 'U',
});

const BRIDGE_MAP = deepFreeze({
  up_direction: 'U',
  down_direction: 'D',
  success_space: ' O ',
  empty_space: '   ',
  fail_space: ' X ',
});

const CHOICE = deepFreeze({
  replay: 'R',
  exit: 'Q',
});

module.exports = {
  GAME_MESSAGE,
  ERROR_MESSAGE,
  REGEX,
  RANGE,
  SPACE,
  BRIDGE_MAP,
  CHOICE,
};
