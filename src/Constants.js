const NEW_LINE = '\n';

const INPUT_VIEW = Object.freeze({
  retry: 'R',
  pass: 1,
  fail: 0,
  success: '성공',
  failure: '실패',

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
  end_game_result_message: `최종 게임 결과`,
  up_bridge: (up) => `[${up}]`,
  down_bridge: (down) => `[${down}]`,
  state_message: (state) => `게임 성공 여부: ${state}`,
  total_tryCount: (tryCount) => `총 시도한 횟수: ${tryCount}`,
});

module.exports = { INPUT_VIEW, NEW_LINE, OUTPUT_VIEW };
