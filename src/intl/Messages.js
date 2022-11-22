const Messages = Object.freeze({
  WELCOME: '다리 건너기 게임을 시작합니다.',

  BRIDGE_ALREADY_ARRIVED: '다리를 이미 다 건넜습니다.',

  ARRAY_VALIDATOR_SHOULD_ARRAY: '배열 값이어야 합니다.',
  NUMBER_VALIDATOR_SHOULD_NUMBER: '숫자 값이어야 합니다.',
  NUMBER_VALIDATOR_SHOULD_INTEGER: '정수 값이어야 합니다.',
  NUMBER_VALIDATOR_SHOULD_POSITIVE: '양수 값이어야 합니다.',
  NUMBER_VALIDATOR_SHOULD_RANGE_INCLUSIVE: '{0} ~ {1} 사이의 값이어야 합니다.',
  STRING_VALIDATOR_SHOULD_NUMERIC: '숫자만 허용됩니다.',
  STRING_VALIDATOR_SHOULD_ONE_OF: '{0} 중에 하나여야 합니다.',
  VALIDATOR_SHOULD_BE: '{0} 값이어야 합니다.',
  VALIDATOR_SHOULD_BOOLEAN: 'true 또는 false 값이어야 합니다.',
  VALIDATOR_SHOULD_INSTANCE_OF: '{0} 을 상속한 값이어야 합니다.',

  READ_BRIDGE_SIZE: '다리의 길이를 입력해주세요.',
  READ_MOVING: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
  READ_GAME_COMMAND: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',

  RESULT_TITLE: '최종 게임 결과',
  RESULT_SUCCESS: '성공',
  RESULT_FAIL: '실패',
  RESULT_GAME_RESULT: '게임 성공 여부: {0}',
  RESULT_GAME_TRIAL_COUNT: '총 시도한 횟수: {0}',

  /**
   * 주어진 메세지에서 {0}, {1} 부분을 args로 채워 반환한다.
   *
   * @param {string} message
   * @param  {...string} args
   * @returns {string}
   */
  format(message, ...args) {
    return args.reduce((formatted, arg, index) => formatted.replace(`{${index}}`, arg), message);
  },
});

module.exports = Messages;
