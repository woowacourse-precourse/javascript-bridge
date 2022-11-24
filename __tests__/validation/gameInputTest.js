const MissionUtils = require('@woowacourse/mission-utils');
const { validateRetryCommand, validateMoveCommand } = require('../../src/utils/validation/gameInput');
const { BRIDGE } = require('../../src/utils/constants/game');

const getNumbersExceptRange = (min, max, size) => {
  const numbers = [];
  for (let i = 0; i < size; i += 1) {
    const number = MissionUtils.Random.pickNumberInRange(-100, 100);
    if (number < min || number > max) numbers.push(number);
  }
  return numbers;
};

// eslint-disable-next-line max-lines-per-function
describe('플레이어 입력 예외 테스트', () => {
  test.each(['0', '', 'U', 'QQ', ' R'])('재시작 입력이 R 또는 Q가 아닌 경우 예외가 발생한다.', (input) => {
    expect(() => {
      validateRetryCommand(input);
    }).toThrow('[ERROR]');
  });

  test.each(['0', '', 'R', 'UU', ' D'])('이동할 칸 입력이 U 또는 D가 아닌 경우 예외가 발생한다.', (input) => {
    expect(() => {
      validateMoveCommand(input);
    }).toThrow('[ERROR]');
  });

  test.each(getNumbersExceptRange(BRIDGE.LENGTH.MIN, BRIDGE.LENGTH.MAX, 10))(
    `입력 받은 다리 사이즈가 ${BRIDGE.LENGTH.MIN} ~ ${BRIDGE.LENGTH.MAX} 사이가 아닌 경우 예외가 발생한다.`,
    (input) => {
      expect(() => {
        validateMoveCommand(input);
      }).toThrow('[ERROR]');
    },
  );
});
