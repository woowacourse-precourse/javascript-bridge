const INPUT_MESSAGE = {
  game_start: `다리 건너기 게임을 시작합니다.\n`,
  bridge: `다리의 길이를 입력해주세요.\n`,
  moving: `\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n`,
  restart: `\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n`,
  result: `\n최종 게임 결과`,
  isSuccess: (result) => `\n게임 성공 여부: ${result}`,
  allCount: (count) => `\n총 시도한 횟수: ${count}`,
};

const RANGE = {
  min: 3,
  max: 20,
};

const MOVING = {
  random_up: '1',
  random_down: '0',
  up: 'U',
  down: 'D',
  initialLists: [[], []],
  attempts: 1,
};

const BRIDGE = {
  right_direction: 'O',
  wrong_direction: 'X',
  blank: ' ',
};

const COMMAND = {
  restart: 'R',
  end: 'Q',
};

const RESULT = {
  success: '성공',
  fail: '실패',
};

module.exports = {
  INPUT_MESSAGE,
  RANGE,
  MOVING,
  BRIDGE,
  COMMAND,
  RESULT,
};
