const NEW_LINE = '\n';

const INPUT_VIEW = Object.freeze({
  retry: 'R',
  pass: 1,
  fail: 0,
  /**
   * 다리의 길이를 입력해주세요.
   */
  size_message: `다리의 길이를 입력해주세요.`,
  /**
   * 이동할 칸을 선택해 주세요. (위: U, 아래: D)
   */
  moving_message: `이동할 칸을 선택해 주세요. (위: U, 아래: D)`,
  /**
   * 게임을 다시 시도할지 여부를 입력해주세요. (재시도:R, 종료: Q)
   */
  game_command_message: `게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)`,
});

const OUTPUT_VIEW = Object.freeze({
  start: '다리 건너기 게임을 시작합니다.',
  end_game_result_message: `최종 게임 결과`,
  up_bridge: (up) => `[${up}]`,
  down_bridge: (down) => `[${down}]`,
  state_message: (state) => `게임 성공 여부: ${state}`,
  total_tryCount: (tryCount) => `총 시도한 횟수: ${tryCount}`,
});

const MODEL = Object.freeze({
  up: 'U',
  pass: '1',
  fail: '0',
  divide: '2',
  space: '3',
});

const BASE = Object.freeze({
  error: '[ERROR] ',
  u_or_d: '입력한 값에 U 또는 D가 포함돼있지 않습니다.',
  r_or_q: '입력한 값에 R 또는 Q가 포함돼있지 않습니다.',
  one_length: '하나의 문자만 입력하실 수 있습니다.',
  two_length: '한 자리에서 두 자리 수만 입력이 가능합니다.',
  only_number: '오직 숫자만 입력하실 수 있습니다.',
  range: '3~20사이의 숫자만 입력이 가능합니다.',
});

module.exports = { BASE, INPUT_VIEW, NEW_LINE, MODEL, OUTPUT_VIEW };
